---
title: "$(settitle)"
description: "Change the stream title from chat with the $(settitle) variable in StreamElements Chatbot."
keywords:
  - StreamElements
  - stream title
  - Twitch
  - chatbot command
  - broadcast management
---

The `$(settitle)` variable allows you to change your stream title directly from chat. This powerful feature helps streamers quickly update their broadcast information without leaving the game or interrupting their content.

## Usage

To use the `$(settitle)` variable, include it followed by the new title you want to set. If your title contains spaces, be sure to enclose it in quotation marks.

```streamelements
$(settitle "<new title>")
```

## Examples

Here are two practical examples of how to use the `$(settitle)` variable:

1. Setting a simple title:

   ```streamelements
   $(settitle "Playing Fortnite with viewers!")
   ```

2. Using a more creative title:

   ```streamelements
   $(settitle "ＥＬＥＣＴＲＩＣ ＢＯＤＹＢＵＩＬＤＥＲ ＦＲＯＭ ＲＵＳＳＩＡ")
   ```

## Parameters

The `$(settitle)` variable accepts a single parameter:

- **New Title**: The text you want to set as your new stream title. Enclose it in quotation marks if it contains spaces.

## Related Variables

- [`$(title)`](/chatbot/variables/title/): Retrieves the current stream title
- [`$(game)`](/chatbot/variables/game/): Retrieves the current game or category of your stream

## FAQ

**Q: Why do I need to use quotation marks?**

A: Quotation marks are required if your title contains spaces. This ensures that the entire title is recognized as a single input.

**Q: What happens if there's an error?**

A: If something goes wrong while setting the title, you'll receive an error message in chat. For example:

```
something went wrong
```

If you encounter this error, double-check your syntax and try again. If the problem persists, ensure that your StreamElements bot has the necessary permissions to change your stream title.

**Q: Can I use emotes or special characters in my title?**

A: Yes, you can use emotes and special characters in your stream title, as demonstrated in the "ＥＬＥＣＴＲＩＣ ＢＯＤＹＢＵＩＬＤＥＲ" example. However, be mindful of platform-specific limitations on title length or character types.
