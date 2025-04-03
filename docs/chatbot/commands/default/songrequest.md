---
id: songrequest
title: Using the !songrequest Command to Add Media
sidebar_label: "!songrequest"
description: "Learn how to use the !songrequest command to add songs to your StreamElements mediarequest queue."
tags:
  - chatbot
  - commands
  - media
  - song request
  - engagement
keywords:
- songrequest
- song request
- mediarequest
- chatbot commands
- StreamElements
- music streaming
- YouTube integration
---
import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

# !songrequest
<PlatformBadges supported={[ 'Twitch', 'YouTube' ]} />

## Overview

The `!songrequest` command allows viewers to add songs to the streamer's mediarequest queue. This command integrates with YouTube, enabling users to request songs using various input methods.

## Usage

```
!songrequest <identifier>
```

## Examples

### Request a song by search term
<ExampleChatInteraction
  inputPersona="viewer"
  inputUsernameOverride="Viewer"
  inputMessage="!songrequest league of legends theme"
  outputMessage='@Viewer, added "Legends Never Die | Worlds 2017 - League of Legends" to the queue at #2 (playing ~in 3 mins 5 secs) https://youtu.be/r6zIGXun57U'
/>

### Request a song by YouTube URL
<ExampleChatInteraction
  inputPersona="viewer"
  inputUsernameOverride="Viewer"
  inputMessage="!songrequest https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  outputMessage='@Viewer, added "Rick Astley - Never Gonna Give You Up (Official Music Video)" to the queue at #3 (playing ~in 6 mins 20 secs) https://youtu.be/dQw4w9WgXcQ'
/>

## Parameters

| Parameter      | Required | Description                                                                  | Example                                          |
| :------------- | :------- | :--------------------------------------------------------------------------- | :----------------------------------------------- |
| `<identifier>` | Yes      | The song to request. Can be a YouTube URL (video/playlist) or search term. | `league of legends theme` or `youtu.be/dQw4w9WgXcQ` |
