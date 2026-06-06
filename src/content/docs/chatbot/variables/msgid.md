---
title: "$(msgid)"
description: "Output the unique message ID of the message that triggered a command with the $(msgid) variable in StreamElements Chatbot."
keywords:
  - StreamElements
  - chatbot
  - message ID
  - command trigger
  - unique identifier
---

The `$(msgid)` variable is a powerful tool in the StreamElements Chatbot that outputs the unique message ID of the message that triggered a command. This can be useful for tracking specific messages, debugging, or creating advanced custom functionality in your stream.

## Usage

To use the `$(msgid)` variable, simply include it in your command response or custom script. The chatbot will automatically replace it with the actual message ID when the command is triggered.

## Examples

Basic usage in a command response:

```streamelements
!cmd add !messageid The ID of the message that triggered this command is: $(msgid)
```

## Related Variables

- [`$(user)`](/chatbot/variables/user/): Returns the username of the person who triggered the command
- [`$(channel)`](/chatbot/variables/channel/): Returns the name of the channel where the command was triggered

## FAQ

**Q: What format does the message ID use?**

A: The message ID is typically a UUID (Universally Unique Identifier) in the format of a string of letters and numbers separated by hyphens, such as `bcc9b4bc-566d-4f14-a57d-a86c1c3196f8`.
