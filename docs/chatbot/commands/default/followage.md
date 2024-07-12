---
id: followage
sidebar_label: "!followage"
description: "Learn how to use the !followage command in StreamElements chatbot to check how long a user has been following a Twitch channel."
keywords:
- followage
- followage command
- followage twitch
- check followage
- follower duration
- twitch followers
---

# !followage

## Overview

The `!followage` command allows users to check how long a specific user has been following a Twitch channel. This command is useful for both streamers and viewers to quickly see the duration of a user's follow status.

## Usage

To use the `!followage` command, type it in the chat followed by optional parameters:

```
!followage [username] [channel]
```

If no parameters are provided, the command will check the followage of the user who sent the command in the current channel.

## Parameters

- `username` (optional): The username of the user to check the followage of. If not provided, defaults to the user who sent the command.
- `channel` (optional): The channel to check the followage in. If not provided, defaults to the current channel.

## Examples

1. Check your own followage in the current channel:
   ```
   !followage
   ```

2. Check another user's followage in the current channel:
   ```
   !followage styler
   ```

3. Check a user's followage in a specific channel:
   ```
   !followage styler darkoe
   ```

## Example Output

For a user who is following the channel:
```
@Adeithe, styler has been following darkoe for 7 years 6 months 20 days 12 hours
```

For a user who is not following the channel:
```
@Adeithe, styler is not following darkoe
```

## Related Commands

- [`!uptime`](uptime.md): Check how long the current stream has been live
