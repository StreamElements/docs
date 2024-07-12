---
id: volume
sidebar_label: "!volume"
description: "Learn how to use the !volume command in StreamElements to control and check the volume of media requests in your Twitch or YouTube chat."
keywords:
- volume control
- media request
- StreamElements command
- chat command
- audio settings
---

# !volume

## Overview

The `!volume` command is used to control and check the volume level for media requests in your stream. This command allows you to adjust the volume of requested media content, ensuring a balanced audio experience for your viewers.

## Usage

The `!volume` command can be used in two ways:

1. To check the current volume level:
   ```
   !volume
   ```

2. To set a new volume level:
   ```
   !volume <level>
   ```

## Examples

1. Checking the current volume:
   ```
   !volume
   ```
   Output:
   ```
   Current volume is 50%
   ```

2. Setting a new volume level:
   ```
   !volume 75
   ```
   Output:
   ```
   Styler set the songrequest volume to 75
   ```

## Parameters

- `<level>` (optional): A number between 0 and 100 representing the desired volume level. If not provided, the command will return the current volume level.

## Related Commands

- [`!songrequest`](songrequest.md): Used to request songs or media content.
- [`!skip`](skip.md): Skips the currently playing media request.

## Configuration

The `!volume` command is typically available to moderators and the broadcaster by default. You can customize permissions in your StreamElements dashboard.
