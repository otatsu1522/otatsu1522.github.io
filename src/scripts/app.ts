import { initMenu } from './menu';
import { initNavigation } from './navigation';
import { setupJourneysScroll } from './journeys';

export function initApp(): void {
  initMenu();
  initNavigation();
  setupJourneysScroll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

document.addEventListener('astro:after-swap', initApp);
