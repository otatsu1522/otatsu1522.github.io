import type { Language } from './ui';

export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  bio: string;
  message: string;
  contactDescription: string;
  email: string;
}

export const siteConfig: Record<Language, SiteConfig> = {
  ja: {
    title: 'Portfolio | 旅人おたつ',
    description: '旅人おたつのポートフォリオサイトです。',
    author: '旅人おたつ',
    bio: '1994年生まれの元エンジニアです。23歳で会社を退職して、現在は自転車で世界一周旅をしています。各SNSでは旅人のリアルな日常をシェアしています。よろしくお願いします。',
    message: '世界のどこかで会いましょう',
    contactDescription: 'お問い合わせは下記のメールアドレスよりお願いします。',
    email: 'otatsu1522@gmail.com',
  },
  en: {
    title: 'Portfolio | OTATSU',
    description: 'Sharing real travel logs, gear reviews, and outdoor adventures.',
    author: 'OTATSU',
    bio: 'Traveling across Japan and the world by bicycle and hitchhiking. Documenting local culture, gear reviews, and real daily life on the road.',
    message: 'See you somewhere in the world.',
    contactDescription: 'For inquiries, please contact me at the email address below.',
    email: 'otatsu1522@gmail.com',
  },
};
