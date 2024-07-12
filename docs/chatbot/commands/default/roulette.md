---
id: roulette
sidebar_label: "!roulette"
description: "Learn how to use the !roulette command in StreamElements chatbot to start a roulette game and bet points in your Twitch chat."
keywords:
- roulette
- chatbot
- commands
- loyalty
- points
- betting
- gambling
---

# !roulette

## Overview

The `!roulette` command allows viewers to participate in a roulette game, betting their channel points for a chance to win more. This command is part of the StreamElements chatbot's loyalty system and can add an exciting, interactive element to your stream.

## Usage

```
!roulette <bet>
```

The `<bet>` parameter is required and represents the number of points the user wants to wager.

## Examples

Here are some practical examples of how to use the `!roulette` command:

```
!roulette 100
!roulette 10k
!roulette 1m
!roulette 10%
```

Example output:

```
Styler won 10 points in roulette and now has 2683 points! LUL
```

## Parameters

- `<bet>` (required): The amount of points to bet. This can be expressed in several ways:
  - As a whole number (e.g., `100`)
  - As a percentage of the user's total points (e.g., `50%`)
  - Using `k` to represent thousands (e.g., `5k` for 5,000)
  - Using `m` to represent millions (e.g., `1m` for 1,000,000)

## Related Commands

- [`!points`](points.md): Check your current point balance

## Configuration

Streamers can configure the `!roulette` command in their StreamElements dashboard. Options may include:

- Setting minimum and maximum bet amounts
- Adjusting win probabilities
- Customizing response messages

