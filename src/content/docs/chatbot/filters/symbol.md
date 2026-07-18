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

The Symbol filter helps manage the use of symbols in chat messages. It checks the number and percentage of symbols in a message and compares them with the set limits. If a message violates these limits, the filter takes action according to the configured settings.

## Settings

| Setting | Description |
|---------|-------------|
| Maximum amount | The maximum number of symbols allowed in a message. If a message contains more symbols than this limit, it will be flagged by the filter. |
| Minimum amount | The minimum number of symbols a message must have before the filter checks for a violation. If a message contains fewer symbols than this limit, it will not be checked by the filter. |
| Maximum percent | The maximum percentage of a message that can be symbols. If the percentage of symbols in a message exceeds this limit, it will be flagged by the filter. |

The filter also supports the [settings shared by all filters](/chatbot/filters#settings-shared-by-all-filters), including the timeout length, custom timeout message, and excluded user level.

## What happens on a violation

The filter's timeout setting determines the action: a timeout for the configured number of seconds, message deletion only (timeout of 0), a permanent ban, or a warning plus deletion (Twitch only). See [What happens on a violation](/chatbot/filters#what-happens-on-a-violation) for details.
