---
id: channel-session-reset
sidebar_label: "Channel Session Reset"
description: "Receive full channel session reset notifications via the Astro Websocket Gateway"
tags:
- api
- websockets
- real-time
- session
keywords:
- channel session reset
- streamelements session
- session data
- channel state reset
- real-time data
---

# Channel Session Reset

## Topic

`channel.session.reset`

## Description

This event is triggered when your channel session is completely reset. It delivers the full reset session data, allowing you to update all session-related information in your applications or overlays at once.

## Usage

Subscribe to this topic to receive a complete snapshot of your channel session data whenever a reset occurs. This is useful for maintaining synchronization with the latest channel state or initializing your application with current session data.

## Payload

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

### Parameters

| Parameter      | Type     | Description                                                                                                           |
| -------------- | -------- | --------------------------------------------------------------------------------------------------------------------- |
| `data.session` | `object` | Contains the complete reset session data including all counters, latest events, and other session-related information |

## Related Topics

- [Channel Session Update](./channel-session-update.md) - Individual session data updates
- [Channel Activities](./channel-activities.md) - Channel activity notifications
- [Websockets](../index.md) - General information about the Astro Websocket Gateway
