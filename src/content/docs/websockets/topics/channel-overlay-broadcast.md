---
title: Overlay Broadcast
description: "Real-time custom event broadcasting to channel overlays via WebSocket"
wsTopic: 'channel.overlay.broadcast'
scope: 'overlays:broadcast'
keywords:
- StreamElements
- WebSocket
- channel update
- overlay broadcast
- real-time data
---

The `channel.overlay.broadcast` topic delivers custom events to a channel's overlays in real-time. Events can target all overlays globally or a specific overlay by ID.

## Payload

| Parameter | Type | Description |
| --- | --- | --- |
| `data.target` | `string` | `"global"` to target all overlays, or a specific overlay ID |
| `data.event` | `string` | Custom event name (max 256 characters) |
| `data.data` | `object` | Custom event payload (max 5KB) |

## Example

```json
{
    "id": "01J6VTDB25SX14GDBDFZWDX3M9",
    "ts": "2024-09-03T11:30:39Z",
    "type": "message",
    "topic": "channel.overlay.broadcast",
    "room": "5ad23dcc18fff500d78c5348",
    "data": {
        "target": "global",
        "event": "my-custom-event",
        "data": {
            "key": "value"
        }
    }
}
```

## Example: KappaGen

StreamElements itself uses this topic: when a viewer uses the chatbot's [`!kappagen`](/chatbot/commands/default/kappagen/) command, the chatbot broadcasts an `emotesplosion-kappagen` event to all of the channel's overlays, with the chat message that triggered the command as the event payload.

```json
{
    "id": "01J6VTDB25SX14GDBDFZWDX3M9",
    "ts": "2024-09-03T11:30:39Z",
    "type": "message",
    "topic": "channel.overlay.broadcast",
    "room": "5ad23dcc18fff500d78c5348",
    "data": {
        "target": "global",
        "event": "emotesplosion-kappagen",
        "data": {
            // ... the chat message that triggered !kappagen
        }
    }
}
```

## Related

- [Overlay Action](/websockets/topics/channel-overlay-action/) - Overlay action events
- [Overlay Update](/websockets/topics/channel-overlay-update/) - Overlay update notifications
- [Websockets](/websockets/) - General information about the Astro Websocket Gateway
