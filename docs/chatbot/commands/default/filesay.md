---
id: filesay
title: Using the !filesay Command for Bulk Chat Messages
sidebar_label: "!filesay"
description: "Learn how moderators use the StreamElements !filesay command to send multiple lines from a text file URL to chat, often for bulk bans or messages."
tags:
  - chatbot
  - commands
  - moderation
  - bulk actions
keywords:
- filesay
- chatbot command
- moderation
- banning users
- chat management
- streaming
- twitch
- youtube
- bulk ban
- bulk message
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!filesay` command instructs the chatbot to fetch the content of a plain text file from a given URL and send each line of that file as a separate message in chat. This is commonly used by moderators for executing bulk actions, like banning a list of known bots or spam accounts by having each line be a `/ban username` command.

## Usage / Syntax

Execute commands or send messages from a file URL:

```
!filesay <url_to_text_file>
```

## Parameters / Configuration / Options

| Parameter            | Required | Description                                                              | Example                               |
| :------------------- | :------- | :----------------------------------------------------------------------- | :------------------------------------ |
| `<url_to_text_file>` | Required | The direct URL to a plain text (`.txt`) file accessible by the bot. | `https://pastebin.com/raw/abcdef12` |

- **File Format**: The file at the URL must be plain text, with each chat message/command on a separate line.
- **Permissions**: This command is typically restricted to moderators and the broadcaster due to its potential for mass actions.
- **Aliases**: No default aliases.

## Examples

Executing a bulk ban list from a Pastebin raw link (each line in the file is `/ban username`):

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!filesay https://pastebin.com/raw/abcdef12"
  outputMessage="(Bot sends multiple messages to chat, e.g., '/ban BotUser1', '/ban BotUser2', etc., resulting in ban confirmations)"
/>

*Note: The bot executes each line from the file as if it were typed directly into chat by the user who invoked `!filesay`.*

## Related Commands

- [`!nuke`](nuke.md)
- [`!nukeusername`](nukeusername.md)
