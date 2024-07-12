---
id: raffle
sidebar_label: "!raffle"
description: "Learn how to use the !raffle command in StreamElements to create engaging viewer raffles with multiple winners."
keywords:
- raffle
- chat game
- viewer engagement
- multiple winners
- StreamElements command
---

# !raffle

## Overview

The `!raffle` command allows streamers and moderators to create interactive raffles with multiple winners. This feature engages viewers by giving them a chance to win prizes or recognition during the stream.

## Usage

```
!raffle <amount> <duration>
```

## Examples

1. Start a raffle with a 100 point reward that lasts for 60 seconds:
   ```
   !raffle 100 60
   ```
   Output:
   ```
   The Multi-Raffle for 100 points will end in 60 Seconds. Enter by typing "!join"
   ```

2. Create a longer raffle with a larger reward:
   ```
   !raffle 500 180
   ```
   Output:
   ```
   The Multi-Raffle for 500 points will end in 180 Seconds. Enter by typing "!join"

   ```

## Parameters

- `<amount>` (required): The total reward (pot) for the raffle, which will be distributed among the winners.
- `<duration>` (required): The duration of the raffle in seconds.

## Related Commands

- [`!join`](join.md): Used by viewers to enter an active raffle.
- [`!cancelraffle`](cancelraffle.md): Allows moderators to cancel an ongoing raffle.

## Configuration

Moderators can configure raffle settings, such as the maximum number of winners or cooldown period between raffles, through the StreamElements dashboard.

## Aliases

By default, there are no aliases for the `!raffle` command. However, streamers can create custom aliases through the StreamElements dashboard if desired.
