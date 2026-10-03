import { smoothScrollTo } from './scroll';

export function initMenu(): void {
  const toggle = document.getElementById('menu-toggle');
  const overlay = document.getElementById('menu-overlay');

  if (!toggle || !overlay) return;

  const lines = toggle.querySelectorAll<HTMLElement>('.menu-line');
  const links = overlay.querySelectorAll<HTMLAnchorElement>('.menu-link');

  let isOpen = false;

  const preventScroll = (event: Event) => {
    if (isOpen) event.preventDefault();
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (!isOpen) return;

    if (event.key === 'Escape') {
      setOpen(false);
      return;
    }

    const scrollKeys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '];

    if (scrollKeys.includes(event.key)) {
      event.preventDefault();
    }
  };

  const lockScroll = () => {
    document.addEventListener('wheel', preventScroll, { passive: false });
    document.addEventListener('touchmove', preventScroll, { passive: false });
    document.addEventListener('keydown', handleKeydown);
  };

  const unlockScroll = () => {
    document.removeEventListener('wheel', preventScroll);
    document.removeEventListener('touchmove', preventScroll);
    document.removeEventListener('keydown', handleKeydown);
  };

  const setOpen = (open: boolean) => {
    if (isOpen === open) return;

    isOpen = open;
    toggle.setAttribute('aria-expanded', String(open));
    overlay.toggleAttribute('inert', !open);

    if (open) {
      overlay.setAttribute('aria-hidden', 'false');

      overlay.classList.remove('translate-x-full', 'opacity-0', 'pointer-events-none');
      overlay.classList.add('translate-x-0', 'opacity-100');

      lines[0]?.style.setProperty('transform', 'translateY(5px) rotate(45deg)');
      lines[1]?.style.setProperty('transform', 'translateY(-5px) rotate(-45deg)');

      lockScroll();
      return;
    }

    toggle.focus({ preventScroll: true });
    overlay.setAttribute('aria-hidden', 'true');

    overlay.classList.remove('translate-x-0', 'opacity-100');
    overlay.classList.add('translate-x-full', 'opacity-0', 'pointer-events-none');

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

      const targetY = target.getBoundingClientRect().top + window.scrollY;

      setOpen(false);
      smoothScrollTo(targetY);

      history.replaceState(null, '', window.location.pathname + window.location.search);
    });
  });
}
