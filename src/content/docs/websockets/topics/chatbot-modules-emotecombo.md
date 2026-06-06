---
title: Emote Combo Module
description: "Real-time notifications when an emote combo is achieved in chat."
wsTopic: 'channel.chatbot.modules.emotecombo'
scope: 'bot:read'
---

This event is triggered when an emote combo is achieved in chat.

## Payload

| Parameter | Type | Description |
| --- | --- | --- |
| `data.msg_id` | `string` | ID of the chat message that triggered the combo |
| `data.user_id` | `string` | Provider ID of the user who triggered the combo |
| `data.user_name` | `string` | Username of the user who triggered the combo |
| `data.emote` | `string` | The emote used in the combo |
| `data.count` | `number` | The combo count reached |

## Example

```json
{
    "id": "01HNX3Q5CS8D309V6DXJ3ZADEQ",
    "ts": "2024-02-05T17:05:41Z",
    "topic": "channel.chatbot.modules.emotecombo",
    "type":"message",
    "data": {
        "msg_id": "f71ef587-bf91-4f68-ae21-480ff03c0bf8",
        "user_id": "94055225",
        "user_name": "Styler",
        "emote": "mhm",
        "count": 3
    }
}
```

## Related

- [Pyramid Module](/websockets/topics/chatbot-modules-pyramid/) - Chat pyramid detection events
- [Websockets](/websockets/) - General information about the Astro Websocket Gateway
