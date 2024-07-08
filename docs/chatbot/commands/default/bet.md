---
id: bet
sidebar_label: "!bet"
description: "Learn how to use the !bet command in StreamElements Chatbot to engage your Twitch audience with interactive betting contests."
keywords:
- Twitch chatbot
- viewer engagement
- loyalty rewards
- interactive commands
- betting system
---

# !bet

## Overview

The `!bet` command allows viewers to participate in interactive betting contests, enhancing engagement and potentially earning rewards. This feature is an excellent way to boost viewer loyalty and create exciting moments during your streams.

## Usage

To place a bet, viewers use the following syntax:

```
!bet <option> <points>
```

## Parameters

- `<option>`: The betting option the viewer wants to choose (required).
- `<points>`: The number of points to wager (required).

**Note:** Points can be expressed in several ways:
- As a percentage of the user's total points (e.g., `50%`)
- Using `k` to represent thousands (e.g., `5k` for 5,000)
- Using `m` to represent millions (e.g., `1m` for 1,000,000)

## Examples

1. Betting 10 points on the "win" option:
   ```
   !bet win 10
   ```
   Output:
   ```
   @Styler, you have bet 10 nammers on Win.
   ```

2. Betting 50% of available points on the "lose" option:
   ```
   !bet lose 50%
   ```
   Output:
   ```
   @Viewer123, you have bet 500 nammers on Lose.
   ```

3. Betting 5,000 points using the "k" abbreviation:
   ```
   !bet draw 5k
   ```
   Output:
   ```
   @StreamFan, you have bet 5000 nammers on Draw.
   ```

## Related Commands

- `!points`: Check your current point balance
- `!givepoints`: Transfer points to another user (if enabled)

## Configuration

Streamers and moderators can configure betting options, point limits, and other settings through the StreamElements dashboard. Refer to the StreamElements documentation for detailed configuration instructions.

## Customization

The betting system can be customized to fit your stream's theme. Consider renaming "points" to match your channel's currency (e.g., "coins," "gems," or "bucks") for a more personalized experience.
