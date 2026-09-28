export function initMenu(): void {
  const toggle = document.getElementById('menu-toggle');
  const overlay = document.getElementById('menu-overlay');

  if (!toggle || !overlay) return;
  if (toggle.dataset.initialized === 'true') return;

  const lines = toggle.querySelectorAll<HTMLElement>('.menu-line');
  const links = overlay.querySelectorAll<HTMLAnchorElement>('.menu-link');

  let isOpen = false;
  let scrollAnimationFrame = 0;

  const preventScroll = (event: Event) => {
    if (isOpen) event.preventDefault();
  };

  const preventKeyboardScroll = (event: KeyboardEvent) => {
    if (!isOpen) return;

    const scrollKeys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '];

    if (scrollKeys.includes(event.key)) {
      event.preventDefault();
    }
  };

  const lockScroll = () => {
    document.addEventListener('wheel', preventScroll, { passive: false });
    document.addEventListener('touchmove', preventScroll, { passive: false });
    document.addEventListener('keydown', preventKeyboardScroll);
  };

  const unlockScroll = () => {
    document.removeEventListener('wheel', preventScroll);
    document.removeEventListener('touchmove', preventScroll);
    document.removeEventListener('keydown', preventKeyboardScroll);
  };

  const smoothScrollTo = (targetY: number, duration = 800) => {
    cancelAnimationFrame(scrollAnimationFrame);

    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    const easeInOut = (progress: number) => {
      return progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    };

    const animate = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      window.scrollTo(
        0,
        startY + distance * easeInOut(progress)
      );

      if (progress < 1) {
        scrollAnimationFrame = requestAnimationFrame(animate);
      }
    };

    scrollAnimationFrame = requestAnimationFrame(animate);
  };

  const setOpen = (open: boolean) => {
    if (isOpen === open) return;

    isOpen = open;
    toggle.setAttribute('aria-expanded', String(open));
    overlay.setAttribute('aria-hidden', String(!open));

    if (open) {
      overlay.classList.remove(
        'translate-x-full',
        'opacity-0',
        'pointer-events-none'
      );
      overlay.classList.add(
        'translate-x-0',
        'opacity-100'
      );

      toggle.classList.remove('text-black');
      toggle.classList.add('text-white');

      lines[0]?.style.setProperty(
        'transform',
        'translateY(5px) rotate(45deg)'
      );
      lines[1]?.style.setProperty(
        'transform',
        'translateY(-5px) rotate(-45deg)'
      );

      lockScroll();
      return;
    }

    overlay.classList.remove(
      'translate-x-0',
      'opacity-100'
    );
    overlay.classList.add(
      'translate-x-full',
      'opacity-0',
      'pointer-events-none'
    );

    toggle.classList.remove('text-white');
    toggle.classList.add('text-black');

    lines[0]?.style.removeProperty('transform');
    lines[1]?.style.removeProperty('transform');

    unlockScroll();
  };

  toggle.addEventListener('click', () => {
    setOpen(!isOpen);
  });

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const url = new URL(link.href, window.location.href);

      if (!url.hash) return;
      if (url.pathname !== window.location.pathname) return;

      const target = document.getElementById(url.hash.slice(1));

      if (!target) return;

      event.preventDefault();

      const targetY =
        target.getBoundingClientRect().top + window.scrollY;

      setOpen(false);
      smoothScrollTo(targetY, 800);

      history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search
      );
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen) {
      setOpen(false);
    }
  });

  toggle.dataset.initialized = 'true';
}
