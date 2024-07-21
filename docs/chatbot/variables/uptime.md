---
id: uptime
sidebar_label: "$(uptime)"
description: "Learn how to use the $(uptime) variable in StreamElements Chatbot to display stream uptime for any user."
tags:
  - chatbot
  - variable
  - stream information
keywords:
  - uptime
  - stream duration
  - StreamElements
  - chatbot command
---

# $(uptime) Variable

## Overview

The `$(uptime)` variable is a powerful tool in the StreamElements Chatbot that displays the duration of the current stream for a specified user. This feature is particularly useful for viewers who want to know how long a stream has been live.

## Usage

To use the `$(uptime)` variable, simply include it in a custom command or message. You can optionally specify a username to check the uptime for a particular streamer.

Syntax: `$(uptime [username])`

## Examples

1. Check uptime for the current stream:
   ```
   !uptime
   Bot: The stream has been live for 2 hours 15 minutes.
   ```

2. Check uptime for a specific streamer:
   ```
   !uptime shroud
   Bot: shroud's stream has been live for 3 hours 45 minutes.
   ```

## Parameters

- `username` (optional): The name of the streamer whose uptime you want to check. If omitted, the variable will default to the current stream's uptime.

## Related Commands

- [`$(game)`](game.md): Displays the current game being played on the stream
- [`$(title)`](title.md): Shows the current stream title

## FAQ

**Q: Will $(uptime) work for offline channels?**
A: No, the `$(uptime)` variable only works for currently live streams. For offline channels, it will typically return an error message "not live".

**Q: Can I customize the uptime format?**
A: The default format is "X hours Y minutes". While you can't directly change this format within the variable, you can create custom commands that parse and reformat the output as needed.
