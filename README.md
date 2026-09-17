# Portfolio

ポートフォリオサイト

## 使用技術

| 用途 | ツール |
| --- | --- |
| フレームワーク | [Astro](https://astro.build/) v7（静的サイト生成） |
| スタイリング | [Tailwind CSS v4](https://tailwindcss.com/)（`@tailwindcss/vite` 経由） |
| 言語 | TypeScript（`astro/tsconfigs/strict` を継承） |
| 画像最適化 | `src/assets/images/` 配下の画像をビルド時にwebp変換・圧縮 |
| パッケージマネージャ | pnpm（`pnpm-workspace.yaml` ） |
| 型チェック | `@astrojs/check` + `typescript`（`astro check`） |
| コード整形 | Prettier + `prettier-plugin-astro` + `prettier-plugin-tailwindcss` |
| デプロイ | GitHub Actions → GitHub Pages（`.github/workflows/deploy.yml`） |

## セットアップ

```bash
pnpm install
```

Node.js `>=22.12.0` が必要です（`package.json` の `engines` を参照）。

## 開発の流れ

```bash
pnpm dev           # 開発サーバー起動 (http://localhost:4321)
pnpm check         # astro check による型チェック・診断
pnpm format        # Prettierで整形（保存）
pnpm format:check  # 整形が崩れていないかCIなどで確認する用
pnpm build         # 本番ビルド (dist/ に出力)
pnpm preview       # ビルド結果をローカルでプレビュー
```


## デプロイ

- GitHub Pagesで公開する。（ `.github/workflows/deploy.yml` が `main` ブランチへのpushで自動ビルド・デプロイする。）
- 公開URL: [https://otatsu1522.github.io](https://otatsu1522.github.io)]

## ライセンス

[MIT LICENSE](LICENSE)
