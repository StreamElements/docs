---
id: songqueue
title: Using the !songqueue Command to View Media Requests
sidebar_label: "!songqueue"
description: "Learn how to use the !songqueue command in StreamElements to view the current media request queue for your stream."
tags:
  - chatbot
  - commands
  - media
  - song request
keywords:
  - StreamElements
  - chatbot
  - commands
  - song request
  - media request
  - queue
  - music
  - streaming
---

import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';
import PlatformBadges from '@site/src/components/PlatformBadges';

# !songqueue
<PlatformBadges supported={[ 'Twitch', 'YouTube' ]} />

## Overview

The `!songqueue` command provides viewers with a link to the current media request queue for the stream. This allows them to see upcoming song or media requests without needing access to the streamer's dashboard.

## Usage

Type `!songqueue` in the chat to receive a link to the media request queue:

```
!songqueue
```

## Examples

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!songqueue"
  outputMessage="You can see the current song request queue here: https://streamelements.com/styler/mediarequest"
/>
