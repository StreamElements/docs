---
id: viewerqueue
sidebar_label: "Viewer Queue"
description: "Master the StreamElements Viewer Queue module to efficiently manage viewer interactions, boost engagement, and streamline your live streams."
keywords:
- StreamElements viewer queue
- live stream interaction management
- viewer engagement tools
- stream queue system
- Twitch viewer queue
- YouTube live queue
- interactive streaming
- audience participation
- streamer queue management
- viewer selection tool
---

# Viewer Queue Module

## Overview

The Viewer Queue module allows streamers to create and manage a queue where viewers can join and be selected. This feature is particularly useful for organizing viewer interactions, such as game participation, Q&A sessions, or giveaways during live streams.

## Usage

To use the Viewer Queue module, streamers and moderators can use specific commands to manage the queue, while viewers can join the queue using a designated command.

## Examples

1. Starting a queue for viewers to join a game:

```
Streamer: !queue open
Bot: The queue is now open! Type !join to enter the queue.
Viewer1: !join
Bot: Viewer1 has joined the queue at position 1.
Viewer2: !join
Bot: Viewer2 has joined the queue at position 2.
```

2. Selecting a viewer from the queue:

```
Streamer: !queue next
Bot: The next viewer in the queue is Viewer1!
```

## Parameters

The Viewer Queue module doesn't have specific parameters, but it uses various commands to manage the queue.

## Related Commands

- [`!queue`](../commands/default/queue.mdx): The main command for viewers to join the queue.
- [`!queue open`](../commands/default/queue.mdx): Opens the queue for viewers to join (mod only).
- [`!queue close`](../commands/default/queue.mdx): Closes the queue, preventing new entries (mod only).
- [`!queue clear`](../commands/default/queue.mdx): Clears all entries from the queue (mod only).
- [`!queue next`](../commands/default/queue.mdx): Selects the next viewer from the queue (mod only).
- [`!queue list`](../commands/default/queue.mdx): Displays the current queue (mod only).

## Configuration

The Viewer Queue module can be configured in the StreamElements dashboard. Streamers can customize settings such as:

- Maximum queue size
- Auto-close queue when full
- Cooldown between joins
- Custom messages for queue events

## FAQ

**Q: Can viewers join the queue multiple times?**
A: Viewers can only join the queue once.

**Q: How long does a queue last?**
A: The queue remains active until it's manually closed or cleared by a moderator, or until the stream ends.
