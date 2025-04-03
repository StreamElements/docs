---
id: sraffle
title: Using the !sraffle Command for Single Raffles
sidebar_label: "!sraffle"
description: "Learn how to use the !sraffle command in StreamElements chatbot to create engaging single raffle events in your stream chat."
tags:
  - chatbot
  - loyalty
  - raffle
  - commands
keywords:
- sraffle command
- StreamElements chatbot
- raffle event
- loyalty points
- chat engagement
- stream interaction
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!sraffle` command initiates a single raffle event in your stream chat. This command allows you to quickly create an engaging activity for your viewers, offering them a chance to win loyalty points.

## Usage / Syntax

Use the following syntax to start a single raffle:

```
!sraffle [win_points] [duration]
```

## Parameters / Configuration / Options

| Parameter    | Required | Description                                                              | Example     |
| :----------- | :------- | :----------------------------------------------------------------------- | :---------- |
| `win_points` | Optional | The amount of loyalty points the winner will receive. Defaults vary.   | `500`       |
| `duration`   | Optional | The duration of the raffle in seconds. Defaults vary.                    | `100`       |

- **Defaults**: The default values for `win_points` and `duration`, along with the announcement message text and emotes, can be configured in your StreamElements dashboard under Chatbot settings -> Modules -> Raffles.

## Examples

Start a raffle with default settings:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!sraffle"
  outputMessage='PogChamp A Raffle has begun for [Default Points] points PogChamp It will end in [Default Duration] seconds. Enter by typing "!join" OpieOP'
/>

Create a raffle for 500 points lasting 100 seconds:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!sraffle 500 100"
  outputMessage='PogChamp A Raffle has begun for 500 points PogChamp It will end in 100 seconds. Enter by typing "!join" OpieOP'
/>

Remember, viewers must type `!join` to participate in the raffle. The winner will be randomly selected and announced when the raffle ends.

## Related Commands

- [`!join`](join.md): Viewers use this command to enter the raffle.
- [`!points`](points.md): Allows viewers to check their current point balance.

## Customization

You can customize the raffle announcement message in your StreamElements dashboard. This allows you to personalize the text and emotes used when a raffle begins.
