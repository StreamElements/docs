---
id: touser
sidebar_label: "$(touser)"
description: "Learn how to use the $(touser) variable in StreamElements Chatbot to display a user's name or a specified word in chat messages."
tags:
  - chatbot
  - variable
  - user interaction
keywords:
  - StreamElements
  - chatbot
  - touser
  - user mention
  - chat interaction
---

# $(touser) Variable

## Overview

The `$(touser)` variable is a versatile tool in the StreamElements Chatbot that allows you to mention users or display specific words in chat messages. It's particularly useful for creating personalized responses or directing messages to specific users.

## Usage

The `$(touser)` variable can be used in two ways:

1. Without input: It displays the name of the user who triggered the command.
2. With input: It displays the first word provided after the command.

The syntax for using this variable is:

```
$(touser)
```

or

```
$(touser) *word*
```

## Examples

### Example 1: Greeting the command user

Command:
```
!greet
```

Response:
```
Hello $(touser)! Welcome to the stream!
```

If user "StreamFan123" uses the command, the output will be:
```
Hello StreamFan123! Welcome to the stream!
```

### Example 2: Mentioning a specific user

Command:
```
!shoutout $(touser)
```

If a moderator types "!shoutout CoolStreamer", the output will be:
```
Hey everyone, check out CoolStreamer's channel! They're awesome!
```

## Parameters

The `$(touser)` variable accepts one optional parameter:

- **word**: The first word following the command. If provided, this word will be displayed instead of the command user's name.

## Related Commands

- [`$(sender)`](sender.md): Always displays the name of the user who triggered the command.
- [`$(args)`](args.md): Displays the first word after the command, or nothing if no word is provided.

## Aliases

`$(touser)` is an alias for `$(1|sender)`, which means it will display the first word after the command if available, or the sender's name if no word is provided.

## FAQ

**Q: What happens if I use $(touser) with multiple words after it?**
A: Only the first word after `$(touser)` will be used. Any additional words will be ignored.
