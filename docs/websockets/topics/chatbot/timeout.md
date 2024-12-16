---
id: timeout
sidebar_label: "Chatbot Timeout Events"
description: "Real-time updates for chat timeout actions via WebSocket"
tags:
- websocket
- chatbot
- moderation
- timeout
keywords:
- StreamElements
- WebSocket
- chat timeout
- moderation
- chat events
---

# Chatbot Timeout Events

## Overview

The `channel.chatbot.timeout` topic provides real-time updates when the chatbot times out a user in chat. This includes automated timeouts from moderation filters and manual timeouts triggered through chatbot commands.

## Authentication

Required scope: `chat:read`

## Status

- `beta` - May have breaking changes

## Payload

```json
{
    "id": "01HNX3Q5CS8D309V6DXJ3ZADEQ",
    "ts": "2024-02-05T17:05:41Z",
    "topic": "channel.chatbot.timeout",
    "type": "message",
    "data": {
        "msg_id": "f71ef587-bf91-4f68-ae21-480ff03c0bf8",
        "user_id": "94055225",
        "user_name": "Styler",
        "duration": 300
    }
}
```

## Timeout Duration

The `duration` field in the payload represents the timeout duration in seconds:
- Common durations: 300 (5 minutes), 600 (10 minutes), 3600 (1 hour)
- A duration of -1 indicates a permanent ban
- Duration can be customized through chatbot commands and moderation settings

## Error Handling

This topic follows the standard error codes as defined in the WebSocket documentation.
