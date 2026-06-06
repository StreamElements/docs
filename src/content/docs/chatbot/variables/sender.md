---
title: "$(sender)"
description: "Reference for the StreamElements Chatbot $(sender) variables: display name, points, ranks, and activity data for the command sender."
keywords:
  - streamelements
  - chatbot
  - sender variable
  - streamer tools
  - chat commands
---

The `$(sender)` variable in StreamElements Chatbot always refers to the user who triggered the command or message. It provides access to various user-related information such as username, loyalty points, ranks, and activity timestamps.

:::tip[Key Point]
`$(sender)` always refers to the command trigger and doesn't accept arguments. If you need to query information about other users, use the [`$(user)`](/chatbot/variables/user/) variable instead.
:::

## Usage

To use the `$(sender)` variable, include it in your chat message or command response using the `$()` syntax. For example, `$(sender)` will display the command trigger's display name.

## Available variables

| Variable | Description | Notes |
|----------|-------------|-------|
| `$(sender)` | Sender's display name | |
| `$(sender.name)` | Sender's display name in lowercase letters | |
| `$(sender.points)` | Sender's loyalty currency owned | |
| `$(sender.points_rank)` | Sender's rank on the loyalty currency leaderboard | Returned as rank/total, e.g. `5/283` |
| `$(sender.points_alltime_rank)` | Sender's rank on the all-time loyalty currency leaderboard | Returned as rank/total, e.g. `5/283` |
| `$(sender.level)` | Sender's access level | |
| `$(sender.lastmessage)` | Sender's last typed message in the chat | |
| `$(sender.lastseen)` | Time the sender was most recently seen in the viewer list or chat | Returned as a duration, e.g. `13m 15s` |
| `$(sender.lastactive)` | Time the sender most recently typed a message in the chat | Returned as a duration, e.g. `13m 15s` |
| `$(sender.time_online)` | Total time the sender has spent watching the stream | Returned as a duration, e.g. `27m 16s` |
| `$(sender.time_online_rank)` | Sender's rank on the leaderboard for online time watched | Returned as rank/total, e.g. `5/283` |
| `$(sender.time_offline_rank)` | Sender's rank on the leaderboard for offline time watched | Returned as rank/total, e.g. `5/283` |

## Examples

1. A points command combining balance and leaderboard rank:

   ```streamelements
   !cmd add !points $(sender) has $(sender.points) points and is rank $(sender.points_rank) on the leaderboard
   ```

   Output:
   ```
   ViewerName has 100 points and is rank 5/283 on the leaderboard
   ```

2. A watchtime command combining time watched and online rank:

   ```streamelements
   !cmd add !watchtime $(sender) has been watching the stream for $(sender.time_online) and is rank $(sender.time_online_rank) on the online leaderboard
   ```

   Output:
   ```
   ViewerName has been watching the stream for 27m 16s and is rank 5/283 on the online leaderboard
   ```

3. An activity command combining last activity and last message:

   ```streamelements
   !cmd add !activity $(sender) was last active $(sender.lastactive) ago and last typed: $(sender.lastmessage)
   ```

   Output:
   ```
   ViewerName was last active 13m 15s ago and last typed: !points
   ```

## Aliases

`$(source)` can also be used as an alias for `$(sender)`.

## Best Practices

1. Use `$(sender)` when you only need information about the command trigger.
2. If you need to reference other users or allow flexible user queries, use the [`$(user)`](/chatbot/variables/user/) variable instead.

## Troubleshooting

- If a variable returns unexpected results, ensure you're using the correct syntax and that the user exists in your channel's database.
- Remember that `$(sender)` variables don't accept arguments. If you need to query other users, use `$(user)` instead.

## Related Variables

- [`$(user)`](/chatbot/variables/user/): Query information about any user, not just the command sender.
