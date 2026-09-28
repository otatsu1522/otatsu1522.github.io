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
      ja: '旅のリアルな日常や自転車・キャンプ・アウトドアに関して動画で発信してます。',
      en: 'Travel stories, cycling around the world, camping, and outdoor adventures.',
    },
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/otatsu1522',
    icon: 'instagram',
    description: {
      ja: '旅先の風景や日常、出会った人や行った場所を写真で発信してます。',
      en: 'Travel scenes, daily life, and moments from cycling around the world in photos.',
    },
  },
  {
    name: 'X',
    url: 'https://twitter.com/otatsu1522',
    icon: 'twitter',
    description: {
      ja: '旅の近況や日々の出来事、旅に関する有益な情報などを発信してます。',
      en: 'Travel updates, daily happenings, and real-time trip information.',
    },
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@otatsu1522',
    icon: 'tiktok',
    description: {
      ja: '旅の動画を短く見やすく編集したショート動画を発信してます。',
      en: 'Short videos featuring moments from travel and cycling adventures.',
    },
  },
];
