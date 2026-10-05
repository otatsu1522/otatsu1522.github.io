import { smoothScrollTo } from './scroll';
import { routes } from '../data/routes';
import { languageChangedEvent, type LanguageChangedDetail } from '../data/language';

const MENU_STATE_KEY = 'menuOpen';

export function initMenu(): void {
  const toggle = document.getElementById('menu-toggle');
  const overlay = document.getElementById('menu-overlay');

  if (!toggle || !overlay) return;

  const lines = toggle.querySelectorAll<HTMLElement>('.menu-line');
  const links = overlay.querySelectorAll<HTMLAnchorElement>('.menu-link');

  let isOpen = false;

  const isMenuEntry = () => history.state?.[MENU_STATE_KEY] === true;

  const preventScroll = (event: Event) => {
    if (isOpen) event.preventDefault();
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (!isOpen) return;

    if (event.key === 'Escape') {
      closeMenu();
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
      overlay.classList.remove('translate-x-full', 'opacity-0', 'pointer-events-none');
      overlay.classList.add('translate-x-0', 'opacity-100');

      lines[0]?.style.setProperty('transform', 'translateY(5px) rotate(45deg)');
      lines[1]?.style.setProperty('transform', 'translateY(-5px) rotate(-45deg)');

      lockScroll();
      return;
    }

    toggle.focus({ preventScroll: true });

    overlay.classList.remove('translate-x-0', 'opacity-100');
    overlay.classList.add('translate-x-full', 'opacity-0', 'pointer-events-none');

    lines[0]?.style.removeProperty('transform');
    lines[1]?.style.removeProperty('transform');

    unlockScroll();
  };

  const openMenu = () => {
    if (isOpen) return;

    history.pushState({ ...history.state, [MENU_STATE_KEY]: true }, '');
    setOpen(true);
  };

  const closeMenu = (): Promise<void> =>
    new Promise((resolve) => {
      if (!isOpen) return resolve();

      if (!isMenuEntry()) {
        setOpen(false);
        return resolve();
      }

      window.addEventListener('popstate', () => resolve(), { once: true });
      history.back();
    });

  window.addEventListener('popstate', () => {
    const shouldBeOpen = isMenuEntry();

    if (shouldBeOpen !== isOpen) setOpen(shouldBeOpen);
  });

  if (isMenuEntry()) {
    history.replaceState({ ...history.state, [MENU_STATE_KEY]: false }, '');
  }

  toggle.addEventListener('click', () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  document.addEventListener(languageChangedEvent, (event) => {
    const { persisted } = (event as CustomEvent<LanguageChangedDetail>).detail;

    if (!persisted) return;

    if (window.location.pathname === routes.home) {
      closeMenu().then(() => smoothScrollTo(0));
      return;
    }

    window.location.replace(routes.home);
  });

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const url = new URL(link.href, window.location.href);

      if (!url.hash) return;
      if (url.pathname !== window.location.pathname) return;

      const target = document.getElementById(url.hash.slice(1));

      if (!target) return;

      event.preventDefault();

      closeMenu().then(() => {
        const targetY = target.getBoundingClientRect().top + window.scrollY;

        smoothScrollTo(targetY);

        history.replaceState(null, '', window.location.pathname + window.location.search);
      });
    });
  });
}
