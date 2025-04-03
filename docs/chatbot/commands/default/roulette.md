---
id: roulette
title: Using the !roulette Command for Point Betting
sidebar_label: "!roulette"
description: "Learn how viewers use the StreamElements !roulette command to play a game of chance, betting loyalty points for potential winnings."
tags:
  - chatbot
  - commands
  - loyalty
  - points
  - games
  - betting
keywords:
- roulette
- chatbot
- commands
- loyalty
- points
- betting
- gambling
- chat game
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!roulette` command allows viewers to play a simple game of chance, betting their loyalty points. Depending on the outcome (and the streamer's configuration), they can win or lose points. This requires the Roulette module to be enabled.

## Usage / Syntax

Viewers use the following syntax to play:

```
!roulette <bet_amount>
```

## Parameters / Configuration / Options

| Parameter      | Required | Description                                                                                                                                  | Example |
| :------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------- | :------ |
| `<bet_amount>` | Required | The amount of loyalty points to bet. Can be a number (`100`), percentage (`10%`), use `k` for thousands (`10k`), or `m` for millions (`1m`). | `100`   |

- **Configuration**: Streamers configure the Roulette module in the StreamElements dashboard (Bot -> Modules -> Roulette), setting options like:
    - Minimum/maximum bet amounts.
    - Win/loss chances and payout multipliers.
    - Cooldown periods.
    - Custom response messages.

## Examples

Betting 100 points:

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!roulette 100"
  outputMessage="ViewerName won 100 points in roulette and now has 1100 points! LUL"
  />

Betting 10% of current points:

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!roulette 10%"
  outputMessage="ViewerName lost 50 points in roulette and now has 450 points. FeelsBadMan"
/>

Betting 5,000 points using 'k':

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!roulette 5k"
  outputMessage="ViewerName won 5000 points in roulette and now has 25000 points! PogChamp"
/>

*Note: Win/loss messages and outcomes depend on module configuration.*

## Related Commands

- [`!points`](points.md): Check your current point balance
