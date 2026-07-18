---
title: Duel Module
sidebar:
  label: Duel
description: "Set up the StreamElements Duel module so viewers can challenge each other to point-wagering duels in chat."
keywords:
- streamelements duel
- twitch chat game
- viewer engagement
- chatbot commands
- stream interaction
- point wagering
- audience retention
- interactive streaming
---

The Duel module is an interactive chat game that allows users to challenge each other to a duel, wagering points for a chance to win.

## How It Works

1. A user initiates a duel using the `!duel` command.
2. The challenged user has 2 minutes to accept or decline the duel.
3. If accepted, the game randomly determines a winner — each duelist has a 50/50 chance.
4. The winner gains the wagered points, and the loser loses them.

## Usage

To initiate a duel, use the following command:

```streamelements
!duel <username> [points]
```

Replace `<username>` with the name of the user you want to challenge, and `[points]` with the number of points you want to wager. The wager is optional — without one, the duel is played for 0 points.

## Examples

1. Challenging a user to a duel for 100 points:

   ```streamelements
   !duel StreamNinja 100
   ```

2. Accepting a duel challenge:

   ```streamelements
   !accept
   ```

## Parameters

- `<username>`: The name of the user you want to challenge.
- `[points]`: The number of points you want to wager in the duel. Supports shorthand like `5k`, `1m`, percentages (`50%`), and `all`. The wager cannot exceed either duelist's current balance, and wagers above the configured maximum amount are automatically capped to it.

## Configuration

You can configure the following settings for the Duel module:

| Setting | Description |
|---------|-------------|
| Cooldown | The cooldown period between duel challenges. |
| Maximum amount | The maximum number of points that can be wagered in a duel. |

## Related Commands

- [`!duel`](/chatbot/commands/default/duel/): Challenges another user to a duel.
- [`!accept`](/chatbot/commands/default/accept/): Accepts a duel challenge.
- [`!deny`](/chatbot/commands/default/deny/): Declines a duel challenge.
- [`!cancelduel`](/chatbot/commands/default/cancelduel/): Cancels an outgoing duel request before it is accepted or denied.

## FAQ

**Q: How is the winner determined?**
A: The winner is randomly selected when the duel is accepted — both duelists have an equal 50/50 chance of winning.

**Q: Can I challenge multiple users at once?**
A: No, you can only challenge one user at a time.

**Q: What happens if the challenged user doesn't respond?**
A: If the challenged user doesn't accept or deny within 2 minutes, the duel request expires, and no points are exchanged.
