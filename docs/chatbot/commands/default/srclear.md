---
id: srclear
title: Using the !srclear Command to Clear Song Requests
sidebar_label: "!srclear"
description: "Learn how to use the !srclear command to manage your StreamElements chatbot's songrequest queue. Clear song requests quickly and easily."
tags:
  - chatbot
  - songrequest
  - media
  - commands
keywords:
- srclear
- songrequest
- clear queue
- streamelements
- chatbot
- commands
- mediarequest
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!srclear` command is used to clear the entire songrequest queue in your StreamElements chatbot. This command is particularly useful for streamers and moderators who want to reset or manage the list of requested songs during a stream.

## Usage / Syntax

To use the `!srclear` command, simply type it in the chat:

```
!srclear
```

This command does not require any parameters.

**Aliases:** `!clearsr`, `!clearsongs`, `!resetqueue`

## Examples

Clear the song request queue:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!srclear"
  outputMessage="Songrequest queue has been cleared!"
/>

## Related Commands

- [`!songrequest`](songrequest.md): Used to request a song
- [`!wrongsong`](wrongsong.md): Allows users to remove their most recent song request
- [`!skip`](skip.md): Skips the currently playing song in the queue
