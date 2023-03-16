---
title: Obsidian のデータ同期環境を Fly.io で作る
date: 2022/07/22
tags: [tools, application]
image: /static/images/2022/07/obsidian.png
---

マークダウンベースのメモアプリ、Obsidian を最近使っています。

https://obsidian.md/

Obsidian はデータの保存先は基本ローカルで、markdown ファイルを保存する形。ただ、設定で 複数のPC/スマホ含めた環境にてデータを同期する状態にできたので、それについて書く

## Obsidian でデータ同期をするには

こちらの記事がとてもくわしい

[Obsidianの複数端末同期方法まとめ (Mac/Windows/iOS/Android)](https://pouhon.net/obsidian-sync/6796/)

- お金払うなら Obsidian Sync (公式で確実)
- Mac と iPhone だけなら iCloud
- その他 Google Drive などファイル共有サービス
- Self-hosted LiveSync プラグイン
- Git プラグイン

いろいろ方法あるんですが、自分は Mac/Ubuntu/Android の環境で使いたかったのと、コンフリクトへの対処が考慮されている Self-hosted LiveSync プラグインを試しました

https://github.com/vrtmrz/obsidian-livesync

## IBM-Cloudant のアカウントが作れんかった

Self-hosted LiveSync プラグインは CouchDB を使っていて、その環境を自分で用意する必要があります。

そして IBM Cloudant は CouchDBベースのクラウドDB。無料版でも 1GBの容量があり十分使えるそうで、これをストレージにして Obsidian のデータを同期してけばOK……

https://www.ibm.com/jp-ja/cloud/cloudant

とのことだったんですが、なんか自分はアカウントうまく作れんかった。ちょっと調べたけどわからずじまいで、別の無料の CouchDB 環境を探してみることに。

## Fly.io で CouchDB をセルフホスト

プラグイン作者さんの GitHub にて、以下を発見

https://github.com/vrtmrz/obsidian-livesync/discussions/85

試してみたところ、うおー、ばっちりだ

ここに書かれてあるとおりで Fly.io に CouchDB の環境を無料で作れまして、そのURL等を設定することで Obsidian のデータの動機ができました

無事に Mac/Android間でデータの同期ができてます

ありがとう作者さん
