import photo from '../assets/images/bicycle/japan.jpg';
import type { SpecRow } from '../components/ui/SpecTable.astro';

// value（ブランド・型番など）はほぼ英数字表記のため、
// 特別な事情がない限り ja/en で同じ文字列を使っている。
export const bicycleJapan = {
  photo,
  rows: [
    { label: { ja: 'フレーム', en: 'Frame' }, value: { ja: 'ARAYA Federal 2020 540mm クロモリ', en: 'ARAYA Federal 2020 540mm Chromoly' } },
    { label: { ja: 'リム', en: 'Rim' }, value: { ja: 'ARAYA SP-30 36H 650A', en: 'ARAYA SP-30 36H 650A' } },
    { label: { ja: 'ハブ', en: 'Hub' }, value: { ja: 'SHIMANO TOURNEY TX TX500 36H', en: 'SHIMANO TOURNEY TX TX500 36H' } },
    { label: { ja: 'ブレーキ', en: 'Brake' }, value: { ja: 'SHIMANO 105 BR-CX50 カンチブレーキ', en: 'SHIMANO 105 BR-CX50 Cantilever' } },
    { label: { ja: 'シフター', en: 'Shifter' }, value: { ja: 'SHIMANO SORA SL-R400 8S Ｗレバー', en: 'SHIMANO SORA SL-R400 8S Down-Tube' } },
    { label: { ja: 'スプロケット', en: 'Sprocket' }, value: { ja: 'SHIMANO CLARIS CS-HG50 8S 11-32T', en: 'SHIMANO CLARIS CS-HG50 8S 11-32T' } },
    { label: { ja: 'リアディレイラー', en: 'Rear Derailleur' }, value: { ja: 'SHIMANO ALTUS RD-M310 8S', en: 'SHIMANO ALTUS RD-M310 8S' } },
    { label: { ja: 'チェーン', en: 'Chain' }, value: { ja: 'SHIMANO ALTUS CN-HG40 8S', en: 'SHIMANO ALTUS CN-HG40 8S' } },
    { label: { ja: 'ペダル', en: 'Pedals' }, value: { ja: 'MKS touring', en: 'MKS touring' } },
    { label: { ja: 'ブレーキレバー', en: 'Brake Lever' }, value: { ja: 'TEKTOLO', en: 'TEKTOLO' } },
    { label: { ja: 'クランクアーム', en: 'Crank Arm' }, value: { ja: 'SR SUNTOUR 175mm PCD104 4H', en: 'SR SUNTOUR 175mm PCD104 4H' } },
    { label: { ja: 'サドル', en: 'Saddle' }, value: { ja: 'Brooks', en: 'Brooks' } },
    { label: { ja: 'ステム', en: 'Stem' }, value: { ja: 'KALLOY 100mm 22.2mm 25.4mm スレッド', en: 'KALLOY 100mm 22.2mm 25.4mm Threaded' } },
    { label: { ja: 'チューブ', en: 'Tube' }, value: { ja: 'SCHWALBE DV12 650A 26x1-3/8', en: 'SCHWALBE DV12 650A 26x1-3/8' } },
    { label: { ja: 'タイヤ', en: 'Tire' }, value: { ja: 'SCHWALBE MARATHON 650A 26x1-3/8 37-590', en: 'SCHWALBE MARATHON 650A 26x1-3/8 37-590' } },
    { label: { ja: 'フロントキャリア', en: 'Front Carrier' }, value: { ja: 'minoura クロモリ', en: 'minoura Chromoly' } },
    { label: { ja: 'リアキャリア', en: 'Rear Carrier' }, value: { ja: 'topeak アルミ', en: 'topeak Aluminum' } },
  ] as SpecRow[],
};
