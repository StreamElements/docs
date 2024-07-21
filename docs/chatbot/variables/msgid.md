---
id: msgid
sidebar_label: "$(msgid)"
description: "Learn how to use the $(msgid) variable to retrieve unique message IDs in StreamElements Chatbot commands."
tags:
  - chatbot
  - variable
  - message id
keywords:
  - StreamElements
  - chatbot
  - message ID
  - command trigger
  - unique identifier
---

# $(msgid) Variable

## Overview

The `$(msgid)` variable is a powerful tool in the StreamElements Chatbot that outputs the unique message ID of the message that triggered a command. This can be useful for tracking specific messages, debugging, or creating advanced custom functionality in your stream.

## Usage

To use the `$(msgid)` variable, simply include it in your command response or custom script. The chatbot will automatically replace it with the actual message ID when the command is triggered.

## Examples

Here are two practical examples of how you might use the `$(msgid)` variable:

1. Basic usage in a command response:

```
!messageid
Bot: The ID of the message that triggered this command is: $(msgid)
```

## Parameters

The `$(msgid)` variable does not accept any parameters. It simply returns the message ID of the triggering message.

## Related Commands

- [`$(user)`](user.md): Returns the username of the person who triggered the command
- [`$(channel)`](channel.md): Returns the name of the channel where the command was triggered

## FAQ

**Q: What format does the message ID use?**

A: The message ID is typically a UUID (Universally Unique Identifier) in the format of a string of letters and numbers separated by hyphens, such as `bcc9b4bc-566d-4f14-a57d-a86c1c3196f8`.
