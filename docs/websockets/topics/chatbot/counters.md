---
id: counters
sidebar_label: "Counters"
description: "Real-time updates for StreamElements chatbot counter values via the Astro Websocket Gateway"
tags:
- api
- websockets
- real-time
- chatbot
- counters
keywords:
- chatbot counters
- streamelements counter
- counter updates
- real-time counter
- bot counter
---

# Chatbot Counters

## Topic

`channel.chatbot.counters`

## Description

This event is triggered whenever a chatbot counter value changes, whether through increment, decrement, or reset operations. It provides real-time updates of counter values, enabling immediate synchronization across your applications.

## Usage

Subscribe to this topic to receive real-time notifications about changes to your chatbot counters. This is particularly useful for maintaining accurate counter displays in overlays, applications, or other integrations that need to reflect the current state of your chatbot counters.

## Payload

```json
{
    "id": "01HB0YF39XF16HMHCPDYZYJYFL",
    "ts": "2023-09-23T12:10:25Z",
    "type": "message",
    "topic": "channel.chatbot.counters",
    "data": {
        "counter": "deaths",
        "value": 42
    }
}
```

### Parameters

| Parameter      | Type     | Description                                                 |
| -------------- | -------- | ----------------------------------------------------------- |
| `data.counter` | `string` | The name of the counter that was updated                    |
| `data.value`   | `number` | The current value of the counter after the update operation |

## Examples

### Subscription Request

```json
{
  "type": "subscribe",
  "nonce": "86ccb2b3-eb8d-4b3c-902d-509c3f5ca88c",
  "data": {
    "topic": "channel.chatbot.counters",
    "room": "channelId123",
    "token": "YOUR_JWT_TOKEN",
    "token_type": "jwt"
  }
}
```

## Related Topics

- [Chatbot Status](./chatbot-status.md) - Chatbot connection status
- [Timeout](./timeout.md) - User timeout notifications
- [Websockets](../../index.md) - General information about the Astro Websocket Gateway 
