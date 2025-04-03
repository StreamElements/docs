---
id: openstore
title: Using the !openstore Command to Enable Store Items
sidebar_label: "!openstore"
description: "Learn how to use the !openstore command to enable all regular items in your StreamElements loyalty store. Easily manage your store with this simple command."
tags:
  - chatbot
  - commands
  - loyalty
  - store
keywords:
- openstore
- enable items
- loyalty store
- stream store
- chatbot command
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!openstore` command enables all regular items in your StreamElements loyalty store that were previously disabled (e.g., using `!closestore`). This provides a quick way to make multiple items available to viewers simultaneously.

## Usage / Syntax

To enable disabled store items, simply execute the command:

```
!openstore
```

This command has no parameters.

## Parameters / Configuration / Options

- **Permissions**: This command is typically restricted to moderators and the broadcaster by default. Permissions can be managed in the StreamElements dashboard (Chatbot -> User Management -> Command Permissions).

## Examples

Enabling previously disabled items:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!openstore"
  outputMessage="@[ModeratorName], successfully updated 13 items."
/>

When no items needed updating (all were already enabled):

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!openstore"
  outputMessage="@[ModeratorName], no items were updated. All regular items are already enabled."
/>

## Related Commands

- [`!closestore`](closestore.md) - Disables all regular items in the loyalty store
