import type { ui } from './ui';

export interface NavItem {
  key: keyof typeof ui.ja.nav;
  href: string;
}

export const navigationItems: NavItem[] = [
  { key: 'home', href: '/#top' },
  { key: 'about', href: '/#about' },
  { key: 'featured', href: '/#featured' },
  { key: 'latest', href: '/#latest' },
  { key: 'social', href: '/#social' },
  { key: 'contact', href: '/#contact' },
];
