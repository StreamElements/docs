---
id: channel-overlay-broadcast
sidebar_label: "Overlay Broadcast"
description: "Real-time custom event broadcasting to channel overlays via WebSocket"
tags:
- websocket
- channel
- overlay
- broadcast
keywords:
- StreamElements
- WebSocket
- channel update
- overlay broadcast
- real-time data
---

# Overlay Broadcast

## Overview

The `channel.overlay.broadcast` topic delivers custom events to a channel's overlays in real-time. Events can target all overlays globally or a specific overlay by ID.

#### Payload

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

#### Fields

| Field    | Type     | Description                                                     |
| -------- | -------- | --------------------------------------------------------------- |
| `target` | `string` | `"global"` to target all overlays, or a specific overlay ID     |
| `event`  | `string` | Custom event name (max 256 characters)                          |
| `data`   | `object` | Custom event payload (max 5KB)                                  |
