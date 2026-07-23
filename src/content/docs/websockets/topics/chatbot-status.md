---
title: Chatbot Status
description: "Real-time updates whenever the chatbot's status changes, such as its banned or moderator state."
wsTopic: 'channel.chatbot.status'
scope: 'bot:read'
---

This event is triggered whenever there is a change in the chatbot's status on the channel. It sends out a `partial` update containing a single modified field:

- `mod` is published when the bot account is granted or removed as a moderator on the channel.
- `banned` is published when the bot account is banned or unbanned on the channel.

:::note
These events are currently only published for Twitch channels.
:::

## Payload

Each event contains exactly one of the following fields:

| Parameter | Type | Description |
| --- | --- | --- |
| `data.mod` | `boolean` | Whether the chatbot is a moderator or not |
| `data.banned` | `boolean` | Whether the chatbot is banned or not |

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

- [Chatbot Counters](/websockets/topics/chatbot-counters) - Chatbot counter value changes
- [Chatbot Timeout](/websockets/topics/chatbot-timeout) - User timeout notifications
- [Websockets](/websockets) - General information about the Astro Websocket Gateway
