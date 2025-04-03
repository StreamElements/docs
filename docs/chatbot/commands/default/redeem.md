---
id: redeem
title: Using the !redeem Command for Store Redemptions
sidebar_label: "!redeem"
description: "Learn how viewers use the StreamElements !redeem command to exchange loyalty points for items or rewards from your stream store."
tags:
  - chatbot
  - commands
  - loyalty
  - store
  - points
keywords:
- redeem command
- loyalty points
- stream store
- viewer rewards
- chatbot commands
- point redemption
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!redeem` command allows viewers to spend their accumulated loyalty points to purchase items defined in the streamer's StreamElements Loyalty Store. This is a core part of the loyalty system.

## Usage / Syntax

Viewers use the following syntax to redeem an item:

```
!redeem <item_name>
```

## Parameters / Configuration / Options

| Parameter     | Required | Description                                                                                                | Example      |
| :------------ | :------- | :--------------------------------------------------------------------------------------------------------- | :----------- |
| `<item_name>` | Required | The exact name of the item as configured in the StreamElements Loyalty Store that the viewer wants to redeem. | `Sound Alert` |

- **Configuration**: Requires the Loyalty system and Stream Store to be enabled and configured with items in the StreamElements dashboard.
- **Permissions**: This command is intended for viewers (or specific roles as configured in the store item settings).

## Examples

Redeeming a store item named "Sound Alert":

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!redeem Sound Alert"
  outputMessage="@ViewerName, you have successfully redeemed 'Sound Alert' for 100 points!"
/>

Redeeming an item named "VIP for a Day":

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!redeem VIP for a Day"
  outputMessage="@ViewerName, you have successfully redeemed 'VIP for a Day' for 5000 points!"
/>

*Note: The exact bot response messages can often be customized in the store item settings.*

## Related Commands

- [`!points`](points.md): Shows the viewer's current point balance.
