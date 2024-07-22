---
id: channel
sidebar_label: "$(channel)"
description: "Comprehensive guide to StreamElements Chatbot $(channel) variables for streamers and moderators"
tags:
  - chatbot
  - variable
  - channel
keywords:
  - streamelements
  - chatbot
  - channel variable
  - streamer tools
  - chat commands
---

# $(channel) Variables

## Overview

The `$(channel)` variables in StreamElements Chatbot allow you to access and display various channel-related information in your chat messages and commands. These variables provide real-time data such as channel name, viewer count, follower count, and subscriber information.

## Usage

To use a channel variable, include it in your chatbot command or overlay text using the `$()` syntax. The variable will be automatically replaced with the corresponding value when the message is sent or the overlay is displayed.

## Available $(channel) Variables

### $(channel)

Displays the name of the channel.

**Example:**
```
Welcome to $(channel)!
```
**Output:**
```
Welcome to coolstreamer123!
```

### $(channel.viewers)

Shows the current viewer count. Returns "not live" if offline.

**Example:**
```
We currently have $(channel.viewers) viewers!
```
**Output:**
```
We currently have 1337 viewers!
```

### $(channel.followers)

Displays the total follower count.

**Example:**
```
Thank you to our $(channel.followers) amazing followers!
```
**Output:**
```
Thank you to our 50000 amazing followers!
```

### $(channel.subs)

Shows the total subscriber count.

**Example:**
```
We've reached $(channel.subs) subscribers!
```
**Output:**
```
We've reached 500 subscribers!
```

### $(channel.subpoints)

Displays the total subscriber points.

**Example:**
```
Current sub points: $(channel.subpoints)
```
**Output:**
```
Current sub points: 1250
```

### $(channel.display_name)

Shows the channel's display name, which may differ in capitalization.

**Example:**
```
You're watching $(channel.display_name)'s stream!
```
**Output:**
```
You're watching CoolStreamer123's stream!
```

### $(channel.alias)

Displays the channel's alias.

**Example:**
```
Channel alias: $(channel.alias)
```
**Output:**
```
Channel alias: CS123
```

### $(channel.provider)

Shows the channel's streaming provider (e.g., Twitch, YouTube).

**Example:**
```
We're live on $(channel.provider)!
```
**Output:**
```
We're live on Twitch!
```

### $(channel.provider_id)

Displays the channel's Twitch or YouTube ID.

**Example:**
```
Channel ID: $(channel.provider_id)
```
**Output:**
```
Channel ID: 12345678
```

### $(channel.id)

Shows the channel's internal StreamElements ID.

**Example:**
```
StreamElements ID: $(channel.id)
```
**Output:**
```
StreamElements ID: 5f7b1f9e8e1c3a0001f1e123
```

### $(channel.title)

Displays the current stream title or status.

**Example:**
```
Current stream title: $(channel.title)
```
**Output:**
```
Current stream title: Speedrunning Mario 64 - Day 3!
```

### $(channel.game)

Shows the current game being played. Returns "no game" if not set.

**Example:**
```
We're currently playing: $(channel.game)
```
**Output:**
```
We're currently playing: Super Mario 64
```

### $(channel.chatters)

Displays the current number of chatters.

**Example:**
```
Active chatters: $(channel.chatters)
```
**Output:**
```
Active chatters: 850
```

### $(channel.uptime)

Shows the current stream uptime. Returns "not live" if offline.

**Example:**
```
We've been live for: $(channel.uptime)
```
**Output:**
```
We've been live for: 3 hours 27 minutes
```

## Best Practices

1. Use channel variables to provide real-time information about your stream in chat commands and overlays.
2. Combine multiple variables to create comprehensive stream status messages.
3. Always provide clear examples and explanations when creating custom commands using these variables.

## Troubleshooting

- If a variable returns unexpected results, ensure you're using the correct syntax.
- Remember that some variables may return specific values when the stream is offline or information is not available.

## Related Commands

- [$(user)](user): Displays information about the user who triggered the command
- [$(touser)](touser): Refers to the target user in commands that mention other users

## FAQ

**Q: How often are these variables updated?**

A: Channel variables are updated in real-time, reflecting the most current information available from Twitch.

**Q: What happens if a variable can't retrieve the information?**

A: If there's an error retrieving the information, most variables will return "0" or "error". Specific cases include:
- `$(channel.viewers)` and `$(channel.uptime)` return "not live" if the channel is offline
- `$(channel.game)` returns "no game" if no game is set

