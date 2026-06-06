---
title: "$(touser)"
description: "Display the first word after a command, or fall back to the sender's name, with the $(touser) variable in StreamElements Chatbot."
keywords:
  - StreamElements
  - chatbot
  - touser
  - user mention
  - chat interaction
---

The `$(touser)` variable is a versatile tool in the StreamElements Chatbot that allows you to mention users or display specific words in chat messages. It's particularly useful for creating personalized responses or directing messages to specific users.

## Usage

The `$(touser)` variable can be used in two ways:

1. Without input: It displays the name of the user who triggered the command.
2. With input: It displays the first word provided after the command.

To use it, include `$(touser)` inside a command's response template:

```streamelements
!cmd add !greet Hello $(touser)! Welcome to the stream!
```

## Examples

### Example 1: Greeting the command user

Command:
```streamelements
!cmd add !greet Hello $(touser)! Welcome to the stream!
```

If user "StreamFan123" types `!greet` with no extra words, the output will be:
```
Hello StreamFan123! Welcome to the stream!
```

### Example 2: Mentioning a specific user

Command:
```streamelements
!cmd add !shoutout Hey everyone, check out $(touser)'s channel! They're awesome!
```

If a moderator types `!shoutout CoolStreamer`, the output will be:
```
Hey everyone, check out CoolStreamer's channel! They're awesome!
```

If they type `!shoutout` with no name, `$(touser)` falls back to the sender's name:
```
Hey everyone, check out ModUser's channel! They're awesome!
```

## Parameters

The `$(touser)` variable accepts one optional parameter:

- **word**: The first word following the command. If provided, this word will be displayed instead of the command user's name.

## Aliases

`$(touser)` is an alias for `$(1|sender)`, which means it will display the first word after the command if available, or the sender's name if no word is provided.

## Related Variables

- [`$(sender)`](/chatbot/variables/sender/): Always displays the name of the user who triggered the command.
- [`$(args)`](/chatbot/variables/args/): Displays the first word after the command, or nothing if no word is provided.

## FAQ

**Q: What happens if I use $(touser) with multiple words after it?**

A: Only the first word after the command will be used. Any additional words will be ignored.
