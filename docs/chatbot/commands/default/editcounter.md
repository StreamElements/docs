---
id: editcounter
title: Using the !editcounter Command to Modify Counters
sidebar_label: "!editcounter"
description: "Learn how moderators use the StreamElements !editcounter command to directly set, increment, or decrement custom counter values."
tags:
  - chatbot
  - commands
  - counters
  - moderation
  - variables
keywords:
- editcounter
- counter
- increment
- decrement
- set value
- StreamElements
- chatbot
- commands
- modify counter
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!editcounter` command allows moderators or the broadcaster to directly modify the value of a custom counter (created via the StreamElements dashboard or API). This is useful for manually adjusting counters used for tracking stream events, stats, etc.

## Usage / Syntax

Modify a counter using the following syntax:

```
!editcounter <counter_name> <value_or_change>
```

## Parameters / Configuration / Options

| Parameter           | Required | Description                                                                                                                               | Example |
| :------------------ | :------- | :---------------------------------------------------------------------------------------------------------------------------------------- | :------ |
| `<counter_name>`    | Required | The name of the custom counter to modify (must already exist).                                                                            | `deaths`  |
| `<value_or_change>` | Required | How to change the value: `<number>` to set directly (e.g., `10`), `+<number>` to increment (e.g., `+1`), `-<number>` to decrement (e.g., `-5`). | `+1`    |

- **Permissions**: Typically restricted to moderators and the broadcaster.

## Examples

Increment the "deaths" counter by 1:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!editcounter deaths +1"
  outputMessage="@ModUser changed the deaths counter from 5 to 6"
/>

Set the "wins" counter directly to 10:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!editcounter wins 10"
  outputMessage="@ModUser changed the wins counter from 9 to 10"
/>

Decrement the "fails" counter by 2:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!editcounter fails -2"
  outputMessage="@ModUser changed the fails counter from 20 to 18"
/>

