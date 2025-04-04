---
id: accountage
sidebar_label: "!accountage"
description: "Check the creation date (age) of any Twitch account using the StreamElements chatbot !accountage command. Useful for moderation and verification."
tags:
  - chatbot
  - commands
  - moderation
  - utility
  - default
  - twitch
keywords:
  - accountage
  - account age
  - Twitch account
  - user verification
  - moderation
  - created date
  - streamelements chatbot
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

# !accountage

<PlatformBadges supported={[ 'Twitch' ]} />

## Overview

The `!accountage` command allows users to check the creation date (age) of a Twitch account. This tool is particularly useful for moderators to verify user authenticity or determine eligibility for certain privileges based on account age.

## Usage / Syntax

To use the command, type `!accountage` followed by an optional username. If no username is provided, it checks the account age of the user running the command.

```streamelements
!accountage <username>
```

## Parameters / Configuration / Options

-   `<username>` (Optional): The Twitch username of the account you want to check. If omitted, the command checks the account age of the user who issued the command.

This command requires a connection to Twitch to fetch the account creation date.

## Examples

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!accountage StreamElements"
  outputMessage="@ModUser, StreamElements was created 10 years 2 months 28 days 7 hours ago."
/>

<ExampleChatInteraction
  inputPersona="viewer"
  inputUsernameOverride="ViewerBob"
  inputMessage="!accountage"
  outputMessage="@ViewerBob, your account was created 3 years 5 months 12 days 4 hours ago."
/>

## Aliases

The `!accountage` command has the following default aliases:

*   `!accage`
*   `!created`

These aliases can be used interchangeably with the main command.

## Related Commands

- [`!followage`](followage.md): Checks how long a user has been following the channel

