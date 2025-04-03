---
id: cancelraffle
title: Using the !cancelraffle Command to Cancel Raffles
sidebar_label: "!cancelraffle"
description: "Learn how moderators use the StreamElements !cancelraffle command to immediately cancel an active raffle."
tags:
  - chatbot
  - commands
  - moderation
  - raffle
  - loyalty
keywords:
- cancelraffle
- cancel twitch raffle
- stop twitch raffle
- end twitch giveaway
- halt twitch contest
- cancel giveaway
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!cancelraffle` command allows moderators or the broadcaster to immediately stop an active raffle (started with [`!raffle`](mdc:raffle.md) or [`!sraffle`](mdc:sraffle.md)) before it completes.

## Usage / Syntax

To cancel the currently active raffle:

```
!cancelraffle
```

## Parameters / Configuration / Options

- **Parameters**: This command does not take any parameters.
- **Configuration**: Requires the Raffle module to be enabled and a raffle to be currently active.
- **Permissions**: Typically restricted to moderators and the broadcaster.
- **Aliases**: No default aliases, but custom ones can be created.
- **Customization**: The bot response message can be customized in the module settings.

## Examples

Canceling an active raffle:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!cancelraffle"
  outputMessage="The raffle was canceled!"
/>

Attempting to cancel when no raffle is active:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!cancelraffle"
  outputMessage="There is no active raffle to cancel."
/>

## Related Commands

- [`!raffle`](raffle.md): Starts a new raffle.
- [`!sraffle`](sraffle.md): Starts a new single raffle.

## Configuration

The `!cancelraffle` command is part of the [Raffle Module](../../modules/raffle). Ensure that this module is enabled in your StreamElements chatbot settings to use this command.

## Aliases

There are no default aliases for this command. However, you can create custom aliases in your StreamElements dashboard if desired.

## Customization

You can customize the response message for the `!cancelraffle` command in your StreamElements dashboard. This allows you to personalize the cancellation announcement to match your stream's style or provide additional information to your viewers.
