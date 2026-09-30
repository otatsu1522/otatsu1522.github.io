# otatsu1522.github.io

個人ポートフォリオWebサイトのリポジトリです。自己紹介、旅の記録、装備、SNS、ギャラリーなどのコンテンツを掲載しています。

Astroを使用した静的サイト生成（SSG）により、不要なクライアントサイド処理を抑えながら、高速なページロードと最適化されたアセット配信を実現しています。

---

## 特徴

* **静的サイト生成**: AstroによるSSG構成
* **バイリンガル対応**: 日本語・英語の切り替えに対応
* **コンテンツ管理**: Astro Content CollectionsによるJourney・Postの管理
* **記事ナビゲーション**: Journey・Postの詳細ページに前後の記事へのリンクを表示
* **画像最適化**: `astro:assets` と Sharp による画像の最適化
* **レスポンシブデザイン**: Tailwind CSS v4によるモバイル・PC対応
* **共通コンポーネント**: セクション見出し、MOREリンク、記事カードなどを共通化
* **CI/CD自動化**: GitHub Actionsによるチェック・ビルド・GitHub Pagesへの自動デプロイ
* **サイトマップ生成**: `@astrojs/sitemap` によるサイトマップ生成

---

## ディレクトリ構造

```text
.
├── .github/
│   └── workflows/          # GitHub Actions
├── public/                 # 静的ファイル
├── src/                    # ソースコード
│   ├── assets/             # 画像などのアセット
│   ├── components/         # Astroコンポーネント
│   │   └── common/         # 共通コンポーネント
│   ├── content/            # Journey・Postなどの記事コンテンツ
│   ├── data/               # サイト設定・表示文言・各種データ
│   ├── layouts/            # ページ全体のレイアウト
│   ├── pages/              # ページルーティング
│   │   ├── journeys/       # Journey関連ページ
│   │   └── posts/          # Post関連ページ
│   ├── scripts/            # クライアントサイドスクリプト
│   ├── styles/             # グローバルCSS
│   └── utils/              # 共通ユーティリティ
└── package.json
```

---

## 使用技術

