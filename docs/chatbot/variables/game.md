---
id: game
sidebar_label: $(game)
---

# Game Variable

### Description

The `$(game)` variable displays the current game being played on a Twitch channel.

### Usage

```
$(game)
```

You can also specify a username to check the game of a different channel:

```
$(game *username*)
```

### Examples

1. Check the current game on your channel:
   ```
   Current game: $(game)
   ```
   Output: `Current game: Valorant`

2. Check the game on another channel:
   ```
   $(user) is playing: $(game shroud)
   ```
   Output: `shroud is playing: Counter-Strike: Global Offensive`

### Parameters

- `username` (optional): The Twitch username of the channel you want to check. If not provided, the command will display the game of the current channel.

### Related Commands/Variables

- [`$(title)`](title.md): Displays the current stream title
- [`$(channel)`](channel.md): Shows information about the current channel
- [`$(uptime)`](uptime.md): Displays how long the current stream has been live
