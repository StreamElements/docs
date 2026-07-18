---
title: Repetition Filter
sidebar:
  label: Repetition
description: "Limit excessive repetition of characters and sequences in chat messages with the StreamElements Chatbot Repetition filter."
keywords:
- StreamElements
- chatbot
- repetition filter
- chat moderation
- repeated characters
---

The Repetition filter limits how often the same word may be repeated within a single chat message (for example "spam spam spam spam spam"). A message is flagged when any word occurs more times than the configured maximum.

## Settings

| Setting | Description |
|---------|-------------|
| Maximum word repetitions | The maximum number of times a word can occur in a single message. |
| Minimum characters | Words shorter than this are ignored when counting repetitions. |

The filter also supports the [settings shared by all filters](/chatbot/filters#settings-shared-by-all-filters), including the timeout length, custom timeout message, and excluded user level.

## What happens on a violation

The filter's timeout setting determines the action: a timeout for the configured number of seconds, message deletion only (timeout of 0), a permanent ban, or a warning plus deletion (Twitch only). See [What happens on a violation](/chatbot/filters#what-happens-on-a-violation) for details.
