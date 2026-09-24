export function initApp(): void {
  // モバイルメニューの開閉制御
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

  // クライアント側の言語切替制御
  const langButtons = document.querySelectorAll<HTMLButtonElement>('[data-lang-btn]');
  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang-btn');
      if (targetLang === 'ja' || targetLang === 'en') {
        document.documentElement.setAttribute('data-lang', targetLang);
        document.documentElement.setAttribute('lang', targetLang);
        localStorage.setItem('preferred-lang', targetLang);
      }
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
document.addEventListener('astro:after-swap', initApp);
