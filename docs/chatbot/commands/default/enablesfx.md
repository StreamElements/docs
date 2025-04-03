---
id: enablesfx
title: Using the !enablesfx Command to Enable Sound Effects
sidebar_label: "!enablesfx"
description: "Learn how moderators use the StreamElements !enablesfx command to quickly enable all previously disabled sound effect items in the loyalty store."
tags:
  - chatbot
  - commands
  - loyalty
  - store
  - sound effects
  - moderation
keywords:
- enable sound effects
- enable sfx
- loyalty store
- stream commands
- chatbot
- StreamElements
- sfx
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!enablesfx` command allows moderators or the broadcaster to enable all items designated as "Sound effect" within the StreamElements Loyalty Store that were previously disabled (e.g., using `!disablesfx`). This provides a quick way to reactivate sound redemptions.

## Usage / Syntax

To enable all previously disabled sound effect store items, execute:

```
!enablesfx
```

## Parameters / Configuration / Options

- **Parameters**: This command does not take any parameters.
- **Permissions**: Typically restricted to moderators and the broadcaster.

## Examples

Enabling previously disabled sound effect items:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!enablesfx"
  outputMessage="@[ModUser], successfully updated X items."
/>

When no sound effect items needed enabling (none were disabled):

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!enablesfx"
  outputMessage="@[ModUser], no disabled sound effect items found in the loyalty store."
/>

*Note: The number of updated items (X) depends on how many sound effect items were currently disabled.*

## Related Commands

- [`!disablesfx`](disablesfx.md): Disables all sound effect items in the loyalty store

## Customization

While the `!enablesfx` command itself cannot be customized, you can manage individual sound effect items in your StreamElements dashboard. This includes setting custom prices, cooldowns, and usage limits for each item.
