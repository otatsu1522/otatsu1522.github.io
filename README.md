# Portfolio

リンクページとポートフォリオサイト


## 使用技術

| 用途 | ツール |
| --- | --- |
| フレームワーク | [Astro](https://astro.build/) v7（静的サイト生成） |
| スタイリング | [Tailwind CSS v4](https://tailwindcss.com/)（`@tailwindcss/vite` 経由） |
| 言語 | TypeScript（`astro/tsconfigs/strict` を継承） |
| 画像最適化 | `astro:assets`（`<Image />`）。`src/assets/images/` 配下の画像をビルド時にwebp変換・圧縮 |
| パッケージマネージャ | pnpm（`pnpm-workspace.yaml` あり） |
| 型チェック | `@astrojs/check` + `typescript`（`astro check`） |
| コード整形 | Prettier + `prettier-plugin-astro` + `prettier-plugin-tailwindcss` |
| デプロイ | GitHub Actions → GitHub Pages（`.github/workflows/deploy.yml`） |

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

## コンテンツ・文言の編集場所

コードを触らずに更新できるよう、テキストは2つのデータファイルに集約している。

- `src/data/profile.ts` … プロフィール・自己紹介・旅歴・SNS・再生リストなどの**コンテンツ**
- `src/data/site.ts` … ボタンラベルや見出しの飾り文字、コピーライトなどの**UI固定文言**

画像は以下の場所に置く（`<Image />` で自動的にwebp変換・最適化される）。

- `src/assets/images/profile.jpg` … プロフィール写真（`/` と `/portfolio` の両方で使用）
- `src/assets/images/gallery/*.{jpg,jpeg,png,webp}` … ギャラリーセクションの画像。ファイルを追加/削除するだけで自動的に反映される（コード変更不要）
- `public/ogp.jpg`（推奨 1200×630px）… SNSシェア時のOGP画像。こちらは最適化せずそのまま配信したいので `public/` に置く
- `public/audio/background.mp3` … BGM
- `public/favicon.svg`

## キーボード操作（`/portfolio`）

| キー | 動作 |
| --- | --- |
| `j` | 前の画面へ |
| `k` | 次の画面へ |
| `m` | BGMの再生/停止 |

## デプロイ（GitHub Pages）

`.github/workflows/deploy.yml` が `main` ブランチへのpushで自動ビルド・デプロイする。事前に以下を確認すること。

- リポジトリの **Settings → Pages → Build and deployment → Source** を `GitHub Actions` にする（`Deploy from a branch` のままだと動かない）
- `pnpm-lock.yaml` をコミットする（ロックファイルが無いとpackage-managerを自動検出できずactionが失敗する）
- `astro.config.mjs` の `site` をデプロイ先のURLに合わせる（現状 `https://otatsu1522.github.io` = ユーザーページ想定。リポジトリ名を変えたプロジェクトページにする場合は `base` の追加が必要）
