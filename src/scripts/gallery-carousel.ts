// Galleryセクション(id="gallery")用のカルーセル。
// 中央を実寸大・最前面にし、左右に75%→50%と縮小しながら少し重なるように後ろへ配置する。
// スマホは中央+左右が少しだけ重なって見える程度(1:8:1)のシンプルな表示。
// 無限ループだが自動では動かず、ボタンクリック/スワイプ/ドラッグなど
// 明示的な操作でのみ切り替わる。

const MOBILE_BREAKPOINT = 767;

// 中心からの距離ごとのtranslateX(px)とscale。回転(台形パース)は今回無し。
const DESKTOP_STEPS = [
  { translate: 0, scale: 1 },
  { translate: 150, scale: 0.75 },
  { translate: 250, scale: 0.5 },
];

// スマホはtranslateをviewport幅に対する比率で指定(1:8:1程度になる値)
const MOBILE_STEPS = [
  { translate: 0, scale: 1 },
  { translate: 0.42, scale: 1 },
];

export function setupGalleryCarousel(): void {
  const viewport = document.getElementById('gallery-carousel-viewport');
  const track = document.getElementById('gallery-carousel-track');
  const prevButtons = document.querySelectorAll<HTMLElement>('[data-gallery-prev]');
  const nextButtons = document.querySelectorAll<HTMLElement>('[data-gallery-next]');

  if (!viewport || !track || !prevButtons.length || !nextButtons.length) return;
  if (track.dataset.initialized === 'true') return;

  // trackの直接の子要素(写真1枚1枚)をそのまま使う(ラッパーdivは挟まない)
  const originalItems = Array.from(track.children) as HTMLElement[];
  if (!originalItems.length) return;

  const itemCount = originalItems.length;

  // 前後に同じセットを複製し、常に中央セットを起点にすることで無限ループを実現する
  const cloneBefore = originalItems.map((item) => item.cloneNode(true) as HTMLElement);
  const cloneAfter = originalItems.map((item) => item.cloneNode(true) as HTMLElement);

  cloneBefore.forEach((item) => track.insertBefore(item, originalItems[0]));
  cloneAfter.forEach((item) => track.appendChild(item));

  const allItems = Array.from(track.children) as HTMLElement[];
  let currentIndex = itemCount; // 中央セットの先頭から開始

  const isMobile = () => window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;

  const render = () => {
    const mobile = isMobile();
    const steps = mobile ? MOBILE_STEPS : DESKTOP_STEPS;
    const maxVisible = steps.length - 1;

    allItems.forEach((item, i) => {
      const distance = i - currentIndex;
      const abs = Math.abs(distance);
      const sign = Math.sign(distance);

      if (abs > maxVisible) {
        // 見えない位置でも「その先も同じ規則で続いている」前提の位置を
        // 持たせておくことで、後で可視域に入ってきた際に
        // 何も無い場所からアニメーションして飛んでくるのを防ぐ。
        const last = steps[maxVisible];
        const extraStep = maxVisible > 0 ? last.translate - steps[maxVisible - 1].translate : last.translate;
        const extrapolatedTranslate = last.translate + extraStep * (abs - maxVisible);

        const translateX = mobile
          ? sign * extrapolatedTranslate * viewport!.clientWidth
          : sign * extrapolatedTranslate;

        item.style.transform =
          `translate(-50%, -50%) translateX(${translateX}px) scale(${last.scale})`;
        item.style.opacity = '0';
        item.style.pointerEvents = 'none';
        item.style.zIndex = '0';
        return;
      }

      const step = steps[abs];
      const translateX = mobile
        ? sign * step.translate * viewport!.clientWidth
        : sign * step.translate;

      item.style.transform =
        `translate(-50%, -50%) translateX(${translateX}px) scale(${step.scale})`;
      item.style.opacity = '1';
      item.style.pointerEvents = 'auto';
      item.style.zIndex = String(100 - abs);
    });
  };

  const normalize = (): boolean => {
    // 中央セットの範囲から大きく外れたら、体感できない位置で元に戻す
    if (currentIndex < itemCount * 0.5) {
      currentIndex += itemCount;
      return true;
    }

    if (currentIndex >= itemCount * 2.5) {
      currentIndex -= itemCount;
      return true;
    }

    return false;
  };

  const goTo = (index: number) => {
    currentIndex = index;
    const wrapped = normalize();

    if (wrapped) {
      // ラップした瞬間は、それまで画面外で一度もtransformを持っていなかった
      // クローンがいきなり中央付近に「アニメーションしながら」現れてしまい、
      // 継ぎ目でズレて見えるバグがあった。ラップ発生時だけtransitionを止めて
      // 瞬時に正しい位置へスナップさせ、その後アニメーションを元に戻す。
      allItems.forEach((item) => {
        item.style.transition = 'none';
      });

      render();

      // スタイル適用を強制的に反映させてからtransitionを戻す
      void track.offsetWidth;

      allItems.forEach((item) => {
        item.style.transition = '';
      });
    } else {
      render();
    }
  };

  prevButtons.forEach((btn) => btn.addEventListener('click', () => goTo(currentIndex - 1)));
  nextButtons.forEach((btn) => btn.addEventListener('click', () => goTo(currentIndex + 1)));

  // タッチ/マウスドラッグでの明示的な操作にのみ反応する(自動送りはしない)
  let dragging = false;
  let startX = 0;
  let dragDistance = 0;

  const dragStart = (x: number) => {
    dragging = true;
    startX = x;
    dragDistance = 0;
  };

  const dragMove = (x: number) => {
    if (!dragging) return;
    dragDistance = x - startX;
  };

  const dragEnd = () => {
    if (!dragging) return;
    dragging = false;

    const threshold = 40;
    if (dragDistance > threshold) {
      goTo(currentIndex - 1);
    } else if (dragDistance < -threshold) {
      goTo(currentIndex + 1);
    }
  };

  viewport.addEventListener(
    'touchstart',
    (event) => dragStart(event.touches[0].clientX),
    { passive: true }
  );
  viewport.addEventListener(
    'touchmove',
    (event) => dragMove(event.touches[0].clientX),
    { passive: true }
  );
  viewport.addEventListener('touchend', dragEnd);

  viewport.addEventListener('mousedown', (event) => dragStart(event.clientX));
  window.addEventListener('mousemove', (event) => dragMove(event.clientX));
  window.addEventListener('mouseup', dragEnd);

  window.addEventListener('resize', render);

  render();

  track.dataset.initialized = 'true';
}
