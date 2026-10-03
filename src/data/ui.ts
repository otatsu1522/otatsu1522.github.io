export const ui = {
  ja: {
    nav: {
      home: 'Home',
      about: 'About',
      journeys: 'Journeys',
      posts: 'Posts',
      social: 'Social',
      contact: 'Contact',
    },
    sections: {
      aboutTitle: 'About',
      historyTitle: 'History',
      journeyTitle: 'Featured',
      journeyListTitle: 'Journeys',
      recommendTitle: 'Recommend',
      playlistTitle: 'Playlist',
      postsTitle: 'Latest',
      postsListTitle: 'Posts',
      socialTitle: 'Social',
      contactTitle: 'Contact',
    },
    buttons: {
      toggleMenu: 'メニュー切り替え',
      readArticle: '記事を読む',
      playVideo: '動画を再生',
    },
    article: {
      previous: '前の記事',
      next: '次の記事',
    },
    messages: {
      noJourneys: '旅の記事は準備中です。',
      noPosts: '新着情報はありません。',
    },
    footer: {
      copyRights: ' OTATSU ALL RIGHTS RESERVED.',
      scrollTop: 'SCROLL TOP',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      journeys: 'Journeys',
      posts: 'Posts',
      social: 'Social',
      contact: 'Contact',
    },
    sections: {
      aboutTitle: 'About',
      historyTitle: 'History',
      journeyTitle: 'Featured',
      journeyListTitle: 'Journeys',
      recommendTitle: 'Recommend',
      playlistTitle: 'Playlist',
      postsTitle: 'Latest',
      postsListTitle: 'Posts',
      socialTitle: 'Social',
      contactTitle: 'Contact',
    },
    buttons: {
      toggleMenu: 'Toggle Menu',
      readArticle: 'Read article',
      playVideo: 'Play video',
    },
    article: {
      previous: 'PREVIOUS',
      next: 'NEXT',
    },
    messages: {
      noJourneys: 'No journey posts available yet.',
      noPosts: 'No posts available yet.',
    },
    footer: {
      copyRights: ' OTATSU ALL RIGHTS RESERVED.',
      scrollTop: 'SCROLL TOP',
    },
  },
} as const;

export type Language = 'ja' | 'en';
