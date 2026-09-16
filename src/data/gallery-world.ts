// 自転車世界一周ギャラリー（src/assets/images/gallery/world/）の各写真のキャプション。
// キーは画像のファイル名（拡張子込み）。フォルダに写真を追加しても、
// ここにキャプションを追加しない限りキャプション無し（空欄）で表示されるだけなので、
// 写真を増やすこと自体は自由に行える。
export const galleryWorldCaptions: Record<string, { ja: string; en: string }> = {
  'wd-01.jpg': { ja: 'ユーラシア大陸へ', en: 'Setting off across Eurasia' },
  'wd-02.jpg': { ja: '国境を越えて', en: 'Crossing a border' },
  'wd-03.jpg': { ja: '砂漠のキャンプ', en: 'Camping in the desert' },
  'wd-04.jpg': { ja: '現地の市場にて', en: 'At a local market' },
  'wd-05.jpg': { ja: '雪山を望む', en: 'A view of snow-capped mountains' },
  'wd-06.jpg': { ja: '次の国境へ', en: 'Heading to the next border' },
};
