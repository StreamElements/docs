---
title: Caps Filter
sidebar:
  label: Caps
description: "Limit the number and percentage of capital letters in chat messages with the StreamElements Chatbot Caps filter."
keywords:
- StreamElements
- chatbot
- caps filter
- moderation
- chat management
---

The Caps filter helps manage the use of capital letters in chat messages. It checks the number and percentage of capital letters in a message and compares them with the set limits. If a message violates these limits, the filter takes action according to the configured settings.

## Settings

| Setting | Description |
|---------|-------------|
| Maximum amount | The maximum number of capital letters allowed in a message. If a message contains more capital letters than this limit, it will be flagged by the filter. |
| Minimum characters | The minimum number of characters a message must have before the filter checks for a violation. If a message contains fewer characters than this limit, it will not be checked by the filter. |
| Maximum percent | The maximum percentage of a message that can be capital letters. If the percentage of capital letters in a message exceeds this limit, it will be flagged by the filter. |

The filter also supports the [settings shared by all filters](/chatbot/filters/#settings-shared-by-all-filters), including the timeout length, custom timeout message, and excluded user level.

## What happens on a violation

The filter's timeout setting determines the action: a timeout for the configured number of seconds, message deletion only (timeout of 0), a permanent ban, or a warning plus deletion (Twitch only). See [What happens on a violation](/chatbot/filters/#what-happens-on-a-violation) for details.
