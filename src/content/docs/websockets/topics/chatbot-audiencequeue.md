---
title: Audience Queue
description: "Real-time audience queue (viewer queue) events for queue lifecycle and member changes"
wsTopic: 'channel.chatbot.audiencequeue'
scope: 'bot:read'
keywords:
- StreamElements
- WebSocket
- audience queue
- viewer queue
- queue
- chatbot
- real-time
---

This topic carries every audience queue event: queue lifecycle changes and member changes. The audience queue backs the chatbot's [Viewer Queue](/chatbot/modules/viewerqueue) module and the `!queue` command.

## Payload

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `room` | `string` | Channel ID |
| `data.event` | `string` | Event type (e.g., `queue.created`) |
| `data.payload` | `object` | Event-specific payload data |

## Example

```json
{
    "id": "01KC4840ZZ1BAMK5R2V9QX9BNA",
    "ts": "2026-08-30T14:30:00Z",
    "type": "message",
    "topic": "channel.chatbot.audiencequeue",
    "room": "577c0455f9a31ea72a36b2b3",
    "data": {
        "event": "member.enqueued",
        "payload": {}
    }
}
```

## Events

### Queue Events

| Event | Description |
| ----- | ----------- |
| `queue.created` | A queue was opened |
| `queue.updated` | Queue settings changed, or the queue was paused or resumed |
| `queue.deleted` | The queue was closed |

#### queue.created

```json
{
    "event": "queue.created",
    "payload": {
        "isSuspended": false,
        "title": "Viewer games",
        "audienceMemberGroups": ["subscriber", "vip"],
        "maxQueueSize": 25,
        "createdAt": "2026-08-30T14:30:00Z",
        "updatedAt": "2026-08-30T14:30:00Z",
        "statusChangeLog": [
            {
                "timeStamp": "2026-08-30T14:30:00Z",
                "status": "opened"
            }
        ]
    }
}
```

The payload is an [AudienceQueue](#audiencequeue) object.

#### queue.updated

Same payload as `queue.created`, with the current queue state. When the queue is paused or resumed, `isSuspended` changes and a new entry appears in `statusChangeLog`.

#### queue.deleted

```json
{
    "event": "queue.deleted",
    "payload": null
}
```

The payload is always `null`.

### Member Events

| Event | Description |
| ----- | ----------- |
| `member.enqueued` | A member joined the queue |
| `member.selected` | A member was selected, by hand or at random |
| `member.removed` | A member was removed from the queue or the selection |

All member events carry an [AudienceQueueMember](#audiencequeuemember) payload:

```json
{
    "event": "member.enqueued",
    "payload": {
        "id": "12345678",
        "username": "viewer123",
        "displayName": "Viewer123",
        "watchTime": 340,
        "audienceGroups": ["subscriber"],
        "position": 4
    }
}
```

## Data Types

### AudienceQueue

| Field | Type | Description |
| ----- | ---- | ----------- |
| `isSuspended` | `boolean` | Whether the queue is paused |
| `title` | `string` | Queue title |
| `audienceMemberGroups` | `array` | Groups allowed to join: `everyone`, `vip`, `subscriber`, `follower` |
| `maxQueueSize` | `number` | Maximum number of queued members (0 = unlimited) |
| `createdAt` | `string` | Queue creation time (ISO 8601) |
| `updatedAt` | `string` | Last update time (ISO 8601) |
| `statusChangeLog` | `array` | Status history entries with `timeStamp` and `status` (`opened`, `suspended`, `unsuspended`, `closed`) |

### AudienceQueueMember

| Field | Type | Description |
| ----- | ---- | ----------- |
| `id` | `string` | The member's user ID on the streaming platform |
| `username` | `string` | Username |
| `displayName` | `string` | Display name, which can differ from the username |
| `watchTime` | `number` | Watch time in minutes (Twitch only, otherwise 0) |
| `audienceGroups` | `array` | Groups the member belongs to: `everyone`, `vip`, `subscriber`, `follower` |
| `position` | `number` | Position in the queue |

## Related

- [Viewer Queue](/chatbot/modules/viewerqueue) - The chatbot module these events belong to
- [Chatbot Status](/websockets/topics/chatbot-status) - Chatbot connection status changes
- [Websockets](/websockets) - General information about the Astro Websocket Gateway
