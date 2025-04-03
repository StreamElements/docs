---
id: bet
title: Using the !bet Command for Viewer Betting Contests
sidebar_label: "!bet"
description: "Learn how to use the !bet command in StreamElements Chatbot to engage your Twitch audience with interactive betting contests."
tags:
  - chatbot
  - commands
  - engagement
  - loyalty
keywords:
- Twitch chatbot
- viewer engagement
- loyalty rewards
- interactive commands
- betting system
---
import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

# !bet
<PlatformBadges supported={[ 'Twitch', 'YouTube' ]} />

## Overview

The `!bet` command allows viewers to participate in interactive betting contests, enhancing engagement and potentially earning rewards. This feature is an excellent way to boost viewer loyalty and create exciting moments during your streams.

## Usage

To place a bet, viewers use the following syntax:

```
!bet <option> <points>
```

## Parameters

| Parameter  | Required | Description                                                                                                                                                                                          | Example   |
| :--------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------- |
| `<option>` | Yes      | The betting option the viewer wants to choose. Options are configured by the streamer.                                                                                                                 | `win`     |
| `<points>` | Yes      | The number of loyalty points to wager. Points can be a number (`10`), a percentage (`50%`), or use abbreviations like `k` for thousands (`5k`) and `m` for millions (`1m`). | `10`, `50%`, `5k` |

## Examples

### Betting points on an option
<ExampleChatInteraction
  inputPersona="viewer"
  inputUsernameOverride="Styler"
  inputMessage="!bet win 10"
  outputMessage="@Styler, you have bet 10 nammers on Win."
/>

### Betting a percentage of points
<ExampleChatInteraction
  inputPersona="viewer"
  inputUsernameOverride="Viewer123"
  inputMessage="!bet lose 50%"
  outputMessage="@Viewer123, you have bet 500 nammers on Lose."
/>

### Betting using 'k' abbreviation
<ExampleChatInteraction
  inputPersona="viewer"
  inputUsernameOverride="StreamFan"
  inputMessage="!bet draw 5k"
  outputMessage="@StreamFan, you have bet 5000 nammers on Draw."
/>
