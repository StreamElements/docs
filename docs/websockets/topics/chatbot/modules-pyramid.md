---
id: modules-pyramid
sidebar_label: "Chatbot Pyramid Module"
description: "Real-time updates for chat pyramid detection via WebSocket"
tags:
- websocket
- chatbot
- pyramid
- modules
keywords:
- StreamElements
- WebSocket
- chat pyramid
- chat patterns
- real-time updates
---

# Chatbot Pyramid Module

## Overview

The `channel.chatbot.modules.pyramid` topic provides real-time updates when users create pyramid patterns in chat. A pyramid is a sequence of chat messages that increases and then decreases in width using the same word or emote.

## Authentication

Required scope: `chat:read`

## Status

- `stable` - Production ready

## Payload

```json
{
    "id": "01HNX3Q5CS8D309V6DXJ3ZADEQ",
    "ts": "2024-02-05T17:05:41Z",
    "topic": "channel.chatbot.modules.pyramid",
    "type": "message",
    "data": {
        "msg_id": "f71ef587-bf91-4f68-ae21-480ff03c0bf8",
        "user_id": "94055225",
        "user_name": "Styler",
        "word": "mhm",
        "width": 3
    }
}
```

## Pyramid Detection

The module detects the following patterns:
- Single-word pyramids (e.g., "word", "word word", "word word word", "word word", "word")
- Emote pyramids using any valid Twitch or channel emote
- Width parameter indicates the maximum width of the pyramid (in the example, width: 3)
- Messages must be consecutive and from the same user

## Error Handling

This topic follows the standard error codes as defined in the WebSocket documentation.
