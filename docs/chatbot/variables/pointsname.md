---
id: pointsname
sidebar_label: "$(pointsname)"
description: "Learn how to use the $(pointsname) variable in StreamElements Chatbot to display your custom loyalty points name in chat messages and commands."
tags:
- variables
- loyalty points
keywords:
- chatbot
- variable
- loyalty points
- currency name
- StreamElements
---

# $(pointsname) Variable

## Overview

The `$(pointsname)` variable is a dynamic way to display the current name of your stream's loyalty currency in chat messages or commands. It automatically updates to reflect your custom points system name, providing a flexible solution for referencing your loyalty program.

## Usage

Insert `$(pointsname)` into your chat messages or commands where you want the loyalty currency name to appear. The chatbot will automatically replace it with your actual loyalty points name.

## Examples

1. Informing viewers about earning points:

```
Earn more $(pointsname) by watching the stream!
```

Output (assuming your currency is named "memecoins"):
```
Earn more memecoins by watching the stream!
```

2. Creating a custom command to check points balance:

```
!cmd add points Your current $(pointsname) balance is $(user.points).
```

Output (for a user with 500 points):
```
Your current memecoins balance is 500.
```

## Parameters

This variable doesn't accept any parameters.

## Related Commands/Variables

- [`$(user.points)`](user.md#userpoints): Displays the user's current loyalty points balance
- [`!addpoints`](../commands/default/addpoints.md): Adds points to a user's balance (mod/broadcaster only)
- [`!setpoints`](../commands/default/setpoints.md): Sets a user's points to a specific value (mod/broadcaster only)

## FAQ

**Q: How do I change my loyalty points name?**
A: You can change your loyalty points name in the StreamElements dashboard under the Loyalty tab. The `$(pointsname)` variable will automatically update to reflect the new name.

**Q: Can I use $(pointsname) in custom commands?**
A: Yes, you can use `$(pointsname)` in any custom command or chat message where you want to display your loyalty points name.
