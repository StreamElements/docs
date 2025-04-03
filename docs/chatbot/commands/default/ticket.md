---
id: ticket
title: Using the !ticket Command for Giveaway Entries
sidebar_label: "!ticket"
description: "Learn how to use the !ticket command in StreamElements chatbot to purchase tickets for giveaways and participate in raffles."
tags:
  - chatbot
  - loyalty
  - giveaway
  - raffle
  - commands
keywords:
- StreamElements
- chatbot
- commands
- ticket
- giveaways
- raffles
- loyalty
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!ticket` command allows viewers to purchase tickets for ongoing giveaways in a stream using their loyalty points. This enables participation in raffles for a chance to win prizes.

By default, the `!ticket` command does *not* reply to the user to prevent chat spam. Streamers can enable confirmation messages via the StreamElements dashboard when setting up the giveaway.

## Usage / Syntax

Use the following syntax to purchase tickets:

```
!ticket <number_of_tickets>
```

**Aliases:** `!enter`

## Parameters / Configuration / Options

| Parameter             | Required | Description                                                             | Example |
| :-------------------- | :------- | :---------------------------------------------------------------------- | :------ |
| `<number_of_tickets>` | Optional | The number of tickets to purchase. Defaults to `1` if not specified. | `5`     |

- **Configuration**: Streamers configure the point cost per ticket, the maximum tickets per user, and whether the bot sends a confirmation message via the StreamElements dashboard giveaway settings.

## Examples

Buy a single ticket (bot reply depends on streamer settings):

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!ticket"
  outputMessage="(Optional) @ViewerName, you successfully bought 1 ticket!"
/>

Buy multiple tickets (bot reply depends on streamer settings):

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!ticket 5"
  outputMessage="(Optional) @ViewerName, you successfully bought 5 tickets!"
/>

## Related Commands

- [`!giveaway`](giveaway.md): Used by moderators to start or manage giveaways
- [`