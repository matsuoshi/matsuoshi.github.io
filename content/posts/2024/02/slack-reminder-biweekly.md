---
title: Slack の リマインダーを隔週で設定する
date: 2024-02-19T23:00:00+09:00
tags: [slack, tool]
thumbnail: /images/2024/02/slack-reminder.jpg
---

## Slack のリマインダーを隔週で設定したい

というそれだけなのですが、設定方法にちょっと迷ったのでメモ

公式の説明ページはこちら

- <https://slack.com/intl/ja-jp/resources/using-slack/how-to-use-reminders-in-slack>

> every two weeks（2 週間ごと）などのフレーズを入れると、繰り返しのリマインダーを設定できます

なるほど〜

ということで、これでいけました

```
/remind #channel "Text" at 11:00 every two weeks
```

また、こんな曜日を指定した表記もできるようです

```
/remind #channel "Text" at 14:00 every other Wednesday
```

そもそも `every other week` という英語の表現を知らなかった、なるほど
