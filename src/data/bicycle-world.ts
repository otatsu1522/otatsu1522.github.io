import photo from '../assets/images/bicycle/world.jpg';
import type { SpecRow } from '../components/SpecTable.astro';

// value（ブランド・型番など）はほぼ英数字表記のため、
// 特別な事情がない限り ja/en で同じ文字列を使っている。
export const bicycleWorld = {
  photo,
  rows: [
    { label: { ja: 'フレーム', en: 'Frame' }, value: { ja: 'MARIN MUIRWOODS 26 17 2012', en: 'MARIN MUIRWOODS 26 17 2012' } },
    { label: { ja: 'リム', en: 'Rim' }, value: { ja: 'ARAYA RM395 TEAM XC 26 32H', en: 'ARAYA RM395 TEAM XC 26 32H' } },
    { label: { ja: 'ハブ', en: 'Hub' }, value: { ja: 'SHIMANO DEORE XT HB-738', en: 'SHIMANO DEORE XT HB-738' } },
    { label: { ja: 'ブレーキレバー', en: 'Brake Lever' }, value: { ja: 'SHIMANO ALIVIO BL-T4000', en: 'SHIMANO ALIVIO BL-T4000' } },
    { label: { ja: 'シフター', en: 'Shifter' }, value: { ja: 'SHIMANO ALIVIO SL-M410', en: 'SHIMANO ALIVIO SL-M410' } },
    { label: { ja: 'クランク', en: 'Crank' }, value: { ja: 'SHIMANO ALIVIO FC-T4060 3S 44-32-22T', en: 'SHIMANO ALIVIO FC-T4060 3S 44-32-22T' } },
    { label: { ja: 'リアディレイラー', en: 'Rear Derailleur' }, value: { ja: 'SHIMANO ALIVIO RD-M410', en: 'SHIMANO ALIVIO RD-M410' } },
    { label: { ja: 'フロントディレイラー', en: 'Front Derailleur' }, value: { ja: 'SHIMANO ALUTUS FD-M191', en: 'SHIMANO ALUTUS FD-M191' } },
    { label: { ja: 'ボトムブラケット', en: 'Bottom Bracket' }, value: { ja: 'SHIMANO DEORE BB-MT501', en: 'SHIMANO DEORE BB-MT501' } },
    { label: { ja: 'Vブレーキ', en: 'V-Brake' }, value: { ja: 'SHIMANO DEORE XT BR-M739', en: 'SHIMANO DEORE XT BR-M739' } },
    { label: { ja: 'スプロケット', en: 'Sprocket' }, value: { ja: 'SHIMANO ACERA CS-HG41 8S 11-30T', en: 'SHIMANO ACERA CS-HG41 8S 11-30T' } },
    { label: { ja: 'チェーン', en: 'Chain' }, value: { ja: 'SHIMANO CN-HG50 8S', en: 'SHIMANO CN-HG50 8S' } },
    { label: { ja: 'サドル', en: 'Saddle' }, value: { ja: 'BROOKS Cambium Natural', en: 'BROOKS Cambium Natural' } },
    { label: { ja: 'ペダル', en: 'Pedals' }, value: { ja: 'MKS SYLVAN TOURING', en: 'MKS SYLVAN TOURING' } },
    { label: { ja: 'ハンドル', en: 'Handlebar' }, value: { ja: 'BBB MultiBar BHB-30', en: 'BBB MultiBar BHB-30' } },
    { label: { ja: 'ステム', en: 'Stem' }, value: { ja: 'SHIMANO PLT 120mm 6 31.8', en: 'SHIMANO PLT 120mm 6 31.8' } },
    { label: { ja: 'シートポスト', en: 'Seatpost' }, value: { ja: 'KALLOY SP-243 27.2mm 300mm', en: 'KALLOY SP-243 27.2mm 300mm' } },
    { label: { ja: 'バーテープ', en: 'Bar Tape' }, value: { ja: '帆布', en: 'Canvas' } },
    { label: { ja: 'タイヤ', en: 'Tire' }, value: { ja: 'SCHWALBE MARATHON PLUS 26 × 1.50', en: 'SCHWALBE MARATHON PLUS 26 × 1.50' } },
    { label: { ja: 'チューブ', en: 'Tube' }, value: { ja: 'SCHWALBE 26 SV12A 40mm', en: 'SCHWALBE 26 SV12A 40mm' } },
    { label: { ja: 'フロントキャリア', en: 'Front Carrier' }, value: { ja: 'TUBUS Tara', en: 'TUBUS Tara' } },
    { label: { ja: 'リアキャリア', en: 'Rear Carrier' }, value: { ja: 'TUBUS Logo Classic', en: 'TUBUS Logo Classic' } },
  ] as SpecRow[],
};
