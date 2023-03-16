---
title: GitHub からの git clone でポート番号を指定する
date: 2022/11/03
tags: [git, github, programming]
---

メモ

なんらかの原因で、ssh のデフォルトのポート番号が 22 でないサーバ環境にて、git clone したときのメモ

```
git clone git@github.com:matsuoshi/example.git
```

いつもどおりに ↑ こう書くと、デフォルトのポート番号の違いのため応答が帰ってこない

git clone 時にポート番号を指定したい場合は、こう書けば良い

```
git clone ssh://git@github.com:22/matsuoshi/example.git
```

メモおわり
