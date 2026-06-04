---
title: CSSでコードゴルフをする CSS Battle
date: 2024-02-08T09:00:00+09:00
tags: [css, web]
layout: redirect
redirectTo: https://matsuoshi.hatenablog.com/entry/2024/02/12/000000
---

## CSS Battle とは

{{<link "https://cssbattle.dev/">}}

お題となるデザインがありまして、それを HTML と CSS でピクセルパーフェクトに再現しましょう、できるだけ短いコード量で！！！ という参加型バトルサイト

いろんなお題があります

{{<figure src="/images/2024/02/css-battle-1.png">}}

こんなデザインを、画像とかSVGとか使わずに HTMLとCSSだけで再現していこうというやつ。そしてコードの字数の少なさを競う

ちょっとトライしてみた

## battle 1

{{<link "https://cssbattle.dev/play/1">}}

{{<figure src="/images/2024/02/css-battle-2.png">}}

このデザインを再現すればOK

サイト内 左側のエディタにHTMLとCSSを書いて、右に表示されているお手本どおりに作っていく。カラーコードはお手本から拾ってくることができる。出力結果にマウスカーソルを乗せると、お手本との比較も詳細に確認可能。

まあ battle 1 は、div 1個置いて色とサイズ指定したらおわりかな。ということで、ひとまず深く考えずに素直に書いてみた。submit したら、ちゃんとピクセルどおりになっているかの判定をしてくれて、スコアが表示される。

132文字 100% match, よしよし。

では、世の中のみなさんの結果はどうなのかな、と Leadersboard 見を見てみると…… なんとトップの人は54文字で再現してしまうらしい。半分以下……！？ ちょっと想像がつかん

{{<link "https://cssbattle.dev/leaderboard/target/1">}}

ちょっと試して div要素とか余白文字とか削ってみても 90文字だぞ…… まだ半分近く削らないといけない。どうなっとるのか、まったく違う発想が必要そう

```
<style>html{background:#5d3a3a}body{margin:0;background:#b5e0ba;width:200px;height:200px}
```

## battle 9

{{<link "https://cssbattle.dev/play/9">}}

{{<figure src="/images/2024/02/css-battle-3.png">}}

ひし形のボックス作るために `transform: rotate(45deg)` で要素を 45度傾けてみたんだけど、なぜか細い枠線が薄く表示されてしまい、そのせいでピクセルパーフェクトにならなかった。（99.8% match という判定）

{{<figure src="/images/2024/02/css-battle-4.png">}}

謎だがくやしい

## battle 95

{{<link "https://cssbattle.dev/play/95">}}

どっかで見たことのある球形

{{<figure src="/images/2024/02/css-battle-5.png">}}

これはうまくいった

上下のカプセル部分は背景に linear-gradient を使い、一番上からここまではオレンジ、真ん中は透明、ここから下は白、と背景色を変えていくことで、1つの円でなんとかなった (黄色と茶色の部分は別のdivを用意)

ただし自分は 561文字で出来上がったのだが、トップの人は 145文字でこれを表現するらしい。……どういうことなの……

## おわり

たのしい （なお実務に活かせる感じはしない）

難易度は高いと言うか、短く書く以前に普通に再現させるだけでもたいへん。いろいろなプロパティを使う工夫がいるので、その面では勉強になるかも。

[CSS Battle answers とかでググる](https://google.com/search?q=CSS+Battle+answers)と回答を集めたサイトとかも出てくるので、それ眺めてるだけでもおもしろいっす
