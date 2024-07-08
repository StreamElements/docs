---
id: song
sidebar_label: "!song"
description: "Learn how to use the !song command in StreamElements chatbot to get information about the currently playing song from the media request queue."
keywords:
- StreamElements
- chatbot
- commands
- media request
- song
- currently playing
- music
---

# !song

## Overview

The `!song` command allows viewers to retrieve information about the currently playing song in the StreamElements media request queue. This command is useful for viewers who want to know the title, artist, and requester of the current song.

## Usage

To use the `!song` command, simply type it in the chat:

```
!song
```

## Examples

### Example 1: Successful Response

When a song is currently playing:

```
User: !song
Chatbot: @User, current song: DrakeVEVO - Drake, 21 Savage - Rich Flex (Audio), requested by styler https://youtu.be/I4DjHHVHWAE
```

### Example 2: No Song Playing

When no song is currently playing:

```
User: !song
Chatbot: @User, No song is currently playing.
```

## Parameters

The `!song` command does not require any parameters.

## Related Commands

- [`!songrequest`](songrequest.md): Used to add songs to the media request queue
- [`!skip`](skip.md): Used to skip the current song (usually limited to moderators)
- [`!songqueue`](songqueue.md): Shows the upcoming songs in the media request queue

## Configuration

The `!song` command is typically enabled by default in StreamElements chatbot. However, you may need to ensure that media requests are properly set up and enabled in your StreamElements dashboard.
