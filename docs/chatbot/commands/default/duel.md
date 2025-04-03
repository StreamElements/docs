---
id: duel
title: Using the !duel Command to Challenge Viewers
sidebar_label: "!duel"
description: "Learn how viewers use the StreamElements !duel command to challenge other chat members to a loyalty points duel."
tags:
  - chatbot
  - commands
  - games
  - duel
  - loyalty
  - points
keywords:
- duel
- chatbot
- command
- loyalty points
- StreamElements
- challenge
- chat game
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!duel` command allows viewers to challenge another viewer to a duel, wagering a specified amount of their loyalty points. The challenged user must then [`!accept`](mdc:accept.md) or [`!deny`](mdc:deny.md). This requires the Duel module to be enabled.

## Usage / Syntax

To challenge another user to a duel:

```
!duel <username> <points_bet>
```

## Parameters / Configuration / Options

| Parameter     | Required | Description                                                                       | Example       |
| :------------ | :------- | :-------------------------------------------------------------------------------- | :------------ |
| `<username>`  | Required | The username of the viewer to challenge.                                          | `OpponentUser`|
| `<points_bet>`| Required | The amount of loyalty points to wager. Sender and receiver must have enough points. | `1000`        |

- **Configuration**: Requires the Duel module to be enabled. Settings like win chance and cooldowns are configured in the module settings.
- **Permissions**: Typically available to all viewers, subject to cooldowns and point requirements.

## Examples

User "Challenger" challenges "OpponentUser" to a duel for 1000 points:

<ExampleChatInteraction
  inputPersona="viewer"
  inputUsernameOverride="Challenger"
  inputMessage="!duel OpponentUser 1000"
  outputMessage="@OpponentUser, @Challenger wants to duel you for 1000 points, you can !accept or !deny within 2 minutes"
/>

Attempting to duel yourself:

<ExampleChatInteraction
  inputPersona="viewer"
  inputUsernameOverride="SelfUser"
  inputMessage="!duel SelfUser 500"
  outputMessage="@SelfUser, you can't duel yourself Kappa"
/>

## Related Commands

- [`!accept`](accept.md): Used by the challenged user to accept a duel.
- [`!deny`](deny.md): Used by the challenged user to decline a duel.
- [`!points`](points.md): Check your current loyalty points balance.
