---
title: Emote Combo Module
description: "Real-time notifications when an emote combo is broken in chat."
wsTopic: 'channel.chatbot.modules.emotecombo'
scope: 'bot:read'
---

This event is triggered when an emote combo is broken — that is, when a chat message ends a streak of consecutive messages containing the same emote. It identifies the message and user that broke the combo, not the participants who built it.

:::note
The event only fires when the combo count has reached the configured minimum (3 by default) and the module's cooldown has elapsed.
:::

## Payload

| Parameter | Type | Description |
| --- | --- | --- |
| `data.msg_id` | `string` | ID of the chat message that broke the combo |
| `data.user_id` | `string` | Provider ID of the user who broke the combo |
| `data.user_name` | `string` | Display name of the user who broke the combo |
| `data.emote` | `string` | The emote used in the combo |
| `data.count` | `number` | The final combo count reached before the combo was broken |

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

- [Pyramid Module](/websockets/topics/chatbot-modules-pyramid) - Chat pyramid detection events
- [Websockets](/websockets) - General information about the Astro Websocket Gateway
