---
id: bingo
sidebar_label: "Bingo"
description: "Learn how to use the Emote Bingo module in StreamElements Chatbot for interactive chat games with Twitch, BTTV, FFZ, and 7TV emotes."
keywords:
- chatbot
- module
- bingo
- emote
- game
- Twitch
- BTTV
- FFZ
- 7TV
---

# Bingo Module

## Overview

The Emote Bingo module is an interactive chat game that generates a bingo card with various emotes. Players compete to identify the correct emote.

## Usage

To start a Bingo game, a moderator must use the `!bingo` command with specific parameters. The game ends when a user correctly identifies the chosen emote in chat.

## Examples

1. Start a game using only Twitch emotes with a 100 point reward:
   ```
   !bingo twitch 100
   ```

2. Start a game using all available emote providers with a 500 point reward:
   ```
   !bingo all 500
   ```

## Parameters

- `<emote_provider>`: Specifies the source of emotes for the game. Options include:
  - `twitch`: Twitch emotes only
  - `bttv`: BetterTTV emotes only
  - `ffz`: FrankerFaceZ emotes only
  - `7tv`: 7TV emotes only
  - `all`: Includes emotes from all providers
- `<points>`: The number of points awarded to the winner

## Related Commands

- [!bingo](/chatbot/commands/default/bingo)

## Configuration

No additional configuration is required for the Bingo module.
