---
id: channel-session-update
sidebar_label: "Channel Session Update"
description: "Real-time updates to your channel session data via the Astro Websocket Gateway"
tags:
- api
- websockets
- real-time
- session
keywords:
- channel session update
- streamelements session
- follower update
- channel state
- real-time update
---

# Channel Session Update

## Topic

`channel.session.update`

## Description

This event is triggered when specific elements of your channel session are modified, such as when you receive a new follower or a goal is updated. It provides real-time updates for individual pieces of session data.

## Usage

Subscribe to this topic to receive notifications about specific session data changes as they occur, allowing you to update your applications or overlays in real-time.

## Payload

```json
{
    "id": "01HB0YF39XF16HMHCPDYZYJYFK",
    "ts": "2023-09-23T12:06:25Z",
    "type": "message",
    "topic": "channel.session.update",
    "data": {
        "key": "latest_follower",
        "data": {
            "name": "Styler"
        }
    }
}
```

### Parameters

| Parameter   | Type     | Description                                                            |
| ----------- | -------- | ---------------------------------------------------------------------- |
| `data.key`  | `string` | Identifies which session element was updated (e.g., "latest_follower") |
| `data.data` | `object` | Contains the updated information relevant to the key                   |

## Examples

### Subscription Request

```json
{
  "type": "subscribe",
  "nonce": "86ccb2b3-eb8d-4b3c-902d-509c3f5ca88c",
  "data": {
    "topic": "channel.session.update",
    "room": "channelId123", // Optional: defaults to authenticated channel if not specified
    "token": "YOUR_JWT_TOKEN",
    "token_type": "jwt"
  }
}
```

## Related Topics

- [Channel Session Reset](./channel-session-reset.md) - Full session reset notifications
- [Channel Activities](./channel-activities.md) - Channel activity notifications
- [Websockets](../index.md) - General information about the Astro Websocket Gateway
