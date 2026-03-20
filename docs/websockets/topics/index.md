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

Topics follow a dot-separated naming convention. Topics with no required scope are accessible to any authenticated token. The owner scope `*` grants access to all topics.

## All Topics

| Topic | Required Scope | Description |
| --- | --- | --- |
| [channel.activities](./channel-activities.md) | `activities:read` | Channel activities like follows, subscriptions, and donations |
| `channel.announcements` | `channel:read` | Channel announcement events |
| `channel.chatstats` | *(none)* | Chat statistics updates |
| [channel.tips](./channel-tips.md) | `tips:read` | Tip/donation events |
| [channel.tips.moderation](./channel-tips-moderation.md) | `tips:moderation` | Tip moderation events |
| [channel.chat.message](./channel-chat-message.md) | `overlays:read` | Individual chat messages |
| [channel.session.update](./channel-session-update.md) | `session:read` | Individual session data updates |
| [channel.session.reset](./channel-session-reset.md) | `session:read` | Full session reset events |
| [channel.chatbot.status](./chatbot/chatbot-status.md) | `bot:read` | Chatbot connection status changes |
| [channel.chatbot.modules.pyramid](./chatbot/modules-pyramid.md) | `bot:read` | Chat pyramid detection events |
| [channel.chatbot.modules.emotecombo](./chatbot/modules-emotecombo.md) | `bot:read` | Emote combo trigger events |
| `channel.chatbot.modules` | `bot:read` | General chatbot module updates |
| `channel.chatbot.commands` | `bot:read` | Chatbot command updates |
| `channel.chatbot.timers` | `bot:read` | Chatbot timer updates |
| [channel.chatbot.counters](./chatbot/counters.md) | *(none)* | Chatbot counter value changes |
| `channel.chatbot.filters` | `bot:read` | Chatbot filter updates |
| [channel.stream.status](./channel-stream-status.md) | `stream-live:read` | Stream online/offline status changes |
| [channel.overlay.action](./channel-overlay-action.md) | `overlays:read` | Overlay action events (pause, mute, skip, etc.) |
| [channel.overlay.broadcast](./channel-overlay-broadcast.md) | `overlays:broadcast` | Custom broadcast events targeting overlays |
| [channel.overlay.update](./channel-overlay-update.md) | `overlays:read` | Overlay update notifications |
| `channel.kvstore.update` | `kvstore:read` | Key-value store update events |
| [channel.songrequest](./channel-songrequest.md) | `overlays:read` | Song request events |
| [channel.contests](./channel-contests.md) | *(none)* | Contest and prediction events |
| [channel.giveaways](./channel-giveaway.md) | *(none)* | Giveaway events |
| `channel.loyalty.redemptions` | `store:read` | Loyalty store redemption events |
| `channel.loyalty.items` | `store:read` | Loyalty store item updates |
