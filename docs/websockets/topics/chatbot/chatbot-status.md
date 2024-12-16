---
id: chatbot-status
sidebar_label: "Chatbot Status Updates"
description: "Real-time updates for chatbot state changes via WebSocket"
tags:
- websocket
- chatbot
- status
- moderation
keywords:
- StreamElements
- WebSocket
- chatbot status
- moderation status
- real-time updates
---

# Chatbot Status Updates

## Overview

The `channel.chatbot.status` topic provides real-time updates when there are changes in the chatbot's operational status. This includes changes in moderation privileges, connection state, and chat permissions. Updates are sent as partial updates, containing only the modified fields.

## Authentication

Required scope: `chat:read`

## Status

- `stable` - Production ready

## Payload

```json
{
    "id": "01HNX3Q5CS8D309V6DXJ3ZADEQ",
    "ts": "2024-02-05T17:05:41Z",
    "topic": "channel.chatbot.status",
    "type": "message",
    "data": {
        "mod": true
    }
}
```

## Status Fields

The following status fields are supported:
- `banned` (boolean) - Whether the chatbot is banned from the channel
- `muted` (boolean) - Whether the chatbot is temporarily muted
- `joined` (boolean) - Whether the chatbot is currently connected to chat
- `mod` (boolean) - Whether the chatbot has moderator privileges

Each update will contain only the changed field in the `data` object.

## Error Handling

This topic follows the standard error codes as defined in the WebSocket documentation.
