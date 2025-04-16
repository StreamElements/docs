---
sidebar_position: 1
description: "Real-time updates for general channel activities like superchats, follows, tips etc."
tags:
- websocket
- channel
- activities
---

# Channel Activites

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
        "type": "follow", // the type of the activity
        "provider": "twitch", // where the activity originated from
        "channel": "6183c7d4ebc632abbf809890",
        "data": {
            "username": "jtv", // the username of the user who triggered the activity OR the user the activity applies to (e.g. gifting a sub to a user)
            "displayName": "jtv", // display name of the sender
            "providerId": "14027", // user ID assigned by the provider
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

`provider` can be one of:
- `twitch`
- `youtube`
- `represent`
- `fourthwall`
- `lunar`
- `lilithgames`
- `x`
- `StreamElements`
- `kick`
