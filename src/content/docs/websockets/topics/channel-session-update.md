---
title: Session Update
description: "Real-time updates to your channel session data via the Astro Websocket Gateway"
wsTopic: 'channel.session.update'
scope: 'session:read'
keywords:
- channel session update
- streamelements session
- follower update
- channel state
- real-time update
---

This event is triggered when specific elements of your channel session are modified, such as when you receive a new follower or a goal is updated. It provides real-time updates for individual pieces of session data. Subscribe to this topic to receive notifications about specific session data changes as they occur, allowing you to update your applications or overlays in real-time.

## Payload

| Parameter       | Type     | Description                                                                                                          |
| --------------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| `data.key`      | `string` | The session key that was updated (e.g., `"follower-latest"`, `"tip-session"`) — the same key names used in the [Session Data Reference](/overlays/session-data) |
| `data.name`     | `string` | Same value as `data.key`                                                                                              |
| `data.data`     | `object` | The updated value for that key, plus the `activityId` of the triggering activity                                      |
| `data.provider` | `string` | The platform that produced the update (e.g., `"twitch"`)                                                              |
| `data.channel`  | `string` | The channel ID the update belongs to                                                                                  |

## Example

```json
{
    "id": "01HB0YF39XF16HMHCPDYZYJYFK",
    "ts": "2023-09-23T12:06:25Z",
    "type": "message",
    "topic": "channel.session.update",
    "data": {
        "key": "follower-latest",
        "name": "follower-latest",
        "data": {
            "name": "Styler",
            "activityId": "651016c07b356e73c9a3d928"
        },
        "provider": "twitch",
        "channel": "5f2b4c9e8a1d3e001c8b4567"
    }
}
```

### Subscription Request

`room` is optional and defaults to the authenticated channel if not specified.

```json
{
  "type": "subscribe",
  "nonce": "86ccb2b3-eb8d-4b3c-902d-509c3f5ca88c",
  "data": {
    "topic": "channel.session.update",
    "room": "channelId123",
    "token": "YOUR_JWT_TOKEN",
    "token_type": "jwt"
  }
}
```

## Related

- [Session Reset](/websockets/topics/channel-session-reset) - Full session reset notifications
- [Activities](/websockets/topics/channel-activities) - Channel activity notifications
- [Websockets](/websockets) - General information about the Astro Websocket Gateway
