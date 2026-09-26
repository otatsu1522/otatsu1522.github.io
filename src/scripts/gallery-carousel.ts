// Galleryセクション(id="gallery")用の、中央を大きく・左右をパースで小さく表示する
// coverflow風カルーセル。無限ループだが自動では動かず、
// ボタンクリック/スワイプ/ドラッグなど明示的な操作でのみ切り替わる。

const MOBILE_BREAKPOINT = 767;

// PC: 中心からの距離ごとのtranslateX(px)・scale・rotateY(deg)
const DESKTOP_STEPS = [
  { translate: 0, scale: 1, rotate: 0 },
  { translate: 230, scale: 0.78, rotate: 32 },
  { translate: 400, scale: 0.58, rotate: 42 },
];

// スマホ: 中心+隣が少し見える程度のシンプルな表示
const MOBILE_STEPS = [
  { translate: 0, scale: 1, rotate: 0 },
  { translate: 0.34, scale: 0.82, rotate: 0 }, // translateはviewport幅に対する比率
];

export function setupGalleryCarousel(): void {
  const viewport = document.getElementById('gallery-carousel-viewport');
  const track = document.getElementById('gallery-carousel-track');
  const originalSet = document.getElementById('gallery-carousel-set');
  const prevBtn = document.getElementById('gallery-carousel-prev');
  const nextBtn = document.getElementById('gallery-carousel-next');

  if (!viewport || !track || !originalSet || !prevBtn || !nextBtn) return;
  if (track.dataset.initialized === 'true') return;

  const originalItems = Array.from(originalSet.children) as HTMLElement[];
  if (!originalItems.length) return;

  const itemCount = originalItems.length;

  // 前後に同じセットを複製し、常に中央セットを起点にすることで無限ループを実現する
  const cloneBefore = originalItems.map((item) => item.cloneNode(true) as HTMLElement);
  const cloneAfter = originalItems.map((item) => item.cloneNode(true) as HTMLElement);

  cloneBefore.forEach((item) => track.insertBefore(item, originalSet));
  cloneAfter.forEach((item) => track.appendChild(item));

  const allItems = Array.from(track.children) as HTMLElement[];
  let currentIndex = itemCount; // 中央セットの先頭から開始

  const isMobile = () => window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;

  const render = () => {
    const mobile = isMobile();
    const maxVisible = mobile ? MOBILE_STEPS.length - 1 : DESKTOP_STEPS.length - 1;

    allItems.forEach((item, i) => {
      const distance = i - currentIndex;
      const abs = Math.abs(distance);
      const sign = Math.sign(distance);

      if (abs > maxVisible) {
        item.style.opacity = '0';
        item.style.pointerEvents = 'none';
        item.style.zIndex = '0';
        return;
      }

      let translateX: number;
      let scale: number;
      let rotate: number;

      if (mobile) {
        const step = MOBILE_STEPS[abs];
        translateX = sign * step.translate * viewport!.clientWidth;
        scale = step.scale;
        rotate = 0;
      } else {
        const step = DESKTOP_STEPS[abs];
        translateX = sign * step.translate;
        scale = step.scale;
        rotate = -sign * step.rotate;
      }

      item.style.transform =
        `translate(-50%, -50%) translateX(${translateX}px) scale(${scale}) rotateY(${rotate}deg)`;
      item.style.opacity = '1';
      item.style.pointerEvents = 'auto';
      item.style.zIndex = String(100 - abs);
    });
  };

  const normalize = () => {
    // 中央セットの範囲から大きく外れたら、体感できない位置で元に戻す
    if (currentIndex < itemCount * 0.5) {
      currentIndex += itemCount;
    } else if (currentIndex >= itemCount * 2.5) {
      currentIndex -= itemCount;
    }
  };

  const goTo = (index: number) => {
    currentIndex = index;
    normalize();
    render();
  };

  prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
  nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

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
