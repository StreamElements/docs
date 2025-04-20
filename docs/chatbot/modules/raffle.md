---
id: raffle
sidebar_label: "Raffle"
description: "Boost viewer engagement with StreamElements Chatbot Raffle module. Learn commands, usage, and multi-winner scaling for interactive stream giveaways."
keywords:
- StreamElements raffle
- Twitch giveaway
- viewer engagement
- stream interaction
- chatbot commands
- multi-winner raffle
- interactive stream games
- StreamElements modules
---

# Raffle Module

## Overview

The Raffle module is an interactive chat game that allows streamers to engage their audience. Moderators can initiate a raffle, and viewers can join for a chance to win. This feature is great for giveaways, selecting participants for games, or simply adding fun interaction to your stream.

## Usage

1. A moderator starts the raffle using `!raffle` or `!sraffle`.
2. Viewers join the raffle by typing `!join` in chat.
3. After a set time, the raffle ends, and winner(s) are randomly selected.
4. The winner(s) are announced in chat.

## Examples

Single-winner raffle:
```
Moderator: !sraffle
Bot: A raffle has started! Type !join to enter.
Viewer1: !join
Viewer2: !join
Bot: The raffle has ended. The winner is Viewer2!
```

Multi-winner raffle:
```
Moderator: !raffle
Bot: A multi-winner raffle has started! Type !join to enter.
[Multiple viewers join]
Bot: The raffle has ended. The winners are Viewer3, Viewer7, and Viewer12!
```

## Parameters

- `!raffle [points] [duration]`: Start a multi-winner raffle. Optional points and duration in seconds (default is 5000 points and 60 seconds).
- `!sraffle [points] [duration]`: Start a single-winner raffle. Optional points and duration in seconds (default is 5000 points and 60 seconds).

## Related Commands

- [`!raffle`](../commands/default/raffle.mdx): Initiates the raffle process.
- [`!join`](../commands/default/join.mdx): Used by viewers to enter an ongoing raffle.
- [`!cancelraffle`](../commands/default/cancelraffle.mdx): Cancels the current raffle (moderators only).

## FAQ

**Q: How are winners determined in multi-winner raffles?**
A: The number of winners scales based on the number of participants:

- Over 200 participants: 1 winner per 20 entrants
- 51-200 participants: 1 winner per 8 entrants
- 21-50 participants: 1 winner per 5 entrants
- 11-20 participants: 1 winner per 4 entrants
- 2-10 participants: Half the participants win (rounded down)
- 1 participant: That participant wins

**Q: Can I customize the raffle duration?**
A: Yes, you can specify the duration in seconds when starting a raffle, e.g., `!raffle 5000 120` for a 5000 point raffle that runs for 2 minutes.

**Q: How do I prevent the same person from winning multiple times?**
A: The Raffle module automatically ensures that each participant can only win once per raffle.
