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

The Repetition filter limits excessive repetition within a single chat message, such as long runs of repeated characters or repeated sequences (for example "aaaaaaaaaa" or "hahahahahaha"). The repetition thresholds are configured on the filter in your StreamElements dashboard.

## Settings

The filter supports the [settings shared by all filters](/chatbot/filters#settings-shared-by-all-filters), including the timeout length, custom timeout message, and excluded user level.

## What happens on a violation

The filter's timeout setting determines the action: a timeout for the configured number of seconds, message deletion only (timeout of 0), a permanent ban, or a warning plus deletion (Twitch only). See [What happens on a violation](/chatbot/filters#what-happens-on-a-violation) for details.
