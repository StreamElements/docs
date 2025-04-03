---
id: leaderboard
title: Using the !leaderboard Command for Loyalty Leaderboard Link
sidebar_label: "!leaderboard"
description: "Learn how the StreamElements !leaderboard command provides a direct link to the channel's loyalty points leaderboard page."
tags:
  - chatbot
  - commands
  - loyalty
  - points
  - leaderboard
keywords:
- leaderboard command
- loyalty points
- twitch chatbot
- youtube chatbot
- viewer engagement
- streamelements
- chat commands
- points leaderboard
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!leaderboard` command posts a direct link to the channel's StreamElements loyalty points leaderboard page in the chat. This allows viewers to easily check the full rankings.

## Usage / Syntax

To display the leaderboard link, simply type:

```
!leaderboard
```

## Parameters / Configuration / Options

- **Parameters**: This command does not take any parameters.
- **Configuration**: Requires the Loyalty system to be enabled in the StreamElements dashboard.

## Examples

Displaying the link to the leaderboard:

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!leaderboard"
  outputMessage="Check out the [ChannelName] Leaderboard here: https://streamelements.com/[ChannelName]/leaderboard"
/>

## Related Commands

- [`!points`](points.md): Displays the user's current loyalty points balance
- [`!top`](top.md): Shows the top point earners directly in the chat (if configured)
