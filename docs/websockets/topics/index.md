---
id: topics
sidebar_label: "Topics"
description: "A list of all available topics for the Astro Websocket Gateway"
tags:
- api
- websockets
- real-time
keywords:
- astro websocket
- streamelements api
- real-time notifications
- websocket connection
- pubsub
- chatbot notifications
- chatbot events
---

# Topics

This section provides documentation for the various topics available for subscription through the Astro Websocket Gateway.

## Available Topics

### Channel Topics

| Topic                                                   | Description                                                                             |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [Channel Activities](./channel-activities.md)           | Receive notifications for channel activities like follows, subscriptions, and donations |
| [Channel Giveaway](./channel-giveaway.md)               | Receive notifications about giveaway events                                             |
| [Channel Overlay Action](./channel-overlay-action.md)   | Receive notifications about overlay actions                                             |
| [Channel Overlay Update](./channel-overlay-update.md)   | Receive notifications about overlay updates                                             |
| [Channel Session Update](./channel-session-update.md)   | Receive notifications about individual session data updates                             |
| [Channel Session Reset](./channel-session-reset.md)     | Receive notifications when the channel session is fully reset                           |
| [Channel Stream Status](./channel-stream-status.md)     | Receive notifications about stream status changes                                       |
| [Channel Tips](./channel-tips.md)                       | Receive notifications about tips                                                        |
| [Channel Tips Moderation](./channel-tips-moderation.md) | Receive notifications about tip moderation                                              |

### Chatbot Topics

| Topic                                          | Description                                                   |
| ---------------------------------------------- | ------------------------------------------------------------- |
| [Chatbot Status](./chatbot/chatbot-status.md)  | Receive notifications about chatbot connection status changes |
| [Timeout](./chatbot/timeout.md)                | Receive notifications when the chatbot times out a user       |
| [Emote Combo](./chatbot/modules-emotecombo.md) | Receive notifications when emote combo triggers are activated |
| [Pyramid](./chatbot/modules-pyramid.md)        | Receive notifications when chat pyramids are detected         |
