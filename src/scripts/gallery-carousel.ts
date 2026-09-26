const STEPS = [
  { translate: 0, scale: 1 },
  { translate: 190, scale: 0.75 },
  { translate: 330, scale: 0.55 },
];

export async function setupGalleryDesktop(): Promise<void> {
  const viewport = document.getElementById('gallery-desktop-viewport');
  const track = document.getElementById('gallery-desktop-track');
  const prevButtons = document.querySelectorAll<HTMLElement>('[data-gallery-desktop-prev]');
  const nextButtons = document.querySelectorAll<HTMLElement>('[data-gallery-desktop-next]');

  if (!viewport || !track || !prevButtons.length || !nextButtons.length) return;
  if (track.dataset.initialized === 'true') return;

  const items = Array.from(track.children) as HTMLElement[];
  if (!items.length) return;

  const itemCount = items.length;
  const maxVisible = STEPS.length - 1;

  const images = items
    .map((item) => item.querySelector('img'))
    .filter((img): img is HTMLImageElement => img !== null);

  await Promise.all(
    images.map(async (img) => {
      if (!img.complete) {
        await new Promise<void>((resolve) => {
          img.addEventListener('load', () => resolve(), { once: true });
          img.addEventListener('error', () => resolve(), { once: true });
        });
      }

      if (img.complete && img.naturalWidth > 0) {
        await img.decode().catch(() => {});
      }
    })
  );

  let currentIndex = 0;

  const getCircularDistance = (index: number): number => {
    let distance = index - currentIndex;

    if (distance > itemCount / 2) {
      distance -= itemCount;
    } else if (distance < -itemCount / 2) {
      distance += itemCount;
    }

    return distance;
  };

  const styleFor = (abs: number) => {
    if (abs <= maxVisible) {
      return {
        ...STEPS[abs],
        zIndex: 100 - abs,
        visible: true,
      };
    }

    const last = STEPS[maxVisible];
    const prev = STEPS[maxVisible - 1] ?? { translate: 0 };
    const step = last.translate - prev.translate;

    return {
      translate: last.translate + step * (abs - maxVisible),
      scale: last.scale,
      zIndex: 0,
      visible: false,
    };
  };

  const render = () => {
    items.forEach((item, i) => {
      const distance = getCircularDistance(i);
      const abs = Math.abs(distance);
      const sign = Math.sign(distance);
      const s = styleFor(abs);

      item.style.transform =
        `translate(-50%, -50%) translateX(${sign * s.translate}px) scale(${s.scale})`;
      item.style.opacity = s.visible ? '1' : '0';
      item.style.pointerEvents = s.visible ? 'auto' : 'none';
      item.style.zIndex = String(s.zIndex);
    });
  };

  const goTo = (direction: number) => {
    currentIndex =
      (currentIndex + direction + itemCount) % itemCount;

    render();
  };

  prevButtons.forEach((btn) =>
    btn.addEventListener('click', () => goTo(-1))
  );

  nextButtons.forEach((btn) =>
    btn.addEventListener('click', () => goTo(1))
  );

  let dragging = false;
  let startX = 0;
  let dragDistance = 0;
  let suppressNextClick = false;

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
      goTo(-1);
      suppressNextClick = true;
    } else if (dragDistance < -threshold) {
      goTo(1);
      suppressNextClick = true;
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

  viewport.addEventListener(
    'click',
    (event) => {
      if (suppressNextClick) {
        event.stopPropagation();
        suppressNextClick = false;
      }
    },
    true
  );

  window.addEventListener('resize', render);

  render();
  viewport.style.visibility = 'visible';
  track.dataset.initialized = 'true';
}
