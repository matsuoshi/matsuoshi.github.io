---
title: JISキーボードの Mac と 外付けUSキーボードと Karabiner Elements
date: 2022-06-22
tags: [mac, keyboard, application]
thumbnail: /images/2022/06/karabiner.png
---

キーボード絡みの話ばかりしてる気がしますが

# JISキーボードの Mac で、外付けUSキーボードを使いたい

のだけど、どうも設定がうまくいかない。いろいろググったけど解決してない。

## 環境

- M1 Macbook Air
- 内蔵キーボードは日本語（JIS)
- 外付け英語キーボード SK66
- [Karabiner-Elements](https://karabiner-elements.pqrs.org/) v14.4.0 を使用

この状態だと、外付けキーボードもJISと認識されてしまっている。たとえば shift + 2 を押すと `@` ではなく `"` が入力される。

## 試したこと

- Karabiner を起動していない状態だと、うまくいく
  - 内蔵キーボードは JISに、外付けキーボードは US としてちゃんと認識される
- Keyboard Setting Assistant の再設定
  - やってみたけど変わらず
- Karabiner-Elements の Country code の設定
  - なんかググって 0 とか 45 とか入れてみたけど、状況変わらず

## あきらめた

とりあえずいくつか試したけどあかんかったので、あきらめました。

いまは Karabiner-Elements で力技でキーマップを変更しています。設定用の jsonファイルはこんな感じ

https://gist.github.com/matsuoshi/1bdcddd795a3f0a90b9f3c104c289825

Appleのキーボードかそれ以外かで、JIS/US を判定するようにしています。具体的には `conditions` `type` `device_unless` `identifiers` `vendor_id` あたりを使用。

ダサい解決方法だけど、ひとまずはこれで…… もっとスマートに解決したいのだが……
