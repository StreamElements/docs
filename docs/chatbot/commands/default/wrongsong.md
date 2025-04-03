---
id: wrongsong
title: Using the !wrongsong Command to Remove Song Requests
sidebar_label: "!wrongsong"
description: Remove the last song you added to the StreamElements song request queue on Twitch using the !wrongsong command.
tags:
  - chatbot
  - commands
  - media
  - song request
  - moderation
keywords:
- wrongsong command
- remove last song
- song request queue
- StreamElements chatbot
---
import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

# !wrongsong
<PlatformBadges supported={[ 'Twitch', 'YouTube' ]} />

## Overview

The `!wrongsong` command allows users to remove the last song they added to the StreamElements song request queue. This feature is useful for correcting mistakes or changing your mind about a song request.

## Usage

To use the `!wrongsong` command, simply type it in the Twitch chat:

```
!wrongsong
```

## Examples

### Removing a song
<ExampleChatInteraction
  inputPersona="viewer"
  inputUsernameOverride="Username"
  inputMessage="!wrongsong"
  outputMessage="@Username Removed your last song from the queue: Song Title by Artist"
/>

### Attempting to remove when no song was requested
<ExampleChatInteraction
  inputPersona="viewer"
  inputUsernameOverride="Username"
  inputMessage="!wrongsong"
  outputMessage="@Username You haven't requested any songs recently."
/>
