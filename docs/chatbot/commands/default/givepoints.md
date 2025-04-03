---
id: givepoints
title: Using the !givepoints Command to Transfer Points
sidebar_label: "!givepoints"
description: "Learn how viewers can use the StreamElements !givepoints command to transfer their loyalty points to other users in chat."
tags:
  - chatbot
  - commands
  - loyalty
  - points
  - transfer
keywords:
- givepoints command
- transfer points streamelements
- loyalty points
- chatbot commands
- stream currency
- share points
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!givepoints` command allows viewers to transfer a portion of their own loyalty points to another viewer in the chat. This is useful for gifting, rewarding, or community interactions.

## Usage / Syntax

To transfer points, a viewer uses the following syntax:

```
!givepoints <recipient_username> <amount>
```

## Parameters / Configuration / Options

| Parameter              | Required | Description                                                                | Example     |
| :--------------------- | :------- | :------------------------------------------------------------------------- | :---------- |
| `<recipient_username>` | Required | The username of the viewer to receive the points.                          | `CoolViewer`|
| `<amount>`             | Required | The number of points to transfer. Must be positive and &lt;= sender's balance. | `500`       |

- **Aliases**: `!give`, `!transfer`
- **Permissions**: Typically available to all viewers, but may be restricted by streamer settings.
- **Error Messages**: The bot will provide feedback if the recipient username is invalid, the sender lacks sufficient points, or the recipient isn't recognized.

## Examples

Transferring 500 points from SenderUser to CoolViewer:

<ExampleChatInteraction
  inputPersona="viewer"
  inputUsernameOverride="SenderUser"
  inputMessage="!givepoints CoolViewer 500"
  outputMessage="@SenderUser transferred 500 points to CoolViewer!"
/>

Attempting to transfer points with insufficient balance:

<ExampleChatInteraction
  inputPersona="viewer"
  inputUsernameOverride="SenderUser"
  inputMessage="!givepoints CoolViewer 10000"
  outputMessage="@SenderUser, You only have 500 points."
/>

## Related Commands

- [`!points`](points.md): Check your current point balance
- [`!top`](top.md): View the leaderboard of users with the most points

## Aliases

The `!givepoints` command can also be used with the following aliases:
- `!give`
- `!transfer`

## Error Handling

The command includes built-in error handling for common issues:

1. Invalid username:
   ```
   @Sender, That doesn't look like a valid username Keepo
   ```

2. Insufficient points:
   ```
   @Sender, You only have 420 points.
   ```

3. User not found in database:
   ```
   @Sender, I couldn't find that user in the database :/
   ```

