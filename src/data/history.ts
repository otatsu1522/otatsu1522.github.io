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
    title: { ja: 'ニュージーランドでゼロ円ワーホリ', en: 'Working Holiday in New Zealand' },
  },
  {
    id: '3',
    period: { ja: '2019年9月 ~ 2019年11月', en: 'Sep 2019 - Nov 2019' },
    title: { ja: '無一文オーストラリア一周旅', en: 'Penniless Australia Trip' },
  },
  {
    id: '4',
    period: { ja: '2019年12月 ~ 2020年1月', en: 'Dec 2019 - Jan 2020' },
    title: { ja: '無一文アメリカ横断旅', en: 'Penniless US Coast-to-Coast' },
  },
  {
    id: '5',
    period: { ja: '2020年1月 ~ 2020年3月', en: 'Jan 2020 - Mar 2020' },
    title: { ja: '無一文カナダ横断旅', en: 'Penniless Canada Crossing' },
  },
  {
    id: '6',
    period: { ja: '2020年10月 ~ 2023年3月', en: 'Oct-Dec 2020 / Oct 2022-Mar 2023' },
    title: { ja: '自転車日本一周旅', en: 'Cycling Around Japan' },
  },
  {
    id: '7',
    period: { ja: '2024年2月 ~', en: 'Feb 21, 2024 - Present' },
    title: { ja: '自転車世界一周旅', en: 'Cycling Around the World' },
  },
];
