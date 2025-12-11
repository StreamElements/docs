---
id: channel-giveaway
sidebar_label: "Giveaways"
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

# Giveaways

## Topic

`channel.giveaways`

## Description

This topic provides real-time updates for giveaway events. It covers the full giveaway lifecycle including starting, entries, winner selection, closing, and refunds.

## Usage

Subscribe to this topic to receive notifications about giveaway activities, allowing you to build real-time giveaway displays or sync giveaway state across multiple clients.

## Message Structure

```json
{
    "id": "01J6VTDB25SX14GDBDFZWDX3M9",
    "ts": "2024-09-03T11:30:39Z",
    "type": "message",
    "topic": "channel.giveaways",
    "room": "5ad23dcc18fff500d78c5348",
    "data": {
        "channelId": "5ad23dcc18fff500d78c5348",
        "giveawayId": "67cf4296216c6ff883878c0a",
        "event": "enter",
        "state": "running",
        "data": {}
    }
}
```

### Parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `data.channelId` | `string` | Channel ID (ObjectID hex) |
| `data.giveawayId` | `string` | Giveaway ID (ObjectID hex) |
| `data.event` | `string` | Event type |
| `data.state` | `string` | Current giveaway state |
| `data.data` | `object` | Event-specific payload data |

### State Values

| State | Description |
| ----- | ----------- |
| `created` | Initial state |
| `running` | Active, accepting entries |
| `closed` | Closed, can pick winners or refund |
| `refunded` | All entries refunded |
| `completed` | Fully completed |

## Events

| Event | Description |
| ----- | ----------- |
| `start` | Giveaway started accepting entries |
| `enter` | User entered the giveaway |
| `complete` | Giveaway entries closed, ready for winner selection |
| `winner` | Winner selected |
| `close` | Giveaway closed |
| `refund` | Entire giveaway refunded |
| `refund-entry` | Single entry refunded |

### start

Giveaway started accepting entries.

```json
{
    "channelId": "5ad23dcc18fff500d78c5348",
    "giveawayId": "67cf4296216c6ff883878c0a",
    "event": "start",
    "state": "running",
    "data": null
}
```

### enter

User entered the giveaway.

```json
{
    "channelId": "5ad23dcc18fff500d78c5348",
    "giveawayId": "67cf4296216c6ff883878c0a",
    "event": "enter",
    "state": "running",
    "data": {
        "totalUsers": 150,
        "totalTickets": 3200,
        "entry": {
            "providerId": "twitch:12345",
            "username": "cooluser",
            "subscriber": true,
            "tickets": 10,
            "new": true
        }
    }
}
```

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `totalUsers` | `number` | Total number of users entered |
| `totalTickets` | `number` | Total tickets across all entries |
| `entry` | `object` | The user entry (see User Object) |

### complete

Giveaway entries closed, ready for winner selection.

```json
{
    "channelId": "5ad23dcc18fff500d78c5348",
    "giveawayId": "67cf4296216c6ff883878c0a",
    "event": "complete",
    "state": "completed",
    "data": {
        "totalUsers": 200,
        "totalTickets": 5000
    }
}
```

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `totalUsers` | `number` | Final number of users entered |
| `totalTickets` | `number` | Final total tickets |

### winner

Winner selected.

```json
{
    "channelId": "5ad23dcc18fff500d78c5348",
    "giveawayId": "67cf4296216c6ff883878c0a",
    "event": "winner",
    "state": "running",
    "data": {
        "totalUsers": 200,
        "totalTickets": 5000,
        "winner": {
            "providerId": "twitch:67890",
            "username": "luckyuser",
            "subscriber": false,
            "tickets": 5
        }
    }
}
```

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `totalUsers` | `number` | Total number of users entered |
| `totalTickets` | `number` | Total tickets across all entries |
| `winner` | `object` | The winning user (see User Object) |

### close

Giveaway closed.

```json
{
    "channelId": "5ad23dcc18fff500d78c5348",
    "giveawayId": "67cf4296216c6ff883878c0a",
    "event": "close",
    "state": "closed",
    "data": null
}
```

### refund

Entire giveaway refunded.

```json
{
    "channelId": "5ad23dcc18fff500d78c5348",
    "giveawayId": "67cf4296216c6ff883878c0a",
    "event": "refund",
    "state": "refunded",
    "data": null
}
```

### refund-entry

Single entry refunded.

```json
{
    "channelId": "5ad23dcc18fff500d78c5348",
    "giveawayId": "67cf4296216c6ff883878c0a",
    "event": "refund-entry",
    "state": "running",
    "data": {
        "entry": {
            "providerId": "twitch:12345",
            "username": "refundeduser",
            "subscriber": true,
            "tickets": 10
        }
    }
}
```

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `entry` | `object` | The refunded user entry (see User Object) |

## Data Types

### User Object

| Field | Type | Description |
| ----- | ---- | ----------- |
| `providerId` | `string` | Provider-prefixed user ID |
| `username` | `string` | Display username |
| `avatar` | `string` | Avatar URL (optional, not currently populated) |
| `subscriber` | `boolean` | Whether user is a subscriber |
| `tickets` | `number` | Number of tickets for this entry |
| `new` | `boolean` | Whether this is a new entrant (only on `enter` event) |

## Related Topics

- [Channel Contests](./channel-contests.md) - Contest and prediction events
- [Channel Activities](./channel-activities.md) - General channel activity events
- [Websockets](../index.md) - General information about the Astro WebSocket Gateway
