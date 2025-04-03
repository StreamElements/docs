---
id: items
title: Using the !items Command to List Store Items
sidebar_label: "!items"
description: "Learn how viewers use the StreamElements !items command to see available redeemable rewards in the loyalty store directly in chat."
tags:
  - chatbot
  - commands
  - loyalty
  - store
  - points
keywords:
- StreamElements
- chatbot
- commands
- loyalty
- rewards
- items
- store
- list items
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!items` command allows viewers to see a list of currently available items for redemption in the StreamElements Loyalty Store, along with a link to the store page.

## Usage / Syntax

Viewers can list available store items by typing:

```
!items
```

## Parameters / Configuration / Options

- **Parameters**: This command does not take any parameters.
- **Configuration**: Requires the Loyalty system and Stream Store to be enabled and configured with items in the StreamElements dashboard.

## Examples

Viewing available store items:

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!items"
  outputMessage="Available items are: Sound Alert, VIP for a Day, Skip Song Request, Custom Emote | Store Link: https://streamelements.com/[ChannelName]/store"
/>

*Note: The exact list of items and the format depend on the store configuration.*

## Related Commands

- [`!points`](points.md): Check your current loyalty point balance
- [`!redeem`](redeem.md): Redeem an item from the loyalty store
