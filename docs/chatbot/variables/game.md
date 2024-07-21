---
id: game
sidebar_label: "$(game)"
description: "Learn how to use the $(game) variable to display the current game being played on a Twitch channel."
tags:
- variables
- game
- twitch
keywords:
- StreamElements
- chatbot
- game variable
- Twitch game
- stream information
---

# $(game) Variable

## Overview

The `$(game)` variable is a powerful tool that allows you to display the current game being played on a Twitch channel. This variable is particularly useful for creating dynamic commands or messages that reference the streamer's current activity.

## Usage

To use the `$(game)` variable, simply include it in your command or message:

```
$(game)
```

You can also check the game of a specific channel by providing a username:

```
$(game *username*)
```

## Examples

1. Display the current game on your channel:
   ```
   Current game: $(game)
   ```
   Output: `Current game: Valorant`

2. Check the game on another channel:
   ```
   $(user) is playing: $(game shroud)
   ```
   Output: `shroud is playing: Counter-Strike: Global Offensive`

## Parameters

- `username` (optional): The Twitch username of the channel you want to check. If not provided, the command will display the game of the current channel.

## Related Commands

- [`$(title)`](title.md): Displays the current stream title
- [`$(channel)`](channel.md): Shows information about the current channel
- [`$(uptime)`](uptime.md): Displays how long the current stream has been live

## FAQ

**Q: How often does the game information update?**

A: The game information typically updates within a few seconds of changing the game on Twitch. However, the exact timing may vary.

**Q: What happens if no game is set?**

A: If no game is set for the channel, the `$(game)` variable will typically return "No game set" or a similar message.
