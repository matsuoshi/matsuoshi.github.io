---
title: "Astro 5.0 で Islands Architecture を理解する"
date: "2025-05-18"
tags: ["Astro", "frontend"]
description: "Islands Architecture がどう動くか、コード例とともに解説します。"
---

Astro の Islands Architecture は、ページの大部分を静的 HTML として配信しつつ、インタラクティブな「島」だけを hydrate する設計です。従来の SPA と根本的に異なるのは、JavaScript をデフォルトで送らない点にあります。

## なぜ Islands なのか

従来の SPA では全てをクライアントで描画していましたが、Islands では必要な部分だけを hydrate することで TTI を大幅に改善できます。ページの 90% が静的であれば、送る JS も 90% 削れます。

```astro
---
import Counter from '../components/Counter.jsx';
---
<Counter client:load />
```

`client:load` を使うことで、その島だけがブラウザ上でアクティブになります。他にも `client:idle` や `client:visible` など、タイミングを制御するオプションがあります。

## まとめ

Islands Architecture は「必要なところだけ JS を使う」という原則を徹底することで、静的サイトの速度と動的サイトの柔軟性を両立します。
