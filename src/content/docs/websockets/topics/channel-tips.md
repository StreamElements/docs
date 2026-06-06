---
title: Tips
description: "Real-time updates about tips/donations on a channel through WebSocket events"
wsTopic: 'channel.tips'
scope: 'tips:read'
keywords:
- tips
- donations
- tip events
- donation events
- websocket events
---

The `channel.tips` topic provides real-time updates about the tips/donations on a channel. Subscribe to this topic to receive updates whenever a tip/donation is completed.

## Payload

| Parameter | Type | Description |
| --- | --- | --- |
| `data.donation` | `object` | Contains user information and donation details |
| `data.donation.user` | `object` | Information about the donor |
| `data.donation.message` | `string` | The donation message |
| `data.donation.amount` | `number` | The donation amount |
| `data.donation.currency` | `string` | The donation currency |
| `data.donation.paymentMethod` | `string` | The method used for payment |
| `data._id` | `string` | Unique tip identifier |
| `data.channel` | `string` | Channel ID |
| `data.provider` | `string` | Payment provider (e.g., `paypal`) |
| `data.approved` | `string` | Moderation state of the tip (see [Tips Moderation](/websockets/topics/channel-tips-moderation/)) |
| `data.status` | `string` | Transaction status |
| `data.createdAt` | `string` | Timestamp of tip creation |
| `data.updatedAt` | `string` | Timestamp of last status update |
| `data.transactionId` | `string` | Payment transaction identifier |

## Example

```json
{
    "id": "01JMFBZF7KSRDDXXV0EH7G8X6G",
    "ts": "2025-02-19T15:07:17Z",
    "type": "message",
    "topic": "channel.tips",
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

## Related

- [Tips Moderation](/websockets/topics/channel-tips-moderation/) - Tip moderation status updates
- [Activities](/websockets/topics/channel-activities/) - General channel activity events
- [Websockets](/websockets/) - General information about the Astro Websocket Gateway
