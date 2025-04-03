---
id: pause
title: Using the !pause Command for Media Playback
sidebar_label: "!pause"
description: "Learn how to pause media playback (song requests) in your chat using the StreamElements !pause command."
tags:
  - chatbot
  - commands
  - songrequest
  - media
  - moderation
keywords:
- pause command
- media request
- twitch chatbot
- stream elements
- pause playback
- songrequest
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!pause` command temporarily stops the playback of the current media request (e.g., songrequest) via the StreamElements Media Request system. This is useful for interrupting playback without clearing the queue. Use the [`!play`](mdc:play.md) command to resume.

## Usage / Syntax

To pause media playback, execute the command:

```
!pause
```

- **Parameters**: This command does not take any parameters.
- **Permissions**: Typically restricted to moderators and the broadcaster by default. Permissions can be managed in the StreamElements dashboard.

## Examples

Pausing the current media request:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!pause"
  outputMessage="[ModeratorName], songrequest is now paused!"
/>

## Related Commands

- [`!play`](play.md): Resumes paused media playback
- [`!skip`](skip.md): Skips the current media and moves to the next item in the queue
