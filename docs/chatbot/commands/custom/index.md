---
id: custom-commands
sidebar_label: "Custom Commands"
description: "Learn how to create, manage, and optimize custom chatbot commands for your StreamElements-powered Twitch stream."
tags:
  - chatbot
  - custom commands
  - stream engagement
keywords:
  - StreamElements custom commands
  - Twitch chatbot commands
  - create custom commands
  - manage chat commands
  - personalized stream interactions
  - chatbot customization
  - StreamElements bot
  - Twitch stream engagement
---

# Custom Commands

In addition to the default commands, you can also create your own custom commands. Custom commands allow you to create commands that are tailored to your channel and your community. You can use custom commands to create unique interactions and functionalities that are not possible with the default commands.

## Managing Custom Commands

There are 2 ways to manage a custom commands:
1. Through the creator dashboard
1. Directly in chat with the [!command](../default/command.md) command

### Using the Dashboard to manage custom commands

See [Creating a command](../../gettingstarted/commands.md) in `Getting Started`

### Using chat to manage Custom Commands
#### Creating a Custom Command in chat

The general Syntax is the following:
```
!command add <command name> <response>
```

#### Modifying a Custom Command in chat

```
!command edit <command name> <response>
```

#### Deleting a Custom Command in chat

```
!command remove <command name>
```

#### Displaying the commands text in chat

```
!command show <command name>
```

##### Example Output:

```
@Styler, command test: ${channel} This is a test command. ${settitle ${1:}}
```

#### Changing the options / permissions / cooldowns of a command

```
!command options <command name> <-option> <value>
```

For specifics read the documentation for the [!command](../default/command.md) command
