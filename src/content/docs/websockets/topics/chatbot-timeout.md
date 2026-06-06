---
title: Chatbot Timeout
description: "Real-time notifications when the chatbot times out a user."
wsTopic: 'channel.chatbot.timeout'
status: 'in-development'
---

:::caution[In development]
This topic is currently in development.
:::

This event is triggered when the chatbot times out a user in chat.

## Example

```json
{
    "id": "01HNX3Q5CS8D309V6DXJ3ZADEQ",
    "ts": "2024-02-05T17:05:41Z",
    "topic": "channel.chatbot.timeout",
    "type":"message",
    "data": {
        "msg_id": "f71ef587-bf91-4f68-ae21-480ff03c0bf8",
        "user_id": "94055225",
        "user_name": "Styler",
        "duration": 300
    }
}
```

## Related

- [Chatbot Status](/websockets/topics/chatbot-status/) - Chatbot connection status changes
- [Websockets](/websockets/) - General information about the Astro Websocket Gateway
