---
id: raffle
sidebar_label: "Raffle Module"
description: "Learn how to use the StreamElements Chatbot Raffle module for interactive viewer engagement. Includes commands, usage, and multi-winner scaling."
keywords:
- streamelements
- chatbot
- raffle
- viewer engagement
- stream interaction
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

- `!raffle [duration]`: Start a multi-winner raffle. Optional duration in seconds (default is 60).
- `!sraffle [duration]`: Start a single-winner raffle. Optional duration in seconds (default is 60).

## Related Commands

- [`!join`](../commands/default/join.md): Used by viewers to enter an ongoing raffle.
- [`!cancelraffle`](../commands/default/cancelraffle.md): Cancels the current raffle (moderators only).


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
A: Yes, you can specify the duration in seconds when starting a raffle, e.g., `!raffle 120` for a 2-minute raffle.

**Q: How do I prevent the same person from winning multiple times?**
A: The Raffle module automatically ensures that each participant can only win once per raffle.
