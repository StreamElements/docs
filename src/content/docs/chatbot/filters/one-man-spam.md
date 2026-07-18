---
title: One-Man Spam Filter
sidebar:
  label: One-Man Spam
description: "Stop a single user from flooding chat with repeated or spammy messages using the StreamElements Chatbot One-Man Spam filter."
keywords:
- StreamElements
- chatbot
- one-man spam filter
- chat moderation
- spam protection
---

The One-Man Spam filter targets spam coming from a single user. Instead of judging each message in isolation, it compares a user's recent messages against each other and triggers when too many of them are the same or nearly the same.

## Settings

| Setting | Description |
|---------|-------------|
| Minimum characters | The number of characters a message must have to count towards the filter. Shorter messages are ignored. |
| Minimum messages | The number of messages the user must have sent within the lookback window before the filter can trigger. |
| Lookback | How many seconds of the user's message history are inspected. |
| Threshold | The message similarity score (0–1, decimals allowed) that causes the user to be timed out. Messages at or above this similarity count as spam. |

The filter also supports the [settings shared by all filters](/chatbot/filters#settings-shared-by-all-filters), including the timeout length, custom timeout message, and excluded user level.

## What happens on a violation

The filter's timeout setting determines the action: a timeout for the configured number of seconds, message deletion only (timeout of 0), a permanent ban, or a warning plus deletion (Twitch only). See [What happens on a violation](/chatbot/filters#what-happens-on-a-violation) for details.
