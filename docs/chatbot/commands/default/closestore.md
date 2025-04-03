---
id: closestore
title: Using the !closestore Command to Disable Store Items
sidebar_label: "!closestore"
description: "Learn how moderators use the StreamElements !closestore command to quickly disable all regular items in the loyalty store."
tags:
  - chatbot
  - commands
  - loyalty
  - store
  - moderation
keywords:
- closestore
- disable store items
- loyalty store
- stream store
- streamelements chatbot
- close store
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!closestore` command allows moderators or the broadcaster to disable all regular items (excluding sound effects) in the StreamElements Loyalty Store simultaneously. This is useful for temporarily closing the store. Use [`!openstore`](mdc:openstore.md) to re-enable them.

## Usage / Syntax

To disable all enabled regular store items, execute:

```
!closestore
```

## Parameters / Configuration / Options

- **Parameters**: This command does not take any parameters.
- **Permissions**: Typically restricted to moderators and the broadcaster.

## Examples

Disabling all enabled regular store items:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!closestore"
  outputMessage="@[ModUser], successfully updated X items."
/>

*Note: The number of updated items (X) depends on how many regular items were currently enabled.*

## Related Commands

- [`!openstore`](openstore.md): Re-enables all regular items in the loyalty store that were previously disabled.
- [`!disablesfx`](disablesfx.md): Disables all sound effect items in the loyalty store.
- [`!enablesfx`](enablesfx.md): Enables all sound effect items in the loyalty store.
