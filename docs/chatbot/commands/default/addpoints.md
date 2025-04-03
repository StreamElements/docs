---
id: addpoints
title: Using the !addpoints Command for Loyalty Points
sidebar_label: "!addpoints"
description: "Manually add loyalty points to viewers using the !addpoints command in the StreamElements Chatbot. Reward participation and manage your loyalty system."
tags:
  - chatbot
  - loyalty
  - commands
  - points
  - moderation
keywords:
  - addpoints command
  - StreamElements Chatbot
  - loyalty program
  - viewer rewards
  - stream engagement
  - moderation tools
  - loyalty points
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

# !addpoints
<PlatformBadges supported={[ 'Twitch', 'YouTube' ]} />

## Overview

The `!addpoints` command empowers streamers and moderators to manually add points to a specific viewer's balance within the StreamElements loyalty system. This is useful for rewarding viewers for actions outside the standard point triggers, correcting point balances, or running special promotions.

## Usage

To add points to a viewer, use the following syntax in your chat:

```
!addpoints <username> <amount>
```

- Replace `<username>` with the target viewer's exact username.
- Replace `<amount>` with the **positive whole number** of points you wish to add.

**Important:** Only moderators and the streamer can use this command by default.

## Parameters

| Parameter  | Required | Description                                        | Example       |
| :--------- | :------- | :------------------------------------------------- | :------------ |
| `username` | Yes      | The exact username of the viewer receiving points. | `StreamFan123`|
| `amount`   | Yes      | The number of points (positive integer) to award.  | `1000`        |

## Examples

<ExampleChatInteraction
  inputPersona="broadcaster"
  inputUsernameOverride="Styler"
  inputMessage="!addpoints StreamFan123 1000"
  outputMessage="@Styler, added 1000 points to StreamFan123. They now have 5961 points."
/>
