---
id: channel-tips-moderation
sidebar_label: "Channel Tips Moderation"
description: "Real-time updates about tip moderation status changes through WebSocket events"
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

# Channel Tips Moderation

## Overview

The `channel.tips.moderation` topic provides real-time updates about the moderation status of tips/donations on a channel. This includes when tips are pending review, allowed, or rejected by moderators.

## Usage

Subscribe to this topic to receive updates whenever a tip's moderation status changes.

## Moderation States

Tips can be in one of three moderation states, indicated by the `approved` field:

- `pending`: The tip is awaiting moderation review
- `allowed`: The tip has been approved by a moderator
- `rejected`: The tip has been rejected by a moderator

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

## Payload Structure

The payload contains the following key information:

- `donation`: Contains user information and donation details
  - `user`: Information about the donor
  - `amount`: The donation amount
  - `currency`: The donation currency
  - `message`: The donation message
  - `paymentMethod`: The method used for payment
- `provider`: Payment provider (e.g., "paypal")
- `approved`: Current moderation state (`pending`, `allowed`, or `rejected`)
- `approvedBy`: Username of the moderator who took action (for allowed/rejected states)
- `status`: Transaction status
- `createdAt`: Timestamp of tip creation
- `updatedAt`: Timestamp of last status update
