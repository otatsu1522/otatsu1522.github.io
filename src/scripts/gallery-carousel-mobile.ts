export function setupGalleryCarouselMobile(): void {
  const container = document.getElementById('gallery-mobile-container');
  const prevBtn = document.querySelector<HTMLElement>('[data-gallery-mobile-prev]');
  const nextBtn = document.querySelector<HTMLElement>('[data-gallery-mobile-next]');

  if (!container || !prevBtn || !nextBtn) return;
  if (container.dataset.infiniteInitialized === 'true') return;

  const originalItems = Array.from(container.children) as HTMLElement[];
  if (!originalItems.length) return;

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

    const itemStep = secondItem
      ? secondItem.offsetLeft - firstItem.offsetLeft
      : secondSetFirstItem.offsetLeft - firstItem.offsetLeft;

    const setWidth = secondSetFirstItem.offsetLeft - firstItem.offsetLeft;
    const anchor = secondSetFirstItem.offsetLeft;

    if (itemStep <= 0 || setWidth <= 0) return null;

    return { itemStep, setWidth, anchor };
  };

  const initScrollPosition = () => {
    const layout = getLayout();
    if (!layout) return;

    container.style.scrollSnapType = 'none';
    container.scrollLeft = layout.anchor;

    requestAnimationFrame(() => {
      container.style.scrollSnapType = '';
    });
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
    }, 120);
  };

  initScrollPosition();

  container.addEventListener('scroll', scheduleNormalize, { passive: true });

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
    if (!layout) return;

    let current = container.scrollLeft;
    let target = current + layout.itemStep * direction;

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

  prevBtn.addEventListener('click', () => scrollWithButton(-1));
  nextBtn.addEventListener('click', () => scrollWithButton(1));

  container.dataset.infiniteInitialized = 'true';
}
