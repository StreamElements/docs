---
id: chatbot-variables
description: Learn how to use variables in StreamElements chat commands to enhance interaction and functionality. This guide covers syntax and examples.
keywords:
  - chatbot variables
  - StreamElements variables
  - chat command variables
  - dynamic chat commands
  - chatbot placeholders
---

# Chatbot Variables

:::info New Variable
We've added a new AI variable! Check out the [$(ai) Variable](variables/ai) documentation to learn how to integrate AI-generated responses into your chat commands.
:::

## Introduction to Variables in Chat Commands

Chat commands support variables in a dynamic way. Variables are placeholders that can be used in chat commands to represent a specific value or piece of information. When a command is triggered, these variables are replaced with the actual values they represent.

For example, in the command `${uptime shroud}`, `shroud` is a variable representing a username. When this command is executed, the `uptime` of the user `shroud` is returned.

Variables make chat commands more flexible and powerful, allowing for a wide range of interactions and functionalities.

In addition to the `${}` syntax, we also support the `$()` syntax for variables. Both of these syntaxes can be used interchangeably in chat commands. For instance, the command `${uptime shroud}` can also be written as `$(uptime shroud)`.

import DocCardList from '@theme/DocCardList';

<DocCardList />
