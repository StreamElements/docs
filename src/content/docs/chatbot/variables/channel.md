---
title: "$(channel)"
description: "Reference for the StreamElements Chatbot $(channel) variables: channel name, viewers, followers, subscribers, game, title, and uptime."
keywords:
  - streamelements
  - chatbot
  - channel variable
  - streamer tools
  - chat commands
---

The `$(channel)` variables in StreamElements Chatbot allow you to access and display various channel-related information in your chat messages and commands. These variables provide real-time data such as channel name, viewer count, follower count, and subscriber information.

## Usage

To use a channel variable, include it in your chatbot command using the `$()` syntax. The variable will be automatically replaced with the corresponding value when the message is sent.

## Available variables

| Variable | Description | Notes |
|----------|-------------|-------|
| `$(channel)` | Name of the channel | |
| `$(channel.viewers)` | Current viewer count | Returns "not live" if offline |
| `$(channel.followers)` | Total follower count | |
| `$(channel.subs)` | Total subscriber count | |
| `$(channel.subpoints)` | Total subscriber points | |
| `$(channel.display_name)` | Channel's display name | May differ in capitalization from `$(channel)` |
| `$(channel.alias)` | Channel's alias | |
| `$(channel.provider)` | Channel's streaming provider (e.g., Twitch, YouTube) | |
| `$(channel.provider_id)` | Channel's Twitch or YouTube ID | |
| `$(channel.id)` | Channel's internal StreamElements ID | |
| `$(channel.title)` | Current stream title or status | |
| `$(channel.game)` | Current game being played | Returns "no game" if not set |
| `$(channel.chatters)` | Current number of chatters | |
| `$(channel.uptime)` | Current stream uptime | Returns "not live" if offline |

## Examples

1. A stream status command combining provider, game, and title:

   ```streamelements
   !cmd add !status We're live on $(channel.provider) playing $(channel.game) — $(channel.title)
   ```

   Output:
   ```
   We're live on Twitch playing Super Mario 64 — Speedrunning Mario 64 - Day 3!
   ```

2. A community stats command:

   ```streamelements
   !cmd add !stats $(channel.display_name) has $(channel.followers) followers and $(channel.subs) subscribers!
   ```

   Output:
   ```
   CoolStreamer123 has 50000 followers and 500 subscribers!
   ```

3. A live stats command combining uptime, viewers, and chatters:

   ```streamelements
   !cmd add !live We've been live for $(channel.uptime) with $(channel.viewers) viewers and $(channel.chatters) active chatters!
   ```

   Output:
   ```
   We've been live for 3 hours 27 minutes with 1337 viewers and 850 active chatters!
   ```

## Best Practices

1. Use channel variables to provide real-time information about your stream in chat commands.
2. Combine multiple variables to create comprehensive stream status messages.
3. Always provide clear examples and explanations when creating custom commands using these variables.

## Troubleshooting

- If a variable returns unexpected results, ensure you're using the correct syntax.
- Remember that some variables may return specific values when the stream is offline or information is not available.

## Related Variables

- [$(user)](/chatbot/variables/user/): Displays information about the user who triggered the command
- [$(touser)](/chatbot/variables/touser/): Refers to the target user in commands that mention other users

## FAQ

**Q: How often are these variables updated?**

A: Channel variables are updated in real-time, reflecting the most current information available from Twitch.

**Q: What happens if a variable can't retrieve the information?**

A: If there's an error retrieving the information, most variables will return "0" or "error". Specific cases include:
- `$(channel.viewers)` and `$(channel.uptime)` return "not live" if the channel is offline
- `$(channel.game)` returns "no game" if no game is set
