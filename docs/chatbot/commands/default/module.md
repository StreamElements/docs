---
id: module
title: Using the !module Command to Enable/Disable Modules
sidebar_label: "!module"
description: "Learn how moderators use the StreamElements !module command to enable or disable chatbot modules (like Roulette, Raffles) directly from chat."
tags:
  - chatbot
  - commands
  - moderation
  - modules
  - configuration
keywords:
- chatbot
- module
- enable
- disable
- StreamElements
- command
- manage modules
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!module` command allows moderators and the broadcaster to enable or disable specific StreamElements chatbot modules (e.g., Roulette, Raffles, Duel) directly from chat. This provides quick control over features without needing the dashboard.

## Usage / Syntax

Enable or disable a module using the following syntax:

```
!module <module_name> <enable|disable>
```

## Parameters / Configuration / Options

| Parameter       | Required | Description                                                     | Example    |
| :-------------- | :------- | :-------------------------------------------------------------- | :--------- |
| `<module_name>` | Required | The internal name of the module (e.g., `roulette`, `raffles`). | `roulette` |
| `<action>`      | Required | Either `enable` or `disable`.                                   | `disable`  |

- **Permissions**: This command is typically restricted to moderators and the broadcaster.

## Examples

Disabling the Roulette module:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!module roulette disable"
  outputMessage="Roulette module disabled!"
/>

Enabling the Raffles module:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!module raffles enable"
  outputMessage="Raffles module enabled!"
/>

*Note: Exact module names and response messages may vary slightly.*

## Related Commands

- [`!commands`](commands.md): Lists all available chatbot commands
- [`!permit`](permit.md): Grants temporary permission for users to post links

## Configuration

The `!module` command is available by default to the broadcaster and moderators. You can adjust command permissions in the StreamElements dashboard under the Chatbot > Commands section.
