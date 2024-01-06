---
title: トラックパッドでの Middleclick と、任意のアプリを再起動するシェルスクリプト
date: 2022-05-28
tags: [application]
thumbnail: https://raw.githubusercontent.com/artginzburg/MiddleClick-BigSur/main/demo.png
---

## Magic Trackpad, 快適だけどミドルクリックがない

Mac に Magic Trackpad を導入して快適に使えています。が、ミドルクリック、通常のマウスでいうホイールクリックができない。cmd + タップでできるけど、トラックパッドのみだとできない。よね？

ということでそれを可能にする "Middleclick" というアプリを導入しました

## Middleclick

サイトはこちら。

https://github.com/artginzburg/MiddleClick-BigSur

homebrew でもインストール可能。

インストールしたあとは設定とかは特にいらず、「トラックパッドを3本指でタップ」することでミドルクリックになります。

解決。

## スリープ時の復帰でたまに効かなくなる…？

たまーになんですが、スリープからの復帰時にミドルクリックが効かない場合があって。そんなときはアプリを再起動しています。

この「任意のアプリの再起動」をシェルからできないかな、ということで書きました

```
pgrep MiddleClick | xargs kill
open /Applications/MiddleClick.app
```

pgrep で任意のアプリのプロセスIDを調べて kill に渡し、open で再起動。以上。
