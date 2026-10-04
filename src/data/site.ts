import type { Language } from './ui';

export interface HeroConfig {
  title: string;
  tagline: string;
}

export interface SiteMeta {
  title: string;
  description: string;
  themeColor: string;
  email: string;
  hero: HeroConfig;
}

export const siteMeta: SiteMeta = {
  title: 'Portfolio | 旅人おたつ',
  description: '旅人おたつのポートフォリオサイトです。',
  themeColor: '#ffffff',
  email: 'otatsu1522@gmail.com',
  hero: {
    title: 'OTATSU',
    tagline: 'JOURNEY IS MY LIFE',
  },
};

export interface SiteConfig {
  author: string;
  bio: string;
  message: string;
  contactDescription: string;
  contactAction: string;
}

export const siteConfig: Record<Language, SiteConfig> = {
  ja: {
    author: '旅人おたつ',
    bio: '1994年生まれの元エンジニアです。23歳で会社を退職して、現在は自転車で世界一周旅をしています。SNSでは旅人のリアルな日常をシェアしています。よろしくお願いします。',
    contactDescription:
      'お問い合わせはこちらからお願いします。SNSのダイレクトメッセージでも受け付けていますが、他のメッセージに埋もれて返答が遅くなる可能性があります。',
    contactAction: 'GET IN TOUCH',
    message: '世界のどこかで会いましょう',
  },
  en: {
    author: 'OTATSU',
    bio: 'Born in 1994. My previous job was engineer. I left my job at 23. And I am currently traveling around the world by bicycle. I share the real daily life of a traveler on social media. Thanks a lot.',
    contactDescription: 'Please contact me here.',
    contactAction: 'GET IN TOUCH',
    message: 'See you somewhere in the world.',
  },
};
