---
id: skip
sidebar_label: "!skip"
description: "Learn how to use the !skip command in StreamElements chatbot to skip the current song in the mediarequest queue."
keywords:
- skip command
- skip song
- mediarequest
- chatbot commands
- StreamElements
---

# !skip

## Overview

The `!skip` command is used to skip the currently playing song in the StreamElements mediarequest queue. This command is useful for streamers and moderators who want to quickly move to the next song in the queue.

## Usage

To use the `!skip` command, simply type it in the chat:

```
!skip
```

**Note:** This command will only work if there's a song currently playing in the mediarequest queue. If no song is playing, an error message will be displayed.

## Examples

### Successful Skip

When a song is currently playing:

```
User: !skip
Chatbot: @User, skipped song: Drake, 21 Savage - Rich Flex (Audio)
```

### Error Message

When no song is currently playing:

```
User: !skip
Chatbot: @User, no song is currently playing.
```

## Parameters

The `!skip` command does not require any parameters.

## Related Commands

- [`!song`](song.md): Displays information about the currently playing song
- [`!songqueue`](songqueue.md): Shows the current mediarequest queue
- [`!songrequest`](songrequest.md): Adds a song to the mediarequest queue

## Configuration

The `!skip` command is typically enabled by default in StreamElements chatbot. However, you may want to configure who has permission to use this command. You can do this in your StreamElements dashboard:

1. Go to the Bot section
2. Find the `!skip` command in the command list
3. Adjust the permission settings as needed (e.g., Moderator only, Everyone, etc.)

## Aliases

Some common aliases for the `!skip` command include:

- `!nextsong`
- `!ns`
