---
id: setpoints
title: Using the !setpoints Command to Set Loyalty Points
sidebar_label: "!setpoints"
description: "Learn how moderators use the StreamElements !setpoints command to directly set a viewer's loyalty point balance, overwriting their current total."
tags:
  - chatbot
  - commands
  - loyalty
  - points
  - moderation
keywords:
- setpoints command
- set user points
- loyalty points
- twitch chatbot
- streamelements
- channel points
- manage points
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!setpoints` command allows moderators or the broadcaster to set a viewer's loyalty point balance to a specific value. This is useful for corrections or specific reward scenarios, but be aware it overwrites the existing balance.

:::caution
Using this command **overwrites** the user's current point balance entirely. To *add* points instead, use the [`!addpoints`](mdc:addpoints.md) command.
:::

## Usage / Syntax

Set a user's points to a specific value:

```
!setpoints <username> <amount>
```

## Parameters / Configuration / Options

| Parameter    | Required | Description                                           | Example     |
| :----------- | :------- | :---------------------------------------------------- | :---------- |
| `<username>` | Required | The username of the viewer whose points to set.       | `ViewerName`|
| `<amount>`   | Required | The exact number of points to set the user's balance to. | `1000`      |

- **Permissions**: This command is typically restricted to moderators and the broadcaster.

## Examples

Setting a user's points to 1000:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!setpoints ViewerName 1000"
  outputMessage="@ModUser, set ViewerName's points to 1000!"
/>

Setting a user's points to 0:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!setpoints AnotherViewer 0"
  outputMessage="@ModUser, set AnotherViewer's points to 0!"
/>

## Related Commands

- [`!addpoints`](addpoints.md): Add points to a user's balance without overwriting
- [`!points`](points.md): Check a user's current point balance
