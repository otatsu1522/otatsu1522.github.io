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
    title: { ja: 'ヒッチハイクで日本一周旅をする', en: 'Hitchhiking Around Japan' },
  },
  {
    id: '2',
    period: { ja: '2018年9月 ~ 2019年9月', en: 'Sep 2018 - Sep 2019' },
    title: { ja: 'ニュージーランドでワーキングホリデーをする', en: 'Working Holiday in New Zealand' },
  },
  {
    id: '3',
    period: { ja: '2019年9月 ~ 2019年11月', en: 'Sep 2019 - Nov 2019' },
    title: { ja: '無一文でオーストラリア一周をする', en: 'Penniless Australia Trip' },
  },
  {
    id: '4',
    period: { ja: '2019年12月 ~ 2020年1月', en: 'Dec 2019 - Jan 2020' },
    title: { ja: '無一文でアメリカ横断をする', en: 'Penniless US Coast-to-Coast' },
  },
  {
    id: '5',
    period: { ja: '2020年1月 ~ 2020年3月', en: 'Jan 2020 - Mar 2020' },
    title: { ja: '無一文でカナダ横断をする', en: 'Penniless Canada Crossing' },
  },
  {
    id: '6',
    period: { ja: '2020年10月 ~ 2023年3月', en: 'Oct-Dec 2020 / Oct 2022-Mar 2023' },
    title: { ja: '自転車で日本一周をする', en: 'Cycling Around Japan' },
  },
  {
    id: '7',
    period: { ja: '2024年2月 ~', en: 'Feb 21, 2024 - Present' },
    title: { ja: '自転車で世界一周へ', en: 'Cycling Around the World' },
  },
];
