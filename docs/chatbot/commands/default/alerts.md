---
id: alerts
sidebar_label: "!alerts"
description: "Control and manage stream alerts in real-time using the !alerts command"
keywords:
- twitch alerts
- stream alerts
- alert management
- live stream control
---

# !alerts

## Overview

The `!alerts` command allows streamers and moderators to dynamically manage stream alerts during a live broadcast. This powerful tool helps create a smoother viewing experience by controlling alert playback, volume, and timing on the fly.

## Usage

```
!alerts <action>
```

## Examples

1. Mute all alert sounds:
```
!alerts mute
```

2. Skip the currently playing alert:
```
!alerts skip
```

## Parameters

- `mute`: Turns off alert sounds
- `unmute`: Turns on alert sounds
- `skip`: Skips the currently playing alert
- `pause`: Pauses alert playback
- `unpause`: Resumes alert playback

## Configuration

The `!alerts` command is available by default for streamers and moderators. To customize access permissions:

1. Go to your StreamElements dashboard
2. Navigate to the Chatbot section
3. Find the `!alerts` command in the command list
4. Adjust the user level permissions as needed

