---
id: timer
sidebar_label: "!timer"
description: "Manage chat timers using the !timer command in StreamElements chatbot"
keywords:
- timer command
- enable timer
- disable timer
- manage timers
- StreamElements chatbot
---

# !timer

## Overview

The `!timer` command allows you to manage timers in your StreamElements chatbot. Use this command to enable or disable specific timers in your chat.

## Usage

```
!timer <action> <timer_name>
```

## Parameters

- `<action>`: The action to perform on the timer. Valid options are:
  - `enable`: Turn on the specified timer
  - `disable`: Turn off the specified timer
- `<timer_name>`: The name of the timer you want to enable or disable

## Examples

1. Enabling a timer:
   ```
   !timer enable social
   ```
   Output: `social timer has been enabled`

2. Disabling a timer:
   ```
   !timer disable giveaway
   ```
   Output: `giveaway timer has been disabled`

## Related Commands

- [`!command`](command.md): Check out the `!command` command for more information.
