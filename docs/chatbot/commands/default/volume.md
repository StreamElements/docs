---
id: volume
title: Using the !volume Command for Media Requests
sidebar_label: "!volume"
description: "Learn how to use the !volume command in StreamElements to control and check the volume of media requests in your Twitch or YouTube chat."
tags:
  - chatbot
  - commands
  - songrequest
  - media
  - audio
keywords:
- volume control
- media request
- StreamElements command
- chat command
- audio settings
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!volume` command is used to control and check the volume level for media requests (like song requests) played through the StreamElements Media Request system. This allows moderators or the broadcaster to adjust the playback volume.

## Usage / Syntax

The command can be used in two ways:

1.  **Check current volume:**
    ```
    !volume
    ```
2.  **Set new volume:**
    ```
    !volume <level>
    ```

## Parameters / Configuration / Options

| Parameter | Required | Description                                                                  | Example |
| :-------- | :------- | :--------------------------------------------------------------------------- | :------ |
| `<level>` | Optional | A number between `0` and `100` for the desired volume. If omitted, shows current volume. | `75`    |

- **Permissions**: This command is typically restricted to moderators and the broadcaster by default. Permissions can be managed in the StreamElements dashboard under Chatbot -> User Management -> Command Permissions.

## Examples

Checking the current volume:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!volume"
  outputMessage="Current volume is 50%"
/>

Setting a new volume level:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!volume 75"
  outputMessage="[ModeratorName] set the songrequest volume to 75"
/>

## Related Commands

- [`!songrequest`](songrequest.md): Used to request songs or media content.
- [`!skip`](skip.md): Skips the currently playing media request.
