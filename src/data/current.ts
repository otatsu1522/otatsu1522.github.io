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
  active: false,
  date: {
    ja: '2026/9/30〜',
    en: 'Sep 30, 2026 –',
  },
  title: {
    ja: '自転車世界一周中',
    en: 'Cycling Around the World',
  },
};
