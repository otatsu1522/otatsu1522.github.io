function setupPageIndicator() {
  const sections = document.querySelectorAll('section');
  const currentEl = document.getElementById('current-page');
  const totalEl = document.getElementById('total-pages');

  if (!sections.length || !currentEl || !totalEl) return;

  totalEl.textContent = String(sections.length).padStart(2, '0');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(sections).indexOf(entry.target as HTMLElement);

        if (index !== -1) {
          currentEl.textContent = String(index + 1).padStart(2, '0');
        }
      }
    });
  }, { threshold: 0.4 });

  sections.forEach((section) => observer.observe(section));
}

setupPageIndicator();
document.addEventListener('astro:after-swap', setupPageIndicator);
