import type { Language } from './ui';

export interface HistoryItem {
  id: string;
  period: Record<Language, string>;
  title: Record<Language, string>;
}

export const travelHistory: HistoryItem[] = [
  {
    id: '1',
    period: { ja: '2018/8', en: 'Aug 2018' },
    title: { ja: 'ヒッチハイク日本一周旅', en: 'Hitchhiking Around Japan' },
  },
  {
    id: '2',
    period: { ja: '2018/9 - 2019/9', en: 'Sep 2018 - Sep 2019' },
    title: {
      ja: 'ニュージーランドゼロ円ワーホリ',
      en: 'No Money Working Holiday in New Zealand',
    },
  },
  {
    id: '3',
    period: { ja: '2019/9 - 2019/11', en: 'Sep 2019 - Nov 2019' },
    title: {
      ja: '無一文オーストラリア一周旅',
      en: 'Hitchhiking Around Australia',
    },
  },
  {
    id: '4',
    period: { ja: '2019/12 - 2020/1', en: 'Dec 2019 - Jan 2020' },
    title: {
      ja: '無一文アメリカ横断旅',
      en: 'Hitchhiking Across the United States',
    },
  },
  {
    id: '5',
    period: { ja: '2020/1 - 2020/3', en: 'Jan 2020 - Mar 2020' },
    title: {
      ja: '無一文カナダ横断旅',
      en: 'Hitchhiking Across Canada',
    },
  },
  {
    id: '6',
    period: { ja: '2020/10 - 2023/3', en: 'Oct 2020 - Mar 2023' },
    title: {
      ja: '自転車日本一周旅',
      en: 'Cycling Around Japan',
    },
  },
  {
    id: '7',
    period: { ja: '2024/2 - 2025/2', en: 'Feb 2024 - Feb 2025' },
    title: {
      ja: '自転車ユーラシア大陸横断旅',
      en: 'Cycling Across Eurasia',
    },
  },
];
