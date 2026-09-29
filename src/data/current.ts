export interface Current {
  active: boolean;
  date?: {
    ja: string;
    en: string;
  };
  title: {
    ja: string;
    en: string;
  };
}

export const current: Current = {
  active: true,
  date: {
    ja: '2035/12/26〜',
    en: 'Sep 30, 2026 –',
  },
  title: {
    ja: '自転車世界一周中',
    en: 'Cycling Around the World Now',
  },
};
