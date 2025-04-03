---
id: when
title: Using the !when Command to Check Song Request Status
sidebar_label: "!when"
description: "Learn how to use the !when command in StreamElements chatbot to check the status of your song request in the queue."
tags:
  - chatbot
  - commands
  - media
  - song request
  - stream-info
keywords:
- when
- song request
- queue position
- StreamElements chatbot
---
import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

# !when
<PlatformBadges supported={[ 'Twitch', 'YouTube' ]} />

## Overview

The `!when` command allows viewers to check the status of their song request in the queue. It provides information about the position of the requested song and whether it's currently playing.

## Usage

To use the `!when` command, simply type it in the chat without any additional arguments.

```
!when
```

## Examples

### Checking a song currently playing
<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!when"
  outputMessage="\"The Coral Song\" is at #1 in the queue and is playing right now"
/>

### Checking a song further down the queue
<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!when"
  outputMessage="\"Never Gonna Give You Up\" is at #4 in the queue and will play in approximately 12 minutes"
/>
