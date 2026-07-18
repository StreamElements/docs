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

The One-Man Spam filter targets spam coming from a single user. Instead of judging each message in isolation, it catches users who repeatedly send the same or similar messages in a short period of time. The detection thresholds are configured on the filter in your StreamElements dashboard.

## Settings

The filter supports the [settings shared by all filters](/chatbot/filters/#settings-shared-by-all-filters), including the timeout length, custom timeout message, and excluded user level.

## What happens on a violation

The filter's timeout setting determines the action: a timeout for the configured number of seconds, message deletion only (timeout of 0), a permanent ban, or a warning plus deletion (Twitch only). See [What happens on a violation](/chatbot/filters/#what-happens-on-a-violation) for details.
