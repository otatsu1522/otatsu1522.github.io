import photo from '../assets/images/equipment.jpg';
import type { SpecRow } from '../components/SpecTable.astro';

// 日本一周時点の装備リストは廃止し、こちらを「最新の装備」として一本化。
// カテゴリ名（label）は商品名から判断した目安なので、必要に応じて調整してください。
export const equipment = {
  photo,
  rows: [
    { label: { ja: 'テント', en: 'Tent' }, value: { ja: 'mont-bell ステラリッジテント1型', en: 'mont-bell Stella Ridge Tent 1' } },
    { label: { ja: 'マット', en: 'Sleeping Pad' }, value: { ja: 'NEMO スイッチバック レギュラー', en: 'NEMO Switchback Regular' } },
    { label: { ja: '寝袋', en: 'Sleeping Bag' }, value: { ja: 'NANGA スウェルバッグ 280', en: 'NANGA Swell Bag 280' } },
    { label: { ja: 'ビビィ', en: 'Bivy' }, value: { ja: 'OUTDOOR RESEARCH Helium Bivy', en: 'OUTDOOR RESEARCH Helium Bivy' } },
    { label: { ja: 'レインジャケット', en: 'Rain Jacket' }, value: { ja: 'HAGLOFS L.I.M VERSA JACKET Gore-Tex Paclite M', en: 'HAGLOFS L.I.M VERSA JACKET Gore-Tex Paclite M' } },
    { label: { ja: 'レインパンツ', en: 'Rain Pants' }, value: { ja: 'mont-bell バーサライトパンツ', en: 'mont-bell Versalite Pants' } },
    { label: { ja: 'Tシャツ', en: 'T-Shirt' }, value: { ja: 'Patagonia キャップリーンTシャツ', en: 'Patagonia Capilene T-Shirt' } },
    { label: { ja: 'ショーツ', en: 'Shorts' }, value: { ja: 'Patagonia バギーズショーツ 2019年 POBL', en: 'Patagonia Baggies Shorts (2019, POBL)' } },
    { label: { ja: 'キャップ', en: 'Cap' }, value: { ja: 'Patagonia キャップ', en: 'Patagonia Cap' } },
    { label: { ja: '防寒グローブ', en: 'Winter Gloves' }, value: { ja: 'SHOWA 防寒テムレス LL', en: 'SHOWA Temres (Winter) LL' } },
    { label: { ja: 'バフ', en: 'Buff' }, value: { ja: 'BUFF CREDEMCIAL MULTI', en: 'BUFF CREDEMCIAL MULTI' } },
    { label: { ja: 'ストーブ', en: 'Stove' }, value: { ja: 'MSR ウィスパーライト', en: 'MSR WhisperLite' } },
    { label: { ja: 'クッカー', en: 'Cookware' }, value: { ja: 'Snow Peak アルミパーソナルクッカー', en: 'Snow Peak Aluminum Personal Cooker' } },
    { label: { ja: 'バックパック', en: 'Backpack' }, value: { ja: 'VICTORINOX ラックサックNL', en: 'VICTORINOX Rucksack NL' } },
    { label: { ja: 'ナイフ', en: 'Knife' }, value: { ja: 'Morakniv basic 546', en: 'Morakniv Basic 546' } },
    { label: { ja: '浄水器', en: 'Water Filter' }, value: { ja: 'SAWYER ミニ セット SP101', en: 'SAWYER Mini Set SP101' } },
    { label: { ja: '腕時計', en: 'Watch' }, value: { ja: 'CASIO G-SHOCK G-5600E', en: 'CASIO G-SHOCK G-5600E' } },
    { label: { ja: 'スマートフォン', en: 'Smartphone' }, value: { ja: 'Pixel 5 128GB + PALLET Black', en: 'Pixel 5 128GB + PALLET Black' } },
    { label: { ja: 'モバイルバッテリー', en: 'Power Bank' }, value: { ja: 'Anker PowerCore 20100mAh red', en: 'Anker PowerCore 20100mAh red' } },
    { label: { ja: 'モバイルバッテリー', en: 'Power Bank' }, value: { ja: 'Anker PowerCore 10000mAh white', en: 'Anker PowerCore 10000mAh white' } },
    { label: { ja: 'モバイルバッテリー', en: 'Power Bank' }, value: { ja: 'Anker Fusion 5000mAh black', en: 'Anker Fusion 5000mAh black' } },
    { label: { ja: 'ソーラーパネル', en: 'Solar Panel' }, value: { ja: 'Anker PowerPort Solar 21W', en: 'Anker PowerPort Solar 21W' } },
    { label: { ja: 'カメラ', en: 'Camera' }, value: { ja: 'GoPro Hero 6', en: 'GoPro Hero 6' } },
    { label: { ja: 'ノートPC', en: 'Laptop' }, value: { ja: 'ThinkPad x1 carbon gen7', en: 'ThinkPad X1 Carbon Gen 7' } },
  ] as SpecRow[],
};
