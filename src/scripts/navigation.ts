export function initNavigation(): void {
  const anchorLinks = document.querySelectorAll<HTMLAnchorElement>(
    'header a[href*="#"], footer a[href*="#"]'
  );

  anchorLinks.forEach((link) => {
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
  });

  const navigationTarget = sessionStorage.getItem('navigation-target');

  if (navigationTarget) {
    const target = document.getElementById(navigationTarget);

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
