import { initMobileMenu } from './mobile-menu';
import { initNavigation } from './navigation';
import { initLanguage } from './language';
import { initBackgroundParticles } from './background';
import { initPageIndicator } from './page-indicator';

export function initApp(): void {
  initMobileMenu();
  initNavigation();
  initLanguage();
  initBackgroundParticles();
  initPageIndicator();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

document.addEventListener('astro:after-swap', initApp);
