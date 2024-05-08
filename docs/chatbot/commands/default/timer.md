---
id: timer
description: Learn how to use the !timer command to enable or disable timers in your StreamElements chatbot. Easily manage your chat timers with this simple command.
tags:
  - chatbot
  - commands
keywords:
  - timer command
  - enable timer
  - disable timer
  - manage timers
---

# !timer

The `!timer` command is used to manage timers in the chat. It can enable or disable specific timers.

### Arguments

- `action` (required), The action to perform on the timer. Valid options are `enable` and `disable`.
- `timer_name` (required), The name of the timer to enable or disable.

### Usage

```
!timer <enable/disable> <timer_name> 
```

### Example Input

```
!timer enable social
```

### Example Output

```
social timer has been disabled 
```
