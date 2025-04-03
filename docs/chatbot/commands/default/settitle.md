---
id: settitle
title: Using the !settitle Command to Update Twitch Title
sidebar_label: "!settitle"
description: "Learn how moderators use the StreamElements !settitle command to change the Twitch stream title directly from chat."
tags:
  - chatbot
  - commands
  - moderation
  - twitch
  - stream management
keywords:
- settitle
- set title
- change stream title
- update stream title
- chatbot commands
- StreamElements
- Twitch
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch"]} />

## Overview

The `!settitle` command allows the broadcaster or moderators to update the stream's title directly from Twitch chat. This command interacts with the Twitch API to change the title displayed on the channel.

## Usage / Syntax

To update the stream title, use the following syntax:

```
!settitle <new_stream_title>
```

## Parameters / Configuration / Options

| Parameter            | Required | Description                                                  | Example                             |
| :------------------- | :------- | :----------------------------------------------------------- | :---------------------------------- |
| `<new_stream_title>` | Required | The full text for the new stream title (up to Twitch limits). | `Playing Elden Ring - First Playthrough` |

- **Permissions**: This command is typically restricted to moderators and the broadcaster.

## Examples

Changing the stream title:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!settitle Chill vibes and community games!"
  outputMessage="@ModUser changed the title to \"Chill vibes and community games!\""
/>

## Related Commands

- [`!setgame`](setgame.md): Changes the current game/category of the stream
- [`