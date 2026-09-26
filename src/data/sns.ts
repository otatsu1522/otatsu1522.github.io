export interface SnsLink {
  name: string;
  url: string;
  icon: string;
  description: {
    ja: string;
    en: string;
  };
}

export const snsLinks: SnsLink[] = [
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@otatsu1522',
    icon: 'youtube',
    description: {
      ja: '旅の記録や自転車世界一周の様子、キャンプ・アウトドアなどを動画で発信。',
      en: 'Travel stories, cycling around the world, camping, and outdoor adventures.',
    },
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/otatsu1522',
    icon: 'instagram',
    description: {
      ja: '旅先の風景や日常、自転車旅で出会った場所や出来事を写真で発信。',
      en: 'Travel scenes, daily life, and moments from cycling around the world in photos.',
    },
  },
  {
    name: 'X',
    url: 'https://twitter.com/otatsu1522',
    icon: 'twitter',
    description: {
      ja: '旅の近況や日々の出来事、リアルタイムな旅の情報を発信。',
      en: 'Travel updates, daily happenings, and real-time trip information.',
    },
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@otatsu1522',
    icon: 'tiktok',
    description: {
      ja: '旅先での出来事や自転車旅の一場面を短い動画で紹介。',
      en: 'Short videos featuring moments from travel and cycling adventures.',
    },
  },
];
