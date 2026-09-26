import { initBackgroundParticles } from './background';
import { initNavigation } from './navigation';
import { initMenuMobile } from './menu-mobile';
import { setupJourneyScroll } from './journey';
import { setupGalleryDesktop } from './gallery-carousel';
import { setupGalleryCarouselMobile } from './gallery-carousel-mobile';

export function initApp(): void {
  initBackgroundParticles();
  initNavigation();
  initMenuMobile();
  setupJourneyScroll();
  setupGalleryDesktop();
  setupGalleryCarouselMobile();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

document.addEventListener('astro:after-swap', initApp);
