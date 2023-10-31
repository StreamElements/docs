---
tags:
  - chatbot
  - module
  - raffle
---

# Raffle

:::info
Raffles with multiple winners scale differently based on the number of users that enter.

See [Multi-Winner Raffles](./raffle#multi-winner-raffles) for more information.
:::

The raffle module is an interactive chat game. In this game, a raffle is initiated by a moderator and users can join the raffle by using a specific command.

**How the game works:**

1. The game begins when a moderator initiates the command `!raffle/sraffle`.
2. The chat users can join the raffle by using the command `!join`.
3. After a specified time, the raffle ends and a winner is randomly chosen from the participants.
4. The winner is announced in the chat.

### Commands

- [!sraffle](/chatbot/commands/default/sraffle) - Starts a raffle with a single winner
- [!raffle](/chatbot/commands/default/raffle) - Starts a raffle with multiple winners
- [!join](/chatbot/commands/default/join) - Joins the ongoing raffle.
- [!cancelraffle](/chatbot/commands/default/cancelraffle) - Cancels the ongoing raffle.

### Multi-Winner Raffles

When running a raffle with multiple winners, the number of winners is determined by the number of users that join the raffle. The number of winners is calculated as follows:

- Number of Users > 200
  - Number of Winners = Number of Users / 20
- Number of Users > 50
  - Number of Winners = Number of Users / 8
- Number of Users > 20
  - Number of Winners = Number of Users / 5
- Number of Users > 10
  - Number of Winners = Number of Users / 4
- If only a single user joined the raffle, that user will win.
- All other cases
  - Number of Winners = Number of Users / 2

**NOTE:** If the number of winners is not a whole number, the number will be rounded down.
