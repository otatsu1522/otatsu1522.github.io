import type { Language } from './ui';

export interface HeroConfig {
  title: string;
  tagline: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  bio: string;
  message: string;
  contactDescription: string;
  contactAction: string;
  email: string;
  hero: HeroConfig;
}

export const siteConfig: Record<Language, SiteConfig> = {
  ja: {
    title: 'Portfolio | 旅人おたつ',
    description: '旅人おたつのポートフォリオサイトです。',
    author: '旅人おたつ',
    bio: '1994年生まれの元エンジニアです。23歳で会社を退職して、現在は自転車で世界一周旅をしています。SNSでは旅人のリアルな日常をシェアしています。よろしくお願いします。',
    contactDescription: 'お問い合わせはこちらからお願いします。',
    contactAction: 'GET IN TOUCH',
    email: 'otatsu1522@gmail.com',
    message: '世界のどこかで会いましょう',
    hero: {
      title: 'OTATSU',
      tagline: 'JOURNEY IS MY LIFE',
    },
  },
  en: {
    title: 'Portfolio | OTATSU',
    description: 'Sharing real travel logs, gear reviews, and outdoor adventures.',
    author: 'OTATSU',
    bio: 'Traveling across Japan and the world by bicycle and hitchhiking. Documenting local culture, gear reviews, and real daily life on the road.',
    contactDescription: 'For travel, projects, and general inquiries.',
    contactAction: 'GET IN TOUCH',
    email: 'otatsu1522@gmail.com',
    message: 'See you somewhere in the world.',
    hero: {
      title: 'OTATSU',
      tagline: 'JOURNEY IS MY LIFE',
    },
  },
};
