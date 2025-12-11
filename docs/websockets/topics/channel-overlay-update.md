---
id: channel-overlay-update
sidebar_label: "Overlay Update"
description: "Real-time updates when overlay configurations change via WebSocket"
tags:
- websocket
- channel
- overlay
keywords:
- StreamElements
- WebSocket
- overlay update
- overlay configuration
- real-time
---

# Overlay Update

## Topic

`channel.overlay.update`

## Description

This event is triggered when an overlay's configuration is modified, such as when widgets are added, removed, or updated in the overlay editor. It provides the complete updated overlay configuration.

## Usage

Subscribe to this topic to receive notifications when overlays are modified, allowing you to sync overlay changes in real-time.

## Payload

```json
{
    "id": "01KC4840ZZ1BAMK5R2V9QX9BNA",
    "ts": "2025-12-10T13:44:57Z",
    "type": "message",
    "topic": "channel.overlay.update",
    "room": "577c0455f9a31ea72a36b2b3",
    "data": {
        "settings": {
            "width": 1920,
            "height": 1080,
            "name": "1080p"
        },
        "_id": "6920838231b91e5bdbdd473f",
        "channel": "577c0455f9a31ea72a36b2b3",
        "type": "regular",
        "name": "xddd",
        "preview": "https://cdn.streamelements.com/assets/dashboard/my-overlays/overlay-default-preview-4.jpg",
        "widgets": [
            {
                "id": 1,
                "group": null,
                "version": 2.2,
                "type": "se-widget-alert-box",
                "name": null,
                "visible": true,
                "locked": false,
                "listeners": {
                    "tip-latest": true,
                    "subscriber-latest": true,
                    "follower-latest": true,
                    "cheer-latest": true,
                    "raid-latest": true,
                    "purchase-latest": true
                },
                "css": {
                    "z-index": 2,
                    "width": "733.20px",
                    "height": "617.84px",
                    "opacity": 1,
                    "top": "484.81px",
                    "left": "239.48px"
                },
                "variables": {
                    "animation": {
                        "in": "fadeIn",
                        "inDuration": 1,
                        "out": "fadeOut",
                        "outDuration": 1
                    },
                    "follower": { "...": "alert configuration" },
                    "subscriber": { "...": "alert configuration" },
                    "tip": { "...": "alert configuration" },
                    "raid": { "...": "alert configuration" },
                    "cheer": { "...": "alert configuration" },
                    "merch": { "...": "alert configuration" },
                    "purchase": { "...": "alert configuration" },
                    "charityCampaignDonation": { "...": "alert configuration" }
                },
                "provider": "twitch"
            },
            {
                "id": 2,
                "group": null,
                "type": "text",
                "name": null,
                "visible": true,
                "locked": false,
                "css": {
                    "z-index": 3,
                    "width": "auto",
                    "height": "auto",
                    "opacity": 1,
                    "top": "133.44px",
                    "left": "39.48px"
                },
                "text": {
                    "type": "text",
                    "value": "Your text goes here",
                    "enableShadow": true,
                    "css": {
                        "font-family": "Nunito",
                        "font-size": 24,
                        "color": "#fff",
                        "font-weight": "bold"
                    }
                },
                "provider": "twitch"
            }
        ],
        "mobile": false,
        "campaign": false,
        "favorite": false,
        "createdAt": "2025-11-21T15:21:38.443Z",
        "updatedAt": "2025-12-10T13:44:57.072Z"
    }
}
```

### Parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `data.settings` | `object` | Overlay canvas settings (dimensions, preset name) |
| `data.settings.width` | `number` | Canvas width in pixels |
| `data.settings.height` | `number` | Canvas height in pixels |
| `data._id` | `string` | Unique overlay identifier |
| `data.channel` | `string` | Channel ID the overlay belongs to |
| `data.type` | `string` | Overlay type (`regular`, `campaign`, etc.) |
| `data.name` | `string` | User-defined overlay name |
| `data.preview` | `string` | URL to the overlay preview image |
| `data.widgets` | `array` | Array of widget configurations |
| `data.mobile` | `boolean` | Whether this is a mobile overlay |
| `data.campaign` | `boolean` | Whether this is a campaign overlay |
| `data.favorite` | `boolean` | Whether the overlay is marked as favorite |
| `data.createdAt` | `string` | ISO 8601 timestamp of creation |
| `data.updatedAt` | `string` | ISO 8601 timestamp of last update |

## Related Topics

- [Channel Overlay Action](./channel-overlay-action.md) - Overlay action events
- [Websockets](../index.md) - General information about the Astro WebSocket Gateway
