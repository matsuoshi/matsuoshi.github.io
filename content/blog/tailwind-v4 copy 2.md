---
title: "Tailwind CSS v4 の新しいアーキテクチャ"
date: "2025-04-30"
tags: ["CSS", "Tailwind"]
description: "CSS-first 設定ファイルと Vite プラグイン移行をまとめます。"
---

Tailwind CSS v4 では、設定が `tailwind.config.js` から CSS-first な方式に移行しました。ビルドエンジンが Rust ベースに刷新され、速度が大幅に向上しています。

## CSS-first 設定

従来の JavaScript 設定ファイルに代わり、CSS ファイル内でテーマを定義します。

```css
@import "tailwindcss";

@theme {
  --color-brand: oklch(60% 0.2 250);
  --font-display: "DM Sans", sans-serif;
}
```

## Vite プラグインとの統合

Vite プラグインとの統合がよりシームレスになり、設定の重複が減りました。
