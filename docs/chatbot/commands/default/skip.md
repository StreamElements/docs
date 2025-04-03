---
id: skip
title: Using the !skip Command to Skip Media Requests
sidebar_label: "!skip"
description: "Learn how to use the !skip command in StreamElements chatbot to skip the current song in the mediarequest queue."
tags:
  - chatbot
  - commands
  - media
  - song request
  - moderation
keywords:
- skip command
- skip song
- mediarequest
- chatbot commands
- StreamElements
---
import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

# !skip
<PlatformBadges supported={[ 'Twitch', 'YouTube' ]} />

## Overview

The `!skip` command is used to skip the currently playing song in the StreamElements mediarequest queue. This command is useful for streamers and moderators who want to quickly move to the next song in the queue. It only works if a song is currently playing.

## Usage

To use the `!skip` command, simply type it in the chat:

```
!skip
```

## Examples

### Successful Skip
<ExampleChatInteraction
  inputPersona="moderator" // Or streamer
  inputUsernameOverride="User"
  inputMessage="!skip"
  outputMessage="@User, skipped song: Drake, 21 Savage - Rich Flex (Audio)"
/>

### Error When No Song is Playing
<ExampleChatInteraction
  inputPersona="moderator" // Or streamer
  inputUsernameOverride="User"
  inputMessage="!skip"
  outputMessage="@User, no song is currently playing."
/>
