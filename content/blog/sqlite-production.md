---
title: "SQLite を本番データベースとして使う"
date: "2025-04-12"
tags: ["backend", "database"]
description: "Turso や Cloudflare D1 など、エッジで動く SQLite の選択肢を整理。"
---

SQLite はかつてプロトタイプ向けのデータベースとして扱われていましたが、Turso や Cloudflare D1 の登場で本番利用の選択肢として現実的になってきました。

## Turso の特徴

Turso は libSQL をベースにしており、エッジロケーションへのレプリケーションをサポートします。

```bash
turso db create my-db
turso db shell my-db
```

## Cloudflare D1

D1 は Cloudflare Workers と深く統合されており、Workers から直接 SQLite クエリを実行できます。
