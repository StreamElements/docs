---
title: Counters
description: Track game deaths, missed shots, or any other event in your stream with chatbot counters and the count and getcount variables.
keywords:
  - Twitch chatbot counters
  - stream counters
  - game death counter
  - Twitch stream enhancements
  - twitch chat counter
  - interactive streaming tools
  - streamelements counter command
---

Counters are an easy way to keep track of certain things in your stream. They can be used to keep track of how many times you've died in a game, or how many times you've missed a cannon minion in League of Legends.

You can manage your counters in the [StreamElements Dashboard](https://streamelements.com/dashboard/bot/counters) or use the variable directly from chat listed below.

## Variables

- `getcount` - Retrieves the current count of the counter. For more information, refer to the [getcount documentation](/chatbot/variables/getcount/).
- `count` - Increments or decrements the counter. For more information, refer to the [count documentation](/chatbot/variables/count/).

## Examples

### Add counter command

Let's start by adding a new counter command for missed cannons in League of Legends:

1. Create a new command by typing `!cmd add !cannon $(count cannon)`
2. Now when you type `!cannon` in chat, it will increment the counter by 1.

![Image](img/counters-0.png 'Add counter command')

### Get the current count

Let's create another command to see how many cannons you've missed (without incrementing the counter):

1. Create a new command by typing `!cmd add !missedcannons $(getcount cannon)`
2. Now when you type `!missedcannons` in chat, it will show you the current count of the cannon counter.

![Image](img/counters-1.png 'Get the current count')

## Related

- [!editcounter](/chatbot/commands/default/editcounter/) - Set, increment, or decrement a counter's value from chat
- [$(count)](/chatbot/variables/count/) - Increments or decrements a counter
- [$(getcount)](/chatbot/variables/getcount/) - Retrieves the current count without changing it
