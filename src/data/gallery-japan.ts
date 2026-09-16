// 自転車日本一周ギャラリー（src/assets/images/gallery/japan/）の各写真のキャプション。
// キーは画像のファイル名（拡張子込み）。フォルダに写真を追加しても、
// ここにキャプションを追加しない限りキャプション無し（空欄）で表示されるだけなので、
// 写真を増やすこと自体は自由に行える。
export const galleryJapanCaptions: Record<string, { ja: string; en: string }> = {
  'jp-01.jpg': { ja: '旅の始まり', en: 'The beginning of the journey' },
  'jp-02.jpg': { ja: '峠道にて', en: 'On a mountain pass' },
  'jp-03.jpg': { ja: '海沿いを走る', en: 'Riding along the coast' },
  'jp-04.jpg': { ja: 'キャンプの夜', en: 'A night of camping' },
  'jp-05.jpg': { ja: '地元の方との出会い', en: 'Meeting locals along the way' },
  'jp-06.jpg': { ja: 'ゴール地点', en: 'Reaching the goal' },
};
