---
id: duel
sidebar_label: "!duel"
description: "Learn how to use the !duel command in StreamElements chatbot to challenge other users to a points duel."
keywords:
- duel
- chatbot
- command
- loyalty points
- StreamElements
---

# !duel

## Overview

The `!duel` command allows users to challenge each other to a duel, wagering their loyalty points. It's an engaging way to interact with viewers and add excitement to your stream.

## Usage

To initiate a duel, use the following syntax:

```
!duel <username> <points>
```

## Examples

1. Challenging a user to a duel for 1000 points:
   ```
   !duel darkoe 1000
   ```
   Output:
   ```
   @darkoe, @Styler wants to duel you for 1000 points, you can !accept or !deny within 2 minutes
   ```

2. Attempting to duel yourself:
   ```
   !duel Styler 500
   ```
   Output:
   ```
   @Styler, you can't duel yourself Kappa
   ```

## Parameters

- `<username>`: The name of the user you want to challenge to a duel.
- `<points>`: The number of loyalty points you want to wager in the duel.

## Related Commands

- [`!accept`](accept.md): Used by the challenged user to accept a duel.
- [`!deny`](deny.md): Used by the challenged user to decline a duel.
- [`!points`](points.md): Check your current loyalty points balance.
