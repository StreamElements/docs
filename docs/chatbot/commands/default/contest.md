---
id: contest
title: Using the !contest Command for Contest Info
sidebar_label: "!contest"
description: "Learn how the StreamElements !contest command allows viewers to get information about currently active contests/polls."
tags:
  - chatbot
  - commands
  - contest
  - betting
  - polls
keywords:
- contest
- chatbot command
- active contest
- viewer engagement
- stream contests
- StreamElements
- contest info
- poll info
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!contest` command displays information about the currently active contest or poll running via the StreamElements Contest module. This allows viewers to see the contest question, options, and remaining time.

## Usage / Syntax

To check for an active contest, type:

```
!contest
```

## Parameters / Configuration / Options

- **Parameters**: This command does not take any parameters.
- **Configuration**: Requires the Contest module to be enabled and an active contest/poll to be running. Contest settings (duration, options, betting configuration) are managed in the StreamElements dashboard (Bot -> Modules -> Contests).

## Examples

When a contest/poll is active:

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!contest"
  outputMessage="@ViewerName, the current contest is \"Will I win the next game?\". You can !bet for win, lose. Betting ends in 4 mins 55 secs"
/>

When no contest/poll is active:

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!contest"
  outputMessage="@ViewerName, there is no active contest."
/>

*Note: The exact bot response depends on the active contest configuration.*

## Customization

While the `!contest` command itself cannot be customized, you can customize the contest settings, such as:

- Contest duration
- Betting options
- Minimum and maximum bet amounts

These settings can be adjusted in the StreamElements dashboard under the Loyalty settings.
