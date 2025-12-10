---
id: channel-songrequest
sidebar_label: "Channel Songrequest"
description: "Real-time songrequest events published via WebSocket for queue, player, and settings updates"
tags:
- websocket
- channel
- songrequest
keywords:
- StreamElements
- WebSocket
- songrequest
- song request
- media request
- queue
- real-time
---

# Channel Songrequest

## Topic

`channel.songrequest`

## Description

This topic provides real-time songrequest events published to Astro for WebSocket delivery. It covers all songrequest-related actions including player controls, queue management, history tracking, song playback, and settings updates.

## Usage

Subscribe to this topic to receive notifications about songrequest activities, allowing you to build real-time songrequest displays, queue management interfaces, or sync songrequest state across multiple clients.

## Message Structure

```json
{
    "id": "01KC4840ZZ1BAMK5R2V9QX9BNA",
    "ts": "2025-01-15T14:30:00Z",
    "type": "message",
    "topic": "channel.songrequest",
    "room": "577c0455f9a31ea72a36b2b3",
    "data": {
        "event": "queue.add",
        "payload": {}
    }
}
```

### Parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `room` | `string` | Channel ID |
| `data.event` | `string` | Event type (e.g., `queue.add`, `settings.update`) |
| `data.payload` | `object` | Event-specific payload data |

## Events

### Player Events

| Event | Description |
| ----- | ----------- |
| `play` | Song resumed |
| `pause` | Song paused |
| `volume` | Volume changed |

#### volume

```json
{
    "event": "volume",
    "payload": {
        "volume": 75
    }
}
```

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `volume` | `number` | Volume level (0-100) |

### Queue Events

| Event | Description |
| ----- | ----------- |
| `queue.add` | Song added to queue |
| `queue.remove` | Song removed from queue |
| `queue.clear` | Queue cleared |
| `queue.purge` | User purged from queue |
| `pending.approve` | Pending songs approved |

#### queue.add

```json
{
    "event": "queue.add",
    "payload": {
        "song": {
            "_id": "507f1f77bcf86cd799439011",
            "videoId": "dQw4w9WgXcQ",
            "title": "Example Song Title",
            "duration": 212,
            "start": 0,
            "end": 212,
            "channel": "577c0455f9a31ea72a36b2b3",
            "amount": 0,
            "message": "Great song!",
            "user": {
                "providerId": "12345678",
                "username": "viewer123",
                "subscriber": true
            },
            "promoted": false,
            "skipped": false,
            "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            "type": "video",
            "source": "bot",
            "approvedBy": "",
            "provider": "youtube",
            "voteskips": [],
            "tags": ["music"],
            "statistics": {
                "viewCount": 1000000,
                "likeCount": 50000,
                "dislikeCount": 1000
            },
            "categoryId": 10
        },
        "position": 3,
        "queue": "queue"
    }
}
```

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `song` | `SongrequestSong` | The song that was added |
| `position` | `number` | Optional position in queue |
| `queue` | `string` | Queue type: `pending` or `queue` |

#### queue.remove

```json
{
    "event": "queue.remove",
    "payload": {
        "queue": "queue",
        "songId": "507f1f77bcf86cd799439011"
    }
}
```

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `queue` | `string` | Queue type: `pending` or `queue` |
| `songId` | `string` | ID of the removed song |

#### queue.clear

```json
{
    "event": "queue.clear",
    "payload": {
        "queue": "queue"
    }
}
```

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `queue` | `string` | Queue type: `pending` or `queue` |

#### queue.purge

```json
{
    "event": "queue.purge",
    "payload": {
        "queue": "queue",
        "user": "viewer123"
    }
}
```

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `queue` | `string` | Queue type (always `queue`) |
| `user` | `string` | Username whose songs were purged |

#### pending.approve

```json
{
    "event": "pending.approve",
    "payload": {
        "approvedBy": "moderator123"
    }
}
```

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `approvedBy` | `string` | Username of the approver |

### History Events

| Event | Description |
| ----- | ----------- |
| `history.add` | Song added to history |
| `history.clear` | History cleared |
| `history.remove` | Entry removed from history |

#### history.add

The payload contains the full history document.

#### history.clear

```json
{
    "event": "history.clear",
    "payload": {
        "removed": 25
    }
}
```

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `removed` | `number` | Number of entries removed |

#### history.remove

```json
{
    "event": "history.remove",
    "payload": {
        "songId": "507f1f77bcf86cd799439011"
    }
}
```

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `songId` | `string` | ID of the removed history entry |

### Song Events

| Event | Description |
| ----- | ----------- |
| `song.next` | Next song playing |
| `song.skip` | Song skipped |
| `song.position` | Position changed in queue |
| `song.voteskip` | Vote-skip progress update |
| `song.previous` | Previous song replayed |

#### song.next

```json
{
    "event": "song.next",
    "payload": {
        "nextSong": {
            "_id": "507f1f77bcf86cd799439011",
            "videoId": "dQw4w9WgXcQ",
            "title": "Next Song Title",
            "duration": 180
        }
    }
}
```

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `nextSong` | `SongrequestSong` | The next song, or `undefined` if queue is empty |

