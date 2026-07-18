---
title: Chatbot Pyramid
description: "Real-time notifications when a user successfully completes a pyramid in chat."
wsTopic: 'channel.chatbot.modules.pyramid'
scope: 'bot:read'
---

This event is triggered when a pyramid is successfully completed in chat. It identifies the user who sent the final message that completed the pyramid.

:::note
The event only fires for pyramids that reach a peak width of at least 3.
:::

## Payload

| Parameter | Type | Description |
| --- | --- | --- |
| `data.msg_id` | `string` | ID of the chat message that completed the pyramid |
| `data.user_id` | `string` | Provider ID of the user who completed the pyramid |
| `data.user_name` | `string` | Display name of the user who completed the pyramid |
| `data.word` | `string` | The emote the pyramid was built with |
| `data.width` | `number` | The peak width of the completed pyramid |

## Example

```json
{
    "id": "01HNX3Q5CS8D309V6DXJ3ZADEQ",
    "ts": "2024-02-05T17:05:41Z",
    "topic": "channel.chatbot.modules.pyramid",
    "type":"message",
    "data": {
        "msg_id": "f71ef587-bf91-4f68-ae21-480ff03c0bf8",
        "user_id": "94055225",
        "user_name": "Styler",
        "word": "mhm",
        "width": 3
    }
}
```

## Related

- [Emote Combo Module](/websockets/topics/chatbot-modules-emotecombo) - Emote combo trigger events
- [Websockets](/websockets) - General information about the Astro Websocket Gateway
