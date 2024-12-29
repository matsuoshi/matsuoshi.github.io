---
title: Google スプレッドシート内で、Google翻訳を使う
date: 2022-10-07
tags: [tools, english]
thumbnail: /images/2022/10/202210071157.png
noHeroImage: true
---

# Google スプレッドシート内で、テキストを 日本語 ←→ 英語などに翻訳したい

雑にシュッとできるんですね

Google スプレッドシートには、Google 翻訳を呼び出す関数があります、それが GOOGLETRANSLATE

ちょろっと書くだけで、スプシ内でテキストを自動で日英翻訳できて便利

## GOOGLETRANSLATE

```
=GOOGLETRANSLATE("Hello World", "en", "ja")
=GOOGLETRANSLATE(A1, "ja", "en")
```

こんな感じ

{{<figure src="/images/2022/10/google-translate.png">}}

### 公式ドキュメント

{{<link "https://support.google.com/docs/answer/3093331?hl=ja">}}
