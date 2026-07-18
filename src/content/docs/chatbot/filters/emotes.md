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

The filter also supports the [settings shared by all filters](/chatbot/filters#settings-shared-by-all-filters), including the timeout length, custom timeout message, and excluded user level.

## What happens on a violation

The filter's timeout setting determines the action: a timeout for the configured number of seconds, message deletion only (timeout of 0), a permanent ban, or a warning plus deletion (Twitch only). See [What happens on a violation](/chatbot/filters#what-happens-on-a-violation) for details.
