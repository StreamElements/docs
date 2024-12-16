---
id: modules-emotecombo
sidebar_label: "Chatbot Emote Combo Module"
description: "Real-time updates for chat emote combo detection via WebSocket"
tags:
- websocket
- chatbot
- emotes
- modules
keywords:
- StreamElements
- WebSocket
- emote combo
- chat events
- real-time updates
---

# Chatbot Emote Combo Module

## Overview

The `channel.chatbot.modules.emotecombo` topic provides real-time updates when users perform consecutive emote combinations in chat. This module tracks when multiple instances of the same emote are used in sequence.

## Authentication

Required scope: `chat:read`

## Status

- `stable` - Production ready

## Payload

```json
{
    "id": "01HNX3Q5CS8D309V6DXJ3ZADEQ",
    "ts": "2024-02-05T17:05:41Z",
    "topic": "channel.chatbot.modules.emotecombo",
    "type": "message",
    "data": {
        "msg_id": "f71ef587-bf91-4f68-ae21-480ff03c0bf8",
        "user_id": "94055225",
        "user_name": "Styler",
        "emote": "mhm",
        "count": 3
    }
}
```

## Combo Detection

The module detects the following patterns:
- Multiple instances of the same emote in a single message
- Consecutive messages containing the same emote from the same user
- Supports both Twitch native emotes and channel-specific emotes

## Error Handling

This topic follows the standard error codes as defined in the WebSocket documentation.
