---
sidebar_position: 2
---
# Overlay Session Update

## Topic

`channel.session.update`

## Description

This event is fired when the channel received a new activity.

#### Payload

```json
{
    "id": "01HPPM2TQ6CCMFQGHENAPFR4ZE",
    "ts": "2024-02-15T14:52:42Z",
    "type": "message",
    "topic": "channel.session.updates",
    "data": {
        "name": "follower-goal",
        "provider": "twitch",
        "data": {
            "amount": 70,
            "activityId": "65ce2539b1585c5f909a91e1"
        }
    }
}
```
