---
title: Bingo Module
sidebar:
  label: Emote Bingo
description: "Run the Emote Bingo chat game with the StreamElements Chatbot using emotes from Twitch, BTTV, FFZ, and 7TV."
keywords:
- StreamElements Emote Bingo
- Twitch chat games
- interactive stream engagement
- BTTV emote game
- FFZ bingo module
- 7TV chat interaction
- Twitch emote challenges
- StreamElements chatbot features
- viewer participation games
- emote-based stream activities
- Twitch streamer tools
- chat engagement strategies
- interactive streaming content
- emote recognition game
- StreamElements bot commands
---

The Emote Bingo module is an interactive chat game that generates a bingo card with various emotes. Players compete to identify the correct emote.

## Usage

To start a Bingo game, a moderator must use the `!bingo` command with specific parameters. The winner is the first chatter to post the secret emote in chat, and they are awarded the prize points.

## Examples

1. Start a game using only Twitch emotes with a 100 point reward:

   ```streamelements
   !bingo twitch 100
   ```

2. Start a game using all available emote providers with a 500 point reward:

   ```streamelements
   !bingo all 500
   ```

## Parameters

- `<emote_provider>`: Specifies the source of emotes for the game. Options include:
  - `twitch`: Twitch emotes only
  - `bttv`: BetterTTV emotes only
  - `ffz`: FrankerFaceZ emotes only (alias: `frankerz`)
  - `7tv`: 7TV emotes only (aliases: `seventv`, `thirdpartything`, `yeahbut7tv`)
  - `all`: Includes emotes from all providers
- `[points]`: The number of points awarded to the winner. Optional — if omitted, the prize defaults to half of the configured maximum points. The prize is capped at the configured maximum, and can never exceed 1,000,000 points.

A running game can be cancelled with `!bingo cancel` (aliases: `end`, `stop`, `exit`).

## Configuration

The Emote Bingo module has the following settings in the StreamElements dashboard:

| Setting | Description |
|---------|-------------|
| Enabled | Whether the module is enabled |
| Maximum points | The maximum prize a bingo game can award (default: 4000) |

## Related Commands

- [`!bingo`](/chatbot/commands/default/bingo/): Starts an Emote Bingo game.
