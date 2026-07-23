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

This event is triggered when your channel session is reset. It delivers the complete new session data in one message, so you can reinitialize every session-related value in your application or overlay at once.

## Payload

`data` contains the session object itself — a flat map of session keys, with no wrapper property. The keys follow the `<type>-latest`, `<type>-session`, `<type>-week`, `<type>-month`, `<type>-total`, `<type>-count`, and `<type>-goal` naming pattern, the same keys documented in the [Session Data Reference](/overlays/session-data).

| Parameter | Type     | Description                                                                              |
| --------- | -------- | ---------------------------------------------------------------------------------------- |
| `data`    | `object` | The complete reset session data: all counters, latest events, and other session values |

## Example

```json
{
    "id": "01HB0YF39XF16HMHCPDYZYJYFL",
    "ts": "2023-09-23T12:10:25Z",
    "type": "message",
    "topic": "channel.session.reset",
    "data": {
        "follower-latest": {
            "name": "Styler"
        },
        "follower-session": {
            "count": 0
        },
        "tip-session": {
            "amount": 0
        }
    }
}
```

## Related

- [Session Update](/websockets/topics/channel-session-update) - Individual session data updates
- [Activities](/websockets/topics/channel-activities) - Channel activity notifications
- [Websockets](/websockets) - General information about the Astro Websocket Gateway
