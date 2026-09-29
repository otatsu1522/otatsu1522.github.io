import type { Language } from './ui';

export interface HistoryItem {
  id: string;
  period: Record<Language, string>;
  title: Record<Language, string>;
}

export const travelHistory: HistoryItem[] = [
  {
    id: '1',
    period: { ja: '2018年8月', en: 'Aug 2018' },
    title: { ja: 'ヒッチハイク日本一周旅', en: 'Hitchhiking Around Japan' },
  },
  {
    id: '2',
    period: { ja: '2018年9月 ~ 2019年9月', en: 'Sep 2018 - Sep 2019' },
    title: {
      ja: 'ニュージーランドゼロ円ワーホリ',
      en: 'No Money Working Holiday in New Zealand',
    },
  },
  {
    id: '3',
    period: { ja: '2019年9月 ~ 2019年11月', en: 'Sep 2019 - Nov 2019' },
    title: {
      ja: '無一文オーストラリア一周旅',
      en: 'Hitchhiking Around Australia',
    },
  },
  {
    id: '4',
    period: { ja: '2019年12月 ~ 2020年1月', en: 'Dec 2019 - Jan 2020' },
    title: {
      ja: '無一文アメリカ横断旅',
      en: 'Hitchhiking Across the United States',
    },
  },
  {
    id: '5',
    period: { ja: '2020年1月 ~ 2020年3月', en: 'Jan 2020 - Mar 2020' },
    title: {
      ja: '無一文カナダ横断旅',
      en: 'Hitchhiking Across Canada',
    },
  },
  {
    id: '6',
    period: { ja: '2020年10月 ~ 2023年3月', en: 'Oct 2020 - Mar 2023' },
    title: {
      ja: '自転車日本一周旅',
      en: 'Cycling Around Japan',
    },
  },
  {
    id: '7',
    period: { ja: '2024年2月 ~ 2025年2月', en: 'Feb 2024 - Feb 2025' },
    title: {
      ja: '自転車ユーラシア大陸横断旅',
      en: 'Cycling Across Eurasia',
    },
  },
];
