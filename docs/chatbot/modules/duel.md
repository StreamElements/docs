---
id: duel
sidebar_label: "Duel"
description: "Boost Twitch viewer engagement with StreamElements Chatbot Duel Module. Learn to set up and use this interactive chat game."
keywords:
- streamelements duel
- twitch chat game
- viewer engagement
- chatbot commands
- stream interaction
- point wagering
- audience retention
- interactive streaming
tags:
- chatbot
- engagement
- game
---

# Duel Module

## Overview

The Duel module is an interactive chat game that allows users to challenge each other to a duel, wagering points for a chance to win.

## Usage

To initiate a duel, use the following command:

```
!duel <username> <points>
```

Replace `<username>` with the name of the user you want to challenge, and `<points>` with the number of points you want to wager.

## Examples

1. Challenging a user to a duel for 100 points:
   ```
   !duel StreamNinja 100
   ```

2. Accepting a duel challenge:
   ```
   !accept
   ```

## Parameters

- `<username>`: The name of the user you want to challenge.
- `<points>`: The number of points you want to wager in the duel.

## Related Commands

- [`!accept`](../commands/default/accept): Accepts a duel challenge.
- [`!deny`](../commands/default/deny): Declines a duel challenge.

## Configuration

You can configure the following settings for the Duel module:

| Setting | Description |
|---------|-------------|
| Cooldown | The cooldown period between duel challenges. |
| Maximum amount | The maximum number of points that can be wagered in a duel. |

## How It Works

1. A user initiates a duel using the `!duel` command.
2. The challenged user has the option to accept or decline the duel.
3. If accepted, the game randomly determines a winner.
4. The winner receives the wagered points.

## FAQ

**Q: How is the winner determined?**
A: The winner is randomly selected by the system when both users have accepted the duel.

**Q: Can I challenge multiple users at once?**
A: No, you can only challenge one user at a time.

**Q: What happens if the challenged user doesn't respond?**
A: If the challenged user doesn't respond within a set time (usually a few minutes), the duel request expires, and no points are exchanged.
