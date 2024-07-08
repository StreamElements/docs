---
id: accept
sidebar_label: "!accept"
description: "Use the !accept command to quickly respond to duel requests in your Twitch chat."
keywords:
- accept
- command
- duel
- invite
- Twitch
- StreamElements
- chatbot
---

# !accept

## Overview

The `!accept` command allows users to accept duel requests in the Twitch chat.

## Usage

To use the `!accept` command, simply type it in the chat when you want to accept a pending request or invitation.

```
!accept
```

## Examples

### Example 1: Accepting a Duel

User A challenges User B to a duel:
```
UserA: !duel UserB 10
```

User B accepts the duel:
```
UserB: !accept
```

Chatbot response:
```
UserB won the Duel vs UserA PogChamp UserB won 10 points.
```

## Related Commands

- [`!duel`](duel.md): Initiate a duel with another user

## Configuration

The `!accept` command is part of the [duel module](../../modules/duel). Make sure this module is enabled in your StreamElements chatbot settings to use the command.
