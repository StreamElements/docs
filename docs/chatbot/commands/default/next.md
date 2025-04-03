---
id: next
title: Using the !next Command for Upcoming Song Info
sidebar_label: "!next"
description: "Learn how the StreamElements !next command allows viewers to see the next song in the media request queue."
tags:
  - chatbot
  - commands
  - songrequest
  - media
  - queue
keywords:
- next command
- upcoming song
- media request
- song queue
- StreamElements
- chatbot
- next song
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!next` command allows viewers and moderators to see details about the next song scheduled to play in the StreamElements Media Request queue (if one exists).

## Usage / Syntax

To see the next song, simply type:

```
!next
```

## Parameters / Configuration / Options

- **Parameters**: This command does not take any parameters.
- **Permissions**: Typically available to all viewers.
- **Aliases**: `!nextsong`

## Examples

Checking the next song in the queue:

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!next"
  outputMessage="Next song: Artist - Song Title [Duration] requested by RequesterName [Link]"
/>

When no songs are in the queue:

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!next"
  outputMessage="There are no songs currently in the queue."
/>

## Related Commands

- [`!song`](song.md): Displays information about the currently playing song
- [`!songqueue`](songqueue.md): Shows the entire media request queue
