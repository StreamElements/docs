---
tags:
  - chatbot
  - module
  - roulette
---

# Roulette

The StreamElements chatbot roulette module is an interactive chat game. In this game, users can wager their points in a roulette-style gamble.

**How the game works:**

1. The game begins when a user initiates the command `!roulette <points>`.
2. The module randomly determines the outcome of the roulette spin.
3. If the user wins, they receive a payout based on their wager. If they lose, they lose the points they wagered.

### Commands

- [!roulette](/chatbot/commands/default/roulette) - Starts a game of roulette.

Note:

- Points can be expressed in several ways:
  - As a percentage of the user's total points. For example, `!roulette 50%` will wager 50% of the user's points.
  - Using `k` to represent thousands. For example, `!roulette 5k` will wager 5000 points.
  - Using `m` to represent millions. For example, `!roulette 1m` will wager 1,000,000 points.
