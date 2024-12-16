---
id: channel-stream-status
sidebar_label: "Channel Stream Status"
description: "Real-time updates about a channel's live streaming status through WebSocket events"
tags:
- websocket
- streaming
- channel status
keywords:
- stream status
- live status
- channel state
- websocket events
---

# Channel Stream Status

## Overview
The `channel.stream.status` topic provides real-time updates about whether a channel is currently live streaming or offline. Subscribe to this topic to receive updates whenever a channel's streaming status changes.

## Authentication

Required scope: `channel:read`

## Status

- `stable` - Production ready

## Payload

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

## Error Handling

This topic follows the standard error codes as defined in the WebSocket documentation.