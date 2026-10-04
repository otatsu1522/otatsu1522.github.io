import { smoothScrollTo } from './scroll';

const NAVIGATION_TARGET_KEY = 'navigation-target';

export function initNavigation(): void {
  const anchorLinks = document.querySelectorAll<HTMLAnchorElement>('footer nav a[href*="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const url = new URL(link.href, window.location.href);

      if (!url.hash) return;

      if (url.pathname !== window.location.pathname) {
        event.preventDefault();

        sessionStorage.setItem(NAVIGATION_TARGET_KEY, url.hash.slice(1));

        window.location.href = url.pathname;
        return;
      }

      const target = document.getElementById(url.hash.slice(1));

      if (!target) return;

      event.preventDefault();

      const targetY = target.getBoundingClientRect().top + window.scrollY;

      smoothScrollTo(targetY);

      history.replaceState(null, '', window.location.pathname + window.location.search);
    });
  });

  const scrollTopLink = document.getElementById('footer-scroll-top');

  if (scrollTopLink) {
    scrollTopLink.addEventListener('click', (event) => {
      event.preventDefault();

      smoothScrollTo(0);

      history.replaceState(null, '', window.location.pathname + window.location.search);
    });
  }

  const pendingTarget = sessionStorage.getItem(NAVIGATION_TARGET_KEY);

  if (pendingTarget) {
    const target = document.getElementById(pendingTarget);

    if (target) {
      sessionStorage.removeItem(NAVIGATION_TARGET_KEY);

      requestAnimationFrame(() => {
        const targetY = target.getBoundingClientRect().top + window.scrollY;

        smoothScrollTo(targetY);
      });
    }
  }
}
