export function initLanguage(): void {
  const langButtons =
    document.querySelectorAll<HTMLButtonElement>('[data-lang-btn]');

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
