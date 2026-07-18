---
title: Link Filter
sidebar:
  label: Links
description: "Control link posting in chat with allowlists, blocklists, and timeout settings using the StreamElements Chatbot Link filter."
keywords:
- StreamElements
- chatbot
- link filter
- moderation
- allowlist
- blocklist
---

The Link filter helps manage the posting of links in chat messages. It checks if a message contains any links and compares them with the set allowlist and blocklist. If a message contains a link that is not in the allowlist or is in the blocklist, the filter takes action according to the configured settings.

## Settings

| Setting | Description |
|---------|-------------|
| Allowlist | A list of links or link patterns that are allowed in messages. Links matching the allowlist are never flagged by the filter. |
| Blocklist | A list of links or link patterns that are never allowed in messages. Any link that matches a pattern in this list is treated as harmful and punished more harshly. |

Both lists support the `*` wildcard character for flexible rules, and patterns are matched case-insensitively.

The filter also supports the [settings shared by all filters](/chatbot/filters/#settings-shared-by-all-filters), including the timeout length, custom timeout message, and excluded user level.

## What happens on a violation

The filter's timeout setting determines the action: a timeout for the configured number of seconds, message deletion only (timeout of 0), a permanent ban, or a warning plus deletion (Twitch only). See [What happens on a violation](/chatbot/filters/#what-happens-on-a-violation) for details.

Links matching the blocklist receive a harsher punishment: when the action is a timeout, the user is timed out for **double** the configured duration. With any other action (delete only, ban, or warning), the configured action applies as-is.
