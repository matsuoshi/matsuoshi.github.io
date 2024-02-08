---
title: スプレッドシートの正規表現でパターン修飾子、欲張りでないマッチを使いたい
date: 2024-01-22T13:00:00+09:00
tags: [regex, spreadsheet]
thumbnail: /images/2024/01/spreadsheet.png
---

Google スプレッドシートは、REGEXMATCH や REGEXEXTRACT といった関数で正規表現が使える。

こんな感じで

```
=REGEXEXTRACT("数字は 123 です。", "\d+")
```

- ドキュメント
  - <https://support.google.com/docs/answer/3098292>

ただ、この正規表現は RE2 という正規表現エンジンを使っているようで、普段自分が JavaScriptなどで使っている書き方とは異なるものがあった。のでメモ。

具体的には、パターン修飾子、single line や 欲張りでないマッチについて。

## パターン修飾子の single line

正規表現のドット `.` が改行を含むかどうかの指定。

JavaScript だと

```
/a.*b/s
```

といった書き方になる。最後の `/s` パターン修飾子。これでドットは改行にマッチするようになる。

スプレッドシートの場合は

```
(?s)a.*b
```

と書く。正規表現の先頭に `(?s)` をつける。

## パターン修飾子の欲張りでないマッチ

JavaScript だと
```
/a.*?b/
```

といった書き方。量指定子のあとに `?` をつけることで、欲張りでないマッチになる。

スプレッドシートの場合は

```
(?U)a.*b
```

と書く。正規表現の先頭に `(?U)` をつける。ungreedy の U らしい。

## その他

single line も欲張りでないマッチも有効にしたい場合は

```
(?sU)a.*b
```

とこんな感じ。

スプレッドシートで使える正規表現 RE2 のドキュメントは、ここを見ればよさそう

<https://github.com/google/re2/blob/main/doc/syntax.txt>
