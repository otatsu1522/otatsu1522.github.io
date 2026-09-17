// サイト全体で使う「コンテンツではない」固定UI文言（ボタンラベル・見出しの飾り文字・コピーライト等）。
// これまで各コンポーネント/ページに直接書かれていたテキストをここに集約し、
// コードを触らずに文言だけ変更できるようにしている。
// 人物・旅歴・SNSなどの「コンテンツ」データは引き続き profile.ts に置く。
export const siteText = {
  topButtonLabel: '← TOP',

  music: {
    label: 'MUSIC',
  },

  copyright: '© 2026 otatsu. All rights reserved.',

  portfolioLinkLabel: 'PORTFOLIO',

  sections: {
    welcome: {
      eyebrow: "Traveler's Portfolio",
    },
    about: {
      eyebrow: 'About Me',
      titleJa: '自己紹介',
      titleEn: 'About',
    },
    history: {
      eyebrow: 'Journey History',
      titleJa: '旅歴',
      titleEn: 'Travel History',
    },
    galleryJapan: {
      eyebrow: 'Gallery',
      titleJa: '自転車日本一周',
      titleEn: 'Cycling Around Japan',
    },
    bicycleJapan: {
      eyebrow: 'Bicycle',
      titleJa: '自転車（日本一周）',
      titleEn: 'Bicycle (Japan)',
    },
    galleryWorld: {
      eyebrow: 'Gallery',
      titleJa: '自転車世界一周',
      titleEn: 'Cycling Around the World',
    },
    bicycleWorld: {
      eyebrow: 'Bicycle',
      titleJa: '自転車（世界一周）',
      titleEn: 'Bicycle (World)',
    },
    gear: {
      eyebrow: 'Gear',
      titleJa: '装備',
      titleEn: 'Gear',
    },
    map: {
      eyebrow: 'Map',
      titleJa: '地図',
      titleEn: 'Map',
    },
    stats: {
      eyebrow: 'Stats',
      titleJa: '統計',
      titleEn: 'Stats',
    },
    recommend: {
      eyebrow: 'Recommend',
      titleJa: 'おすすめ動画',
      titleEn: 'Recommend',
    },
    sns: {
      eyebrow: 'Social Links',
      titleJa: 'SNS',
      titleEn: 'Social Networks',
    },
    message: {
      eyebrow: 'Message',
    },
  },
};
