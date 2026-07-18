---
title: Live Announcement Module
sidebar:
  label: Live Announcement
description: "Set up the StreamElements Live Announcement module to automatically post a chat message when your stream goes live, or when the title or game changes."
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

The Live Announcement module is a feature of the StreamElements Chatbot that automatically posts a message in the chat when a stream goes live, when the stream title changes, or when the game or category changes. This helps notify viewers that the stream has started and keeps them informed about what is being streamed. The module is available on all platforms.

## Usage

When enabled, the Live Announcement module works automatically without any manual input required. It provides three announcements, each of which can be toggled on or off separately and has its own customizable message:

- **Stream start**: Posted when the stream goes live.
- **Title change**: Posted when the stream title changes.
- **Game change**: Posted when the game or category changes.

## Examples

1. Default stream start announcement:

   ```
   ExampleStreamer is now live! Streaming Fortnite: Late night squad games with friends!
   ```

2. Custom stream start announcement:

   ```
   🎉 ExampleStreamer just went live! They're playing Minecraft and the stream title is "Building a mega castle - Day 3". Don't miss out!
   ```

## Parameters

Each announcement message supports its own set of placeholders:

| Announcement | Placeholders |
|--------------|--------------|
| Stream start | `{title}`, `{game}`, `{campaigns}` |
| Title change | `{title}` |
| Game change | `{game}` |

- `{title}`: The title of the live stream
- `{game}`: The game or category being streamed
- `{campaigns}`: The number of available sponsorships (stream start message only)

Placeholders are only substituted in the announcement they belong to — for example, `{game}` is not replaced in the title change message.

In addition to these placeholders, any standard [chat variable](/chatbot/variables/) also works in the announcement messages, such as `${channel.display_name}` or `${uptime}`.

## Configuration

To configure the Live Announcement module:

1. Go to your StreamElements dashboard
2. Navigate to the Chatbot settings
3. Find the "Live Announcement" section
4. Enable the announcements you want to use
5. Customize each announcement message using the available parameters

Example configuration for the stream start message:

```
🔴 ${channel.display_name} is now live! 🎮 Playing {game} 📌 {title}
```

## FAQ

**Q: Can I customize the announcement messages?**
A: Yes, you can customize each of the three messages in the StreamElements dashboard using the available parameters.

**Q: How often does the Live Announcement trigger?**
A: The stream start announcement triggers once per stream, when the stream initially goes live. The title and game change announcements trigger whenever the title or game changes.

**Q: Can I use custom variables in the announcement?**
A: Yes. Besides the predefined placeholders, any standard chat variable (e.g., `${channel.display_name}`) can be used in the announcement messages.
