---
id: channel-overlay-action
sidebar_label: "Channel Overlay Action"
description: "Real-time updates for channel overlay actions via WebSocket"
tags:
- websocket
- channel
- overlay
- action
keywords:
- StreamElements
- WebSocket
- channel update
- overlay action
- real-time data
---

# Channel Overlay Action

## Overview

The `channel.overlay.action` topic provides real-time updates when actions are performed on a channel's overlay. This allows you to receive immediate notifications about specific actions taken on the overlay, such as pausing or resuming.

#### Payload

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

#### Supported Actions

- `pause`
- `unpause`
- `mute`
- `unmute`
- `skip`
- `playNext`
- `emptyHypeCup`
