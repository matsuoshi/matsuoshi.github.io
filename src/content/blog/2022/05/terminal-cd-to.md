---
title: cd to を使って、任意のフォルダで、ターミナル(Hyper)をサクっと開きたい
date: 2022/05/23
tags: [software]
image: /static/images/2022/05/cd-to-hyper.jpg
---

## cd to のご紹介です

いま Mac の Finder で参照しているディレクトリにて、ターミナルを新規に開きたいとき。

cd to というアプリがあります。

できることはめっちゃシンプルで、Finder のツールバーにこのアプリを置いといて、必要なときにクリックするだけ。Finder でいま開いているフォルダにて、ターミナルが開かれます。

以上、単機能アプリ。すてき。

ダウンロードはこちら

https://github.com/jbtule/cdto

また、homebrew でもインストールできます。

```
brew install cd-to
```

## ターミナルとして Hyper を開きたい

ターミナルに Hyper を使っている場合、cd to でも Hyper を起動してほしい。

https://hyper.is/

これはオリジナルの cd to ではできないようで、フォークされた別アプリがありました。

https://github.com/ealeksandrov/cdto

↑ここからダウンロードして、Finder のツールバーに配置すれば Hyper を開くことができるようになります。単機能アプリ、すてき。

なお、ターミナルに iTerm 2 を使いたい場合は、オリジナルのほうでプラグインがあるようです。
