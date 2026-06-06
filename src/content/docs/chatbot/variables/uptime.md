---
title: "$(uptime)"
description: "Display how long a stream has been live with the $(uptime) variable in StreamElements Chatbot."
keywords:
  - uptime
  - stream duration
  - StreamElements
  - chatbot command
---

The `$(uptime)` variable is a powerful tool in the StreamElements Chatbot that displays the duration of the current stream for a specified user. This feature is particularly useful for viewers who want to know how long a stream has been live.

## Usage

To use the `$(uptime)` variable, simply include it in a custom command or message. You can optionally specify a username to check the uptime for a particular streamer.

```streamelements
$(uptime [username])
```

## Examples

1. Check uptime for the current stream:

   ```streamelements
   !uptime
   Bot: The stream has been live for 2 hours 15 minutes.
   ```

2. Check uptime for a specific streamer:

   ```streamelements
   !uptime shroud
   Bot: shroud's stream has been live for 3 hours 45 minutes.
   ```

## Parameters

- `username` (optional): The name of the streamer whose uptime you want to check. If omitted, the variable will default to the current stream's uptime.

## Related Variables

- [`$(game)`](/chatbot/variables/game/): Displays the current game being played on the stream
- [`$(title)`](/chatbot/variables/title/): Shows the current stream title

## FAQ

**Q: Will $(uptime) work for offline channels?**

A: No, the `$(uptime)` variable only works for currently live streams. For offline channels, it will typically return an error message "not live".

**Q: Can I customize the uptime format?**

A: The default format is "X hours Y minutes". While you can't directly change this format within the variable, you can create custom commands that parse and reformat the output as needed.
