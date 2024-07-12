---
id: setgame
sidebar_label: "!setgame"
description: "Learn how to use the !setgame command to update your stream's game category on Twitch using StreamElements chatbot."
keywords:
- setgame
- Twitch game category
- StreamElements bot
- update stream game
- change game on Twitch
---

# !setgame

## Overview

The `!setgame` command allows streamers and moderators to update the current game category of a Twitch stream in real-time. This feature ensures that viewers always have accurate information about the content being streamed.

## Usage

```
!setgame <game>
```

Replace `<game>` with the title of the game you want to set for your stream.

## Examples

### Example 1: Setting a specific game

```
!setgame Fortnite
```

**Output:**
```
@Streamer changed the game to "Fortnite"!
```

### Example 2: Using an abbreviation

```
!setgame OSRS
```

**Output:**
```
@Moderator changed the game to "Old School RuneScape"!
```

## Parameters

- `<game>` (required): The title of the game you want to set for your stream. This parameter supports fuzzy searching, allowing for slight misspellings or common abbreviations.

## Related Commands

- [`!settitle`](settitle.md): Updates the stream title
- [`!uptime`](uptime.md): Displays how long the stream has been live

## Aliases

By default, there are no aliases for the `!setgame` command. However, you can create custom aliases in your StreamElements dashboard if desired.