#### song.position

```json
{
    "event": "song.position",
    "payload": {
        "songId": "507f1f77bcf86cd799439011",
        "position": 2
    }
}
```

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `songId` | `string` | ID of the song |
| `position` | `number` | New position in queue |

#### song.voteskip

```json
{
    "event": "song.voteskip",
    "payload": {
        "totalVotes": 3,
        "votesRequired": 5,
        "completed": false
    }
}
```

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `totalVotes` | `number` | Current number of votes |
| `votesRequired` | `number` | Votes needed to skip |
| `completed` | `boolean` | Whether the vote-skip succeeded |

#### song.previous

```json
{
    "event": "song.previous",
    "payload": {
        "song": {
            "_id": "507f1f77bcf86cd799439011",
            "videoId": "dQw4w9WgXcQ",
            "title": "Previous Song Title"
        }
    }
}
```

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `song` | `SongrequestSong` | The previous song being replayed |

### Settings Events

| Event | Description |
| ----- | ----------- |
| `settings.update` | Songrequest settings changed |

#### settings.update

The payload contains the full `SongrequestSettings` object.

## Data Types

### SongrequestSong

| Field | Type | Description |
| ----- | ---- | ----------- |
| `_id` | `string` | Unique song identifier |
| `videoId` | `string` | Video ID from provider |
| `title` | `string` | Song title |
| `duration` | `number` | Duration in seconds |
| `start` | `number` | Start time in seconds |
| `end` | `number` | End time in seconds |
| `channel` | `string` | Channel ID |
| `amount` | `number` | Tip amount (if tip request) |
| `message` | `string` | User message with request |
| `user` | `SongrequestUser` | User who requested the song |
| `promoted` | `boolean` | Whether song was promoted in queue |
| `skipped` | `boolean` | Whether song was skipped |
| `url` | `string` | Full URL to the video |
| `type` | `string` | Content type |
| `source` | `string` | Request source: `tip`, `bot`, or `site` |
| `approvedBy` | `string` | Username of approver (if moderated) |
| `provider` | `string` | Video provider (e.g., `youtube`) |
| `voteskips` | `array` | Array of users who voted to skip |
| `tags` | `array` | Video tags |
| `statistics.viewCount` | `number` | Video view count |
| `statistics.likeCount` | `number` | Video like count |
| `statistics.dislikeCount` | `number` | Video dislike count |
| `categoryId` | `number` | Video category ID |

### SongrequestUser

| Field | Type | Description |
| ----- | ---- | ----------- |
| `providerId` | `string` | Optional provider user ID |
| `username` | `string` | Username |
| `subscriber` | `boolean` | Optional subscriber status |

### SongrequestSettings

| Field | Type | Description |
| ----- | ---- | ----------- |
| `enabled` | `boolean` | Whether songrequests are enabled |
| `mode` | `string` | Mode: `free`, `tip`, or `combined` |
| `moderation` | `boolean` | Whether moderation is enabled |
| `player.delay` | `number` | Player delay in milliseconds |
| `limits.queueLimit` | `number` | Maximum queue size |
| `limits.maxDuration` | `number` | Maximum song duration |
| `limits.maxFreeDuration` | `number` | Maximum duration for free requests |
| `limits.users.free` | `number` | Free requests per user |
| `limits.users.paid` | `number` | Paid requests per user |
| `backupPlaylist.url` | `string` | Backup playlist URL |
| `backupPlaylist.prioritizeQueue` | `boolean` | Whether to prioritize queue over backup |
| `bannedUsers` | `array` | Array of banned users |
| `bot.cost` | `number` | Points cost for bot requests |
| `bot.subscriberDiscount` | `number` | Subscriber discount percentage |
| `bot.exemptUserLevel` | `number` | User level exempt from limits |
| `bot.minUserLevel` | `number` | Minimum user level to request |
| `bot.voteskip.enabled` | `boolean` | Whether vote-skip is enabled |
| `bot.voteskip.votesRequired` | `number` | Votes required to skip |
| `tips.prioritize` | `boolean` | Whether to prioritize tip requests |
| `tips.minAmount` | `number` | Minimum tip amount |
| `tips.mediashare.enabled` | `boolean` | Whether mediashare is enabled |
| `tips.mediashare.costPerSecond` | `number` | Cost per second for mediashare |
| `youtube.securityLevel` | `number` | YouTube security level |
| `youtube.musicOnly` | `boolean` | Whether to allow only music |
| `youtube.bannedTags` | `array` | Array of banned tags |
| `youtube.bannedVideos` | `array` | Array of banned video IDs |
| `youtube.streamGeoLocation` | `string` | Stream geo-location setting |

## Related Topics

- [Channel Overlay Action](./channel-overlay-action.md) - Overlay action events
- [Channel Activities](./channel-activities.md) - General channel activity events
- [Websockets](../index.md) - General information about the Astro WebSocket Gateway
