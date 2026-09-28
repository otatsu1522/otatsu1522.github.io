import { initMenu } from './menu';
import { initNavigation } from './navigation';
import { setupFeaturedScroll } from './featured';

export function initApp(): void {
  initMenu();
  initNavigation();
  setupFeaturedScroll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

document.addEventListener('astro:after-swap', initApp);
