---
id: level
title: Using the !level Command for User Access Levels
sidebar_label: "!level"
description: "Learn how moderators use the StreamElements !level command to view, set, and reset user access levels for command permissions."
tags:
  - chatbot
  - commands
  - moderation
  - permissions
  - user levels
keywords:
- StreamElements
- chatbot
- commands
- level
- user levels
- moderation
- customization
- permissions
- access control
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!level` command allows moderators and the broadcaster to view or modify a user's access level within the StreamElements chatbot system. These levels determine which commands a user can execute, based on the permission settings of each command.

## Usage / Syntax

The command has three forms:

1.  **Check a user's level:**
    ```
    !level <username>
    ```
2.  **Set a user's level:**
    ```
    !level <username> <level_value>
    ```
3.  **Reset a user's level to default (100):**
    ```
    !level <username> reset
    ```

## Parameters / Configuration / Options

| Parameter       | Required | Description                                                                               | Example      |
| :-------------- | :------- | :---------------------------------------------------------------------------------------- | :----------- |
| `<username>`    | Required | The username of the viewer whose level is being checked, set, or reset.                   | `ViewerName` |
| `<level_value>` | Optional | The numerical level to assign (see below). Required only when *setting* a level.        | `500`        |
| `reset`         | Optional | The keyword `reset`. Required only when *resetting* a level to the default (`100`). | `reset`      |

-   **Standard Level Values**:
    -   `100`: Viewer (Default)
    -   `250`: Subscriber (Auto-assigned on Twitch if linked)
    -   `300`: Regular (Manually assigned or via `!regular` command)
    -   `400`: VIP (Auto-assigned on Twitch if linked)
    -   `500`: Moderator (Auto-assigned)
    -   `1000`: Super Moderator (Manually assigned)
-   **Note**: Auto-assigned levels (Sub, VIP, Mod) can be manually overridden with `!level`, but this is generally not recommended unless you have a specific reason (e.g., giving mod perks to a non-mod).
-   **Permissions**: This command is typically restricted to moderators (`500`) and the broadcaster.
-   **Error Messages**: The bot will indicate incorrect usage (e.g., `usage !level USER 500/reset`) or list valid levels if an invalid value is provided.

## Examples

Check a user's current level:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!level ViewerName"
  outputMessage="@[ModUser], the level of ViewerName is 100"
/>

Set a user's level to Moderator (500):

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!level AnotherViewer 500"
  outputMessage="@[ModUser], successfully set AnotherViewer's level to 500, you can reset it with !level AnotherViewer reset"
/>

Reset a user's level back to the default (Viewer/100):

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!level AnotherViewer reset"
  outputMessage="@[ModUser], successfully reset AnotherViewer's level to 100 Kappa"
/>

## Customization

You can use user levels to create custom commands or features in your stream. For example:

- Create commands that only users with a certain level or higher can use
- Set up automatic responses or actions based on a user's level
- Implement a loyalty system using levels

## Related Commands

- [`!permit`](permit.md): Temporarily allow a user to post links (often used in conjunction with user levels)
