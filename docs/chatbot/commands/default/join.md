---
id: join
title: Using the !join Command to Enter Raffles/Giveaways
sidebar_label: "!join"
description: "Learn how viewers use the StreamElements !join command to enter active raffles or giveaways on Twitch and YouTube streams."
tags:
  - chatbot
  - commands
  - loyalty
  - raffle
  - giveaway
keywords:
- join
- raffle
- giveaway
- loyalty points
- chatbot commands
- StreamElements
- enter raffle
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!join` command allows viewers to enter currently active raffles or giveaways initiated by commands like [`!raffle`](mdc:raffle.md) or [`!giveaway`](mdc:giveaway.md).

## Usage / Syntax

To enter an active event, viewers simply type:

```
!join
```

## Parameters / Configuration / Options

- **Parameters**: This command does not take any parameters.
- **Configuration**: Requires an active raffle or giveaway to be running (started via the relevant module command or dashboard).

## Examples

A viewer joining an active raffle:

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!join"
  outputMessage="@ViewerName has joined the raffle!"
/>

*Note: The exact bot response may vary based on the raffle/giveaway configuration.*

## Related Commands

- [`!raffle`](raffle.md): Used by moderators or the streamer to start a raffle
- [`!points`](points.md): Check your current loyalty points balance
