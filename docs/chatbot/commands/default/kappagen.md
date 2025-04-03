---
id: kappagen
title: Using the !kappagen Command for Emote Explosions
sidebar_label: "!kappagen"
description: "Learn how to use the StreamElements !kappagen command to trigger emote explosions via the Kappagen overlay widget."
tags:
  - chatbot
  - commands
  - overlay
  - emotes
  - fun
  - kappagen
keywords:
- kappagen
- emote explosion
- chatbot command
- visual effects
- stream overlay
- kappagen widget
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!kappagen` command triggers an emote explosion effect on the stream via the StreamElements Kappagen overlay widget. This adds a visual burst of emotes to the screen.

## Usage / Syntax

To trigger the effect, simply execute the command:

```
!kappagen
```

## Parameters / Configuration / Options

- **Parameters**: This command does not take any parameters.
- **Configuration**:
    - Requires the Kappagen widget to be added to your active StreamElements overlay scene.
    - The command must be enabled in Chatbot -> Chat Commands -> Default Commands.
    - Kappagen widget settings (emotes used, intensity, duration, cooldown, permissions) are configured within the overlay editor.
- **Permissions**: Configurable within the Kappagen widget settings (often defaults to Everyone or Subs/Mods).
- **Aliases**: No default aliases, but custom ones can be created.

## Examples

Triggering an emote explosion (results appear visually on stream, not in chat):

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!kappagen"
  outputMessage="(No chat output - Visual effect on overlay)"
/>

## Configuration

To use the `!kappagen` command, you need to:

1. Set up the Kappagen widget in your StreamElements overlay.
2. Enable the `!kappagen` command in your StreamElements chatbot settings.
3. (Optional) Customize permissions to control who can use the command.

## Customization

You can customize the Kappagen widget in your StreamElements overlay settings:

- Choose which emotes to include in the explosion
- Adjust the explosion intensity and duration
- Set a cooldown period to prevent overuse

## Related Commands

- [`!emotes`](emotes.md): Displays a list of available emotes in the chat

## Aliases

There are no default aliases for `!kappagen`. However, you can create custom aliases in your StreamElements chatbot settings if desired.
