---
id: channel-kvstore-update
sidebar_label: "Channel KVStore Update"
description: "Real-time updates for channel key-value store changes via WebSocket"
tags:
- websocket
- channel
- kvstore
keywords:
- StreamElements
- WebSocket
- channel update
- key-value store
- real-time data
---

# Channel KVStore Update

## Overview

The `channel.kvstore.update` topic provides real-time updates when changes occur in a channel's key-value store. This allows you to receive immediate notifications about modifications to specific key-value pairs associated with a channel.

## Authentication

Required scope: `channel:read`

## Status

- `stable` - Production ready

## Payload

```json
{
    "id": "01J6VM2EHSDBTTQZK5C2B6W0NF",
    "ts": "2024-02-15T14:52:42Z",
    "type": "message",
    "topic": "channel.kvstore.update",
    "room": "577c0455f9a31ea72a36b2b3",
    "data": {
        "key": "alerts.paused",
        "value": true
    }
}
```

## Common Keys

The following are commonly used keys in the key-value store:
- `alerts.paused` - Boolean indicating if alerts are paused
- `alerts.volume` - Number indicating alert volume (0-100)
- `overlay.theme` - String indicating the current overlay theme
- `chat.moderation.level` - Number indicating moderation strictness

## Error Handling

This topic follows the standard error codes as defined in the WebSocket documentation.
