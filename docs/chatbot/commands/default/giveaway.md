---
id: giveaway
sidebar_label: "!giveaway"
description: "Learn how to use the !giveaway command in StreamElements to check active giveaways in a Twitch channel."
keywords:
- giveaway
- StreamElements giveaway
- Twitch giveaway
- active giveaway
- current giveaway
- chatbot command
---

# !giveaway

## Overview

The `!giveaway` command allows viewers to check if there's an active giveaway in the channel. It provides information about the current giveaway, including its name and a link to participate.

## Usage

To use the command, simply type `!giveaway` in the chat.

## Examples

Here are two examples of how the `!giveaway` command works:

1. When there's an active giveaway:

```
User: !giveaway
Chatbot: @User, Current giveaway: "Door Giveaway" https://streamelements.com/styler/giveaway/650981afb4e7658a15d6448b
```

2. When there's no active giveaway:

```
User: !giveaway
Chatbot: @User, There is currently no giveaway running!
```

## Parameters

This command doesn't accept any parameters.

## Related Commands

- [`!ticket`](ticket.md) - Use this command to enter an active giveaway

## Configuration

Streamers can set up giveaways through the StreamElements dashboard. The `!giveaway` command will automatically reflect the current giveaway status without additional configuration.