| カテゴリ              | ツール / ライブラリ                              | バージョン / 詳細  | 用途                    |
| ----------------- | ---------------------------------------- | ----------- | --------------------- |
| フレームワーク           | [Astro](https://astro.build/)            | `^7.3.2`    | 静的サイト生成（SSG）          |
| スタイリング            | [Tailwind CSS](https://tailwindcss.com/) | `^4.3.3`    | UIデザイン・レイアウト          |
| Tailwind連携        | `@tailwindcss/vite`                      | `^4.3.3`    | Vite経由のTailwind CSS統合 |
| 言語                | TypeScript                               | `^5.7.3`    | 型安全な開発環境              |
| Node管理            | fnm                                      | -           | Node.jsバージョン管理        |
| Node.js           | Node.js                                  | `>=22.12.0` | 実行環境                  |
| パッケージマネージャ        | pnpm                                     | `10.5.2`    | 依存関係管理                |
| 画像最適化             | Sharp                                    | `^0.35.4`   | 画像処理・最適化              |
| Astro画像処理         | `astro:assets`                           | Astro内蔵     | 画像最適化・変換              |
| 型チェック             | `@astrojs/check`                         | `^0.9.4`    | Astro・TypeScriptの診断   |
| コード整形             | Prettier                                 | `^3.4.2`    | コード整形・フォーマットチェック      |
| Astro用Prettier    | `prettier-plugin-astro`                  | `^0.14.1`   | `.astro` ファイルの整形      |
| Tailwind用Prettier | `prettier-plugin-tailwindcss`            | `^0.6.11`   | Tailwindクラスの整形        |
| サイトマップ            | `@astrojs/sitemap`                       | `^3.7.4`    | サイトマップ生成              |
| アイコン              | `astro-icon`                             | `^1.2.0`    | アイコン表示                |
| アイコンセット           | `@iconify-json/simple-icons`             | `^1.2.97`   | SNSなどのSimple Icons    |
| ホスティング            | GitHub Pages                             | -           | Webサイトの公開・配信          |

---

## コンテンツ構成

記事コンテンツはAstro Content Collectionsで管理しています。

```text
src/content/
├── journeys/      # 旅に関するコンテンツ
└── posts/         # 通常の記事・更新情報
```

各コンテンツはMarkdownで管理し、画像などの関連ファイルを記事ごとのディレクトリに配置できます。

```text
src/content/journeys/
└── example/
    ├── example.md
    └── image.jpg
```

Journey・Postには公開状態、タイトル、日付、概要、カバー画像などのメタデータを設定します。

---

## 多言語対応

サイトは日本語・英語の表示に対応しています。

UIの文言は `src/data/ui.ts`、サイト設定やコンテンツに関するデータは `src/data/` で管理しています。

記事の言語切り替えについては、コンテンツの構成に応じて日本語・英語を切り替え、英語版が用意されていない場合は日本語版を利用できる構成を想定しています。

---

## 環境構築

本プロジェクトの開発には **Node.js `>=22.12.0`** および **pnpm `10.5.2`** が必要です。

Node.jsのバージョン管理には **fnm (Fast Node Manager)** の使用を推奨します。

### 1. ツールチェーンのインストール

#### Windows (Scoop)

PowerShellを開き、Scoop経由で `fnm` と `pnpm` をインストールします。

```powershell
scoop install fnm pnpm
```

`fnm` をシェルで自動有効化する場合は、PowerShellプロファイル（`$PROFILE`）に以下を追加します。

```powershell
fnm env --use-on-cd | Out-String | Invoke-Expression
```

#### macOS (Homebrew)

ターミナルを開き、Homebrew経由で `fnm` と `pnpm` をインストールします。

```bash
brew install fnm pnpm
```

`fnm` をシェルで自動有効化する場合は、`~/.zshrc` または `~/.bashrc` に以下を追加します。

```bash
eval "$(fnm env --use-on-cd)"
```

---

### 2. Node.jsのセットアップ

必要なNode.jsバージョンをインストールして切り替えます。

```bash
fnm install 22.12.0
fnm use 22.12.0
```

---

### 3. バージョン確認

```powershell
# fnm
fnm --version

# Node.js
node -v

# pnpm
pnpm -v
```

確認するバージョン：

```text
Node.js  22.12.0以上
pnpm     10.5.2
```

---

## 開発手順

### 1. 依存関係のインストール

```bash
pnpm install
```

### 2. ローカル開発サーバー

```bash
pnpm dev
```

ブラウザから以下へアクセスします。

```text
http://localhost:4321
```

開発サーバーの終了は `q + Enter` を使用します。

---

## チェック・フォーマット

### Astro / TypeScriptのチェック

```bash
pnpm check
```

`astro check` を実行し、AstroコンポーネントやTypeScriptの問題を確認します。

### コード整形

```bash
pnpm format
```

Prettierでプロジェクト全体を整形します。

### フォーマットチェック

```bash
pnpm format:check
```

コードを変更せず、Prettierによるフォーマット違反のみを確認します。

---

## ビルド

### 本番ビルド

```bash
pnpm build
```

本番用ファイルを `dist/` に生成します。

### ローカルプレビュー

```bash
pnpm preview
```

ビルド済みのサイトをローカルで確認します。

---

## GitHub Actions

`main` ブランチへ変更をpushすると、GitHub Actionsによって以下の処理が実行されます。

```text
push
 ↓
依存関係のインストール
 ↓
Astro / TypeScriptチェック
 ↓
Prettierチェック
 ↓
本番ビルド
 ↓
GitHub Pagesへデプロイ
```

Workflow:

```text
.github/workflows/deploy.yml
```

---

## デプロイ

`main` ブランチへのpushをトリガーとしてGitHub Pagesへ自動デプロイします。

公開URL:

https://otatsu1522.github.io

---

## ライセンス

[MIT License](LICENSE)
