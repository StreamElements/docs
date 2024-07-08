---
id: bot
sidebar_label: "!bot"
description: "Manage your StreamElements chatbot with the !bot command. Control bot behavior, including muting, unmuting, and removing the bot from chat."
keywords:
- streamelements chatbot
- twitch bot management
- bot commands
- mute bot
- unmute bot
- remove bot from chat
- stream moderation
---

# !bot

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

```
!bot mute
```

This command will silence the bot, preventing it from sending any messages in the chat.

### Unmuting the bot

```
!bot unmute
```

This command will allow the bot to resume sending messages in the chat.

### Removing the bot from chat

```
!bot part
```

This command will make the bot leave the chat entirely.

## Parameters

The `!bot` command does not have any additional parameters beyond the required subcommand.

## Related Commands

- [`!commands`](commands.md): Lists all available bot commands
- [`!command`](command.md): Adds a new custom command to the bot
- [`!timer`](timer.md): View and manage timers

## Configuration

The `!bot` command is available by default and does not require additional configuration. However, you may need to set up proper permissions to restrict its usage to moderators and the streamer.

## Aliases

There are no default aliases for the `!bot` command.

## Customization

While the core functionality of the `!bot` command cannot be customized, you can create custom commands that complement its features using the StreamElements custom command system.
