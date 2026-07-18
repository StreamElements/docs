---
title: Stream Status
description: "Real-time updates about a channel's live streaming status through WebSocket events"
wsTopic: 'channel.stream.status'
scope: 'stream-live:read'
keywords:
- stream status
- live status
- channel state
- websocket events
---

The `channel.stream.status` topic provides real-time updates about whether a channel is currently live streaming or offline. Subscribe to this topic to receive updates whenever a channel's streaming status changes.

## Payload

| Parameter | Type | Description |
| --- | --- | --- |
| `data.isLive` | `boolean` | Whether the channel is currently live |

## Example

```json
{
    "id": "01HPPM2TQ6CCMFQGHENAPFR4ZE",
    "ts": "2024-02-15T14:52:42Z",
    "type": "message",
    "topic": "channel.stream.status",
    "data": {
        "isLive": true
    }
}
```

## Related

- [Session Update](/websockets/topics/channel-session-update) - Individual session data updates
- [Websockets](/websockets) - General information about the Astro Websocket Gateway
