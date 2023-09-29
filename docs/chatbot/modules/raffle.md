---
tags:
  - chatbot
  - module
  - raffle
---

# Raffle

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
