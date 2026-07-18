---
title: Language Filter
sidebar:
  label: Language
description: "Remove chat messages written in languages you haven't allowed with the StreamElements Chatbot Language filter."
keywords:
- StreamElements
- chatbot
- language filter
- chat moderation
- allowed languages
---

The Language filter moderates messages based on the language they are written in. A message is flagged when its detected language is not on your allowed list, or when the detection isn't confident enough to tell. When no allowed languages are configured, the filter is off.

## Settings

| Setting | Description |
|---------|-------------|
| Allowed languages | The list of languages permitted in chat (ISO 639-1 codes, e.g. `en`, `de`). An empty list disables the filter. |
| Minimum percentage | The minimum detection confidence. Messages whose language can't be identified with at least this confidence are flagged. |
| Excluded characters | Phrases stripped from a message before language detection runs (useful for emote names and channel-specific slang that confuse detection). |

The filter also supports the [settings shared by all filters](/chatbot/filters#settings-shared-by-all-filters) — timeout length, custom timeout message, excluded user level — which also determine [what happens on a violation](/chatbot/filters#what-happens-on-a-violation).
