---
id: user
sidebar_label: "$(user)"
description: "Comprehensive guide to the StreamElements Chatbot $(user) variable for streamers and moderators"
tags:
  - chatbot
  - variable
  - user
keywords:
  - streamelements
  - chatbot
  - user variable
  - streamer tools
  - chat commands
---

# $(user) Variable

## Overview

The `$(user)` variable in StreamElements Chatbot allows you to access and display various user-related information in your chat messages and commands. These variables provide data such as usernames, loyalty points, ranks, and activity timestamps.

:::tip Key Point
`$(user)` can accept an optional username argument to retrieve information about any user, not just the command sender. When used without arguments, it behaves similarly to [`$(sender)`](sender.md).
:::

## Usage

To use the `$(user)` variable, include it in your chat message or command response using the `$()` syntax. For example, `$(user)` will display the user's display name.

- Without argument: `$(user)` refers to the command sender
- With argument: `$(user username)` refers to the specified user

## Available $(user) Variables

### $(user)

Displays the user's display name.

**Example:**
```
Current user: $(user)
Current user: $(user adeithe)
```
**Output:** 
```
Current user: Styler
Current user: Adeithe
```

### $(user.name)

Displays the user's display name in lowercase letters.

**Example:**
```
Current user: $(user.name)
Current user: $(user.name adeithe)
```
**Output:** 
```
Current user: styler
Current user: adeithe
```

### $(user.points)

Displays the user's loyalty currency owned.

**Example:**
```
$(user) has $(user.points) points
$(user adeithe) has $(user.points adeithe) points
```
**Output:** 
```
Styler has 100 points
Adeithe has 150 points
```

### $(user.points_rank)

Displays the user's rank on the loyalty currency leaderboard.

**Example:**
```
$(user) is rank $(user.points_rank) on the leaderboard
$(user adeithe) is rank $(user.points_rank adeithe) on the leaderboard
```
**Output:** 
```
Styler is rank 5/283 on the leaderboard
Adeithe is rank 3/283 on the leaderboard
```

### $(user.points_alltime_rank)

Displays the user's rank on the all-time loyalty currency leaderboard.

**Example:**
```
$(user) is rank $(user.points_alltime_rank) on the all-time leaderboard
$(user adeithe) is rank $(user.points_alltime_rank adeithe) on the all-time leaderboard
```
**Output:** 
```
Styler is rank 5/283 on the all-time leaderboard
Adeithe is rank 3/283 on the all-time leaderboard
```

### $(user.level)

Displays the user's access level.

**Example:**
```
$(user) is level $(user.level)
$(user adeithe) is level $(user.level adeithe)
```
**Output:** 
```
Styler is level 2000
Adeithe is level 2500
```

### $(user.lastmessage)

Displays the user's last typed message in the chat.

**Example:**
```
$(user) last typed: $(user.lastmessage)
$(user adeithe) last typed: $(user.lastmessage adeithe)
```
**Output:** 
```
Styler last typed: !points
Adeithe last typed: Hello everyone!
```

### $(user.lastseen)

Displays the time that a user was most recently seen in the viewer list or chat.

**Example:**
```
$(user) was last seen $(user.lastseen) ago
$(user adeithe) was last seen $(user.lastseen adeithe) ago
```
**Output:** 
```
Styler was last seen 13m 15s ago
Adeithe was last seen 5m 30s ago
```

### $(user.lastactive)

Displays the time that a user most recently typed a message in the chat.

**Example:**
```
$(user) was last active $(user.lastactive) ago
$(user adeithe) was last active $(user.lastactive adeithe) ago
```
**Output:** 
```
Styler was last active 13m 15s ago
Adeithe was last active 5m 30s ago
```

### $(user.time_online)

Displays the total time a user has spent watching the stream.

**Example:**
```
$(user) has been watching the stream for $(user.time_online)
$(user adeithe) has been watching the stream for $(user.time_online adeithe)
```
**Output:** 
```
Styler has been watching the stream for 27m 16s
Adeithe has been watching the stream for 1h 15m 45s
```

### $(user.time_online_rank)

Displays the user's rank on the leaderboard for online time watched.

**Example:**
```
$(user) is rank $(user.time_online_rank) on the online leaderboard
$(user adeithe) is rank $(user.time_online_rank adeithe) on the online leaderboard
```
**Output:** 
```
Styler is rank 5/283 on the online leaderboard
Adeithe is rank 2/283 on the online leaderboard
```

### $(user.time_offline_rank)

Displays the user's rank on the leaderboard for offline time watched.

**Example:**
```
$(user) is rank $(user.time_offline_rank) on the offline leaderboard
$(user adeithe) is rank $(user.time_offline_rank adeithe) on the offline leaderboard
```
**Output:** 
```
Styler is rank 5/283 on the offline leaderboard
Adeithe is rank 2/283 on the offline leaderboard
```

## Best Practices

1. Use `$(user)` without arguments when you need information about the command trigger.
2. Use `$(user username)` when you need to reference other users or allow flexible user queries.
3. Always provide clear examples and explanations when creating custom commands using these variables.

## Troubleshooting

- If a variable returns unexpected results, ensure you're using the correct syntax and that the user exists in your channel's database.
- Remember that `$(user)` variables can accept arguments. If you only need information about the command sender, consider using [`$(sender)`](sender.md) instead.

## Related Documentation

- For information specifically about the command sender, see the [`$(sender)` variable documentation](sender.md).
- For more detailed information on StreamElements variables and commands, refer to the official [StreamElements Documentation](https://dev.streamelements.com/docs).

