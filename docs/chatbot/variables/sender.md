---
id: sender
sidebar_label: "$(sender)"
description: "Comprehensive guide to the StreamElements Chatbot $(sender) variable for streamers and moderators"
tags:
  - chatbot
  - variable
  - sender
keywords:
  - streamelements
  - chatbot
  - sender variable
  - streamer tools
  - chat commands
---

# $(sender) Variable

## Overview

The `$(sender)` variable in StreamElements Chatbot always refers to the user who triggered the command or message. It provides access to various user-related information such as username, loyalty points, ranks, and activity timestamps.

:::tip Key Point
`$(sender)` always refers to the command trigger and doesn't accept arguments. If you need to query information about other users, use the [`$(user)`](user.md) variable instead.
:::

## Aliases

`$(source)` can also be used as an alias for `$(sender)`.

## Usage

To use the `$(sender)` variable, include it in your chat message or command response using the `$()` syntax. For example, `$(sender)` will display the command trigger's display name.

## Available sender Variables

### $(sender)

Displays the message sender's display name.

**Example:**
```
Current user: $(sender)
```
**Output:** `Current user: Styler`

### $(sender.name)

Displays the sender's display name in lowercase letters.

**Example:**
```
Current user: $(sender.name)
```
**Output:** `Current user: styler`

### $(sender.points)

Displays the sender's loyalty currency owned.

**Example:**
```
$(sender) has $(sender.points) points
```
**Output:** `Styler has 100 points`

### $(sender.points_rank)

Displays the sender's rank on the loyalty currency leaderboard.

**Example:**
```
$(sender) is rank $(sender.points_rank) on the leaderboard
```
**Output:** `Styler is rank 5/283 on the leaderboard`

### $(sender.points_alltime_rank)

Displays the sender's rank on the all-time loyalty currency leaderboard.

**Example:**
```
$(sender) is rank $(sender.points_alltime_rank) on the all-time leaderboard
```
**Output:** `Styler is rank 5/283 on the all-time leaderboard`

### $(sender.level)

Displays the sender's access level.

**Example:**
```
$(sender) is level $(sender.level)
```
**Output:** `Styler is level 2000`

### $(sender.lastmessage)

Displays the sender's last typed message in the chat.

**Example:**
```
$(sender) last typed: $(sender.lastmessage)
```
**Output:** `Styler last typed: !points`

### $(sender.lastseen)

Displays the time that the sender was most recently seen in the viewer list or chat.

**Example:**
```
$(sender) was last seen $(sender.lastseen) ago
```
**Output:** `Styler was last seen 13m 15s ago`

### $(sender.lastactive)

Displays the time that the sender most recently typed a message in the chat.

**Example:**
```
$(sender) was last active $(sender.lastactive) ago
```
**Output:** `Styler was last active 13m 15s ago`

### $(sender.time_online)

Displays the total time the sender has spent watching the stream.

**Example:**
```
$(sender) has been watching the stream for $(sender.time_online)
```
**Output:** `Styler has been watching the stream for 27m 16s`

### $(sender.time_online_rank)

Displays the sender's rank on the leaderboard for online time watched.

**Example:**
```
$(sender) is rank $(sender.time_online_rank) on the online leaderboard
```
**Output:** `Styler is rank 5/283 on the online leaderboard`

### $(sender.time_offline_rank)

Displays the sender's rank on the leaderboard for offline time watched.

**Example:**
```
$(sender) is rank $(sender.time_offline_rank) on the offline leaderboard
```
**Output:** `Styler is rank 5/283 on the offline leaderboard`

## Best Practices

1. Use `$(sender)` when you only need information about the command trigger.
2. If you need to reference other users or allow flexible user queries, use the [`$(user)`](user.md) variable instead.

## Troubleshooting

- If a variable returns unexpected results, ensure you're using the correct syntax and that the user exists in your channel's database.
- Remember that `$(sender)` variables don't accept arguments. If you need to query other users, use `$(user)` instead.

## Related Documentation

- For querying information about any user, see the [`$(user)` variable documentation](user.md).
