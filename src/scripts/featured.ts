export function setupFeaturedScroll(): void {
  const container = document.getElementById('journey-container');
  if (!container || container.dataset.infiniteInitialized === 'true') return;

  const originalItems = Array.from(container.children);
  if (!originalItems.length || container.querySelector('.text-gray-500')) return;

  const itemCount = originalItems.length;
  originalItems.forEach((item) => container.appendChild(item.cloneNode(true)));
  originalItems.forEach((item) => container.appendChild(item.cloneNode(true)));

  const getLayout = () => {
    const firstItem = container.children[0] as HTMLElement | undefined;
    const secondSetFirstItem = container.children[itemCount] as HTMLElement | undefined;
    if (!firstItem || !secondSetFirstItem) return null;

    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const setWidth = secondSetFirstItem.offsetLeft - firstItem.offsetLeft;
    if (setWidth <= 0) return null;

    const centerOffset = isMobile
      ? (container.clientWidth - secondSetFirstItem.offsetWidth) / 2
      : 0;

    return {
      setWidth,
      anchor: secondSetFirstItem.offsetLeft - centerOffset,
    };
  };

  const initScrollPosition = (attempt = 0) => {
    const layout = getLayout();
    if (layout) {
      container.scrollLeft = layout.anchor;
      return;
    }

    if (attempt >= 10) return;
    window.requestAnimationFrame(() => initScrollPosition(attempt + 1));
  };

  const normalizePosition = () => {
    const layout = getLayout();
    if (!layout) return;

    let position = container.scrollLeft;
    let normalized = false;

    while (position < layout.anchor) {
      position += layout.setWidth;
      normalized = true;
    }

    while (position >= layout.anchor + layout.setWidth) {
      position -= layout.setWidth;
      normalized = true;
    }

    if (normalized) container.scrollLeft = position;
  };

  let normalizeTimer: number | undefined;

  const scheduleNormalize = () => {
    if (normalizeTimer !== undefined) window.clearTimeout(normalizeTimer);
    normalizeTimer = window.setTimeout(() => {
      normalizeTimer = undefined;
      normalizePosition();
    }, 200);
  };

  initScrollPosition();

  if ('onscrollend' in window) {
    container.addEventListener('scrollend', normalizePosition);
  } else {
    container.addEventListener('scroll', scheduleNormalize, { passive: true });
  }

  container.dataset.infiniteInitialized = 'true';
}
