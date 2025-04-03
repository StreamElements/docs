---
id: bingo
title: Using the !bingo Command for Emote Bingo Game
sidebar_label: "!bingo"
description: "Learn how moderators use the StreamElements !bingo command to start an interactive emote guessing game for loyalty points."
tags:
  - chatbot
  - commands
  - games
  - bingo
  - emotes
  - loyalty
keywords:
- chatbot
- commands
- bingo
- emotes
- viewer engagement
- twitch
- streaming
- loyalty points
- chat game
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!bingo` command starts an interactive emote guessing game in chat. The bot displays a blurred emote from the chosen platform(s), and viewers guess the emote name to win the specified loyalty points. This requires the Bingo module to be enabled.

## Usage / Syntax

Start an emote bingo game:

```
!bingo <platform> <points_reward>
```

## Parameters / Configuration / Options

| Parameter         | Required | Description                                                                                   | Example |
| :---------------- | :------- | :-------------------------------------------------------------------------------------------- | :------ |
| `<platform>`      | Required | Emote source: `twitch`, `bttv`, `ffz`, `7tv`, or `all`.                                        | `all`   |
| `<points_reward>` | Required | The amount of loyalty points awarded to the first viewer who correctly guesses the emote. | `100`   |

- **Configuration**: Requires the Bingo module and Loyalty system to be enabled in the StreamElements dashboard.
- **Permissions**: Typically restricted to moderators and the broadcaster.

## Examples

Start a bingo game using Twitch emotes with a 100 point reward:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!bingo twitch 100"
  outputMessage="@ModUser started an emote bingo for 100 points! Guess the blurred Twitch emote!"
/>

Start a bingo game using emotes from all platforms with a 250 point reward:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!bingo all 250"
  outputMessage="@ModUser started an emote bingo for 250 points! Guess the blurred emote (from any platform)!"
/>

*Note: The bot will also show the blurred image (not represented here) and announce the winner when guessed.*

## Related Commands

- `!points`: Check a user's current loyalty points balance
- `!rewards`: View available loyalty point rewards

## Customization

You can customize the bingo game by:
- Adjusting the reward amount to fit your channel's economy
- Using different emote platforms to vary the game's difficulty
