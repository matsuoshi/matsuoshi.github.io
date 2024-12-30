---
title: xremap を使って、Ubuntu 上で Mac っぽい controlキーの挙動を設定した
date: 2024-09-28T09:00:00+09:00
tags: [ubuntu, keyboard]
---

中古で ThinkPad を購入し、Ubuntu 24.04 を入れた。

Ubuntu はおおむねいい感じで使えているのだが、普段触っている Mac と操作感の違いで気になるのは、Ctrl キーとコマンドキーの使い分け

Ubuntu だとコピペなど普段使う修飾キーは Ctrl が基本になる。Macでは親指でコマンドキーを使っていたので、じゃあキーカスタマイズして、Ubuntu でも親指のところに Ctrl キーをバインドしてしまえば解決か、というと意外とそれだけでもない。emacs風の `^H` による文字削除、`^A` `^E` でのカーソル移動なんかは 頻繁に使っていたし、特にターミナル操作で Mac だと `^C` と `⌘C` が明確に違うわけで、これに慣れてるとけっこう誤爆してしまう

キーリマップ系のツールを使ってなんとかできないかなと考えた

## やりたいこと

こんな感じで使えるように設定したい

- CapsLock (A の左隣) のキーを、Mac でいうところの Ctrl キーっぽくしたい
  - CapsLock + A, E, H あたりの emacs風キーバインドを有効にしたい
  - ターミナル上では CapsLock + C で `^C` にしたい
- 左親指のところを、Mac でいうところのコマンドキーっぽくしたい
  - 保存 `^s`、undo `^z` なんかのショートカットは左親指のほうでやりたい
  - ターミナル上では Macみたいに コマンド+C, V でコピペできる感覚にしたい
  - ついでに左親指で押しやすい無変換キーを、「単独で押せば無変換キー、何かと一緒に押すとはコマンドキー」的な挙動にしたい (mod-tap)

## xremap で全部できた

結論、ぜんぶできた

xremap というアプリケーションのおかげです。神ツールやん！？

{{<link "https://github.com/xremap/xremap">}}

## 設定ファイル

{{<gist matsuoshi 933ffd57e22dbbe4b199916fc309b4de>}}

やってることはざっくり、

- modmap で CapsLock を**右Ctrlキー**にする
- ターミナルの場合に限り、**左Ctrl**+C, V をコピペに設定する
  - これで CapsLock+C は通常の `^C`, 左Ctrl+C はコピー、と使い分けられる
- emacs風の設定を 右Ctrl+あれこれ、として入れていく
  - ただしターミナルはアプリ側でもともと設定が入っているので除外
- 無変換キーの mod-tap 設定もすごく簡単だった

全部できたー

## その他

インストールにあたっては Ubuntu で使われている GNOME Wayland 特有の設定がいるみたいで、xremap をユーザー権限で起動させるには、とか アプリケーション固有の設定を有効にするには、というところで少しハマった。ハマったけど、よくよく見ると全部 xremap の README に書いてあった。READMEのこのへん↓↓ 単に自分が説明書きをよく読んでいないというだけでした。xremap すばらしい。

> If you want to run xremap without sudo, click here.
>
> Install xremap's GNOME Shell extension from this link, switching OFF to ON.

自分用にメモしておくと

- gnome でアプリ単位の設定を有効にしたいなら
  - xremap は sudo ではなくユーザ権限で起動する
  - 自動起動もユーザー権限で
  - GNOME Shell extension を入れてオンにする

## まとめ

満足です。
