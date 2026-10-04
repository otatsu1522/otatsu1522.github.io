import type { ui } from './ui';
import { routes } from './routes';

export interface NavItem {
  key: keyof typeof ui.ja.nav;
  href: string;
}

export const navigationItems: NavItem[] = [
  { key: 'home', href: '/#top' },
  { key: 'about', href: '/#about' },
  { key: 'journeys', href: routes.journeys },
  { key: 'posts', href: routes.posts },
  { key: 'social', href: '/#social' },
  { key: 'contact', href: '/#contact' },
];
