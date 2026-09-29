export const ui = {
  ja: {
    nav: {
      home: 'Home',
      about: 'About',
      featured: 'Featured',
      social: 'Social',
      latest: 'Latest',
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
      copyRights: ' OTATSU ALL RIGHTS RESERVED.',
      scrollTop: 'TOP',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      featured: 'Featured',
      social: 'Social',
      latest: 'Latest',
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
      toggleMenu: 'Toggle Menu',
      readArticle: 'Read article',
    },
    messages: {
      noJourneys: 'No journey posts available yet.',
      noPosts: 'No posts available yet.',
    },
    footer: {
      rights: ' OTATSU ALL RIGHTS RESERVED.',
      scrollTop: 'TOP',
    },
  },
} as const;

export type Language = 'ja' | 'en';
