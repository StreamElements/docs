---
id: addpoints
sidebar_label: "!addpoints"
description: "Learn how moderators can manually add loyalty points to viewers using the StreamElements !addpoints chatbot command. Manage your community rewards."
tags:
  - chatbot
  - loyalty
  - commands
  - points
  - moderation
  - default
keywords:
  - addpoints command
  - StreamElements Chatbot
  - loyalty program
  - viewer rewards
  - stream engagement
  - moderation tools
  - loyalty points
  - manage points
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

# !addpoints

<PlatformBadges supported={[ 'Twitch' ]} />

## Overview

The `!addpoints` command empowers streamers and moderators to manually add points to a specific viewer's balance within the StreamElements loyalty system. This is useful for rewarding viewers for actions outside the standard point triggers, correcting point balances, or running special promotions.

## Usage / Syntax

To add points to a viewer, use the following syntax in your chat:

```streamelements
!addpoints <username> <amount>
```

**Important:** By default, only users with **Moderator** permission level or higher can use this command.

## Parameters / Configuration / Options

| Parameter    | Required | Description                                        |
| :----------- | :------- | :------------------------------------------------- |
| `<username>` | Yes      | The exact username of the viewer receiving points. |
| `<amount>`   | Yes      | The number of points (positive integer) to award.  |

**Configuration:**

*   The `!addpoints` command requires the **Loyalty system** to be active. Enable it in your **StreamElements Dashboard** under **Loyalty** -> **Loyalty Settings**.
*   The command's permission level can be adjusted under **Chatbot** -> **Chat Commands** -> **Default Commands**.

## Examples

<ExampleChatInteraction
  inputPersona="broadcaster"
  inputMessage="!addpoints StreamFan123 1000"
  outputMessage="@YourChannel, added 1000 points to StreamFan123. They now have 5961 points."
/>

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser99"
  inputMessage="!addpoints LoyalViewer 50"
  outputMessage="@ModUser99, added 50 points to LoyalViewer. They now have 1280 points."
/>
