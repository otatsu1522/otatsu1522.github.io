import { initMenuMobile } from './menu-mobile';
import { initNavigation } from './navigation';
import { initLanguage } from './language';
import { initBackgroundParticles } from './background';
import { initPageIndicator } from './page-indicator';
import { setupGalleryMarquee } from './gallery-marqueey';
import { setupGalleryDesktop } from './gallery-carousel';
import { setupGalleryCarouselMobile } from './gallery-carousel-mobile';
import { setupJourneyScroll } from './journey';
import { initPagination } from './pagination';

export function initApp(): void {
  initMenuMobile();
  initNavigation();
  initLanguage();
  initBackgroundParticles();
  initPageIndicator();
  setupGalleryMarquee();
  setupGalleryDesktop();
  setupGalleryCarouselMobile();
  setupJourneyScroll();
  initPagination();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

document.addEventListener('astro:after-swap', initApp);
