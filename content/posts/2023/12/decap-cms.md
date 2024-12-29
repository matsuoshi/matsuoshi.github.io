---
title: Decap CMS (旧 Netlify CMS) を GitHub Pages に導入した
slug: decap-cms
date: 2023-12-24T04:31:00.858Z
thumbnail: /images/uploads/decap-cms.jpg
tags:
  - blog
  - cms
  - decap
  - netlify
---
このブログを Hugo + GitHub Pages の組み合わせにしましたが、そこに Decap CMS を導入しました。

{{<link "https://decapcms.org/">}}

Decap CMS は以前 Netlify CMS と呼ばれていたもので、Netlify のチームが作成した CMS。Hugo などの静的サイトジェネレータを使ったブログにちょこっと設定を足すだけで、ブラウザ上から記事の作成やら更新やらができるようになるというツールです。

静的サイトジェネレータは便利だけど、画像の管理とかはめんどくさかったりするので、そのへんがブラウザの WYSIWYG エディタからできるようになるのは便利。また、ローカルPCに環境がなくてもよくなるので、スマホからちょっとした記事更新をする、みたいなことも可能になります。

ページのホスト先に Netlify を使っていると設定は超ラクですが、GitHub Pages や Vercel などNetlify 以外のホスティングでも設定次第で利用できます。もちろんジェネレータも Hugo に関わらず Jekyll や NextJS などでも問題なし。

GitHub Pages + Hugo での細かい設定方法はここが参考になりました

{{<link "https://hugocatalog.com/decap/">}}

ざっくり書くと

- Hugo に Decap CMS の管理画面ページとして 2つのファイルを設置する (/static/admin 配下の index.html と config.yml) 
- GitHub で新規に [OAuth App](https://github.com/settings/developers) を作成する
- 認証用に Netlify で空のサイトを作り、GitHub の OAuth 情報 (Client ID, secrets) とサイトのドメイン名を設定する

以上でOKでした。
