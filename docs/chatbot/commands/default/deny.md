---
id: deny
sidebar_label: "!deny"
description: "Learn how to use the !deny command in StreamElements chatbot to reject duel requests in Twitch chat"
keywords:
- deny command
- reject duel
- decline duel request
- StreamElements chatbot
- Twitch chat commands
---

# !deny

## Overview

The `!deny` command allows users to reject an incoming duel request in Twitch chat. This command is part of the Duel module in StreamElements chatbot and helps manage interactions between viewers.

## Usage

To deny a duel request, simply type `!deny` in the chat when you have an active duel request.

## Examples

Here are two examples of how the `!deny` command works:

1. Rejecting a duel request:

```
Viewer: !deny
Chatbot: @Viewer, you have denied the duel request from Challenger.
```

2. Using `!deny` without an active request:

```
Viewer: !deny
Chatbot: @Viewer, you don't have any pending duel requests to deny.
```

## Parameters

The `!deny` command does not require any additional parameters.

## Related Commands

- [`!duel`](duel.md): Initiates a duel request with another viewer
- [`!accept`](accept.md): Accepts an incoming duel request

## Configuration

The `!deny` command is part of the Duel module. Ensure that the Duel module is enabled in your StreamElements chatbot settings to use this command.

## Aliases

By default, there are no aliases for the `!deny` command. However, moderators can create custom aliases if needed.
