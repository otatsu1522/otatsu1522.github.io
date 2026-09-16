import photo from '../assets/images/bicycle/world.jpg';
import type { SpecRow } from './spec-row';

export const bicycleWorld = {
  photo,
  // 表の行数は自由に増減可能（配列に追加/削除するだけ）
  // TODO: 実際のスペックに差し替えてください
  rows: [
    { label: { ja: 'フレーム', en: 'Frame' }, value: { ja: 'ブランド名 モデル名', en: 'Brand / Model' } },
    { label: { ja: 'タイヤ', en: 'Tires' }, value: { ja: 'ブランド名 モデル名', en: 'Brand / Model' } },
    { label: { ja: 'コンポーネント', en: 'Components' }, value: { ja: 'ブランド名 モデル名', en: 'Brand / Model' } },
    { label: { ja: 'バッグ', en: 'Bags' }, value: { ja: 'ブランド名 モデル名', en: 'Brand / Model' } },
  ] as SpecRow[],
};
