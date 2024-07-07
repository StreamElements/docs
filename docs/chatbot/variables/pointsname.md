---
id: pointsname
title: $(pointsname) Variable
sidebar_label: $(pointsname)
description: Learn how to use the $(pointsname) variable in StreamElements Chatbot
keywords:
- chatbot
- variable
- loyalty points
- currency name
---

## $(pointsname)

### Description

The `$(pointsname)` variable displays the current name of your stream's loyalty currency. It's a dynamic way to reference your custom points system in chat messages or commands.

### Usage

Insert `$(pointsname)` into your chat message or command where you want the loyalty currency name to appear. The chatbot automatically replaces it with your actual loyalty points name.

### Examples

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

### Parameters

This variable doesn't accept any parameters.

### Related Commands/Variables

- [`$(user.points)`](user.md#userpoints): Displays the user's current loyalty points balance
- [`!addpoints`](../commands/default/addpoints.md): Adds points to a user's balance (mod/broadcaster only)
- [`!setpoints`](../commands/default/setpoints.md): Sets a user's points to a specific value (mod/broadcaster only)
