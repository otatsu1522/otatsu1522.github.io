export function setupFeaturedScroll(): void {
  const container = document.getElementById('journey-container');

  if (!container) return;
  if (container.dataset.infiniteInitialized === 'true') return;

  const originalItems = Array.from(container.children);
  if (!originalItems.length || container.querySelector('.text-gray-500')) return;

  const itemCount = originalItems.length;

  originalItems.forEach((item) => {
    container.appendChild(item.cloneNode(true));
  });

  originalItems.forEach((item) => {
    container.appendChild(item.cloneNode(true));
  });

  let normalizeTimer: number | undefined;

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

    const anchor = secondSetFirstItem.offsetLeft - centerOffset;

    return {
      setWidth,
      anchor,
    };
  };

  const initScrollPosition = () => {
    const layout = getLayout();
    if (!layout) return;

    container.scrollLeft = layout.anchor;
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

    if (!normalized) return;

    container.scrollLeft = position;
  };

  const scheduleNormalize = () => {
    if (normalizeTimer !== undefined) {
      window.clearTimeout(normalizeTimer);
    }

    normalizeTimer = window.setTimeout(() => {
      normalizeTimer = undefined;
      normalizePosition();
    }, 200);
  };

  const images = Array.from(container.querySelectorAll<HTMLImageElement>('img'));

  let remainingImages = images.filter((img) => !img.complete).length;

  if (remainingImages === 0) {
    initScrollPosition();
  } else {
    const handleImageReady = () => {
      remainingImages -= 1;

      if (remainingImages === 0) {
        initScrollPosition();
      }
    };

    images.forEach((img) => {
      if (img.complete) return;

      img.addEventListener('load', handleImageReady, { once: true });
      img.addEventListener('error', handleImageReady, { once: true });
    });
  }

  if ('onscrollend' in container) {
    container.addEventListener('scrollend', normalizePosition);
  } else {
    container.addEventListener('scroll', scheduleNormalize, {
      passive: true,
    });
  }

  container.dataset.infiniteInitialized = 'true';
}
