---
title: Session Reset
description: "Receive full channel session reset notifications via the Astro Websocket Gateway"
wsTopic: 'channel.session.reset'
scope: 'session:read'
keywords:
- channel session reset
- streamelements session
- session data
- channel state reset
- real-time data
---

This event is triggered when your channel session is completely reset. It delivers the full reset session data, allowing you to update all session-related information in your applications or overlays at once. Subscribe to this topic to receive a complete snapshot of your channel session data whenever a reset occurs. This is useful for maintaining synchronization with the latest channel state or initializing your application with current session data.

## Payload

| Parameter      | Type     | Description                                                                                                           |
| -------------- | -------- | --------------------------------------------------------------------------------------------------------------------- |
| `data.session` | `object` | Contains the complete reset session data including all counters, latest events, and other session-related information |

## Example

```json
{
    "id": "01HB0YF39XF16HMHCPDYZYJYFL",
    "ts": "2023-09-23T12:10:25Z",
    "type": "message",
    "topic": "channel.session.reset",
    "data": {
        "latest-follower": {
            "name": "Styler"
        },
        // ... other session data
    }
}
```

## Related

- [Session Update](/websockets/topics/channel-session-update) - Individual session data updates
- [Activities](/websockets/topics/channel-activities) - Channel activity notifications
- [Websockets](/websockets) - General information about the Astro Websocket Gateway
