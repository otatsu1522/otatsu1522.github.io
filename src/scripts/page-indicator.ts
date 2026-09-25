let cleanupHandler: (() => void) | null = null;

function setupPageIndicator() {
  const sections = document.querySelectorAll('section');
  const currentEl = document.getElementById('current-page');
  const totalEl = document.getElementById('total-pages');

  if (!sections.length || !currentEl || !totalEl) return;

  if (cleanupHandler) {
    cleanupHandler();
  }

  totalEl.textContent = String(sections.length).padStart(2, '0');

  let ticking = false;

  const updateCurrentPage = () => {
    const scrollBottom = window.scrollY + window.innerHeight;
    const documentBottom = document.documentElement.scrollHeight;

    // ページ最下部では必ず最後のsectionを表示
    if (scrollBottom >= documentBottom - 2) {
      currentEl.textContent = String(sections.length).padStart(2, '0');
      ticking = false;
      return;
    }

    const viewportCenter = window.scrollY + window.innerHeight / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const sectionCenter = window.scrollY + rect.top + rect.height / 2;
      const distance = Math.abs(sectionCenter - viewportCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    currentEl.textContent = String(closestIndex + 1).padStart(2, '0');

    ticking = false;
  };

  const requestUpdate = () => {
    if (ticking) return;

    ticking = true;
    requestAnimationFrame(updateCurrentPage);
  };

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);

  cleanupHandler = () => {
    window.removeEventListener('scroll', requestUpdate);
    window.removeEventListener('resize', requestUpdate);
    cleanupHandler = null;
  };

  updateCurrentPage();
}

setupPageIndicator();
document.addEventListener('astro:after-swap', setupPageIndicator);
