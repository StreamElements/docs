---
id: songqueue
sidebar_label: "!songqueue"
description: "Learn how to use the !songqueue command in StreamElements to view the current media request queue for your stream."
keywords:
- StreamElements
- chatbot
- commands
- song request
- media request
- queue
- music
- streaming
---

# !songqueue

## Overview

The `!songqueue` command provides viewers with a link to the current media request queue for the stream. This allows them to see upcoming song or media requests without needing access to the streamer's dashboard.

## Usage

Type `!songqueue` in the chat to receive a link to the media request queue.

## Examples

### Example 1: Viewer requesting queue information

**Input:**
```
!songqueue
```

**Output:**
```
You can see the current song request queue here: https://streamelements.com/styler/mediarequest
```

## Parameters

This command does not accept any parameters.

## Related Commands

- [`!sr`](songrequest.md) or [`!songrequest`](songrequest.md): Used to request a song or media to be added to the queue
- [`!wrongsong`](wrongsong.md): Allows users to remove their most recent song request from the queue
- [`!song`](song.md): Displays information about the currently playing song or media

## Configuration

The `!songqueue` command is typically enabled by default in StreamElements. However, you may need to ensure that media requests are enabled for your channel in the StreamElements dashboard.

## Aliases

Common aliases for this command include:

- `!sq`
- `!queue`
- `!requests`
