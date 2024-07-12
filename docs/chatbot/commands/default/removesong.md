---
id: removesong
sidebar_label: "!removesong"
description: "Learn how to use the !removesong command to manage your StreamElements song request queue by removing specific songs or all songs from a user."
keywords:
- removesong
- song request
- queue management
- StreamElements
- Twitch commands
- moderator tools
---

# !removesong

## Overview

The `!removesong` command allows streamers and moderators to manage the song request queue by removing specific songs or all songs requested by a particular user. This command is essential for maintaining control over the music played during a stream and addressing any inappropriate or unwanted song requests.

## Usage

The basic syntax for the `!removesong` command is:

```
!removesong [username|URL]
```

Where:
- `username` is the name of the viewer whose songs you want to remove
- `URL` is the specific URL of the song you want to remove from the queue

## Examples

1. Remove a specific song by URL:
   ```
   !removesong https://www.youtube.com/watch?v=dQw4w9WgXcQ
   ```

2. Remove all songs requested by a specific user:
   ```
   !removesong CoolViewer123
   ```

## Parameters

- `username` (optional): The Twitch username of the person whose songs you want to remove from the queue.
- `URL` (optional): The URL of the specific song you want to remove from the queue.

**Note:** You must provide either a `username` or a `URL`. The command will not work without one of these parameters.

## Related Commands

- [`!songrequest`](songrequest.md): Used to add songs to the queue
- [`!song`](song.md): Displays information about the currently playing song
- [`!skip`](skip.md): Skips the current song in the queue

## Configuration

The `!removesong` command is available by default in StreamElements chatbot. No additional configuration is required to use this command.
