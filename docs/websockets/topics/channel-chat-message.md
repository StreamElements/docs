---
id: channel-chat-message
sidebar_label: "Channel Chat Message"
description: "Real-time updates about chat messages on a channel through WebSocket events"
tags:
- websockets
- chat
keywords:
- chat message
- chat status
- websocket events
---

# Channel Chat Message

## Overview

The `channel.chat.message` topic provides real-time updates about the chat messages on a channel. 
It delivers the raw message structure based on the platform you're connected to. 

## Usage

Subscribe to this topic to receive updates whenever a new chat message is sent.

## Examples

### Twitch

```json
{
  "id": "01JY3ZPEVXTM7RZ0X7FXP1STCT",
  "ts": "2025-06-19T11:37:58Z",
  "type": "message",
  "topic": "channel.chat.message",
  "room": "5f2de5dd9a474a2c2aaaaaaa",
  "data": {
    "broadcaster_user_id": "28050000",
    "broadcaster_user_login": "c4ldas",
    "broadcaster_user_name": "c4ldas",
    "source_broadcaster_user_id": "",
    "chatter_user_id": "28057703",
    "chatter_user_login": "c4ldas",
    "chatter_user_name": "c4ldas",
    "message_id": "caf9fb9a-a702-486e-92f1-0c60a3a28f38",
    "color": "#8AE020",
    "message": {
      "text": "Test message with emote <3",
      "fragments": [
        {
          "type": "text",
          "text": "Test message with emote ",
          "cheermote": null,
          "emote": null,
          "mention": null
        },
        {
          "type": "emote",
          "text": "<3",
          "cheermote": null,
          "emote": {
            "id": "555555584",
            "emote_set_id": "0",
            "owner_id": "twitch",
            "format": [
              "static"
            ]
          },
          "mention": null
        }
      ]
    },
    "cheer": null,
    "badges": [
      {
        "set_id": "broadcaster",
        "id": "1",
        "info": ""
      },
      {
        "set_id": "subscriber",
        "id": "3012",
        "info": "55"
      },
      {
        "set_id": "share-the-love",
        "id": "1",
        "info": ""
      }
    ],
    "message_type": "text",
    "reply": null,
    "channel_points_custom_reward_id": null
  }
}
```

### Youtube
```json
{
  "id": "01JY4DRAF64P642FF81DM8YRTX",
  "ts": "2025-06-19T15:43:39Z",
  "type": "message",
  "topic": "channel.chat.message",
  "room": "6769af8b2434ac4220000000",
  "data": {
    "authorDetails": {
      "channelId": "UCp9noRfodywhm2MX0000000",
      "channelUrl": "http://www.youtube.com/channel/UCp9noRfodywhm2MX0000000",
      "displayName": "c4ldas",
      "isChatModerator": true,
      "isVerified": false,
      "isChatOwner": false,
      "isChatSponsor": false,
      "profileImageUrl": "https://yt3.ggpht.com/abcdefghijklmnopqrstuvwxyz=s88-c-k-c0x00ffffff-no-rj"
    },
    "etag": "M4jEyJW51Hr_zgGgruIJW8l2Wnc",
    "id": "LCC.EhwKGkNJZW0yOTdwX1kwREZYSXUxZ0FkZ1BVdGRn",
    "kind": "youtube#liveChatMessage",
    "snippet": {
      "authorChannelId": "UCp9noRfodywhm2MX0000000",
      "displayMessage": "Test message with emote :face-blue-smiling:",
      "hasDisplayContent": true,
      "liveChatId": "KicKGFVDT2p0eVFPaTNNUjhYT3lzMFdOZmtKZxILbmpoSFRheU9VcXc",
      "publishedAt": "2025-06-19T15:43:36.563575Z",
      "textMessageDetails": {
        "messageText": "Test message with emote :face-blue-smiling:"
      },
      "type": "textMessageEvent"
    }
  }
}
```

### Kick
```json
{
  "id": "01JY3XJRP4Y3H571WZ5ZDNDEXK",
  "ts": "2025-06-19T11:01:00Z",
  "type": "message",
  "topic": "channel.chat.message",
  "room": "67a36a1f8a2abf0b4aaaaaaa",
  "data": {
    "message_id": "e7ff356c-9c59-4eb9-8f9e-9f77255caa9b",
    "broadcaster": {
      "user_id": 54670000,
      "username": "c4ldas",
      "is_verified": false,
      "profile_picture": "",
      "channel_id": 0,
      "channel_slug": "c4ldas"
    },
    "sender": {
      "user_id": 54670000,
      "username": "c4ldas",
      "is_verified": false,
      "profile_picture": "",
      "channel_id": 0,
      "channel_slug": "c4ldas"
    },
    "content": "Test message with emote [emote:1579033:emojiAstonished]",
    "emotes": null
  }
}
```
