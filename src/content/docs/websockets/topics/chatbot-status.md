---
title: Chatbot Status
description: "Real-time updates whenever the chatbot's status changes, such as its banned, muted, joined, or moderator state."
wsTopic: 'channel.chatbot.status'
scope: 'bot:read'
---

This event is triggered whenever there is a change in the chatbot's status. It sends out a `partial` update highlighting the modified field.

## Payload

| Parameter | Type | Description |
| --- | --- | --- |
| `data.banned` | `boolean` | Whether the chatbot is banned or not |
| `data.muted` | `boolean` | Whether the chatbot is muted or not |
| `data.joined` | `boolean` | Whether the chatbot is joined or not |
| `data.mod` | `boolean` | Whether the chatbot is a moderator or not |

## Example

```json
{
    "id": "01HNX3Q5CS8D309V6DXJ3ZADEQ",
    "ts": "2024-02-05T17:05:41Z",
    "topic": "channel.chatbot.status",
    "type":"message",
    "data": {
        "mod": true
    }
}
```

## Related

- [Chatbot Counters](/websockets/topics/chatbot-counters/) - Chatbot counter value changes
- [Chatbot Timeout](/websockets/topics/chatbot-timeout/) - User timeout notifications
- [Websockets](/websockets/) - General information about the Astro Websocket Gateway
