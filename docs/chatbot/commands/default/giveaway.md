---
id: giveaway
title: Using the !giveaway Command for Giveaway Info
sidebar_label: "!giveaway"
description: "Learn how the StreamElements !giveaway command allows viewers to check for active giveaways and get a link to enter."
tags:
  - chatbot
  - commands
  - loyalty
  - giveaway
  - raffle
keywords:
- giveaway
- StreamElements giveaway
- Twitch giveaway
- active giveaway
- current giveaway
- chatbot command
- enter giveaway
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!giveaway` command allows viewers to check if a giveaway is currently active in the channel (configured via the StreamElements dashboard) and provides a link to the giveaway page if one is running. Viewers typically enter giveaways using the [`!ticket`](mdc:ticket.md) command.

## Usage / Syntax

To check for an active giveaway, type:

```
!giveaway
```

## Parameters / Configuration / Options

- **Parameters**: This command does not take any parameters.
- **Configuration**: Requires a giveaway to be created and active via the StreamElements dashboard (Loyalty -> Stream Store -> Giveaways).

## Examples

When a giveaway named "Awesome Prize" is active:

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!giveaway"
  outputMessage='@ViewerName, Current giveaway: "Awesome Prize" https://streamelements.com/[ChannelName]/giveaway/[GiveawayID]'
/>

When no giveaway is active:

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!giveaway"
  outputMessage="@ViewerName, There is currently no giveaway running!"
/>

## Related Commands

- [`!ticket`](ticket.md) - Use this command to enter an active giveaway
