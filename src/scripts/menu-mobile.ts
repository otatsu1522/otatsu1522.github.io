export function initMenuMobile(): void {
  const button = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');

  if (!button || !menu) return;
  if (button.dataset.initialized === 'true') return;

  const setMenuState = (isOpen: boolean) => {
    if (isOpen) {
      menu.classList.remove('hidden');
      iconOpen?.classList.add('hidden');
      iconOpen?.classList.remove('block');
      iconClose?.classList.remove('hidden');
      iconClose?.classList.add('block');
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      menu.classList.add('hidden');
      iconOpen?.classList.remove('hidden');
      iconOpen?.classList.add('block');
      iconClose?.classList.add('hidden');
      iconClose?.classList.remove('block');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
  };

  button.addEventListener('click', () => {
    setMenuState(menu.classList.contains('hidden'));
  });

  const links = menu.querySelectorAll<HTMLAnchorElement>('.mobile-menu-link');

  links.forEach((link) => {
    link.addEventListener('click', () => {
      setMenuState(false);
    });
  });

  button.dataset.initialized = 'true';
}
