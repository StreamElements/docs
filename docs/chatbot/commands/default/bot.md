---
id: bot
title: Using the !bot Command to Control StreamElements Chatbot
sidebar_label: "!bot"
description: "Manage your StreamElements chatbot with the !bot command. Control bot behavior, including muting, unmuting, and removing the bot from chat."
tags:
  - chatbot
  - commands
  - moderation
keywords:
- streamelements chatbot
- twitch bot management
- bot commands
- mute bot
- unmute bot
- remove bot from chat
- stream moderation
---
import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

# !bot
<PlatformBadges supported={[ 'Twitch', 'YouTube' ]} />

## Overview

The `!bot` command allows streamers and moderators to control the behavior of the StreamElements chatbot during a stream. This command provides essential functions for managing the bot's presence and activity in the chat.

## Usage

```
!bot <subcommand>
```

The `!bot` command requires one of the following subcommands:

- `mute`: Prevents the bot from sending messages in the chat
- `unmute`: Allows the bot to send messages in the chat
- `part`: Makes the bot leave the chat

## Examples

### Muting the bot

<ExampleChatInteraction
  inputPersona="moderator" 
  inputMessage="!bot mute"
/>

### Unmuting the bot

<ExampleChatInteraction
  inputPersona="moderator" 
  inputMessage="!bot unmute"
/>

### Removing the bot from chat

<ExampleChatInteraction
  inputPersona="moderator" 
  inputMessage="!bot part"
/>

## Configuration

The `!bot` command is available by default and does not require additional configuration. However, you may need to set up proper permissions to restrict its usage to moderators and the streamer.

### Aliases

There are no default aliases for the `!bot` command.

### Customization

While the core functionality of the `!bot` command cannot be customized, you can create custom commands that complement its features using the StreamElements custom command system.
