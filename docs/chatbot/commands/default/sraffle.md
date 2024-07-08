---
id: sraffle
sidebar_label: "!sraffle"
description: "Learn how to use the !sraffle command in StreamElements chatbot to create engaging single raffle events in your stream chat."
keywords:
- sraffle command
- StreamElements chatbot
- raffle event
- loyalty points
- chat engagement
- stream interaction
---

# !sraffle

## Overview

The `!sraffle` command initiates a single raffle event in your stream chat. This command allows you to quickly create an engaging activity for your viewers, offering them a chance to win loyalty points.

## Usage

```
!sraffle [win_points] [duration]
```

## Examples

1. Start a raffle with default settings:
   ```
   !sraffle
   ```

2. Create a raffle for 500 points lasting 100 seconds:
   ```
   !sraffle 500 100
   ```

## Parameters

- `win_points` (optional): The amount of points the winner will receive. If not specified, a default amount will be used.
- `duration` (optional): The duration of the raffle in seconds. If not specified, a default duration will be applied.

## Related Commands

- [`!join`](join.md): Viewers use this command to enter the raffle.
- [`!points`](points.md): Allows viewers to check their current point balance.

## Configuration

The default values for `win_points` and `duration` can be configured in your StreamElements dashboard under the Chatbot settings.

## Customization

You can customize the raffle announcement message in your StreamElements dashboard. This allows you to personalize the text and emotes used when a raffle begins.

## Examples of Bot Responses

When you start a raffle, the bot will announce it in chat. For example:

```
PogChamp A Raffle has begun for 500 points PogChamp It will end in 100 seconds. Enter by typing "!join" OpieOP
```

Remember, viewers must type `!join` to participate in the raffle. The winner will be randomly selected and announced when the raffle ends.
