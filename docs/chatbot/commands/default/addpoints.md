---
id: addpoints
sidebar_label: "!addpoints"
description: "Learn how to use the !addpoints command to reward viewers with points in your StreamElements Chatbot loyalty program."
keywords:
- addpoints command
- StreamElements Chatbot
- loyalty program
- viewer rewards
- stream engagement
---

# !addpoints

## Overview

The `!addpoints` command allows moderators and streamers to add points to a viewer's account in the StreamElements Chatbot loyalty program. This feature helps enhance viewer engagement and rewards active participation in your stream.

## Usage

```
!addpoints <username> <amount>
```

Replace *username* with the viewer's name and *amount* with the number of points to add.

## Examples

1. Adding 1000 points to a user named "darkoe":

```
!addpoints darkoe 1000
```

2. Rewarding a helpful viewer with 500 points:

```
!addpoints helpfulviewer 500
```

## Parameters

- **username** (required): The name of the viewer receiving the points.
- **amount** (required): The number of points to add to the viewer's account.

## Related Commands

- [`!points`](points.md): Allows viewers to check their current point balance.
- [`!givepoints`](givepoints.md): Enables viewers to transfer points to each other.

## Configuration

To enable the `!addpoints` command:

1. Go to your StreamElements dashboard.
2. Navigate to the Chatbot settings.
3. Ensure the Loyalty System is activated.
4. Add `!addpoints` to the list of enabled commands.
