---
title: "サンプルの記事です。"
summary: "個人ポートフォリオWebサイトのリポジトリです。自己紹介や旅の記録、装備一覧、ギャラリーなどのコンテンツを掲載しています。Astroを使用した静的サイト生成（SSG）により、高速なページロードと最適化されたアセット配信を実現しています。"
date: "2020-09-23"
cover: "./equipment.jpg"
---

# tabibito (otatsu1522.github.io)

個人ポートフォリオWebサイトのリポジトリです。自己紹介や旅の記録、装備一覧、ギャラリーなどのコンテンツを掲載しています。Astroを使用した静的サイト生成（SSG）により、高速なページロードと最適化されたアセット配信を実現しています。

---

## 特徴

- **高速な静的サイト生成**: Astroを利用したSSG構成
- **バイリンガル対応**: 日本語・英語の切り替えおよび表示機能
- **画像最適化**: ビルド時に `astro:assets` と Sharp を用いて `src/assets/images/` 配下の画像を WebP 形式へ自動変換・圧縮
- **レスポンシブデザイン**: Tailwind CSS v4 によるモバイル・PC双方に最適化したレイアウト
- **CI/CD自動化**: GitHub Actionsを用いた GitHub Pages への自動ビルド・デプロイ

---

## ディレクトリ構造

```text
.
├── .github/
│   └── workflows/          # GitHub Actions (デプロイワークフロー)
├── public/                 # 静的ファイル (Favicon)
├── src/
│   ├── assets/             # ビルド時に最適化されるアセット (画像)
│   │   └── images/
│   ├── components/         # Astroコンポーネント
│   ├── data/               # コンテンツデータ (TypeScript)
│   ├── pages/              # ページルーティング
│   ├── scripts/            # クライアントサイドスクリプト
│   └── styles/             # グローバルCSS
└── package.json
```

---

## 使用技術

| カテゴリ | ツール / ライブラリ | バージョン / 詳細 | 用途 |
| --- | --- | --- | --- |
| フレームワーク | [Astro](https://astro.build/) | v7.3.2 | 静的サイト生成（SSG） |
| スタイリング | [Tailwind CSS](https://tailwindcss.com/) | v4.3.3 (`@tailwindcss/vite`) | UIデザイン・レイアウト |
| 言語 | TypeScript | v5.7.3 | 型安全な開発環境 |
| Node管理 | fnm (Fast Node Manager) | - | Node.js バージョン管理 (`>=22.12.0`) |
| パッケージマネージャ | pnpm | v10.5.2 | 依存関係管理 |
| 画像最適化 | Sharp / `astro:assets`  | v0.35.4 | WebP変換・高解像度画像の圧縮処理 |
| コード整形・診断 | Prettier / `@astrojs/check` | v3.4.2 / v0.9.4 | Astro・Tailwind対応コード整形と型診断 |
| ホスティング | GitHub Pages | - | Webサイトの自動配信 |

---

## 環境構築

本プロジェクトの開発には **Node.js `>=22.12.0`** および **pnpm `10.5.2`** が必要です。
Node.jsのバージョン管理には `fnm`（Fast Node Manager）の使用を推奨します。

### 1. パッケージマネージャによるツールチェーンのインストール

#### Windows (Scoop)

PowerShellを開き、Scoop経由で `fnm` と `pnpm` をインストールします。

```powershell
scoop install fnm pnpm
```

`fnm` をシェルで自動有効化するため、PowerShellプロファイル（`$PROFILE`）に以下を追記します。

```powershell
fnm env --use-on-cd | Out-String | Invoke-Expression
```

#### macOS (Homebrew)

ターミナルを開き、Homebrew経由で `fnm` と `pnpm` をインストールします。

```bash
brew install fnm pnpm
```

`fnm` をシェルで自動有効化するため、設定ファイル（`~/.zshrc` または `~/.bashrc`）に以下を追記します。

```bash
eval "$(fnm env --use-on-cd)"
```

---

### 2. Node.js のセットアップ

リポジトリに必要な Node.js バージョンをインストールして切り替えます。

```bash
# Node.js 22.12.0 のインストールと適用
fnm install 22.12.0
fnm use 22.12.0
```

---

### 3. バージョン確認

正常に導入されたか各種バージョンを確認します。

```powershell
# fnm バージョン確認
fnm --version

# Node.js バージョンの確認（22.12.0 以上）
node -v

# pnpm バージョン確認（10.5.2）
pnpm -v
```

---

## 開発手順

### 1. 依存関係のインストール

```bash
pnpm install
```

### 2. ローカル開発サーバーの起動

```bash
pnpm dev
```

自動的に開発サーバーが起動し、 `http://localhost:4321` でアクセス可能になります。
`q + enter` でサーバーを終了できます。 ( `ctrl + c` で終了すると、衝突してフリーズする)

### 3. 型チェックとコード整形

```bash
# 型チェックとAstroコンポーネントの診断
pnpm check

# Prettierによるコード整形 (Astro / Tailwind プラグイン適用)
pnpm format

# 整形チェック（CI検証用）
pnpm format:check
```

### 4. ビルドとローカル確認

```bash
# 本番用ビルド（dist/ ディレクトリへ出力）
pnpm build

# ビルド成果物のローカルプレビュー
pnpm preview
```

---

## デプロイ

`main` ブランチへ変更を push すると、GitHub Actions（`.github/workflows/deploy.yml`）が自動でビルドおよび GitHub Pages へのデプロイを実行します。

- 公開URL: [https://otatsu1522.github.io](https://otatsu1522.github.io)

---

## ライセンス

[MIT License](LICENSE)
