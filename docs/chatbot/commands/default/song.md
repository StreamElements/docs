---
id: song
title: Using the !song Command to Display Current Track Information
sidebar_label: "!song"
description: "Learn how to use the !song command to display the currently playing track information in your stream, enhancing viewer engagement with your music."
tags:
  - chatbot
  - commands
  - music
  - stream-info
keywords:
  - song command
  - current track
  - music integration
  - streamelements
  - stream music
  - track information
---

import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';
import PlatformBadges from '@site/src/components/PlatformBadges';

# !song
<PlatformBadges supported={[ 'Twitch', 'YouTube' ]} />

## Overview

The `!song` command displays information about the currently playing song on the stream. This allows viewers to easily identify what music is playing without interrupting the broadcast to ask.

## Usage

To use the `!song` command, simply type it in chat:

```
!song
```

## Examples

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!song"
  outputMessage="Current song: 'Never Gonna Give You Up' by Rick Astley - Requested by: Streamer"
/>
