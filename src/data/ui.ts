export const ui = {
  ja: {
    nav: {
      home: 'Home',
      about: 'About',
      history: 'History',
      featured: 'Featured',
      recommend: 'Recommend',
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
      viewAllPosts: '記事一覧へ',
      viewAllJourneys: '旅の記録一覧へ',
      viewAllGallery: '写真一覧へ',
    },
    messages: {
      noJourneys: '旅の記事は準備中です。',
      noPosts: '新着情報はありません。',
    },
    footer: {
      copyRights: 'OTATSU. All rights reserved.',
      scrollTop: 'SCROLL TOP',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      history: 'History',
      featured: 'Featured',
      recommend: 'Recommend',
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
      viewAllPosts: 'View all posts',
      viewAllJourneys: 'View all journeys',
      viewAllGallery: 'View all photos',
    },
    messages: {
      noJourneys: 'No journey posts available yet.',
      noPosts: 'No posts available yet.',
    },
    footer: {
      rights: 'OTATSU. All rights reserved.',
      scrollTop: 'SCROLL TOP',
    },
  },
} as const;

export type Language = 'ja' | 'en';
