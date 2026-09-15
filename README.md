# Portfolio

自転車で世界を旅するトラベラー「旅人おたつ」のポートフォリオ / リンク集サイト。

- `/` … SNSリンクとポートフォリオへの導線をまとめたリンク集（いわゆる「リンクツリー」的ページ）
- `/home` … フルスクリーン・スクロールスナップ形式のポートフォリオ本体（自己紹介・旅歴・動画・SNS・メッセージ）

## 使用技術

| 用途 | ツール |
| --- | --- |
| フレームワーク | [Astro](https://astro.build/) v7（静的サイト生成） |
| スタイリング | [Tailwind CSS v4](https://tailwindcss.com/)（`@tailwindcss/vite` 経由） |
| 言語 | TypeScript（`astro/tsconfigs/strict` を継承） |
| アイコン | `lucide-astro`（※現状のコードからは未使用。使う予定がなければ依存関係から外して問題ありません） |
| パッケージマネージャ | pnpm（`pnpm-workspace.yaml` あり） |
| 型チェック | `@astrojs/check` + `typescript`（`astro check`） |
| コード整形 | Prettier + `prettier-plugin-astro` + `prettier-plugin-tailwindcss` |

多言語対応（日本語⇄英語）はAstroの国際化ルーティングではなく、**ページ内の全要素を両方レンダリングしておき、JSでどちらかを `hidden` にするクライアントサイド切り替え方式**です（`LanguageSwitcher.astro` が `.js-ja` / `.js-en` の表示を切り替えます）。SEO上は日本語のみが正規コンテンツとして評価されやすい点は留意してください。

## セットアップ

```bash
pnpm install
```

Node.js `>=22.12.0` が必要です（`package.json` の `engines` を参照）。

## 開発の流れ

```bash
pnpm dev        # 開発サーバー起動 (http://localhost:4321)
pnpm check      # astro check による型チェック・診断
pnpm format     # Prettierで整形（保存）
pnpm format:check  # 整形が崩れていないかCIなどで確認する用
pnpm build      # 本番ビルド (dist/ に出力)
pnpm preview    # ビルド結果をローカルでプレビュー
```

推奨フロー：

1. `pnpm dev` で開発
2. コミット前に `pnpm format` → `pnpm check` を実行し、型エラー・フォーマット崩れがない状態にする
3. `pnpm build` が通ることを確認してからPR/デプロイ

## ディレクトリ構成

```
src/
  pages/
    index.astro     # トップ（リンク集）ページ
    home.astro       # ポートフォリオ本体（6セクション・スクロールスナップ）
  components/
    Layout.astro         # 全ページ共通の <html>/<head>/<body> ラッパー
    SectionHeading.astro # 「アイキャッチ + 日英見出し」の共通パーツ
    Bilingual.astro       # 日英切替スパンの共通パーツ (.js-ja / .js-en)
    LinkButton.astro      # 白背景/黒背景に対応したリンクボタン共通パーツ
    SquareBackground.astro # 背景のアニメーション付き四角形（Canvas）
    CursorTrail.astro     # カーソル追従の残像エフェクト（デスクトップのみ）
    LanguageSwitcher.astro # 右上の JA/EN 切替ボタン
    TopButton.astro       # 左上の「← TOP」ボタン（/ に戻る）
    MusicPlayer.astro     # 右下のBGM再生ボタン（Web Audio APIで波形表示）
  data/
    profile.ts       # サイト全体のコンテンツ（プロフィール・旅歴・SNS・再生リスト等）
  scripts/
    scrollTheme.ts    # スクロール位置からダーク/ライトを判定し、
                       # スクロールバーの色切替 & 'theme-change' イベント発火
  styles/
    global.css        # Tailwindの読み込み + スクロールバーのカスタムスタイル
astro.config.mjs
package.json
tsconfig.json
```

## このリファクタで直した点（メモ）

コード全体の見直しの中で、以下の実質的な不具合・無駄を修正しています。

- **`CursorTrail.astro` の設定値バグ**：フロントマターとスクリプト内で同名定数が別の値で二重定義されており、実際に効いていたのはスクリプト側の値のみでした。`SquareBackground.astro` と同じ「`data-config` 属性で設定を一元化する」方式に統一しました。
- **`astro:page-load` のデッドコード**：このサイトはAstroの `<ClientRouter />`（クライアントサイド遷移）を使っていないため、`astro:page-load` リスナーは一度も発火していませんでした。削除済み。将来 View Transitions を入れる場合は `scrollTheme.ts` / `SquareBackground.astro` にリスナーを追加してください。
- **`IntersectionObserver` の二重監視**：`scrollTheme.ts` と `LanguageSwitcher.astro` が同じ内容の監視をそれぞれ独自に行っていたのを、`scrollTheme.ts` 側に一本化し `theme-change` カスタムイベントで通知する形に統一しました。
- **`home.astro` 内のYouTube連携スクリプトの空処理**：何もしない分岐を削除し、実際に機能している `CustomEvent('stop-bgm')` の通知のみ残しました。
- **`index.astro` / `home.astro` の `<head>` 重複**：`Layout.astro` に共通化。OGP用の `description` メタタグも追加しています。
- **繰り返しパターンの部品化**：日英切替スパン・セクション見出し・リンクボタンをそれぞれ `Bilingual.astro` / `SectionHeading.astro` / `LinkButton.astro` に切り出しました。
- **`home.astro` のスマホ表示対策**：自己紹介／旅歴セクションは `h-screen` 固定＆スクロールスナップのため、小さい画面高の端末でコンテンツがあふれた場合に見切れる可能性があったので、その2セクションに `overflow-y-auto` を追加しています。

## 今後の改善候補（未実施・提案のみ）

必要に応じて検討してください（依存関係の追加が伴うため、今回のリファクタでは実装していません）。

- `@astrojs/sitemap` の導入（`astro.config.mjs` に `site` を設定済みなので追加しやすい状態にしてあります）
- OGP画像（`og:image`）の追加
- `<img>` を Astro の `astro:assets` の `<Image />` に置き換えて画像を自動最適化（現状は `public/images/profile.jpg` を素の `<img>` で参照）
- `lucide-astro` が未使用であれば依存関係から削除（使う予定があれば逆に使用箇所を追加）
- Astro公式インテグレーションとしての国際化ルーティング（`i18n`設定）への移行（現状はクライアントサイド切替のみ）

## 注意事項

- `public/images/profile.jpg`, `public/favicon.svg`, `public/audio/background.mp3` は本リポジトリのアップロード対象に含まれていなかったため、zip内には含まれていません。既存の `public/` フォルダに配置してください。
- 音楽の自動再生（`MusicPlayer.astro` の `window.addEventListener('load', ...)` 内の `bgm.play()`）は、多くのブラウザの自動再生ポリシーによりユーザー操作なしでは失敗します（コード側で失敗を握りつぶして正常に手動再生ボタンにフォールバックする作りになっているため、動作上の問題はありません）。
