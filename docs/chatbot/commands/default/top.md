---
id: top
sidebar_label: "!top"
description: "Learn how to use the !top command in StreamElements chatbot to display leaderboards for points and watchtime."
keywords:
- top
- StreamElements
- chatbot
- commands
- loyalty
- leaderboard
- points
- watchtime
---

# !top

## Overview

The `!top` command is part of the StreamElements loyalty system. It allows users to view leaderboards for various metrics, including points and watchtime.

## Usage

To use the `!top` command, type `!top` followed by the desired leaderboard type in chat.

```
!top <type>
```

## Parameters

- `<type>` (optional): The type of leaderboard to display. Valid options are:
  - `points`: Shows the top users based on loyalty points
  - `alltime`: Displays the all-time leaderboard
  - `online`: Shows the top users based on online watchtime
  - `offline`: Displays the top users based on offline watchtime

If no type is provided, the command will show the available options.

## Examples

1. To view the top users based on points:

```
!top points
```

Example output:
```
Top 5 nammers: 1. darkoe (2147483647), 2. nuuls (101404825), 3. streamelements (512211), 4. vinicin229 (28000), 5. zzzrapha (14000)
```

2. To view the available leaderboard types:

```
!top
```

Example output:
```
Available Commands: !top points/alltime/online/offline. You can see the nammers Leaderboard here: https://streamelements.com/styler/leaderboard
```

## Related Commands

- [`!points`](points.md): Check your current loyalty points
- [`!watchtime`](watchtime.md): View your total watchtime

