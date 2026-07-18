---
title: Symbol Filter
sidebar:
  label: Symbol
description: "Limit the number and percentage of symbols in chat messages with the StreamElements Chatbot Symbol filter's thresholds and timeout settings."
keywords:
- StreamElements
- chatbot
- symbol filter
- chat moderation
- timeout settings
---

The Symbol filter flags messages that contain too many symbols — either more than an absolute number, or making up too large a share of the message.

## What counts as a symbol

Any character that is not a letter, a number, or a space. This includes:

- Punctuation: `!` `?` `.` `,` `"` `'` `@` `#` `&` `(` `)`
- Math and currency signs: `+` `=` `<` `>` `$` `€` `^` `~`
- Unicode emoji such as 🎉

Letters and digits from any alphabet, spaces, and accents on letters are never counted. Platform emotes (Twitch, YouTube) are sent as ordinary words like `Kappa`, so they don't count either — only Unicode emoji do.

## Settings

| Setting | Description |
|---------|-------------|
| Maximum amount | The most symbols a message may contain. A message with more symbols than this is flagged. |
| Minimum amount | The minimum message length, in characters, before the filter applies. Messages shorter than this are never flagged, whatever they contain. |
| Maximum percent | The largest share of a message that may be symbols. The percentage is measured against all characters in the message, spaces included. |

The filter also supports the [settings shared by all filters](/chatbot/filters#settings-shared-by-all-filters) — timeout length, custom timeout message, excluded user level — which also determine [what happens on a violation](/chatbot/filters#what-happens-on-a-violation).
