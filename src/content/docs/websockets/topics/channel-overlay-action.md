---
title: Overlay Action
description: "Real-time updates for channel overlay actions via WebSocket"
wsTopic: 'channel.overlay.action'
scope: 'overlays:read'
keywords:
- StreamElements
- WebSocket
- channel update
- overlay action
- real-time data
---

The `channel.overlay.action` topic provides real-time updates when actions are performed on a channel's overlay. This allows you to receive immediate notifications about specific actions taken on the overlay, such as pausing or resuming.

## Payload

| Parameter | Type | Description |
| --- | --- | --- |
| `data.action` | `string` | The action performed (see [Supported Actions](#supported-actions)) |

### Supported Actions

| Action | Description |
| --- | --- |
| `pause` | Pause the overlay queue |
| `unpause` | Resume the overlay queue |
| `mute` | Mute the overlay |
| `unmute` | Unmute the overlay |
| `skip` | Skip the current item |
| `playNext` | Play the next item in the queue |
| `emptyHypeCup` | Empty the Hype Cup |
| `reload` | Reload the overlay |

## Example

```json
{
    "id": "01J6VTDB25SX14GDBDFZWDX3M9",
    "ts": "2024-09-03T11:30:39Z",
    "type": "message",
    "topic": "channel.overlay.action",
    "room": "5ad23dcc18fff500d78c5348",
    "data": {
        "action": "pause"
    }
}
```

## Related

- [Overlay Broadcast](/websockets/topics/channel-overlay-broadcast) - Custom broadcast events targeting overlays
- [Overlay Update](/websockets/topics/channel-overlay-update) - Overlay update notifications
- [Websockets](/websockets) - General information about the Astro Websocket Gateway
