---
id: disablesfx
title: Using the !disablesfx Command to Disable Sound Effects
sidebar_label: "!disablesfx"
description: "Learn how moderators use the StreamElements !disablesfx command to quickly disable all sound effect items in the loyalty store."
tags:
  - chatbot
  - commands
  - loyalty
  - store
  - sound effects
  - moderation
keywords:
- disablesfx
- disable sound effects
- streamelements chatbot
- loyalty store
- stream audio management
- sfx
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!disablesfx` command allows moderators or the broadcaster to disable all items designated as "Sound effect" within the StreamElements Loyalty Store simultaneously. This is useful for quickly pausing sound redemptions. Use [`!enablesfx`](mdc:enablesfx.md) to re-enable them.

## Usage / Syntax

To disable all sound effect store items, execute:

```
!disablesfx
```

## Parameters / Configuration / Options

- **Parameters**: This command does not take any parameters.
- **Permissions**: Typically restricted to moderators and the broadcaster.

## Examples

Disabling all sound effect items:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!disablesfx"
  outputMessage="@[ModUser], successfully updated X items."
/>

*Note: The number of updated items (X) depends on how many sound effect items were currently enabled.*

## Related Commands

- [`!enablesfx`](enablesfx.md): Enables all sound effect items in the loyalty store
