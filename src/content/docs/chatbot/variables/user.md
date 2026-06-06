---
title: "$(user)"
description: "Reference for the StreamElements Chatbot $(user) variables: display name, points, ranks, and activity data for any user."
keywords:
  - streamelements
  - chatbot
  - user variable
  - streamer tools
  - chat commands
---

The `$(user)` variable in StreamElements Chatbot allows you to access and display various user-related information in your chat messages and commands. These variables provide data such as usernames, loyalty points, ranks, and activity timestamps.

:::tip[Key Point]
`$(user)` can accept an optional username argument to retrieve information about any user, not just the command sender. When used without arguments, it behaves similarly to [`$(sender)`](/chatbot/variables/sender/).
:::

## Usage

To use the `$(user)` variable, include it in your chat message or command response using the `$()` syntax. For example, `$(user)` will display the user's display name.

- Without argument: `$(user)` refers to the command sender
- With argument: `$(user username)` refers to the specified user

Every variable below accepts the same optional username argument, e.g. `$(user.points ModUser)`.

## Available variables

| Variable | Description | Notes |
|----------|-------------|-------|
| `$(user)` | User's display name | |
| `$(user.name)` | User's display name in lowercase letters | |
| `$(user.points)` | User's loyalty currency owned | |
| `$(user.points_rank)` | User's rank on the loyalty currency leaderboard | Returned as rank/total, e.g. `5/283` |
| `$(user.points_alltime_rank)` | User's rank on the all-time loyalty currency leaderboard | Returned as rank/total, e.g. `5/283` |
| `$(user.level)` | User's access level | |
| `$(user.lastmessage)` | User's last typed message in the chat | |
| `$(user.lastseen)` | Time the user was most recently seen in the viewer list or chat | Returned as a duration, e.g. `5m 30s` |
| `$(user.lastactive)` | Time the user most recently typed a message in the chat | Returned as a duration, e.g. `5m 30s` |
| `$(user.time_online)` | Total time the user has spent watching the stream | Returned as a duration, e.g. `27m 16s` |
| `$(user.time_online_rank)` | User's rank on the leaderboard for online time watched | Returned as rank/total, e.g. `5/283` |
| `$(user.time_offline_rank)` | User's rank on the leaderboard for offline time watched | Returned as rank/total, e.g. `5/283` |

## Examples

1. A points command for the command sender:

   ```streamelements
   !cmd add !points $(user) has $(user.points) points and is rank $(user.points_rank) on the leaderboard
   ```

   Output:
   ```
   ViewerName has 100 points and is rank 5/283 on the leaderboard
   ```

2. Querying another user by name:

   ```streamelements
   $(user ModUser) was last seen $(user.lastseen ModUser) ago and last typed: $(user.lastmessage ModUser)
   ```

   Output:
   ```
   ModUser was last seen 5m 30s ago and last typed: Hello everyone!
   ```

3. A watchtime command combining time watched and online rank:

   ```streamelements
   !cmd add !watchtime $(user) has been watching the stream for $(user.time_online) and is rank $(user.time_online_rank) on the online leaderboard
   ```

   Output:
   ```
   ViewerName has been watching the stream for 27m 16s and is rank 5/283 on the online leaderboard
   ```

## Best Practices

1. Use `$(user)` without arguments when you need information about the command trigger.
2. Use `$(user username)` when you need to reference other users or allow flexible user queries.
3. Always provide clear examples and explanations when creating custom commands using these variables.

## Troubleshooting

- If a variable returns unexpected results, ensure you're using the correct syntax and that the user exists in your channel's database.
- Remember that `$(user)` variables can accept arguments. If you only need information about the command sender, consider using [`$(sender)`](/chatbot/variables/sender/) instead.

## Related Variables

- [`$(sender)`](/chatbot/variables/sender/): Information specifically about the command sender.
