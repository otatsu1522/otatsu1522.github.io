import type { ui } from './ui';

export interface NavItem {
  key: keyof typeof ui.ja.nav;
  href: string;
}

export const navigationItems: NavItem[] = [
  { key: 'home', href: '/#top' },
  { key: 'about', href: '/#about' },
  { key: 'history', href: '/#history' },
  { key: 'journey', href: '/#journey' },
  { key: 'recommend', href: '/#recommend' },
  { key: 'gallery', href: '/#gallery' },
  { key: 'posts', href: '/#posts' },
  { key: 'social', href: '/#social' },
  { key: 'contact', href: '/#contact' },
];
