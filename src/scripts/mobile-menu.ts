export function initMobileMenu(): void {
  const button = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');

  if (button && menu) {
    button.addEventListener('click', () => {
      const isHidden = menu.classList.contains('hidden');

      if (isHidden) {
        menu.classList.remove('hidden');
        iconOpen?.classList.add('hidden');
        iconOpen?.classList.remove('block');
        iconClose?.classList.remove('hidden');
        iconClose?.classList.add('block');
        document.body.classList.add('overflow-hidden');
      } else {
        menu.classList.add('hidden');
        iconOpen?.classList.remove('hidden');
        iconOpen?.classList.add('block');
        iconClose?.classList.add('hidden');
        iconClose?.classList.remove('block');
        document.body.classList.remove('overflow-hidden');
      }
    });

    const links = menu.querySelectorAll('.mobile-menu-link');

    links.forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
        iconOpen?.classList.remove('hidden');
        iconOpen?.classList.add('block');
        iconClose?.classList.add('hidden');
        iconClose?.classList.remove('block');
        document.body.classList.remove('overflow-hidden');
      });
    });
  }
}
