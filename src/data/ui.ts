export const ui = {
  ja: {
    nav: {
      home: 'Home',
      about: 'About',
      featured: 'Featured',
      latest: 'Latest',
      social: 'Social',
      contact: 'Contact',
    },
    sections: {
      aboutTitle: 'About',
      historyTitle: 'History',
      journeyTitle: 'Featured Journeys',
      journeyListTitle: 'Journeys',
      recommendTitle: 'Recommend',
      playlistTitle: 'Playlist',
      postsTitle: 'Latest Posts',
      postsListTitle: 'Posts',
      socialTitle: 'Social',
      contactTitle: 'Contact',
    },
    buttons: {
      toggleMenu: 'メニュー切り替え',
      readArticle: '記事を読む',
    },
    messages: {
      noJourneys: '旅の記事は準備中です。',
      noPosts: '新着情報はありません。',
    },
    footer: {
      copyRights: ' OTATSU All Rights Reserved.',
      scrollTop: 'SCROLL TOP',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      featured: 'Featured',
      gallery: 'Gallery',
      latest: 'Latest',
      social: 'Social',
      contact: 'Contact',
    },
    sections: {
      aboutTitle: 'About',
      historyTitle: 'History',
      journeyTitle: 'Featured Journeys',
      journeyListTitle: 'Journeys',
      recommendTitle: 'Recommend',
      recommendSubtitle: 'Suggest ',
      playlistTitle: 'Playlist',
      postsTitle: 'Latest',
      postsListTitle: 'Posts',
      socialTitle: 'Social',
      contactTitle: 'Contact',
    },
    buttons: {
      toggleMenu: 'Toggle Menu',
      readArticle: 'Read article',
    },
    messages: {
      noJourneys: 'No journey posts available yet.',
      noPosts: 'No posts available yet.',
    },
    footer: {
      rights: ' OTATSU All Rights Reserved.',
      scrollTop: 'SCROLL TOP',
    },
  },
} as const;

export type Language = 'ja' | 'en';
