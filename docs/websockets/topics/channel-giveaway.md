---
id: channel-giveaway
sidebar_label: "Channel Giveaway"
description: "Real-time updates for channel giveaways via WebSocket"
tags:
- websocket
- channel
- giveaway
keywords:
- StreamElements
- WebSocket
- channel update
- giveaway
- real-time data
---

# Channel Giveaway

## Overview

The `channel.giveaway` topic provides real-time updates for an active giveaway. This includes activities such as when a giveaway starts or ends as well as users purchasing tickets, winning the giveaway, and more.

#### Payload

```json
{
    "id": "01J6VTDB25SX14GDBDFZWDX3M9",
    "ts": "2024-09-03T11:30:39Z",
    "type": "message",
    "topic": "channel.giveaway",
    "room": "5ad23dcc18fff500d78c5348",
    "data": {
        "channelId": "5ad23dcc18fff500d78c5348",
        "giveawayId": "67cf4296216c6ff883878c0a",
        "action": "enter",
        "state": "running",
        "data": {
            "totalTickets": 100,
            "totalUsers": 10,
            "entry": {
                "providerId": "14027",
                "username": "jtv",
                "subscriber": true,
                "tickets": 15,
                "new": false
            }
        }
    }
}
```
