---
id: slots
sidebar_label: "!slots"
description: "Learn how to use the !slots command in StreamElements chatbot to play a fun slot machine mini-game and win loyalty points in your Twitch chat."
keywords:
- slots
- slot machine
- gambling
- mini-game
- loyalty points
- chatbot
- StreamElements
- Twitch
---

# !slots

## Overview

The `!slots` command allows viewers to play a simple slot machine game in your Twitch chat. Users bet a certain amount of loyalty points and have a chance to win a multiple of their bet back.

## Usage

To use the `!slots` command, viewers type the command followed by the number of points they want to bet:

```
!slots <bet>
```

Where `<bet>` is the number of loyalty points the user wants to wager.

## Examples

Here are two examples of how to use the `!slots` command:

1. Betting 100 points:
   ```
   !slots 100
   ```

2. Betting 500 points:
   ```
   !slots 500
   ```

## Parameters

The `!slots` command has one required parameter:

- `bet`: The amount of loyalty points the user wants to bet. This must be a positive integer.

## Example Output

When a user plays the slot machine, they'll receive a response indicating the result. For example:

```
@Styler you got Kappa | Kappa | Keepo and lost your 100 points LUL
```

Or, in case of a win:

```
@Styler you got Kappa | Kappa | Kappa and won 300 points PogChamp
```

## Related Commands

- [`!points`](points.md): Check your current loyalty points balance
- [`!roulette`](roulette.md): Another game of chance using loyalty points

## Configuration

Streamers can configure various aspects of the `!slots` command in the StreamElements dashboard, such as:

- Minimum bet amounts
- Emotes to use for the slot machine symbols
- Cooldown time between uses

## Customization

You can customize the slot machine symbols and output messages to fit your channel's theme. Access these options in the StreamElements dashboard under the Chatbot section.
