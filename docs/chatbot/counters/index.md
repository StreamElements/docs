---
id: counters
description: Learn how to use counters in your Twitch streams to track game deaths, missed shots, or any other event.
keywords:
  - Twitch chatbot counters
  - stream counters
  - game death counter
  - Twitch stream enhancements
  - twitch chat counter
  - interactive streaming tools
  - streamelements counter command
---

# Counters

Counters are an easy way to keep track of certain things in your stream. They can be used to keep track of how many times you've died in a game, or how many times you've missed a cannon minion in league of legends.

You can manage your counters in the [StreamElements Dashboard](https://streamelements.com/dashboard/bot/counters) or use the variable directly from chat listed below.

## Variables

- `getcount` - Retrieves the current count of the counter. For more information, refer to the [getcount documentation](../variables/getcount.md).
- `count` Increments or decrements the counter. For more information, refer to the [count documentation](../variables/count.md).

## Examples

### Add counter command

Let's start by adding a new counter command for missed cannons in league of legends:

1. Create a new command by typing `!cmd add cannon ${count cannon}`
2. Now when you type `!cannon` in chat, it will increment the counter by 1.

![Image](img/0.png 'Add counter command')

---

### Get the current count

Let's create another command to see how many cannons you've missed (Without incrementing the counter):

1. Create a new command by typing `!cmd add missedcannons ${getcount cannon}`
2. Now when you type `!missedcannons` in chat, it will show you the current count of the cannon counter.

![Image](img/1.png 'Get the current count')
