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

To start a game, viewers use the `!slots` command followed by the number of points they wish to wager. The slot machine then spins and displays a combination of emotes. If three matching emotes appear, the player wins and receives a payout based on their wager.

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
| Emotes | The emotes used in the slot machine. |
| Minimum wager | The minimum amount of points that can be wagered. |

## Related Commands

- [`!slots`](/chatbot/commands/default/slots): Initiates the slot machine game.
- [`!points`](/chatbot/commands/default/points): Check your current point balance.
