---
title: Hugo で Wikilinks を有効にする
date: 2024-12-29T17:00:03+09:00
tags: [hugo, blog]
---

Hugo で Wikilinks 記法(`[[]]` こんな感じで brackets で囲むリンク) を有効にする

ここに書いてある方法でいけた

<https://quinncasey.com/hugo-wikilink-support/>

{{<link "https://quinncasey.com/hugo-wikilink-support/">}}

1. `/layouts/partials/content-wikilinks.html` を作成し、先述のサイトのコードを配置
2. hugo で使用しているテーマの `single.html` をオーバーライド (`/layouts/_default/single.html` にコピー)
3. `single.html` 内で `{{ .Content }}` としてブログ本文を出力している箇所を、`{{- partial "content-with-wikilinks" . -}}` に置き換え

これで動きました

試しに Wikilinks記法で [[About]] や [[Search]] に飛んでみるテスト

---

```
{{ $wikiregexWithText := "\\[\\[([^\\]\\|\\r\\n]+?)\\|([^\\]\\|\\r\\n]+?)\\]\\]" }}
{{ $wikiregex := "\\[\\[([^\\]\\|\\r\\n]+?)\\]\\]" }}

{{ $page := .Page }}
{{ $pageContent := .Content }}

{{ range ($wikilinks := .Content | findRE $wikiregex) }}
	{{ $link := . | replaceRE $wikiregex "$1" }}
	{{ $wikilink :=  printf "\\[\\[%s\\]\\]" $link }}

	{{ with relref $page $link }}
		{{ $link := printf "%s%s%s%s%s" "<a href=\"" . "\">" ($.Site.GetPage $link).Title "</a>"  }}
		{{ $pageContent = $pageContent | replaceRE $wikilink $link }}
	{{ end }}
{{ end }}

{{ range ($pageContent | findRE $wikiregexWithText) }}
	{{ $link := . | replaceRE $wikiregexWithText "$1" }}
	{{ $text := . | replaceRE $wikiregexWithText "$2" }}
	{{ $wikilink :=  printf "\\[\\[%s\\|%s\\]\\]" $link $text }}

	{{ with relref $page $link }}
		{{ $link := printf "%s%s%s%s%s" "<a href=\"" . "\">" $text "</a>" }}
		{{ $pageContent = $pageContent | replaceRE $wikilink $link }}
	{{ end }}
{{ end }}

{{ $pageContent | safeHTML }}
```
