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
    ja: '2026/12/1 -',
    en: '2026/12/1 -',
  },
  title: {
    ja: '自転車世界一周中',
    en: 'Cycling Around the World Now',
  },
};
