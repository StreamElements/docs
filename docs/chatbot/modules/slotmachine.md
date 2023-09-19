---
tags:
  - chatbot
  - module
  - slotmachine
---

# Slotmachine

### Description

The StreamElements slotmachine module is an interactive chat game. In this game, users can wager their points on a virtual slot machine that is based on emotes.

**How the game works:**

1. The game begins when a user initiates the command `!slots <points>`.
2. The slot machine spins and randomly stops on a combination of emotes.
3. If the user gets three of the same emotes, they win and receive a payout based on their wager. If not, they lose the points they wagered.

### Commands

- [!slots](/chatbot/commands/default/slots) - Starts a game of slot machine.

Note:

- Points can be expressed in several ways:
  - As a percentage of the user's total points. For example, `!slot 50%` will wager 50% of the user's points.
  - Using `k` to represent thousands. For example, `!slot 5k` will wager 5000 points.
  - Using `m` to represent millions. For example, `!slot 1m` will wager 1,000,000 points.
