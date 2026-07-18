---
title: Paragraph Filter
sidebar:
  label: Paragraph
description: "Limit the maximum length of chat messages with the StreamElements Chatbot Paragraph filter's character limit, timeout duration, and exclusions."
keywords:
- StreamElements
- chatbot
- Twitch
- paragraph filter
- message length
- chat moderation
---

The Paragraph filter helps manage the length of chat messages. It checks the number of characters in a message and compares them with the set limit. If a message violates this limit, the filter takes action according to the configured settings.

## Settings

| Setting | Description |
|---------|-------------|
| Maximum amount | The maximum number of characters allowed in a message. If a message contains more characters than this limit, it will be flagged by the filter. |

The filter also supports the [settings shared by all filters](/chatbot/filters#settings-shared-by-all-filters), including the timeout length, custom timeout message, and excluded user level.

## What happens on a violation

The filter's timeout setting determines the action: a timeout for the configured number of seconds, message deletion only (timeout of 0), a permanent ban, or a warning plus deletion (Twitch only). See [What happens on a violation](/chatbot/filters#what-happens-on-a-violation) for details.
