---
id: setgame
title: Using the !setgame Command to Update Twitch Category
sidebar_label: "!setgame"
description: "Learn how moderators use the StreamElements !setgame command to update the stream's game category directly from Twitch chat."
tags:
  - chatbot
  - commands
  - moderation
  - twitch
  - stream management
keywords:
- setgame
- Twitch game category
- StreamElements bot
- update stream game
- change game on Twitch
- stream category
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch"]} />

## Overview

The `!setgame` command allows the broadcaster or moderators to update the stream's current game category directly from Twitch chat. This command interacts with the Twitch API to change the category displayed on the channel.

## Usage / Syntax

To update the game category, use the following syntax:

```
!setgame <game_name>
```

## Parameters / Configuration / Options

| Parameter     | Required | Description                                                                                                | Example        |
| :------------ | :------- | :--------------------------------------------------------------------------------------------------------- | :------------- |
| `<game_name>` | Required | The name of the game category to set. Twitch's API uses fuzzy matching, so exact spelling isn't always required. | `Just Chatting` |

- **Permissions**: This command is typically restricted to moderators and the broadcaster.
- **Aliases**: No default aliases, but custom ones can be created.

## Examples

Setting the game category to "Fortnite":

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!setgame Fortnite"
  outputMessage='@ModUser changed the game to "Fortnite"!'
/>

Setting the category using a common abbreviation:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!setgame OSRS"
  outputMessage='@ModUser changed the game to "Old School RuneScape"!'
/>

## Related Commands

- [`!settitle`](settitle.md): Updates the stream title
- [`!uptime`](uptime.md): Displays how long the stream has been live
