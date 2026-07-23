---
title: Zalgo Filter
sidebar:
  label: Zalgo
description: "Remove zalgo and other combining-character text from chat messages with the StreamElements Chatbot Zalgo filter."
keywords:
- StreamElements
- chatbot
- zalgo filter
- chat moderation
- combining characters
---

The Zalgo filter removes "zalgo" text — messages distorted with stacked combining characters that bleed over surrounding lines and make chat hard to read. A message is flagged when it contains more combining characters than the configured maximum.

## Settings

| Setting | Description |
|---------|-------------|
| Maximum amount | The maximum number of zalgo (combining) characters allowed in a single message. (Default: 1) |

The filter also supports the [settings shared by all filters](/chatbot/filters#settings-shared-by-all-filters) — timeout length, custom timeout message, excluded user level — which also determine [what happens on a violation](/chatbot/filters#what-happens-on-a-violation).
