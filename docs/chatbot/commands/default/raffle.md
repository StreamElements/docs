---
id: raffle
title: Using the !raffle Command for Multi-Winner Raffles
sidebar_label: "!raffle"
description: "Learn how to use the StreamElements !raffle command to create engaging viewer raffles with multiple winners and point rewards."
tags:
  - chatbot
  - commands
  - loyalty
  - raffle
  - engagement
keywords:
- raffle
- chat game
- viewer engagement
- multiple winners
- StreamElements command
- loyalty points
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!raffle` command initiates a multi-winner raffle where a total point pot is distributed among the winners. It requires the Raffle module to be enabled and configured. Viewers typically enter using [`!join`](mdc:join.md).

## Usage / Syntax

Start a multi-winner raffle using the following syntax:

```
!raffle <total_pot_amount> <duration_seconds>
```

## Parameters / Configuration / Options

| Parameter            | Required | Description                                                        | Example |
| :------------------- | :------- | :----------------------------------------------------------------- | :------ |
| `<total_pot_amount>` | Required | The total amount of loyalty points to be distributed among winners. | `1000`  |
| `<duration_seconds>` | Required | The duration of the raffle entry period in seconds.               | `120`   |

- **Configuration**: Settings like the maximum number of winners, cooldowns, and announcement messages are configured in the StreamElements dashboard (Bot -> Modules -> Raffles).
- **Aliases**: No default aliases, but custom ones can be created.

## Examples

Start a raffle with a 1000 point pot lasting 120 seconds:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!raffle 1000 120"
  outputMessage='The Multi-Raffle for 1000 points will end in 120 Seconds. Enter by typing "!join"'
/>

## Related Commands

- [`!join`](join.md): Used by viewers to enter an active raffle.
- [`!cancelraffle`](cancelraffle.md): Allows moderators to cancel an ongoing raffle.
