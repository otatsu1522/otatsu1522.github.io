import { smoothScrollTo } from './scroll';

export function initNavigation(): void {
  const anchorLinks = document.querySelectorAll<HTMLAnchorElement>(
    'footer nav a[href*="#"]'
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

      const targetY =
        target.getBoundingClientRect().top + window.scrollY;

      smoothScrollTo(targetY);

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

      smoothScrollTo(0);

      history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search
      );
    });

    scrollTopLink.dataset.navigationInitialized = 'true';
  }

  const pendingTarget =
    sessionStorage.getItem('navigation-target');

  if (pendingTarget) {
    const target = document.getElementById(pendingTarget);

    if (target) {
      sessionStorage.removeItem('navigation-target');

      requestAnimationFrame(() => {
        const targetY =
          target.getBoundingClientRect().top + window.scrollY;

        smoothScrollTo(targetY);
      });
    }
  }
}
