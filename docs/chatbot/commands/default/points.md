---
id: points
sidebar_label: "!points"
description: "Learn how to use the !points command in StreamElements chatbot to check user loyalty points and leaderboard rank."
keywords:
- StreamElements
- chatbot
- commands
- loyalty
- points
- leaderboard
- rank
---

# !points

## Overview

The `!points` command allows users to check their loyalty points and leaderboard rank in the StreamElements chatbot system. This command can be used by viewers to see their own points or to check the points of other users in the chat.

## Usage

To use the `!points` command, type it in the chat followed by an optional username:

```
!points [username]
```

If no username is provided, the command will display the points and rank of the user who issued the command.

## Examples

### Checking your own points

```
!points
```

**Output:**
```
YourUsername has 2643 nammers and is rank 22658/22671 on the leaderboard.
```

### Checking another user's points

```
!points adeithe
```

**Output:**
```
adeithe has 0 nammers and is rank 22669/22671 on the leaderboard.
```

## Parameters

- `username` (optional): The username of the user whose points and rank you want to display.
  - If omitted, the command will show the points of the user who issued the command.
  - If the specified username is not found, it will default to the user who issued the command.

## Related Commands

- [`!top`](top.md): Displays the top users on the points leaderboard
- [`!givepoints`](givepoints.md): Allows users to give points to other users (if enabled)
- [`!roulette`](roulette.md): Lets users gamble their points (if enabled)

## Customization

Streamers can customize various aspects of the points system, including:

- The name of the currency (e.g., "nammers" in the example)
- The rate at which viewers earn points
- Special bonuses for subscribers
