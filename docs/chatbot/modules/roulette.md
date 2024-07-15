---
id: roulette
sidebar_label: "Roulette"
description: "Learn how to use the StreamElements Chatbot Roulette module for an interactive chat game where users can wager their points."
keywords:
- streamelements
- chatbot
- roulette
- chat game
- points
- wager
---

# Roulette Module

## Overview

The Roulette module is an interactive chat game that allows users to wager their points in a roulette-style gamble. It adds excitement and engagement to your stream by giving viewers a chance to win or lose points based on luck.

## Usage

To start a game of roulette, users type the following command in chat:

```
!roulette <points>
```

The module then randomly determines the outcome of the roulette spin. If the user wins, they receive a payout based on their wager. If they lose, they forfeit the points they wagered.

## Examples

1. Wager 100 points:
   ```
   !roulette 100
   ```

2. Wager 50% of total points:
   ```
   !roulette 50%
   ```

## Parameters

- `<points>`: The number of points to wager. This can be expressed in several ways:
  - As a whole number (e.g., `100`)
  - As a percentage of the user's total points (e.g., `50%`)
  - Using `k` to represent thousands (e.g., `5k` for 5,000 points)
  - Using `m` to represent millions (e.g., `1m` for 1,000,000 points)

## Related Commands

- [`!points`](../commands/default/points.md) - Check your current point balance

## Configuration

Streamers can configure the Roulette module in the StreamElements dashboard, including:

- Minimum wager amount
- Cooldown period between uses
- How rigged the roulette is

## FAQ

**Q: Can users go into negative points?**
A: No, users can only wager points they currently have.

**Q: Is there a limit to how often someone can use the Roulette command?**
A: Yes, there's typically a cooldown period between uses, which can be configured by the streamer.

**Q: Can moderators disable the Roulette game?**
A: Yes, moderators with appropriate permissions can enable or disable the Roulette module through the StreamElements dashboard.
