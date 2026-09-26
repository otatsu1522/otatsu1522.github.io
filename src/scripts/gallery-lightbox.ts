// 写真一覧ページ(/gallery/)専用。サムネイルをタップすると、
// 原寸に近い画像を余白付きで拡大表示し、下中央の×ボタンで閉じる。

export function setupGalleryLightbox(): void {
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImage = document.getElementById('gallery-lightbox-image') as HTMLImageElement | null;
  const closeBtn = document.getElementById('gallery-lightbox-close');
  const triggers = document.querySelectorAll<HTMLElement>('[data-gallery-open]');

  // このページに無い場合は何もしない
  if (!lightbox || !lightboxImage || !closeBtn || !triggers.length) return;
  if (lightbox.dataset.initialized === 'true') return;

  const open = (fullSrc: string, alt: string) => {
    lightboxImage.src = fullSrc;
    lightboxImage.alt = alt;
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const fullSrc = trigger.getAttribute('data-full-src');
      if (!fullSrc) return;

      const thumb = trigger.querySelector('img');
      open(fullSrc, thumb?.alt ?? '');
    });
  });

  closeBtn.addEventListener('click', close);

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) close();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });

  lightbox.dataset.initialized = 'true';
}
