---
id: slots
title: Using the !slots Command for a Chat Mini-Game
sidebar_label: "!slots"
description: "Learn how to use the !slots command in StreamElements chatbot to play a fun slot machine mini-game and win loyalty points in your Twitch chat."
tags:
  - chatbot
  - commands
  - loyalty
  - engagement
  - games
keywords:
- slots
- slot machine
- gambling
- mini-game
- loyalty points
- chatbot
- StreamElements
- Twitch
---
import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

# !slots
<PlatformBadges supported={[ 'Twitch', 'YouTube' ]} />

## Overview

The `!slots` command allows viewers to play a simple slot machine game in your Twitch chat. Users bet a certain amount of loyalty points and have a chance to win a multiple of their bet back.

## Usage

To use the `!slots` command, viewers type the command followed by the number of points they want to bet:

```
!slots <bet>
```

Where `<bet>` is the number of loyalty points the user wants to wager.

## Examples

### Betting points (and losing)
<ExampleChatInteraction
  inputPersona="viewer"
  inputUsernameOverride="Styler"
  inputMessage="!slots 100"
  outputMessage="@Styler you got Kappa | Kappa | Keepo and lost your 100 points LUL"
/>

### Betting points (and winning)
<ExampleChatInteraction
  inputPersona="viewer"
  inputUsernameOverride="Styler"
  inputMessage="!slots 500"
  outputMessage="@Styler you got Kappa | Kappa | Kappa and won 1500 points PogChamp" 
/>

## Parameters

| Parameter | Required | Description                                             | Example |
| :-------- | :------- | :------------------------------------------------------ | :------ |
| `bet`     | Yes      | The amount of loyalty points to bet (positive integer). | `100`   |
