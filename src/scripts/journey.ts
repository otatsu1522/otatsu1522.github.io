export function setupJourneyScroll(): void {
  const container = document.getElementById('journey-container');
  const leftBtn = document.getElementById('journey-scroll-left');
  const rightBtn = document.getElementById('journey-scroll-right');

  if (!container || !leftBtn || !rightBtn) return;
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

  let isButtonScrolling = false;
  let finishTimer: number | undefined;
  let normalizeTimer: number | undefined;

  const getLayout = () => {
    const firstItem = container.children[0] as HTMLElement | undefined;
    const secondItem = container.children[1] as HTMLElement | undefined;
    const secondSetFirstItem = container.children[itemCount] as HTMLElement | undefined;

    if (!firstItem || !secondSetFirstItem) return null;

    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    const itemStep =
      secondItem
        ? secondItem.offsetLeft - firstItem.offsetLeft
        : secondSetFirstItem.offsetLeft - firstItem.offsetLeft;

    const setWidth =
      secondSetFirstItem.offsetLeft - firstItem.offsetLeft;

    const centerOffset = isMobile
      ? (container.clientWidth - secondSetFirstItem.offsetWidth) / 2
      : 0;

    const anchor =
      secondSetFirstItem.offsetLeft - centerOffset;

    return {
      isMobile,
      itemStep,
      setWidth,
      anchor,
    };
  };

  const initScrollPosition = () => {
    const layout = getLayout();
    if (!layout || layout.setWidth <= 0) return;

    container.scrollLeft = layout.anchor;
  };

  const normalizePosition = () => {
    const layout = getLayout();
    if (!layout || layout.setWidth <= 0) return;

    let position = container.scrollLeft;
    let normalized = false;

    while (position < layout.anchor) {
      position += layout.setWidth;
      normalized = true;
    }

    while (position > layout.anchor + layout.setWidth) {
      position -= layout.setWidth;
      normalized = true;
    }

    if (!normalized) return;

    container.style.scrollSnapType = 'none';
    container.scrollLeft = position;

    requestAnimationFrame(() => {
      container.style.scrollSnapType = '';
    });
  };

  const scheduleNormalize = () => {
    if (isButtonScrolling) return;

    if (normalizeTimer !== undefined) {
      window.clearTimeout(normalizeTimer);
    }

    normalizeTimer = window.setTimeout(() => {
      normalizeTimer = undefined;
      normalizePosition();
    }, 100);
  };

  const images = container.querySelectorAll('img');

  images.forEach((img) => {
    if (!img.complete) {
      img.addEventListener('load', initScrollPosition, { once: true });
    }
  });

  initScrollPosition();

  container.addEventListener('scroll', scheduleNormalize, { passive: true });

  container.addEventListener('scrollend', () => {
    if (isButtonScrolling) return;
    normalizePosition();
  });

  const finishButtonScroll = () => {
    if (!isButtonScrolling) return;

    isButtonScrolling = false;

    if (finishTimer !== undefined) {
      window.clearTimeout(finishTimer);
      finishTimer = undefined;
    }

    normalizePosition();
  };

  container.addEventListener('scrollend', finishButtonScroll);

  const scrollWithButton = (direction: number) => {
    const layout = getLayout();
    if (!layout || layout.itemStep <= 0) return;

    let current = container.scrollLeft;

    const amount = layout.itemStep;

    let target = current + amount * direction;

    while (target < 0) {
      current += layout.setWidth;
      target += layout.setWidth;
    }

    while (target > container.scrollWidth - container.clientWidth) {
      current -= layout.setWidth;
      target -= layout.setWidth;
    }

    if (current !== container.scrollLeft) {
      container.style.scrollSnapType = 'none';
      container.scrollLeft = current;

      requestAnimationFrame(() => {
        container.style.scrollSnapType = '';
      });
    }

    isButtonScrolling = true;

    container.scrollTo({
      left: target,
      behavior: 'smooth',
    });

    if (finishTimer !== undefined) {
      window.clearTimeout(finishTimer);
    }

    finishTimer = window.setTimeout(() => {
      finishButtonScroll();
    }, 800);
  };

  leftBtn.addEventListener('click', () => {
    const layout = getLayout();
    if (!layout) return;

    scrollWithButton(-1);
  });

  rightBtn.addEventListener('click', () => {
    const layout = getLayout();
    if (!layout) return;

    scrollWithButton(1);
  });

  container.dataset.infiniteInitialized = 'true';
}
