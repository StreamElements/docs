---
title: Slotmachine Module
sidebar:
  label: Slotmachine
description: "Set up and customize the StreamElements Slotmachine module, a virtual slot machine game where viewers wager points on matching emotes."
keywords:
- StreamElements Chatbot Slotmachine
- Twitch chat game
- virtual gambling for streams
- viewer engagement tools
- stream interaction games
- points system for Twitch
- customizable chat games
- Twitch slot machine
- StreamElements modules
- chat-based gambling simulator
---

The Slotmachine module is an interactive chat game that allows viewers to wager their points on a virtual slot machine. Players can win or lose points based on the outcome of the spin, adding an element of excitement to the stream chat.

## Usage

To start a game, viewers use the `!slots` command followed by the number of points they wish to wager. The slot machine then spins and displays a combination of three emotes.

Only three matching emotes win — two of a kind pays nothing. A winning spin credits the player with `wager × (number of emotes)² × (Return Amount ÷ 100)` points; a losing spin deducts the full wager. With the default five emotes and a 100% Return Amount, the odds of a win are 1 in 25 and a winning spin pays 25× the wager.

## Examples

1. Wager 100 points:

   ```streamelements
   !slots 100
   ```

2. Wager 50% of total points:

   ```streamelements
   !slots 50%
   ```

## Parameters

- `<points>`: The number of points to wager. This can be expressed in several ways:
  - As a whole number (e.g., `100`)
  - As a percentage of the user's total points (e.g., `50%`)
  - Using `k` to represent thousands (e.g., `5k` for 5,000)
  - Using `m` to represent millions (e.g., `1m` for 1,000,000)

## Configuration

Streamers can customize the following settings for the Slotmachine module:

| Setting | Description |
|---------|-------------|
| Emotes | The reel symbols. Defaults to `Kappa`, `PogChamp`, `BibleThump`, `OpieOP`, and `4Head`. Fewer emotes mean more frequent (but smaller) wins, since the payout scales with the square of the emote count. |
| Minimum amount | The minimum (and default) number of points that can be wagered. |
| Return amount | Payout percentage — the "How rigged should the system be?" slider. At 100% the game pays out fair odds; lower than 100% means players lose points over time. |
| User cooldown | The minimum time (in seconds) a specific viewer must wait between spins (default: 10). |
| Global cooldown | The minimum time (in seconds) everyone must wait after any spin. |
| Win / Lose message | The bot's response messages. Available placeholders: `{emotes}`, `{points}`, `{user}`. |

The command also responds to the aliases `!slotmachine`, `!slot`, `!sm`, and `!smp`.

## Related Commands

- [`!slots`](/chatbot/commands/default/slots): Initiates the slot machine game.
- [`!points`](/chatbot/commands/default/points): Check your current point balance.
