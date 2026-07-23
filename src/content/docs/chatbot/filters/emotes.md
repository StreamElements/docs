---
title: Emote Filter
sidebar:
  label: Emotes
description: "Limit the number of emotes allowed in a single chat message with the StreamElements Chatbot Emote filter."
keywords:
- emote filter
- chat moderation
- StreamElements
- emote limit
- timeout settings
---

The Emote filter helps manage the use of emotes in chat messages. It checks the number of emotes in a message and compares them with the set limit. If a message violates this limit, the filter takes action according to the configured settings.

## Settings

| Setting | Description |
|---------|-------------|
| Maximum amount | The maximum number of emotes allowed in a message. If a message contains more emotes than this limit, it will be flagged by the filter. |

The filter also supports the [settings shared by all filters](/chatbot/filters#settings-shared-by-all-filters) — timeout length, custom timeout message, excluded user level — which also determine [what happens on a violation](/chatbot/filters#what-happens-on-a-violation).
