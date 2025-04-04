---
id: bet
sidebar_label: "!bet"
description: "Allow viewers to participate in stream betting contests using their loyalty points with the StreamElements chatbot !bet command."
tags:
  - chatbot
  - commands
  - loyalty
  - game
  - betting
  - default
keywords:
  - bet command
  - Twitch chatbot
  - viewer engagement
  - loyalty rewards
  - interactive commands
  - betting system
  - streamelements chatbot
  - loyalty points
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

# !bet

<PlatformBadges supported={[ 'Twitch' ]} />

## Overview

The `!bet` command allows viewers to use their loyalty points to bet on the outcome of a contest or event defined by the streamer. This command is used **while a bet is active**, which is initiated through the StreamElements dashboard or via chatbot commands like `!contest`.

## Usage / Syntax

To place a bet while a betting contest is open, viewers use the following syntax:

```streamelements
!bet <option> <points>
```

## Parameters / Configuration / Options

| Parameter  | Required | Description                                                                                                                                           |
| :--------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<option>` | Yes      | The specific betting option the viewer wants to choose (defined by the streamer when starting the bet).                                               |
| `<points>` | Yes      | The number of loyalty points to wager. This can be a specific number, a percentage (`50%`), or use `k` for thousands (`5k`), `m` for millions (`1m`). |

**Configuration:**

*   Betting contests are managed via the **Betting module** in the StreamElements dashboard or through commands like `!contest`. Streamers define the options, duration, and other settings there.
*   Viewers need sufficient loyalty points to place a bet.

## Examples

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!bet win 100"
  outputMessage="@Viewer1, you have bet 100 points on Win."
/>

<ExampleChatInteraction
  inputPersona="viewer"
  inputUsernameOverride="HighRoller"
  inputMessage="!bet lose 5k"
  outputMessage="@HighRoller, you have bet 5000 points on Lose."
/>

<ExampleChatInteraction
  inputPersona="viewer"
  inputUsernameOverride="PercentBetta"
  inputMessage="!bet optionA 25%"
  outputMessage="@PercentBetta, you have bet 750 points on optionA."
/>
