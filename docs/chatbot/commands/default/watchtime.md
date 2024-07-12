---
id: watchtime
sidebar_label: "!watchtime"
description: "Display viewer watch time with the !watchtime command to enhance engagement on your Twitch stream."
keywords:
- watchtime command
- Twitch chatbot commands
- viewer engagement
- stream interaction
- loyalty tracking
---

# !watchtime

## Overview

The `!watchtime` command allows viewers to check how long they've been watching the stream. This feature helps enhance viewer engagement and loyalty by providing a tangible measure of their time spent in the channel.

:::warning
The `!watchtime` command only works when the loyalty feature is enabled in your StreamElements dashboard.
:::

## Usage

To use the `!watchtime` command, simply type it in the chat. You can also check the watch time of other users by including their username.

```
!watchtime [username]
```

## Examples

1. Check your own watch time:
   ```
   !watchtime
   ```
   Output:
   ```
   Styler has spent 20 mins watching styler
   ```

2. Check another user's watch time:
   ```
   !watchtime ChatEnthusiast
   ```
   Output:
   ```
   ChatEnthusiast has spent 2 hours and 15 mins watching styler
   ```

## Parameters

- `username` (optional): The name of the user whose watch time you want to check. If omitted, the command will display the watch time of the user who issued the command.

## Related Commands

- [`!points`](points.md): Check your loyalty points balance
- [`!top`](top.md): View the top viewers by watch time

## Configuration

To enable the `!watchtime` command:

1. Go to your StreamElements dashboard
2. Navigate to the Loyalty section
3. Enable the Loyalty feature
4. Ensure the `!watchtime` command is activated in the Commands list

