import type { Language } from './ui';

export interface HistoryItem {
  period: Record<Language, string>;
  title: Record<Language, string>;
}

export const travelHistory: HistoryItem[] = [
  {
    period: { ja: '2018-8-10 ~ 2018-8-19', en: 'Aug 2018' },
    title: { ja: 'ヒッチハイク日本一周旅', en: 'Hitchhiking Around Japan' },
  },
  {
    period: { ja: '2018-9-10 ~ 2019-9-12', en: 'Sep 2018 - Sep 2019' },
    title: {
      ja: 'ニュージーランドゼロ円ワーホリ',
      en: 'No Money Working Holiday in New Zealand',
    },
  },
  {
    period: { ja: '2019-9-12 ~ 2019-11-28', en: 'Sep 2019 - Nov 2019' },
    title: {
      ja: '無一文オーストラリア一周旅',
      en: 'Hitchhiking Around Australia',
    },
  },
  {
    period: { ja: '2019-12-8 ~ 2020-1-4', en: 'Dec 2019 - Jan 2020' },
    title: {
      ja: '無一文アメリカ横断旅',
      en: 'Hitchhiking Across the United States',
    },
  },
  {
    period: { ja: '2020-1-4 ~ 2020-3-20', en: 'Jan 2020 - Mar 2020' },
    title: {
      ja: '無一文カナダ横断旅',
      en: 'Hitchhiking Across Canada',
    },
  },
  {
    period: { ja: '2020-10-12 ~ 2023-3-10', en: 'Oct 2020 - Mar 2023' },
    title: {
      ja: '自転車日本一周旅',
      en: 'Cycling Around Japan',
    },
  },
  {
    period: { ja: '2024-2-21 ~ 2025-2-18', en: 'Feb 2024 - Feb 2025' },
    title: {
      ja: '自転車ユーラシア大陸横断旅',
      en: 'Cycling Across Eurasia',
    },
  },
];
