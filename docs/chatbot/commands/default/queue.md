---
id: queue
sidebar_label: "!queue"
description: "Learn how to manage viewer queues during live streams using the !queue command in StreamElements chatbot."
keywords:
- StreamElements
- chatbot
- queue
- live stream
- viewer management
- moderation
---

# !queue

## Overview

The `!queue` command is a powerful tool for managing viewer queues during live streams. It allows streamers and moderators to control who joins the queue, pick participants, and manage the overall queue state.

## Usage

The basic syntax for the `!queue` command is:

```
!queue <subcommand> [parameters]
```

## Examples

1. Randomly select a viewer from the queue:
   ```
   !queue pick random
   ```

2. Remove a specific viewer from the queue:
   ```
   !queue remove JohnDoe123
   ```

## Parameters

The `!queue` command uses various subcommands as parameters:

- `pick`: Select a viewer from the queue
  - `username`: Manually select a specific viewer
  - `random`: Randomly select a viewer
- `remove <username>`: Remove a specific viewer from the queue
- `list`: Display the full list of viewers in the queue
- `position`: Show a viewer's position in the queue
- `close`: Close the queue to new entries
- `pause`: Temporarily stop viewers from joining the queue
- `unpause`: Re-open the queue for viewers to join

## Usage

Here's a detailed explanation of each subcommand:

1. **Picking viewers**
   - To manually pick a viewer: `!queue pick *username*`
   - To randomly pick a viewer: `!queue pick random`

2. **Managing the queue**
   - To remove a viewer: `!queue remove *username*`
   - To view the full queue: `!queue list`
   - To check a viewer's position: `!queue position`

3. **Controlling queue state**
   - To close the queue: `!queue close`
   - To pause new entries: `!queue pause`
   - To resume accepting entries: `!queue unpause`

## Customization

Streamers can customize the `!queue` command behavior through the StreamElements dashboard. Options may include:

- Setting queue size limits
- Customizing messages for queue actions
- Restricting queue access to specific user roles
