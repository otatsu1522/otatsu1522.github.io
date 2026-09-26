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
      background.style.background = 'transparent';
      return;
    }

    let opacity = 0;

    if (window.location.pathname !== '/') {
      opacity = 0.75;
    } else {
      opacity = Math.min(
        (window.scrollY / window.innerHeight) * 0.75,
        0.75
      );
    }

    const stops = [
      `rgb(0 0 0 / ${opacity}) 0%`,
      `rgb(0 0 0 / ${opacity}) 75%`,
    ];

    for (let position = 76; position <= 100; position++) {
      const progress = (position - 75) / 25;
      const smoothstep =
        progress * progress * (3 - 2 * progress);
      const currentOpacity =
        opacity * (1 - smoothstep);

      stops.push(
        `rgb(0 0 0 / ${currentOpacity}) ${position}%`
      );
    }

    background.style.background = `linear-gradient(
      to bottom,
      ${stops.join(',\n      ')}
    )`;
  };

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);

  update();

  background.dataset.initialized = 'true';
}
