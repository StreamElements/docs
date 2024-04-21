---
id: setgame
tags:
  - twitch chatbot
  - streamer tools
  - game management
description: The !setgame command is used to change the current game being played on the stream.
keywords:
  - setgame	
  - setgame command	
  - how to change game on stream with StreamElements
  - Twitch !setgame command
  - update game category StreamElements bot
  - StreamElements game change command
---

# !setgame

The `!setgame` command allows streamers to dynamically update the game category of their live stream, ensuring that viewers are always informed about the current gameplay. This command is essential for moderators.

### Arguments

- `<game>` (required): Specifies the new game title for the stream. This argument supports fuzzy searching, which means it can recognize and correct slight misspellings or abbreviations such as `WoW` for World of Warcraft, `OSRS` for Old School RuneScape, and `LOL` for League of Legends.

### Usage

```
!setgame <game>
```

### Example Input

```
!setgame OSRS
```

### Example Output

```
@Styler changed the game to "Old School RuneScape"! 
```
