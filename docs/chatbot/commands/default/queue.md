---
id: queue
title: Using the !queue Command for Viewer Queues
sidebar_label: "!queue"
description: "Learn how to manage viewer queues (e.g., for playing games) during live streams using the StreamElements !queue command."
tags:
  - chatbot
  - commands
  - queue
  - moderation
  - viewer interaction
keywords:
- StreamElements
- chatbot
- queue
- live stream
- viewer management
- moderation
- play with viewers
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!queue` command manages viewer queues, often used for "play with viewers" sessions or similar organized activities. It requires the Queue module to be enabled and configured in the StreamElements dashboard. Moderators can control entries, pick participants, and manage the queue state.

## Usage / Syntax

The command uses a subcommand structure:

```
!queue <subcommand> [parameters]
```

- **Permissions**: Command usage, particularly managing subcommands (`pick`, `remove`, `close`, etc.), is typically restricted to moderators and the broadcaster. Viewer interaction commands (like `!join`, `!leave`, `!position`) depend on module configuration.
- **Configuration**: Key settings like queue size, join command, messages, and role restrictions are managed in the StreamElements dashboard (Bot -> Modules -> Queue).

## Subcommands

Here are the available subcommands for managing the queue (typically mod-only):

-   **`pick <username | random>`**: Selects a viewer.
    -   `!queue pick random`: Picks a random viewer from the queue.
    -   `!queue pick <username>`: Manually picks a specific viewer from the queue.
-   **`remove <username>`**: Removes a specific viewer from the queue.
    -   `!queue remove ViewerName`
-   **`list`**: Displays the full list of viewers currently in the queue.
    -   `!queue list`
-   **`position`**: Shows a viewer's position in the queue (often available to viewers via `!position` if configured).
    -   `!queue position` (when used by mods/bot)
-   **`close`**: Closes the queue, preventing new viewers from joining.
    -   `!queue close`
-   **`open`**: Opens a closed queue, allowing viewers to join again.
    -   `!queue open`
-   **`pause`**: Temporarily stops viewers from joining without fully closing the queue.
    -   `!queue pause`
-   **`unpause`**: Resumes allowing viewers to join a paused queue.
    -   `!queue unpause`
-   **`clear`**: Removes all viewers from the queue.
    -   `!queue clear`

## Examples

Randomly pick a viewer from the queue:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!queue pick random"
  outputMessage="@ViewerPicked has been randomly selected from the queue!"
/>

Remove a specific viewer:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!queue remove DisruptiveViewer"
  outputMessage="DisruptiveViewer has been removed from the queue."
/>

List the current queue members:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!queue list"
  outputMessage="Current queue (3 viewers): Viewer1, Viewer2, Viewer3"
/>

Close the queue to new entries:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!queue close"
  outputMessage="The queue is now closed. No new entries allowed."
/>
