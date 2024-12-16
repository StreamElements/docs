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

## Authentication

Required scope: `overlay:write`

## Status

- `stable` - Production ready

## Payload

```json
{
    "id": "01HPPM2TQ6CCMFQGHENAPFR4ZE",
    "ts": "2024-02-15T14:52:42Z",
    "type": "message",
    "topic": "channel.overlay.action",
    "room": "5ad23dcc18fff500d78c5348",
    "data": {
        "action": "pause"
    }
}
```

## Supported Actions

- `pause` - Pauses the overlay
- `unpause` - Resumes the overlay
- `mute` - Mutes overlay audio
- `unmute` - Unmutes overlay audio
- `skip` - Skips current item
- `playNext` - Plays next item
- `emptyHypeCup` - Clears the hype cup

## Error Handling

This topic follows the standard error codes as defined in the WebSocket documentation. Additionally, it may return:
- `invalid_action` - The requested action is not supported
