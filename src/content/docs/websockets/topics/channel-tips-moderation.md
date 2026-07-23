---
title: Tips Moderation
description: "Real-time updates about tip moderation status changes through WebSocket events"
wsTopic: 'channel.tips.moderation'
scope: 'tips:moderation'
keywords:
- tip moderation
- donation moderation
- tip status
- websocket events
---

The `channel.tips.moderation` topic provides real-time updates about the moderation status of tips/donations on a channel. This includes when tips are pending review, allowed, or rejected by moderators. Subscribe to this topic to receive updates whenever a tip's moderation status changes.

## Moderation States

Tips can be in one of three moderation states, indicated by the `approved` field:

- `pending`: The tip is awaiting moderation review
- `allowed`: The tip has been approved by a moderator
- `rejected`: The tip has been rejected by a moderator

## Payload

| Parameter | Type | Description |
| --- | --- | --- |
| `data.donation` | `object` | Contains user information and donation details |
| `data.donation.user` | `object` | Information about the donor |
| `data.donation.amount` | `number` | The donation amount |
| `data.donation.currency` | `string` | The donation currency |
| `data.donation.message` | `string` | The donation message |
| `data.donation.paymentMethod` | `string` | The method used for payment |
| `data.provider` | `string` | Payment provider (e.g., `paypal`) |
| `data.approved` | `string` | Current moderation state (`pending`, `allowed`, or `rejected`) |
| `data.approvedBy` | `string` | Username of the moderator who took action (for allowed/rejected states) |
| `data.status` | `string` | Transaction status |
| `data.createdAt` | `string` | Timestamp of tip creation |
| `data.updatedAt` | `string` | Timestamp of last status update |

## Examples

### Pending Tip

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
        "approved": "pending",
        "status": "success",
        "createdAt": "2025-02-19T15:07:09.302Z",
        "updatedAt": "2025-02-19T15:07:17.099Z",
        "transactionId": "2YH79902JR1691017"
    }
}
```

### Allowed Tip

```json
{
    "id": "01JMFBZQVK8VCR34VDR5S29368",
    "ts": "2025-02-19T15:07:25Z",
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
        "updatedAt": "2025-02-19T15:07:25.924Z",
        "transactionId": "2YH79902JR1691017",
        "approvedBy": "styler"
    }
}
```

### Rejected Tip

A rejected tip matches the allowed payload, with `approved` set to `"rejected"`.

## Related

- [Tips](/websockets/topics/channel-tips) - Tip/donation events
- [Websockets](/websockets) - General information about the Astro Websocket Gateway
