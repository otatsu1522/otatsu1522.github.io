export type Lang = 'ja' | 'en';

export interface TravelHistory {
  period: string;
  title: Record<Lang, string>;
  desc?: Record<Lang, string>;
}

export interface SocialLink {
  name: string;
  url: string;
  handle?: string;
}

export interface Playlist {
  title: Record<Lang, string>;
  url: string;
}

export const profileData = {
  name: {
    ja: '旅人おたつ',
    en: 'OTATSU',
  },

  tagline: {
    ja: '世界のどこかで会いましょう',
    en: 'See you somewhere in the world',
  },

  concept: {
    ja: '旅人の日常',
    en: "A Traveler's Daily Life",
  },

  about: {
    ja: `はい、どーもー、旅人おたつです。
      現在は、自転車で世界一周をしています。
      各SNSでは旅人のリアルな日常をシェアしています。
      また、旅のお役立ち情報や装備紹介、
      アウトドア、キャンプ、自転車などの話をしています。
      よろしくお願いします。`,
    en: `Hi, I'm Otatsu, a traveler.
      I'm currently cycling around the world.
      I share real daily life from my travels on social media.
      I also share useful travel tips, gear reviews,
      and stories about outdoor activities, camping, and bicycle touring.
      Thanks for following along.`,
  },

  history: [
    {
      period: '2018.08',
      title: {
        ja: 'ヒッチハイク日本一周旅',
        en: 'Hitchhiking Around Japan',
      },
    },
    {
      period: '2018.09 - 2019.09',
      title: {
        ja: 'ニュージーランド ワーキングホリデー',
        en: 'Working Holiday in New Zealand',
      },
    },
    {
      period: '2019.09 - 2019.11',
      title: {
        ja: '無一文オーストラリア一周',
        en: 'Traveling Around Australia with No Money',
      },
    },
    {
      period: '2019.12 - 2020.01',
      title: {
        ja: '無一文アメリカ横断',
        en: 'Crossing the USA with No Money',
      },
    },
    {
      period: '2020.01 - 2020.03',
      title: {
        ja: '無一文カナダ横断',
        en: 'Crossing Canada with No Money',
      },
    },
    {
      period: '2020.10 - 2020.12',
      title: {
        ja: '自転車日本一周（前半）',
        en: 'Cycling Around Japan (Part 1)',
      },
    },
    {
      period: '2022.10 - 2023.03',
      title: {
        ja: '自転車日本一周（後半）',
        en: 'Cycling Around Japan (Part 2)',
      },
    },
    {
      period: '2024.02 - 2025.02',
      title: {
        ja: '自転車世界一周（ユーラシア大陸横断）',
        en: 'Cycling Around the World (Across Eurasia)',
      },
    },
    {
      period: '2026.10 - ',
      title: {
        ja: '自転車世界一周（中東、アフリカ、南米編）',
        en: 'Cycling Around the World (Middle East, Africa & South America)',
      },
    },
  ] as TravelHistory[],

  links: {
    recommendedVideoId: '3OMFPDpNQsM',

    playlists: [
      {
        title: {
          ja: '自転車日本一周 再生リスト',
          en: 'Cycling Around Japan Playlist',
        },
        url: 'https://www.youtube.com/playlist?list=PLs9JLAzb3cG5QiAMN0QEGsgTF5r8Knd4V',
      },
      {
        title: {
          ja: '自転車世界一周 再生リスト',
          en: 'Cycling Around the World Playlist',
        },
        url: 'https://www.youtube.com/playlist?list=PLs9JLAzb3cG4lGI5PjpcUxcAtHU1Bbpv3',
      },
    ] as Playlist[],

    sns: [
      {
        name: 'YouTube',
        url: 'https://www.youtube.com/@otatsu1522',
        handle: '@otatsu1522',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/otatsu1522',
        handle: '@otatsu1522',
      },
      {
        name: 'X',
        url: 'https://x.com/otatsu1522',
        handle: '@otatsu1522',
      },
      {
        name: 'TikTok',
        url: 'https://www.tiktok.com/@otatsu1522',
        handle: '@otatsu1522',
      },
    ] as SocialLink[],
  },
};
