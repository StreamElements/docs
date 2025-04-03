---
id: removesong
title: Using the !removesong Command to Manage Song Requests
sidebar_label: "!removesong"
description: "Learn how moderators use the StreamElements !removesong command to remove specific songs or all songs from a user in the song request queue."
tags:
  - chatbot
  - commands
  - songrequest
  - media
  - moderation
keywords:
- removesong
- song request
- queue management
- StreamElements
- Twitch commands
- moderator tools
- media request
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!removesong` command allows moderators or the broadcaster to remove songs from the StreamElements song request queue. You can remove either a specific song by its URL or all songs requested by a particular user.

## Usage / Syntax

Use one of the following formats:

1.  **Remove specific song by URL:**
    ```
    !removesong <URL>
    ```
2.  **Remove all songs by user:**
    ```
    !removesong <username>
    ```

## Parameters / Configuration / Options

| Parameter    | Required (One Of) | Description                                            | Example                                           |
| :----------- | :---------------- | :----------------------------------------------------- | :------------------------------------------------ |
| `<URL>`      | Yes               | The full URL of the song request to remove.          | `https://www.youtube.com/watch?v=dQw4w9WgXcQ`     |
| `<username>` | Yes               | The username of the viewer whose requests to remove. | `CoolViewer123`                                   |

- **Note**: You must provide *either* a `<URL>` *or* a `<username>`.
- **Permissions**: This command is typically restricted to moderators and the broadcaster.

## Examples

Remove a specific song by its URL:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!removesong https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  outputMessage="@ModUser, removed song https://www.youtube.com/watch?v=dQw4w9WgXcQ from the queue."
/>

Remove all songs requested by user "CoolViewer123":

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!removesong CoolViewer123"
  outputMessage="@ModUser, removed all songs requested by CoolViewer123."
/>

## Related Commands

- [`!songrequest`](songrequest.md): Used to add songs to the queue
- [`!song`](song.md): Displays information about the currently playing song
- [`!skip`](skip.md): Skips the current song in the queue

## Configuration

The `!removesong` command is available by default in StreamElements chatbot. No additional configuration is required to use this command.
