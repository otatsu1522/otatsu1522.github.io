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
    description: '「旅人の日常」をコンセプトに、リアルな旅の記録や装備・アウトドア情報を発信しています。',
    author: '旅人おたつ',
    bio: 'はい、どーもー、旅人おたつです。現在は、自転車で世界一周をしています。各SNSでは旅人のリアルな日常をシェアしています。また、旅のお役立ち情報や装備紹介、アウトドア、キャンプ、自転車などの話をしています。よろしくお願いします。',
    message: '世界のどこかで会いましょう',
    contactDescription: 'お問い合わせは下記のメールアドレスよりお願いします。',
    email: 'otatsu1522@gmail.com',
  },
  en: {
    title: 'Portfolio | OTATSU',
    description: 'Sharing real travel logs, gear reviews, and outdoor adventures.',
    author: 'Otatsu',
    bio: 'Traveling across Japan and the world by bicycle and hitchhiking. Documenting local culture, gear reviews, and real daily life on the road.',
    message: 'See you somewhere in the world.',
    contactDescription: 'For inquiries, please contact me at the email address below.',
    email: 'otatsu1522@gmail.com',
  },
};
