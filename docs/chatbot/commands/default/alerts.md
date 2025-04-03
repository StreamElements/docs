---
id: alerts
title: Using the !alerts Command to Control Stream Alerts
sidebar_label: "!alerts"
description: "Control and manage stream alerts in real-time using the !alerts command"
tags:
  - chatbot
  - commands
  - stream management
keywords:
- twitch alerts
- stream alerts
- alert management
- live stream control
---
import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

# !alerts
<PlatformBadges supported={[ 'Twitch', 'YouTube' ]} />

## Overview

The `!alerts` command allows streamers and moderators to dynamically manage stream alerts during a live broadcast. This powerful tool helps create a smoother viewing experience by controlling alert playback, volume, and timing on the fly.

## Usage

```
!alerts <action>
```

The command requires one of the following actions:
- `mute`: Turns off alert sounds
- `unmute`: Turns on alert sounds
- `skip`: Skips the currently playing alert
- `pause`: Pauses alert playback
- `unpause`: Resumes alert playback

## Examples

### Mute all alert sounds
<ExampleChatInteraction
  inputPersona="moderator"
  inputMessage="!alerts mute"
/>

### Skip the currently playing alert
<ExampleChatInteraction
  inputPersona="moderator"
  inputMessage="!alerts skip"
/>

## Configuration

The `!alerts` command is available by default for streamers and moderators. To customize access permissions:

1. Go to your StreamElements dashboard
2. Navigate to the Chatbot section
3. Find the `!alerts` command in the command list
4. Adjust the user level permissions as needed

