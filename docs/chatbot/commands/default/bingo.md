---
id: bingo
sidebar_label: "!bingo"
description: "Engage viewers with an interactive emote bingo game using the !bingo command"
keywords:
- chatbot
- commands
- bingo
- emotes
- viewer engagement
- twitch
- streaming
- loyalty points
---

# !bingo

## Overview

The `!bingo` command starts an interactive emote bingo game in your chat. It randomly selects an emote from a specified platform, and viewers try to guess the correct emote to win loyalty points.

## Usage

```
!bingo <platform> <points>
```

## Examples

1. Start a bingo game using Twitch emotes with a 100-point reward:
   ```
   !bingo twitch 100
   ```

2. Start a bingo game using all supported platforms with a 250-point reward:
   ```
   !bingo all 250
   ```

## Parameters

- `<platform>` (required): The platform(s) to use for emotes. Options:
  - `twitch`: Twitch emotes
  - `bttv`: BetterTTV emotes
  - `ffz`: FrankerFaceZ emotes
  - `7tv`: 7TV emotes
  - `all`: All supported platforms
- `<points>` (required): The number of loyalty points to reward the winner

## Related Commands

- `!points`: Check a user's current loyalty points balance
- `!rewards`: View available loyalty point rewards

## Configuration

To use the `!bingo` command, ensure that:
1. The Bingo module is enabled in your StreamElements chatbot settings
2. You have set up a loyalty points system for your channel

## Customization

You can customize the bingo game by:
- Adjusting the reward amount to fit your channel's economy
- Using different emote platforms to vary the game's difficulty
