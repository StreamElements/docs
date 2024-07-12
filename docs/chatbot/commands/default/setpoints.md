---
id: setpoints
sidebar_label: "!setpoints"
description: "Learn how to use the !setpoints command to set loyalty points for users in your Twitch chat using StreamElements chatbot."
keywords:
- setpoints command
- set user points
- loyalty points
- twitch chatbot
- streamelements
- channel points
---

# !setpoints

## Overview

The `!setpoints` command allows streamers and moderators to set a specific number of loyalty points for a user in the chat. This command is useful for managing loyalty programs, rewarding viewers, or correcting point balances.

:::caution
Using this command will overwrite the user's current point balance.
:::

## Usage

```
!setpoints <username> <points>
```

## Parameters

- `<username>`: The username of the viewer whose points you want to set.
- `<points>`: The new amount of points to assign to the user.

## Examples

1. Setting a user's points to 1000:
   ```
   !setpoints darkoe 1000
   ```
   Output:
   ```
   @Streamer, set darkoe's points to 1000!
   ```

2. Resetting a user's points to 0:
   ```
   !setpoints viewer123 0
   ```
   Output:
   ```
   @Streamer, set viewer123's points to 0!
   ```

## Related Commands

- [`!addpoints`](addpoints.md): Add points to a user's balance without overwriting
- [`!points`](points.md): Check a user's current point balance

## Configuration

The `!setpoints` command is typically restricted to the streamer and moderators. Ensure you have the proper permissions set up in your StreamElements chatbot configuration.
