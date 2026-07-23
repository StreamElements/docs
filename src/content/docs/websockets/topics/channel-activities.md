---
title: Activities
description: "Real-time updates for general channel activities like superchats, follows, tips etc."
wsTopic: 'channel.activities'
scope: 'activities:read'
---

This event is fired when the channel receives a new activity.

## Payload

| Parameter | Type | Description |
| --- | --- | --- |
| `data.type` | `string` | The type of the activity (see [Activity Types](#activity-types)) |
| `data.provider` | `string` | Where the activity originated from (see [Providers](#providers)) |
| `data.channel` | `string` | Channel ID |
| `data.data.username` | `string` | The username of the user who triggered the activity OR the user the activity applies to (e.g. gifting a sub to a user) |
| `data.data.displayName` | `string` | Display name of the sender |
| `data.data.providerId` | `string` | User ID assigned by the provider |
| `data.data.avatar` | `string` | Avatar URL of the user |

### Activity Types

The possible activity `type`s are:
- `event`
- `follow`
- `tip`
- `communityGiftPurchase`
- `channelPointsRedemption`
- `sponsor`
- `superchat`
- `host`
- `raid`
- `subscriber`
- `cheer`
- `cheerPurchase`
- `charityCampaignDonation`
- `redemption`
- `merch`
- `fan`
- `supporter`
- `follower`
- `stars`
- `share`
- `videolike`
- `elixir`
- `purchase`
- `hypetrainStart`
- `hypetrainProgress`
- `hypetrainEnd`
- `giveaway`
- `sponsorship`
- `sponsorshipPassive`

### Providers

`provider` can be one of:
- `twitch`
- `youtube`
- `represent`
- `fourthwall`
- `lunar`
- `lilithgames`
- `x`
- `StreamElements`
- `grabtap`
- `kick`

## Example

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

## Related

- [Tips](/websockets/topics/channel-tips) - Tip/donation events
- [Session Update](/websockets/topics/channel-session-update) - Individual session data updates
- [Websockets](/websockets) - General information about the Astro Websocket Gateway
