---
id: nuke
sidebar_label: "!nuke"
description: "Learn how to use the !nuke command in StreamElements chatbot to moderate your chat by timing out, banning, or deleting messages containing specific content."
keywords:
- nuke command
- chat moderation
- timeout users
- ban users
- delete messages
- StreamElements chatbot
---

# !nuke

## Overview

The `!nuke` command is a powerful moderation tool in the StreamElements chatbot that allows moderators to quickly remove multiple messages containing specific content from the chat. It can perform timeouts, bans, or message deletions based on a specified string or regular expression.

## Usage

```
!nuke <lookback_time> <action> <match_string>
```

## Parameters

- `<lookback_time>`: The time window (in seconds) to search for matching messages. The maximum lookback is 300 seconds.
- `<action>`: The moderation action to perform. Can be:
  - A number (for timeout duration in seconds)
  - `ban` (to ban users)
  - `delete` (to delete messages)
- `<match_string>`: The text to search for in messages. For regex patterns, wrap in slashes (e.g., `/pattern/`).

## Examples

1. Timeout users for 60 seconds who sent messages containing "spam" in the last 2 minutes:

```
!nuke 120 60 spam
```

2. Ban users who sent messages matching the regex pattern "test\d+" in the last 5 minutes:

```
!nuke 300 ban /test\d+/
```

3. Delete all messages containing "giveaway" from the last 30 seconds:

```
!nuke 30 delete giveaway
```

## Related Commands

- [`!nukeusername`](nukeusername.md): Nuke users based on username.

## Configuration

The `!nuke` command is available by default to moderators and the broadcaster. To change permissions, modify the command settings in your StreamElements dashboard.

## Aliases

There are no default aliases for the `!nuke` command. However, you can create custom aliases in your StreamElements dashboard if desired.
