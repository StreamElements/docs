---
id: uptime
title: Using the !uptime Command to Check Stream Duration
sidebar_label: "!uptime"
description: "Learn how to use the !uptime command in StreamElements to check how long your stream has been live, providing essential timing information to viewers."
tags:
  - chatbot
  - commands
  - stream-info
keywords:
  - streamelements uptime command
  - uptime command twitch
  - chatbot uptime
  - stream duration
  - live streaming time
---

import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';
import PlatformBadges from '@site/src/components/PlatformBadges';

# !uptime
<PlatformBadges supported={[ 'Twitch', 'YouTube' ]} />

## Overview

The `!uptime` command allows viewers and moderators to check how long the current stream has been live. It's a simple yet useful tool for tracking stream duration and engaging with the community.

## Usage

To use the `!uptime` command, simply type it in the chat:

```
!uptime
```

The chatbot will respond with the current stream duration.

## Examples

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!uptime"
  outputMessage="@Streamer has been live for 5 minutes and 30 seconds"
/>

