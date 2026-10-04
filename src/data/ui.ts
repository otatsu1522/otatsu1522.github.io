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
    a11y: {
      skipToContent: '本文へスキップ',
      mainNav: 'メインメニュー',
      footerNav: 'フッターメニュー',
      articleNav: '前後の記事',
      previousPage: '前のページ',
      nextPage: '次のページ',
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
    a11y: {
      skipToContent: 'Skip to content',
      mainNav: 'Main menu',
      footerNav: 'Footer menu',
      articleNav: 'Previous and next articles',
      previousPage: 'Previous page',
      nextPage: 'Next page',
    },
  },
} as const;

export type { Language } from './language';
