---
id: user
sidebar_label: "User Variables"
description: "Comprehensive guide to StreamElements Chatbot user variables for streamers and moderators"
keywords:
- streamelements
- chatbot
- user variables
- streamer tools
- chat commands
---

# User Variables

## Overview

User variables in the StreamElements Chatbot allow you to access and display various user-related information in your chat messages and commands. These variables provide data such as usernames, loyalty points, ranks, and activity timestamps.

## Usage

To use a user variable, include it in your chat message or command response using the `$()` syntax. For example, `$(user)` will display the user's display name.

**Important Distinction:** 
- `$(user)` behaves similarly to [$(sender)](sender.md) when used without arguments, referring to the user who triggered the command.
- However, `$(user)` can accept an optional username argument to retrieve information about any user, not just the command sender.

## Examples

Here are practical examples of using user variables:

1. Greeting the command sender with their points:
```
Welcome, $(user)! You have $(user.points) points.
```

2. Checking points for a specific user:
```
$(user adeithe) has $(user.points adeithe) points.
```

3. Comparing the sender's rank with another user's:
```
$(sender) is rank $(user.points_rank) and $(user.points_rank adeithe) on the leaderboard.
```

4. Checking when a user was last seen in chat:
```
$(user styler) was last seen $(user.lastseen styler) ago.
```

## Available User Variables

### $(user)

Displays the user's display name.

**Example:**
```
Current user: $(user)
```
**Output:** `Current user: Styler`

### $(user.name)

Displays the user's display name in lowercase letters.

**Example:**
```
Current user: $(user.name)
```
**Output:** `Current user: styler`

### $(user.points)

Displays the user's loyalty currency owned.

**Example:**
```
$(user) has $(user.points) points
```
**Output:** `Styler has 100 points`

### $(user.points_rank)

Displays the user's rank on the loyalty currency leaderboard.

**Example:**
```
$(user) is rank $(user.points_rank) on the leaderboard
```
**Output:** `Styler is rank 5/283 on the leaderboard`

### $(user.points_alltime_rank)

Displays the user's rank on the all-time loyalty currency leaderboard.

**Example:**
```
$(user) is rank $(user.points_alltime_rank) on the all-time leaderboard
```
**Output:** `Styler is rank 5/283 on the all-time leaderboard`

### $(user.level)

Displays the user's access level.

**Example:**
```
$(user) is level $(user.level)
```
**Output:** `Styler is level 2000`

### $(user.lastmessage)

Displays the user's last typed message in the chat.

**Example:**
```
$(user) last typed: $(user.lastmessage)
```
**Output:** `Styler last typed: !points`

### $(user.lastseen)

Displays the time that a user was most recently seen in the viewer list or chat.

**Example:**
```
$(user) was last seen $(user.lastseen) ago
```
**Output:** `Styler was last seen 13m 15s ago`

### $(user.lastactive)

Displays the time that a user most recently typed a message in the chat.

**Example:**
```
$(user) was last active $(user.lastactive) ago
```
**Output:** `Styler was last active 13m 15s ago`

### $(user.time_online)

Displays the total time a user has spent watching the stream.

**Example:**
```
$(user) has been watching the stream for $(user.time_online)
```
**Output:** `Styler has been watching the stream for 27m 16s`

### $(user.time_online_rank)

Displays the user's rank on the leaderboard for online time watched.

**Example:**
```
$(user) is rank $(user.time_online_rank) on the online leaderboard
```
**Output:** `Styler is rank 5/283 on the online leaderboard`

### $(user.time_offline_rank)

Displays the user's rank on the leaderboard for offline time watched.

**Example:**
```
$(user) is rank $(user.time_offline_rank) on the offline leaderboard
```
**Output:** `Styler is rank 5/283 on the offline leaderboard`

