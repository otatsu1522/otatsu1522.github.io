import { initMenu } from './menu';
import { initNavigation } from './navigation';
import { setupFeaturedScroll } from './featured';

export function initApp(): void {
  initMenu();
  initNavigation();
  setupFeaturedScroll();
}

initApp();
