---
id: sender
---

# $(sender)

Displays the message sender’s display name

## Aliases

`$(source)` can also be used.

#### Parameters

This variable does not take any parameters.

#### Example Input

```
Current user: $(sender)
```

#### Example Output

```
Current user: styler
```

## $(sender.name)

Displays the user’s display name in lowercase letters

#### Parameters

This variable does not take any parameters.

#### Example Input

```
Current user: $(sender.name)
```

#### Example Output

```
Current user: styler
```

## $(sender.points)

Displays the user’s loyalty currency owned

#### Parameters

This variable does not take any parameters.

#### Example Input

```
$(sender) has $(sender.points) points
```

#### Example Output

```
styler has 100 points
```

## $(sender.points_rank)

Displays the user’s rank on the loyalty currency leaderboard

#### Parameters

This variable does not take any parameters.

#### Example Input

```
$(sender) is rank $(sender.points_rank) on the leaderboard
```

#### Example Output

```
styler is rank 5/283 on the leaderboard
```

## $(sender.points_alltime_rank)

Displays the user’s rank on the alltime loyalty currency leaderboard

#### Parameters

This variable does not take any parameters.

#### Example Input

```
$(sender) is rank $(sender.points_alltime_rank) on the alltime leaderboard
```

#### Example Output

```
styler is rank 5/283 on the alltime leaderboard
```

## $(sender.level)

Displays the user’s access level

#### Parameters

This variable does not take any parameters.

#### Example Input

```
$(sender) is level $(sender.level)
```

#### Example Output

```
styler is level 2000
```

## $(sender.lastmessage)

Displays the user’s last typed message in the chat

#### Parameters

This variable does not take any parameters.

#### Example Input

```
$(sender) last typed: $(sender.lastmessage)
```

#### Example Output

```
styler last typed: !points
```

## $(sender.lastseen)

Displays the time that a user was most recently seen in viewer list or chat

#### Parameters

This variable does not take any parameters.

#### Example Input

```
$(sender) was last seen $(sender.lastseen) ago
```

#### Example Output

```
styler was last seen 13m 15s ago
```

## $(sender.lastactive)

Displays the time that a user most recently typed a message in the chat

#### Parameters

This variable does not take any parameters.

#### Example Input

```
$(sender) was last active $(sender.lastactive) ago
```

#### Example Output

```
styler was last active 13m 15s ago
```

## $(sender.time_online)

Displays the total time a user has been in the chat while stream is offline

#### Parameters

This variable does not take any parameters.

#### Example Input

```
$(sender) has been in the chat for $(sender.time_online)
```

#### Example Output

```
styler has been in the chat for 27m 16s
```

## $(sender.time_online)

Displays the user’s display name

#### Parameters

Displays the total time a user has spent watching the stream

#### Example Input

```
$(sender) has been watching the stream for $(sender.time_online)
```

#### Example Output

```
styler has been watching the stream for 27m 16s
```

## $(sender.time_online_rank)

Displays the user’s rank on the leaderboard for online time watched

#### Parameters

This variable does not take any parameters.

#### Example Input

```
$(sender) is rank $(sender.time_online_rank) on the online leaderboard
```

#### Example Output

```
styler is rank 5/283 on the online leaderboard
```

## $(sender.time_offline_rank)

Displays the user’s rank on the leaderboard for offline time watched

#### Parameters

This variable does not take any parameters.

#### Example Input

```
$(sender) is rank $(sender.time_offline_rank) on the offline leaderboard
```

#### Example Output

```
styler is rank 5/283 on the offline leaderboard
```
