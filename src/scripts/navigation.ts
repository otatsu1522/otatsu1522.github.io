export function initNavigation(): void {
  const anchorLinks = document.querySelectorAll<HTMLAnchorElement>(
    'header a[href*="#"], footer nav a[href*="#"]'
  );

  anchorLinks.forEach((link) => {
    if (link.dataset.navigationInitialized === 'true') return;

    link.addEventListener('click', (event) => {
      const url = new URL(link.href, window.location.href);

      if (!url.hash) return;

      if (url.pathname !== window.location.pathname) {
        event.preventDefault();

        sessionStorage.setItem(
          'navigation-target',
          url.hash.slice(1)
        );

        window.location.href = url.pathname;
        return;
      }

      const target = document.getElementById(url.hash.slice(1));

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search
      );
    });

    link.dataset.navigationInitialized = 'true';
  });

  const scrollTopLink =
    document.getElementById('footer-scroll-top');

  if (
    scrollTopLink &&
    scrollTopLink.dataset.navigationInitialized !== 'true'
  ) {
    scrollTopLink.addEventListener('click', (event) => {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });

    scrollTopLink.dataset.navigationInitialized = 'true';
  }

  initDesktopHeaderBackground();

  const pendingTarget = sessionStorage.getItem('navigation-target');

  if (pendingTarget) {
    const target = document.getElementById(pendingTarget);

    if (target) {
      sessionStorage.removeItem('navigation-target');

      requestAnimationFrame(() => {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    }
  }
}

function initDesktopHeaderBackground(): void {
  const background = document.getElementById('desktop-header-background');

  if (!background) return;
  if (background.dataset.initialized === 'true') return;

  const update = () => {
    if (window.innerWidth < 768) {
      background.style.backgroundColor = 'rgb(0 0 0 / 0)';
      return;
    }

    if (window.location.pathname !== '/') {
      background.style.backgroundColor = 'rgb(0 0 0 / 0.5)';
      return;
    }

    const opacity = Math.min(
      (window.scrollY / window.innerHeight) * 0.5,
      0.5
    );

    background.style.backgroundColor = `rgb(0 0 0 / ${opacity})`;
  };

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);

  update();

  background.dataset.initialized = 'true';
}
