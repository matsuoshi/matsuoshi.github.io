---
title: Obsidian みたいなことを VSCode 上で実現する拡張機能 "Foam"
date: 2024-02-07T09:00:00+09:00
tags: [tool, application, foam]
layout: redirect
redirectTo: https://matsuoshi.hatenablog.com/entry/2024/02/07/000000
---

markdownメモアプリの話。

以前はメモアプリとして [Obsidian](https://obsidian.md/) を使ってたんですが、このところは VSCode で似たようなことを実現できる拡張機能 [Foam](https://foambubble.github.io/foam/) に落ち着いてきました。

{{<link "https://foambubble.github.io/foam/">}}

自分のやりたいことは大して多くないので、ちょちょっとした設定でまかなえているように思います。その設定メモなどを。

## ノートを書く

まあ、markdown 書くだけなので。プレビュー表示とかも VSCode なら不便しないですし、拡張機能も使いたければ色々使える。
普段使ってる VSCode なので、ショートカットキーなど覚え直さなくていいのもありがたい。

## ノート間のリンク

`［［page-name］］` でふつうにいける。cmd+click でリンク先に飛べる。markdownファイル名を変更したら、ノート内のリンクも追随してアップデートしてくれます。

## デイリーノート

`option + D` でデイリーノートを作れます。

デイリーノートのフォルダやファイル名は settings.json で設定可。自分は

```
"foam.openDailyNote.directory": "daily",
"foam.openDailyNote.filenameFormat": "yyyy/mm/yyyy-mm-dd",
```

こんな感じにして、`daily/` というフォルダの下にさらに `2024/01/` と 年/月 なフォルダ作って、その下に `2024-02-01.md` みたいな日付のファイルを作るようにしています。

デイリーノートのテンプレートは `.foam/templates/daily-note.md` に置けばOK。

## タグ

`#tag` でタグ付けできる。タグ一覧も Tag Explorer ペインで見れる。タグ名はスラッシュ区切りで階層化もできる。

## 画像の扱い

Paste Image という拡張機能を使っています。画像をクリップボードからエディタにペーストすると、画像ファイルを作ってそこへのリンクを markdown上に挿入してくれる。

{{<link "https://marketplace.visualstudio.com/items?itemName=mushan.vscode-paste-image">}}

## グラフ

Obsidian の特徴的なノート間リンクのグラフ表示ですが、Foam でも `Foam: Show Graph` でいけます。自分あんまり使ってないっすけど。

## 複数端末でのデータの同期

GitHub でやることにした。

スマホでノートを見るにはどうしようかなと思ったんですが、そういえば GitHubアプリがあった。GitHubアプリでリポジトリのファイル参照はふつうにできるのでいいかな。ファイルの更新も一応なんとかできるけど、スマホからがっつり編集したい機会ってほぼないので別に良し。雑に別アプリにメモとって、あとでPCで整理することが多いです。

なお GitDoc という拡張機能を使えば、一定時間単位に編集されたファイルを自動でコミットしてプッシュする、みたいな設定も可能です。バックグラウンドで勝手に GitHub に sync させることができます。その Git の使い方どうなの感はちょっとありますが。

{{<link "https://marketplace.visualstudio.com/items?itemName=vsls-contrib.gitdoc">}}

## なんで Obsidian を使うのをやめたか

まあ大した理由ではないのですが

- 単純に VSCode のほうが慣れているから (ショートカットキー等含め)
- VSCode はだいたい起動させてるし、常駐アプリは少ないほうがいいかな
- そこまで複雑な機能は使いこなせてなかったし
- 複数端末でのデータ動機も、まあ git でなんとかなるかなと

いう感じです。

これで大体いけそう。いけるいける。
