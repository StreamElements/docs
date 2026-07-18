---
title: Variables
description: Reference of all StreamElements Chatbot variables for chat commands, grouped by category, with syntax and usage links.
keywords:
  - chatbot variables
  - StreamElements variables
  - chat command variables
  - dynamic chat commands
  - chatbot placeholders
sidebar:
  label: Overview
  order: 0
---

Chat commands support variables in a dynamic way. Variables are placeholders that can be used in chat commands to represent a specific value or piece of information. When a command is triggered, these variables are replaced with the actual values they represent.

For example, in the command `$(uptime shroud)`, `shroud` is a variable representing a username. When this command is executed, the `uptime` of the user `shroud` is returned.

Variables make chat commands more flexible and powerful, allowing for a wide range of interactions and functionalities.

:::tip[In a hurry?]
See the [Variables cheat sheet](/chatbot/variables/cheat-sheet/) — every variable with its syntax and return value on a single page.
:::

:::note
In addition to the `$()` syntax, the `${}` syntax is also supported. Both forms are interchangeable in chat commands: `$(uptime shroud)` can also be written as `${uptime shroud}`.
:::

:::note
Variables work on all platforms unless a page notes otherwise — on YouTube, `$(user)` (and its sub-variables), `$(game)`, and `$(redeem)` are not available.
:::

## Stream Info

| Variable | Description |
| --- | --- |
| [`$(channel)`](/chatbot/variables/channel/) | Channel information such as name, viewer count, followers, and subscribers. |
| [`$(game)`](/chatbot/variables/game/) | Display the current game on a Twitch channel. |
| [`$(title)`](/chatbot/variables/title/) | Display a channel's title. Also available as `$(status)`. |
| [`$(uptime)`](/chatbot/variables/uptime/) | Display stream uptime for any channel. |
| [`$(provider)`](/chatbot/variables/provider/) | Display the platform the channel runs on: `twitch`, `youtube`, `trovo`, or `kick`. |

## Stream Management

| Variable | Description |
| --- | --- |
| [`$(setgame)`](/chatbot/variables/setgame/) | Change the stream's game category. |
| [`$(settitle)`](/chatbot/variables/settitle/) | Change the stream title. |

## User & Chat

| Variable | Description |
| --- | --- |
| [`$(user)`](/chatbot/variables/user/) | User information such as name, points, and rank; accepts a username argument. |
| [`$(sender)`](/chatbot/variables/sender/) | Information about the user who triggered the command. Also available as `$(source)`. |
| [`$(touser)`](/chatbot/variables/touser/) | Display a user's name or a specified word. |
| [`$(1)`, `$(1:)`](/chatbot/variables/args/) | Access the words of the message that triggered the command. |
| [`$(msgid)`](/chatbot/variables/msgid/) | Retrieve the unique message ID. |
| [`$(pointsname)`](/chatbot/variables/pointsname/) | Display the channel's custom loyalty points name. |
| [`$(redeem)`](/chatbot/variables/redeem/) | Redeem a loyalty store item straight from a chat command. |

## Emotes

| Variable | Description |
| --- | --- |
| [`$(twitchemotes)`](/chatbot/variables/twitchemotes/) | Display available Twitch subscriber emotes. |
| [`$(bttvemotes)`](/chatbot/variables/bttvemotes/) | Display active BetterTTV emotes in the channel. |
| [`$(ffzemotes)`](/chatbot/variables/ffzemotes/) | Display active FrankerFaceZ emotes in the channel. |
| [`$(7tvemotes)`](/chatbot/variables/7tvemotes/) | List active 7TV emotes in the channel. |

## Counters & Data

| Variable | Description |
| --- | --- |
| [`$(count)`](/chatbot/variables/count/) | Create and manage custom counters. |
| [`$(getcount)`](/chatbot/variables/getcount/) | Retrieve a counter value without incrementing it. |
| [`$(quote)`](/chatbot/variables/quote/) | Display random or specific saved quotes. |

## Games

| Variable | Description |
| --- | --- |
| [`$(leagueoflegends)`](/chatbot/variables/leagueoflegends/) | Get a League of Legends player's rank and LP. |
| [`$(teamfighttactics)`](/chatbot/variables/teamfighttactics/) | Get a Teamfight Tactics player's rank and LP. Also available as `$(tft)`. |
| [`$(pubg)`](/chatbot/variables/pubg/) | Display PUBG player statistics like K/D, wins, and rating. |

## Utility & Web

| Variable | Description |
| --- | --- |
| [`$(if)`](/chatbot/variables/if/) | Show different responses depending on a true/false condition. |
| [`$(customapi)`](/chatbot/variables/customapi/) | Make an API request and display the response in chat. Also available as `$(urlfetch)`. |
| [`$(math)`](/chatbot/variables/math/) | Perform mathematical calculations in chat messages. |
| [`$(time)`](/chatbot/variables/time/) | Display the current time in a timezone, or a countdown. |
| [`$(queryescape)`](/chatbot/variables/queryescape/) | Encode a string for use in a URL query. Also available as `$(queryencode)`. |
| [`$(pathescape)`](/chatbot/variables/pathescape/) | Escape a string for use in a URL path. Also available as `$(pathencode)`. |
| [`$(weather)`](/chatbot/variables/weather/) | Display current weather conditions for a location. |
| [`$(stockprice)`](/chatbot/variables/stockprice/) | Display real-time stock prices. |
| [`$(repeat)`](/chatbot/variables/repeat/) | Repeat a phrase a specified number of times. |

## Fun

| Variable | Description |
| --- | --- |
| [`$(ai)`](/chatbot/variables/ai/) | Generate AI responses in chat. Also available as `$(chatgpt)`. |
| [`$(random)`](/chatbot/variables/random/) | Generate random numbers, emotes, or chatters. |
