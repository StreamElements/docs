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
  - chatbot custom commands
  - Shoutout command
  - Weather command
  - Stream Uptime command
---

# Custom Commands

In addition to the default commands, you can also create your own custom commands. Custom commands allow you to create commands that are tailored to your channel and your community. You can use custom commands to create unique interactions and functionalities that are not possible with the default commands.

## Managing Custom Commands

There are 2 ways to manage a custom commands:

1. Through the creator dashboard
2. Directly in chat with the [!command](../default/command.mdx) command

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

##### Example Output

```
@Styler, command test: ${channel} This is a test command. ${settitle ${1:}}
```

#### Changing the options / permissions / cooldowns of a command

```
!command options <command name> <-option> <value>
```

For specifics read the documentation for the [!command](../default/command.mdx) command

## Examples

### Dynamic Greeting Command

This command greets the user and tells them when they last visited the stream.

```
!cmd add !hello $(user), welcome to the stream! You last visited $(user.lastseen) ago.
```

**Output:**
```
Viewer: !hello
Bot: Viewer123, welcome to the stream! You last visited 2 days 5 hours ago.
```

Variables used:

- [$(user)](../../variables/user.md#user) - The name of the viewer
- [$(user.lastseen)](../../variables/user.md#userlastseen) - The time the viewer last visited the stream

### Stream Uptime Command

This command shows how long the stream has been live, the current game, and viewer count.

```
!cmd add !stream The stream has been live for $(uptime). We're currently playing $(channel.game) for $(channel.viewers) viewers!
```

**Output:**

```
Viewer: !stream
Bot: The stream has been live for 2 days 5 hours. We're currently playing Fortnite for 1234 viewers!
```

Variables used:

- [$(uptime)](../../variables/channel.md#channeluptime) - The time the stream has been live
- [$(channel.game)](../../variables/channel.md#channelgame) - The game the stream is currently playing
- [$(channel.viewers)](../../variables/channel.md#channelviewers) - The number of viewers currently watching the stream

### Weather Command

This command checks the weather for a specified location.

```
!cmd add !weather ${sender}, weather in: $(weather ${1:})
```

**Output:**

```
Viewer: !weather Tokyo
Bot: Styler, weather in: Aarhus, Denmark: 🌜 17.7 °C (63.9 °F). Feels like 17.7 °C (63.9 °F). Patchy rain nearby. Wind is blowing from the South at 9.7 km/h (6.0 mp/h). 89% humidity. Visibility: 10 km (6 miles). Air pressure: 1008 hPa.
```

Variables used:

- [$(weather)](../../variables/weather.md) - The current weather in a specified location

### Shoutout Command

This command sends a simple shoutout to a specified user.

```
!cmd add !shoutout Check out ${1}, they are playing ${game ${1}} at https://twitch.tv/${1}
```

**Output:**

```
Viewer: !shoutout Styler
Bot: Check out Styler, they are playing Counter-Strike at https://twitch.tv/Styler
```

Variables used:

- [$(args)](../../variables/args.md) - The name of the user to shoutout
- [$(game)](../../variables/game.md) - The game the user is currently playing
