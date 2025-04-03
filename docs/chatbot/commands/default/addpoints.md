---
id: addpoints
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

# !addpoints Command

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={[ 'Twitch' ]} />

## Overview

The `!addpoints` command empowers streamers and moderators to manually add points to a specific viewer's balance within the StreamElements loyalty system. This is useful for rewarding viewers for actions outside the standard point triggers, correcting point balances, or running special promotions.

## Usage

To add points to a viewer, use the following syntax in your chat:

```streamelements
!addpoints <username> <amount>
```

- Replace `<username>` with the target viewer's exact username.
- Replace `<amount>` with the **positive whole number** of points you wish to add.

**Important:** Only moderators and the streamer can use this command by default.

## Examples

Here's how the command and the bot's response look in chat:

1.  **A moderator adding 1000 points to `StreamFan123`:**

    <ExampleChatInteraction
      inputPersona="broadcaster"
      inputUsernameOverride="Styler"
      inputMessage="!addpoints StreamFan123 1000"
      outputMessage="@Styler, added 1000 points to StreamFan123. They now have 5961 points."
    />

## Parameters

| Parameter  | Required | Description                                        |
| :--------- | :------- | :------------------------------------------------- |
| `username` | Yes      | The exact username of the viewer receiving points. |
| `amount`   | Yes      | The number of points (positive integer) to award.  |

## Related Commands

- [`!points`](points.md): Allows viewers to check their own point balance.
- [`!givepoints`](givepoints.md): Enables viewers to transfer points to other viewers (if enabled).

## Configuration

The `!addpoints` command relies on the StreamElements loyalty system being active.

1.  Navigate to your **StreamElements Dashboard**.
2.  Go to **Loyalty** -> **Loyalty Settings**.
3.  Ensure the **Enable Loyalty System** toggle is switched **on**.
4.  Go to **Chatbot** -> **Chat Commands**.
5.  Ensure `!addpoints` is present in your **Default Commands** list and is **enabled**. You can customize its permission level here if needed (e.g., Moderator+).
