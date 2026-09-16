import photo from '../assets/images/equipment/world.jpg';
import type { SpecRow } from './spec-row';

export const equipmentWorld = {
  photo,
  // 表の行数は自由に増減可能（配列に追加/削除するだけ。大量になっても崩れない構成）
  // TODO: 実際の装備に差し替えてください
  rows: [
    { label: { ja: 'テント', en: 'Tent' }, value: { ja: 'ブランド名 モデル名', en: 'Brand / Model' } },
    { label: { ja: '寝袋', en: 'Sleeping bag' }, value: { ja: 'ブランド名 モデル名', en: 'Brand / Model' } },
    { label: { ja: '浄水器', en: 'Water filter' }, value: { ja: 'ブランド名 モデル名', en: 'Brand / Model' } },
    { label: { ja: 'カメラ', en: 'Camera' }, value: { ja: 'ブランド名 モデル名', en: 'Brand / Model' } },
  ] as SpecRow[],
};
