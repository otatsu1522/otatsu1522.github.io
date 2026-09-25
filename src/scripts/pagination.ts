export function initPagination(): void {
  const paginations =
    document.querySelectorAll<HTMLElement>('[data-pagination-target]');

  paginations.forEach((pagination) => {
    if (pagination.dataset.initialized === 'true') return;

    const target = pagination.dataset.paginationTarget;
    const pageSize = Number(pagination.dataset.paginationPageSize);

    if (!target || !pageSize) return;

    const items = Array.from(
      document.querySelectorAll<HTMLElement>('[data-pagination-item]')
    ).filter((item) => item.dataset.paginationItem === target);

    const pageButtons =
      pagination.querySelectorAll<HTMLButtonElement>(
        '[data-pagination-page]'
      );

    const prevButton =
      pagination.querySelector<HTMLButtonElement>(
        '[data-pagination-prev]'
      );

    const nextButton =
      pagination.querySelector<HTMLButtonElement>(
        '[data-pagination-next]'
      );

    if (!items.length || !pageButtons.length) return;

    const totalPages = Math.ceil(items.length / pageSize);
    let currentPage = 1;

    const update = (page: number) => {
      const previousPage = currentPage;

      currentPage = Math.max(1, Math.min(page, totalPages));

      const start = (currentPage - 1) * pageSize;
      const end = start + pageSize;

      items.forEach((item, index) => {
        item.classList.toggle('hidden', index < start || index >= end);
      });

      pageButtons.forEach((button) => {
        const pageNumber = Number(button.dataset.paginationPage);
        const active = pageNumber === currentPage;

        button.classList.toggle('border-white/20', active);
        button.classList.toggle('bg-white/10', active);
        button.classList.toggle('text-white', active);

        button.classList.toggle('border-white/15', !active);
        button.classList.toggle('bg-white/5', !active);
        button.classList.toggle('text-gray-400', !active);

        if (active) {
          button.setAttribute('aria-current', 'page');
        } else {
          button.removeAttribute('aria-current');
        }
      });

      if (prevButton) {
        prevButton.disabled = currentPage === 1;
      }

      if (nextButton) {
        nextButton.disabled = currentPage === totalPages;
      }

      if (currentPage !== previousPage) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    };

    pageButtons.forEach((button) => {
      button.addEventListener('click', () => {
        update(Number(button.dataset.paginationPage));
      });
    });

    prevButton?.addEventListener('click', () => {
      update(currentPage - 1);
    });

    nextButton?.addEventListener('click', () => {
      update(currentPage + 1);
    });

    update(1);

    pagination.dataset.initialized = 'true';
  });
}
