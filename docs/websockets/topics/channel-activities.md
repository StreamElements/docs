---
sidebar_position: 1
---

# Activites

## Topic

`channel.activities`

## Description

This event is fired when the channel received a new activity.

#### Payload

```json
{
    "id": "01HPPM2TQ6CCMFQGHEN8MM1NN0",
    "ts": "2024-02-15T14:52:42Z",
    "type": "message",
    "topic": "channel.activities",
    "data": {
        "type": "follow",
        "provider": "twitch",
        "channel": "6183c7d4ebc632abbf809890",
        "data": {
            "username": "jtv",
            "displayName": "jtv",
            "providerId": "14027",
            "avatar": "https://static-cdn.jtvnw.net/user-default-pictures-uv/13e5fa74-defa-11e9-809c-784f43822e80-profile_image-300x300.png"
        },
        "_id": "65ce2539b1585c5f909a91e1",
        "createdAt": "2024-02-15T14:52:41.608Z",
        "updatedAt": "2024-02-15T14:52:41.608Z",
        "activityId": "65ce2539b1585c5f909a91e1",
        "sessionEventsCount": 6
    }
}
```
