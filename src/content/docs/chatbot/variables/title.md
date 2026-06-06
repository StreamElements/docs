---
title: "$(title)"
description: "Display a channel's current stream title with the $(title) variable in StreamElements Chatbot."
keywords:
  - StreamElements
  - chatbot
  - channel title
  - stream title
  - command
---

The `$(title)` variable displays the current title of a Twitch channel. This variable is useful for creating commands that show the stream's title or for integrating the title information into other chatbot responses.

## Usage

To use the `$(title)` variable, simply include it in your custom command or message response. The chatbot will replace the variable with the channel's current title when the command is executed.

## Examples

1. Creating a !title command to display the current stream title:

```streamelements
!command add !title The current stream title is: $(title)
```

When a viewer types `!title` in chat, the bot might respond:

```
The current stream title is: Playing Spyro! Come join the adventure!
```

2. Incorporating the title into a welcome message:

```streamelements
!command add !welcome Welcome to the stream, $(user)! We're currently $(title). Enjoy your stay!
```

When a viewer types `!welcome` in chat, the bot might respond:

```
Welcome to the stream, ViewerName! We're currently Playing Spyro! Come join the adventure! Enjoy your stay!
```

## Parameters

The `$(title)` variable accepts one optional parameter:

- `username`: The username of the channel whose title you want to check. If not provided, it defaults to the current channel.

Example usage with a parameter:

```streamelements
$(title OtherStreamer)
```

This would return the title of the channel "OtherStreamer" instead of the current channel.

## Related Variables

- [`$(game)`](/chatbot/variables/game/): Displays the current game or category of the stream
- [`$(uptime)`](/chatbot/variables/uptime/): Shows how long the current stream has been live

## FAQ

**Q: How often does the title information update?**

A: The title information is typically updated in real-time, but there might be a slight delay (usually a few seconds) between changing the title on Twitch and the chatbot reflecting the new title.
