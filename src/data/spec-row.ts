// 自転車スペック表・装備リストなど、SpecTable.astro に渡す行データの共通の型。
export interface SpecRow {
  label: { ja: string; en: string };
  value: { ja: string; en: string };
}
