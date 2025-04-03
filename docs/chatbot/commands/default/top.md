---
id: top
title: Using the !top Command for Leaderboards
sidebar_label: "!top"
description: "Learn how to use the !top command in StreamElements chatbot to display leaderboards for points and watchtime."
tags:
  - chatbot
  - commands
  - loyalty
  - leaderboard
keywords:
- top
- StreamElements
- chatbot
- commands
- loyalty
- leaderboard
- points
- watchtime
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!top` command, part of the StreamElements loyalty system, allows users to view leaderboards for various metrics like loyalty points and watch time directly in chat.

## Usage / Syntax

To use the `!top` command, type `!top` optionally followed by the desired leaderboard type:

```
!top [type]
```

## Parameters / Configuration / Options

| Parameter | Required | Description                                                           | Example   |
| :-------- | :------- | :-------------------------------------------------------------------- | :-------- |
| `[type]`  | Optional | The type of leaderboard to display. Options: `points`, `alltime`, `online`, `offline`. If omitted, lists available types. | `points`  |


## Examples

View the top users by points:

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!top points"
  outputMessage="Top 5 nammers: 1. darkoe (2147483647), 2. nuuls (101404825), 3. streamelements (512211), 4. vinicin229 (28000), 5. zzzrapha (14000)"
/>

View the available leaderboard types and the link to the full leaderboard page:

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!top"
  outputMessage="Available Commands: !top points/alltime/online/offline. You can see the nammers Leaderboard here: https://streamelements.com/[ChannelName]/leaderboard"
/>

## Related Commands

- [`!points`](points.md): Check your current loyalty points
- [`!watchtime`](watchtime.md): View your total watchtime

