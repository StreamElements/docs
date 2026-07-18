---
title: Roulette Module
sidebar:
  label: Roulette
description: "Set up the StreamElements Roulette module, a chat game where viewers wager loyalty points on a roulette spin to win or lose."
keywords:
- StreamElements roulette
- Twitch chat game
- viewer engagement
- stream points
- chatbot commands
- interactive streaming
- gambling simulator
- StreamElements bot
- Twitch chat interaction
- point wagering system
- roulette game for Twitch
- StreamElements modules
- chat-based gambling
- Twitch stream interaction
- point system for streams
---

The Roulette module is an interactive chat game that allows users to wager their points in a roulette-style gamble. It adds excitement and engagement to your stream by giving viewers a chance to win or lose points based on luck.

## Usage

To start a game of roulette, users type the following command in chat:

```streamelements
!roulette <points>
```

The module then randomly determines the outcome of the roulette spin. The payout is even money: a winner gains exactly the amount they wagered, and a loser forfeits it. The chance of winning is set by the streamer with the win-chance slider (see [Configuration](#configuration)).

## Examples

1. Wager 100 points:

   ```streamelements
   !roulette 100
   ```

2. Wager 50% of total points:

   ```streamelements
   !roulette 50%
   ```

3. Wager all points:

   ```streamelements
   !roulette all
   ```

## Parameters

- `<points>`: The number of points to wager. This can be expressed in several ways:
  - As a whole number (e.g., `100`)
  - As a percentage of the user's total points (e.g., `50%`)
  - Using `k` to represent thousands (e.g., `5k` for 5,000 points)
  - Using `m` to represent millions (e.g., `1m` for 1,000,000 points)
  - The keyword `all` to wager all points

## Configuration

Streamers can configure the Roulette module in the StreamElements dashboard with the following settings:

| Setting | Description |
|---------|-------------|
| Win Chance | The "How rigged should the system be?" slider sets the percentage chance that a bet wins: 0% means viewers always lose, 100% means they always win. |
| Minimum Amount | The minimum number of points required to play (Default: 1). |
| User Cooldown | The minimum time (in seconds) a specific user must wait before playing again (Default: 60). |
| Global Cooldown | The minimum time (in seconds) everyone must wait after a roulette spin before anyone can play again (Default: 0). |
| Win Message | The message shown when a user wins. |
| Lose Message | The message shown when a user loses. |
| All-in Win Message | The message shown when a user bets `all` and wins. |
| All-in Lose Message | The message shown when a user bets `all` and loses. |

See the [`!roulette` command reference](/chatbot/commands/default/roulette) for the default message templates and available message variables.

## Related Commands

- [`!roulette`](/chatbot/commands/default/roulette): Initiates the roulette game.
- [`!points`](/chatbot/commands/default/points): Check your current point balance.

## FAQ

**Q: Can users go into negative points?**
A: No, users can only wager points they currently have.

**Q: Is there a limit to how often someone can use the Roulette command?**
A: Yes — the User Cooldown setting (60 seconds by default) limits how often each viewer can play, and an optional Global Cooldown limits how often anyone can.

**Q: Can moderators disable the Roulette game?**
A: Yes, moderators with appropriate permissions can enable or disable the Roulette module through the StreamElements dashboard.
