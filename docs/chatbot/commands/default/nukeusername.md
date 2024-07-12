---
id: nukeusername
sidebar_label: "!nukeusername"
description: "Learn how to use the !nukeusername command in StreamElements chatbot to moderate user activity by performing timeouts, bans, or deletions based on matched strings or patterns."
keywords:
- nukeusername
- chatbot command
- user activity moderation
- timeout user
- ban user
- delete user messages
- regex matching
---

# !nukeusername

## Overview

The `!nukeusername` command is a powerful moderation tool in StreamElements chatbot. It allows moderators to search a user's recent chat activity for specific content and take action if a match is found. Actions can include timeouts, bans, or message deletions.

## Usage

```
!nukeusername <lookback_seconds> <action> <match_pattern>
```

## Parameters

- `<lookback_seconds>`: The time window (in seconds) to search for the user's activity.
- `<action>`: The action to perform on the user. Can be:
  - A number (for timeout duration in seconds)
  - `'ban'` (to ban the user)
  - `'delete'` (to delete the user's messages)
- `<match_pattern>`: The string or pattern to match in the user's messages. For regex patterns, wrap in slashes (e.g., `/pattern/`).

## Examples

1. Timeout a user for 60 seconds if they've said "test" in the last minute:
   ```
   !nukeusername 60 60 test
   ```

2. Ban a user if they've used a regex pattern in the last 2 minutes:
   ```
   !nukeusername 120 ban /\d{3}-\d{3}-\d{4}/
   ```

## Related Commands

- [`!nuke`](nuke.md): Nuke users based on message content

## Configuration

The `!nukeusername` command is available to moderators and the broadcaster by default. Custom permissions can be set up in the StreamElements dashboard.

## Aliases

There are no default aliases for this command. Custom aliases can be created in the StreamElements dashboard.
