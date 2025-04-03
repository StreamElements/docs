---
id: play
title: Using the !play Command to Resume Media
sidebar_label: "!play"
description: "Learn how to use the !play command in StreamElements chatbot to resume paused media (songrequest) playback during your live streams."
tags:
  - chatbot
  - commands
  - songrequest
  - media
  - moderation
keywords:
- StreamElements
- chatbot
- commands
- play
- resume playback
- media requests
- songrequest
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!play` command resumes media request playback that was previously paused using the [`!pause`](mdc:pause.md) command in the StreamElements Media Request system.

## Usage / Syntax

To resume playback, execute the command:

```
!play
```

- **Parameters**: This command does not take any parameters.
- **Permissions**: Typically restricted to moderators and the broadcaster by default. Permissions can be managed in the StreamElements dashboard.
- **Aliases**: `!resume`, `!unpause`

## Examples

Resuming paused media playback:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!play"
  outputMessage="[ModeratorName], songrequest is now playing!"
/>

## Related Commands

- [`!pause`](pause.md): Pauses the current media playback
- [`!skip`](skip.md): Skips the current media and moves to the next item in the queue
- [`!songqueue`](songqueue.md): Displays the current media request queue
