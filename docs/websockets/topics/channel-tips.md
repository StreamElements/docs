---
id: channel-tips
sidebar_label: "Tips"
description: "Real-time updates about tips/donations on a channel through WebSocket events"
tags:
- websockets
- tips
- moderation
keywords:
- tip moderation
- donation moderation
- tip status
- websocket events
---

# Tips

## Overview

The `channel.tips` topic provides real-time updates about the tips/donations on a channel.

## Usage

Subscribe to this topic to receive updates whenever a tip/donation is completed.

## Examples

### Tip Created

```json
{
    "id": "01JMFBZF7KSRDDXXV0EH7G8X6G",
    "ts": "2025-02-19T15:07:17Z",
    "type": "message",
    "topic": "channel.tips.moderation",
    "room": "5ad23dcc18fff500d78c5348",
    "data": {
        "donation": {
            "user": {
                "username": "Styler",
                "geo": "ZZ",
                "email": "styler@streamelements.com",
                "channel": "5ad23dcc18fff500d78c5348"
            },
            "message": "",
            "amount": 4.2,
            "currency": "USD",
            "paymentMethod": "scheme"
        },
        "_id": "67b5f39d07ecd4c594e60f73",
        "channel": "5ad23dcc18fff500d78c5348",
        "provider": "paypal",
        "approved": "allowed",
        "status": "success",
        "createdAt": "2025-02-19T15:07:09.302Z",
        "updatedAt": "2025-02-19T15:07:17.099Z",
        "transactionId": "2YH79902JR1691017"
    }
}
```
