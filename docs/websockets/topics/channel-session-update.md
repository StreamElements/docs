---
id: channel-session-update
sidebar_label: "Channel Session Update"
description: "Real-time updates for channel session changes via WebSocket"
tags:
- websocket
- channel
- session
- events
keywords:
- StreamElements
- WebSocket
- channel session
- real-time updates
- session data
---

# Channel Session Update

## Overview

The `channel.session.update` topic provides real-time updates when changes occur in a channel's session data. This includes updates to session-specific information like goals, counters, and other session-tracked metrics.

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
    "topic": "channel.session.update",
    "data": {
        "name": "follower-goal",
        "provider": "twitch",
        "data": {
            "amount": 70,
            "activityId": "65ce2539b1585c5f909a91e1"
        }
    }
}
```

## Session Data Types

The following session data types are supported:
- `follower-goal` - Progress towards follower goals
- `subscriber-goal` - Progress towards subscriber goals
- `tip-goal` - Progress towards donation/tip goals
- `session-data` - General session statistics and counters

## Error Handling

This topic follows the standard error codes as defined in the WebSocket documentation.
