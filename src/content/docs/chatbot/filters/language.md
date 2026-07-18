---
title: Language Filter
sidebar:
  label: Language
description: "Remove chat messages written in languages you haven't allowed with the StreamElements Chatbot Language filter."
keywords:
- StreamElements
- chatbot
- language filter
- chat moderation
- allowed languages
---

The Language filter moderates messages based on the language they are written in. Messages detected as a language you haven't allowed are flagged by the filter. The allowed languages are configured on the filter in your StreamElements dashboard.

## Settings

The filter supports the [settings shared by all filters](/chatbot/filters#settings-shared-by-all-filters), including the timeout length, custom timeout message, and excluded user level.

## What happens on a violation

The filter's timeout setting determines the action: a timeout for the configured number of seconds, message deletion only (timeout of 0), a permanent ban, or a warning plus deletion (Twitch only). See [What happens on a violation](/chatbot/filters#what-happens-on-a-violation) for details.
