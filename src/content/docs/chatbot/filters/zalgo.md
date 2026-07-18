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
| Maximum amount | The maximum number of zalgo (combining) characters allowed in a single message. |

The filter also supports the [settings shared by all filters](/chatbot/filters#settings-shared-by-all-filters), including the timeout length, custom timeout message, and excluded user level.

## What happens on a violation

The filter's timeout setting determines the action: a timeout for the configured number of seconds, message deletion only (timeout of 0), a permanent ban, or a warning plus deletion (Twitch only). See [What happens on a violation](/chatbot/filters#what-happens-on-a-violation) for details.
