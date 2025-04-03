---
id: deny
title: Using the !deny Command to Reject Duels
sidebar_label: "!deny"
description: "Learn how viewers use the StreamElements !deny command to reject incoming duel requests from other chat members."
tags:
  - chatbot
  - commands
  - games
  - duel
  - loyalty
keywords:
- deny command
- reject duel
- decline duel request
- StreamElements chatbot
- Twitch chat commands
- chat games
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!deny` command allows a viewer who has received a duel request (via the [`!duel`](mdc:duel.md) command) to reject it. This is part of the Duel chat game module.

## Usage / Syntax

To reject a pending duel request, the recipient types:

```
!deny
```

## Parameters / Configuration / Options

- **Parameters**: This command does not take any parameters.
- **Configuration**: Requires the Duel module to be enabled and an active duel request pending for the user typing the command.
- **Aliases**: No default aliases, but custom ones can be created.

## Examples

Rejecting an incoming duel request from "ChallengerUser":

<ExampleChatInteraction
  inputPersona="viewer"
  inputUsernameOverride="TargetUser"
  inputMessage="!deny"
  outputMessage="@TargetUser, you have denied the duel request from ChallengerUser."
/>

Trying to use `!deny` when no duel request is pending:

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!deny"
  outputMessage="@ViewerName, you don't have any pending duel requests to deny."
/>

## Related Commands

- [`!duel`](duel.md): Initiates a duel request with another viewer
- [`!accept`](accept.md): Accepts an incoming duel request
