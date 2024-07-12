---
id: when
sidebar_label: "!when"
description: "Learn how to use the !when command in StreamElements chatbot to check the status of your song request in the queue."
keywords:
- when
- song request
- queue position
- StreamElements chatbot
---

# !when

## Overview

The `!when` command allows viewers to check the status of their song request in the queue. It provides information about the position of the requested song and whether it's currently playing.

## Usage

To use the `!when` command, simply type it in the chat without any additional arguments.

## Examples

### Example 1: Checking a song in the queue

**Input:**
```
!when
```

**Output:**
```
"The Coral Song" is at #1 in the queue and is playing right now
```

### Example 2: Checking a song further down the queue

**Input:**
```
!when
```

**Output:**
```
"Never Gonna Give You Up" is at #4 in the queue and will play in approximately 12 minutes
```

## Parameters

The `!when` command does not require any parameters.

## Related Commands

- [!songrequest](songrequest.md): Used to request a song
- [!songqueue](songqueue.md): Displays the current song request queue
- [!skip](skip.md): Allows moderators to skip the current song

## Customization

Streamers can customize the output message of the `!when` command through the StreamElements dashboard. This allows for personalization of the response to match the stream's style or add additional information.
