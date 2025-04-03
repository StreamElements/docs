---
id: hypecup
title: Using the !hypecup Command to Manage HypeCup Overlay
sidebar_label: "!hypecup"
description: "Learn how moderators use the StreamElements !hypecup command (specifically !hypecup clear) to clear the HypeCup overlay on stream."
tags:
  - chatbot
  - commands
  - moderation
  - overlay
  - hypecup
keywords:
- hypecup command
- clear hypecup overlay
- streamelements chatbot
- twitch stream commands
- stream overlay management
- overlay control
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch"]} />

## Overview

The `!hypecup` command interacts with the StreamElements HypeCup overlay. Currently, its primary function is to clear the overlay via the `clear` subcommand.

## Usage / Syntax

To clear the HypeCup overlay, use the following syntax:

```
!hypecup clear
```

## Parameters / Configuration / Options

| Parameter | Required | Description                        |
| :-------- | :------- | :--------------------------------- |
| `clear`   | Required | Signals the command to clear the overlay. |

- **Configuration**: Requires the HypeCup overlay to be added to your active StreamElements overlay scene.
- **Permissions**: This command is typically restricted to moderators and the broadcaster.

## Examples

Clearing the HypeCup overlay:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!hypecup clear"
  outputMessage="@[ModUser], Successfully cleared HypeCup."
/>

Using the command incorrectly (missing `clear`):

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!hypecup"
  outputMessage="@[ModUser], Usage: !hypecup clear"
/>
