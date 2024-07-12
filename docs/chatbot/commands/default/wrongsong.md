---
id: wrongsong
sidebar_label: "!wrongsong"
description: Remove the last song you added to the StreamElements song request queue on Twitch using the !wrongsong command.
keywords:
- wrongsong command
- remove last song
- song request queue
- StreamElements chatbot
---

# !wrongsong Command

## Overview

The `!wrongsong` command allows users to remove the last song they added to the StreamElements song request queue. This feature is useful for correcting mistakes or changing your mind about a song request.

## Usage

To use the `!wrongsong` command, simply type it in the Twitch chat:

```
!wrongsong
```

## Examples

### Example 1: Removing a song

**User input:**
```
!wrongsong
```

**Bot response:**
```
@Username Removed your last song from the queue: Song Title by Artist
```

### Example 2: Attempting to remove when no song was requested

**User input:**
```
!wrongsong
```

**Bot response:**
```
@Username You haven't requested any songs recently.
```

## Parameters

The `!wrongsong` command does not require any parameters.

## Related Commands

- `!sr` or `!songrequest`: Used to add a song to the request queue
- `!queue`: Shows the current song request queue
- `!currentsong`: Displays information about the currently playing song

## Configuration

The `!wrongsong` command is typically enabled by default in StreamElements. However, you may need to ensure that song requests are enabled for this command to work.

## Aliases

Some common aliases for this command include:

- `!wr`
- `!removelast`

Check your StreamElements dashboard to see if any custom aliases have been set up for your channel.

## Customization

While the basic functionality of `!wrongsong` cannot be customized, you can modify the response messages in your StreamElements dashboard. This allows you to personalize the bot's responses to match your channel's style and tone.
