---
id: user
---

# $(user)

Displays the user’s display name

#### Parameters

This variable accepts a username as input. If no username is provided, the variable will default to the user who triggered the command.

#### Example Input

```
Current user: $(user)
```

#### Example Output

```
Current user: styler
```

## $(user.name)

Displays the user’s display name in lowercase letters

#### Parameters

This variable accepts a username as input. If no username is provided, the variable will default to the user who triggered the command.

#### Example Input

```
Current user: $(user.name)
```

#### Example Output

```
Current user: styler
```

## $(user.points)

Displays the user’s loyalty currency owned

#### Parameters

This variable accepts a username as input. If no username is provided, the variable will default to the user who triggered the command.

#### Example Input

```
$(user) has $(user.points) points
```

#### Example Output

```
styler has 100 points
```

## $(user.points_rank)

Displays the user’s rank on the loyalty currency leaderboard

#### Parameters

This variable accepts a username as input. If no username is provided, the variable will default to the user who triggered the command.

#### Example Input

```
$(user) is rank $(user.points_rank) on the leaderboard
```

#### Example Output

```
styler is rank 5/283 on the leaderboard
```

## $(user.points_alltime_rank)

Displays the user’s rank on the alltime loyalty currency leaderboard

#### Parameters

This variable accepts a username as input. If no username is provided, the variable will default to the user who triggered the command.

#### Example Input

```
$(user) is rank $(user.points_alltime_rank) on the alltime leaderboard
```

#### Example Output

```
styler is rank 5/283 on the alltime leaderboard
```

## $(user.level)

Displays the user’s access level

#### Parameters

This variable accepts a username as input. If no username is provided, the variable will default to the user who triggered the command.

#### Example Input

```
$(user) is level $(user.level)
```

#### Example Output

```
styler is level 2000
```

## $(user.lastmessage)

Displays the user’s last typed message in the chat

#### Parameters

This variable accepts a username as input. If no username is provided, the variable will default to the user who triggered the command.

#### Example Input

```
$(user) last typed: $(user.lastmessage)
```

#### Example Output

```
styler last typed: !points
```

## $(user.lastseen)

Displays the time that a user was most recently seen in viewer list or chat

#### Parameters

This variable accepts a username as input. If no username is provided, the variable will default to the user who triggered the command.

#### Example Input

```
$(user) was last seen $(user.lastseen) ago
```

#### Example Output

```
styler was last seen 13m 15s ago
```

## $(user.lastactive)

Displays the time that a user most recently typed a message in the chat

#### Parameters

This variable accepts a username as input. If no username is provided, the variable will default to the user who triggered the command.

#### Example Input

```
$(user) was last active $(user.lastactive) ago
```

#### Example Output

```
styler was last active 13m 15s ago
```

## $(user.time_online)

Displays the total time a user has been in the chat while stream is offline

#### Parameters

This variable accepts a username as input. If no username is provided, the variable will default to the user who triggered the command.

#### Example Input

```
$(user) has been in the chat for $(user.time_online)
```

#### Example Output

```
styler has been in the chat for 27m 16s
```

## $(user.time_online)

Displays the user’s display name

#### Parameters

Displays the total time a user has spent watching the stream

#### Example Input

```
$(user) has been watching the stream for $(user.time_online)
```

#### Example Output

```
styler has been watching the stream for 27m 16s
```

## $(user.time_online_rank)

Displays the user’s rank on the leaderboard for online time watched

#### Parameters

This variable accepts a username as input. If no username is provided, the variable will default to the user who triggered the command.

#### Example Input

```
$(user) is rank $(user.time_online_rank) on the online leaderboard
```

#### Example Output

```
styler is rank 5/283 on the online leaderboard
```

## $(user.time_offline_rank)

Displays the user’s rank on the leaderboard for offline time watched

#### Parameters

This variable accepts a username as input. If no username is provided, the variable will default to the user who triggered the command.

#### Example Input

```
$(user) is rank $(user.time_offline_rank) on the offline leaderboard
```

#### Example Output

```
styler is rank 5/283 on the offline leaderboard
```
