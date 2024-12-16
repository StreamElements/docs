---
id: channel-activities
sidebar_label: "Channel Activities"
description: "Real-time updates for channel activities via WebSocket"
tags:
- websocket
- channel
- activities
- events
keywords:
- StreamElements
- WebSocket
- channel activities
- events
- real-time updates
---

# Channel Activities

## Overview

The `channel.activities` topic provides real-time updates when new activities occur on a channel. Activities can include follows, subscriptions, donations, and other engagement events.

## Authentication

Required scope: `activities:read`

## Status

- `stable` - Production ready

## Payload

```json
{
    "id": "01HPPM2TQ6CCMFQGHEN8MM1NN0",
    "ts": "2024-02-15T14:52:42Z",
    "type": "message",
    "topic": "channel.activities",
    "data": {
        "type": "follow",
        "provider": "twitch",
        "channel": "6183c7d4ebc632abbf809890",
        "data": {
            "username": "jtv",
            "displayName": "jtv",
            "providerId": "14027",
            "avatar": "https://static-cdn.jtvnw.net/user-default-pictures-uv/13e5fa74-defa-11e9-809c-784f43822e80-profile_image-300x300.png"
        },
        "_id": "65ce2539b1585c5f909a91e1",
        "createdAt": "2024-02-15T14:52:41.608Z",
        "updatedAt": "2024-02-15T14:52:41.608Z",
        "activityId": "65ce2539b1585c5f909a91e1",
        "sessionEventsCount": 6
    }
}
```

## Error Handling

This topic follows the standard error codes as defined in the WebSocket documentation.
