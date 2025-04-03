---
id: points
title: Using the !points Command to Check Loyalty Points and Rank
sidebar_label: "!points"
description: "Learn how to use the !points command in StreamElements chatbot to check user loyalty points and leaderboard rank, helping viewers track their engagement rewards."
tags:
  - chatbot
  - commands
  - loyalty
  - points
keywords:
  - StreamElements
  - chatbot
  - commands
  - loyalty
  - points
  - leaderboard
  - rank
---

import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';
import PlatformBadges from '@site/src/components/PlatformBadges';

# !points
<PlatformBadges supported={[ 'Twitch', 'YouTube' ]} />

## Overview

The `!points` command allows users to check their loyalty points and leaderboard rank in the StreamElements chatbot system. This command can be used by viewers to see their own points or to check the points of other users in the chat.

## Usage

To use the `!points` command, type it in the chat followed by an optional username:

```
!points [username]
```

If no username is provided, the command will display the points and rank of the user who issued the command.

## Parameters

| Parameter    | Required | Description                                                                                                                     | Example   |
| :----------- | :------- | :------------------------------------------------------------------------------------------------------------------------------ | :-------- |
| `[username]` | No       | The username of the user whose points and rank you want to display. If omitted or not found, shows the command issuer's points. | `adeithe` |

## Examples

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!points"
  outputMessage="YourUsername has 2643 nammers and is rank 22658/22671 on the leaderboard."
/>

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!points adeithe"
  outputMessage="adeithe has 0 nammers and is rank 22669/22671 on the leaderboard."
/>
