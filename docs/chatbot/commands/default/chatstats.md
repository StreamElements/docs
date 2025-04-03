---
id: chatstats
title: Using the !chatstats Command for Chat Stats Link
sidebar_label: "!chatstats"
description: "Learn how the StreamElements !chatstats command provides a link to the channel's public chat statistics page."
tags:
  - chatbot
  - commands
  - stats
  - utility
keywords:
- chatstats
- chat statistics
- streamelements
- viewer engagement
- loyalty
- chatbot commands
- channel stats
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!chatstats` command provides a direct link to the channel's public StreamElements chat statistics page. This page typically shows data on chat activity, top chatters, emote usage, and more.

## Usage / Syntax

To display the link to the chat stats page, type:

```
!chatstats
```

## Parameters / Configuration / Options

- **Parameters**: This command does not take any parameters.

## Examples

Displaying the link to the chat statistics page:

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!chatstats"
  outputMessage="https://stats.streamelements.com/c/[channelname] PogChamp"
/>

## Related Commands

- [`!top`](top.md): Displays the top chatters or points leaders (if configured)
- [`!uptime`](uptime.md): Shows how long the current stream has been live
- [`!followage`](followage.md): Tells a user how long they've been following the channel

