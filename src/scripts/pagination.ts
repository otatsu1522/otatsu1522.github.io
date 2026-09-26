export function initPagination(): void {
  const paginations =
    document.querySelectorAll<HTMLElement>('[data-pagination-target]');

  paginations.forEach((pagination) => {
    if (pagination.dataset.initialized === 'true') return;

    const target = pagination.dataset.paginationTarget;
    const defaultPageSize = Number(
      pagination.dataset.paginationPageSize
    );
    const mobilePageSize = Number(
      pagination.dataset.paginationPageSizeMobile
    );
    const desktopPageSize = Number(
      pagination.dataset.paginationPageSizeDesktop
    );

    if (!target || !defaultPageSize) return;

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

    const getPageSize = () => {
      if (
        window.innerWidth >= 768 &&
        desktopPageSize
      ) {
        return desktopPageSize;
      }

      if (mobilePageSize) {
        return mobilePageSize;
      }

      return defaultPageSize;
    };

    let currentPage = 1;

    const update = (page: number, scroll = false) => {
      const pageSize = getPageSize();
      const totalPages = Math.ceil(items.length / pageSize);
      const previousPage = currentPage;

      currentPage = Math.max(
        1,
        Math.min(page, totalPages)
      );

      pagination.classList.toggle(
        'hidden',
        totalPages <= 1
      );

      if (totalPages <= 1) {
        items.forEach((item) => {
          item.classList.remove('hidden');
        });
        return;
      }

      const start = (currentPage - 1) * pageSize;
      const end = start + pageSize;

      items.forEach((item, index) => {
        item.classList.toggle(
          'hidden',
          index < start || index >= end
        );
      });

      pageButtons.forEach((button) => {
        const pageNumber = Number(
          button.dataset.paginationPage
        );

        const visible = pageNumber <= totalPages;
        const active = pageNumber === currentPage;

        button.classList.toggle(
          'hidden',
          !visible
        );

        button.classList.toggle(
          'border-white/20',
          active
        );
        button.classList.toggle(
          'bg-white/10',
          active
        );
        button.classList.toggle(
          'text-white',
          active
        );

        button.classList.toggle(
          'border-white/10',
          !active
        );
        button.classList.toggle(
          'bg-white/5',
          !active
        );
        button.classList.toggle(
          'text-gray-400',
          !active
        );

        if (active) {
          button.setAttribute(
            'aria-current',
            'page'
          );
        } else {
          button.removeAttribute(
            'aria-current'
          );
        }
      });

      if (prevButton) {
        prevButton.disabled = currentPage === 1;
      }

      if (nextButton) {
        nextButton.disabled =
          currentPage === totalPages;
      }

      if (
        scroll &&
        currentPage !== previousPage
      ) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    };

    pageButtons.forEach((button) => {
      button.addEventListener('click', () => {
        update(
          Number(button.dataset.paginationPage),
          true
        );
      });
    });

    prevButton?.addEventListener('click', () => {
      update(currentPage - 1, true);
    });

    nextButton?.addEventListener('click', () => {
      update(currentPage + 1, true);
    });

    window.addEventListener('resize', () => {
      update(currentPage);
    });

    update(1);

    pagination.dataset.initialized = 'true';
  });
}
