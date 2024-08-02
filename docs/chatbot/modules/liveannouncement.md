---
id: liveannouncement
sidebar_label: "Live Announcement"
description: "Learn how to set up and use StreamElements Chatbot's Live Announcement module to automatically notify viewers when your stream goes live."
keywords:
- StreamElements live announcement
- stream notification
- Twitch live alert
- YouTube live notification
- automatic stream announcement
- chatbot live notification
- stream start alert
- live streaming tools
- viewer engagement
- StreamElements chatbot features
---

# Live Announcement Module

## Overview

The Live Announcement module is a feature of the StreamElements Chatbot that automatically posts a message in the chat when a stream goes live. This helps notify viewers that the stream has started and provides essential information about the stream.

## Usage

When enabled, the Live Announcement module works automatically without any manual input required. As soon as the stream goes live, the chatbot will post a predefined message in the chat.

## Examples

1. Default announcement:
```
ExampleStreamer is now live! Streaming Fortnite: Late night squad games with friends!
```

2. Custom announcement:
```
🎉 ExampleStreamer just went live! They're playing Minecraft and the stream title is "Building a mega castle - Day 3". Don't miss out!
```

## Parameters

The Live Announcement message can include the following parameters:

- `${channel.display_name}`: The display name of the channel
- `{title}`: The title of the live stream
- `{game}`: The game or category being streamed

## Configuration

To configure the Live Announcement module:

1. Go to your StreamElements dashboard
2. Navigate to the Chatbot settings
3. Find the "Live Announcement" section
4. Enable the module
5. Customize the announcement message using the available parameters

Example configuration:
```
🔴 ${channel.display_name} is now live! 🎮 Playing {game} 📌 {title}
```

## FAQ

**Q: Can I customize the announcement message?**
A: Yes, you can customize the message in the StreamElements dashboard using the available parameters.

**Q: How often does the Live Announcement trigger?**
A: The announcement triggers once per stream, when the stream initially goes live.

**Q: Can I use custom variables in the announcement?**
A: Currently, only the predefined parameters (`${channel.display_name}`, `{title}`, and `{game}`) are supported.
