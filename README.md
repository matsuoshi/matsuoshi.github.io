# my.blog — Hugo + Tailwind CSS

ミニマル・テック系デザインのブログテンプレートです。

## 必要なもの

- [Hugo](https://gohugo.io/installation/) (extended版推奨)
- Node.js / npm (Tailwind CSS のビルドに使用)

## セットアップ

```bash
npm install
npm run dev     # Hugo dev server + Tailwind watch を同時起動
```

## ビルド

```bash
npm run build   # CSS minify → Hugo build
```

出力は `public/` ディレクトリに生成されます。

## ディレクトリ構成

```
hugo-blog/
├── assets/css/main.css        # Tailwind エントリポイント・CSS変数
├── content/
│   ├── about.md               # Aboutページ
│   └── blog/                  # 記事ファイル（Markdown）
├── layouts/
│   ├── _default/
│   │   ├── baseof.html        # 共通レイアウト
│   │   ├── single.html        # 記事詳細
│   │   ├── list.html          # 記事一覧
│   │   └── taxonomy.html      # タグ絞り込み
│   ├── index.html             # トップページ
│   ├── page/about.html        # Aboutレイアウト
│   └── partials/
│       ├── header.html        # ヘッダー（ダークモード切替含む）
│       ├── footer.html        # フッター（SNSアイコン）
│       ├── article-card.html  # 記事カード
│       ├── tag-list.html      # タグ一覧
│       └── pagination.html    # ページネーション
├── static/
│   ├── css/style.css          # Tailwind ビルド出力（自動生成）
│   └── favicon.svg
├── archetypes/blog.md         # 新規記事テンプレート
├── hugo.toml                  # Hugo 設定
├── tailwind.config.js
└── package.json
```

## 記事の追加

```bash
# コマンドで雛形生成
hugo new blog/my-new-post.md

# または手動で content/blog/ に Markdown を追加
```

フロントマター例：

```yaml
---
title: "記事タイトル"
date: "2025-06-01"
tags: ["Astro", "frontend"]
description: "記事の説明"
thumbnail: "/images/my-thumb.jpg"   # 省略可
thumbnailAlt: "サムネイルの説明"
---
```

サムネイル画像は `static/images/` に置いてください。

## ダークモード

ヘッダーのボタンで切り替え。`localStorage` に保存され、OS設定に合わせた初期値が自動適用されます。

## ページネーション

`hugo.toml` の `paginate = 6` で1ページあたりの記事数を変更できます。
