---
id: 7tvemotes
sidebar_label: "$(7tvemotes)"
description: "Lists active 7TV emotes in a Twitch channel. Learn how to use the $(7tvemotes) variable in StreamElements Chatbot commands."
tags:
- chatbot
- variable
- emotes
keywords:
- 7tvemotes
- 7tv
- emotes
- twitch
- streamelements
---

# $(7tvemotes) Variable

## Overview

The `$(7tvemotes)` variable is used to retrieve and display a list of active 7TV emotes in the current Twitch channel. This can be useful for creating commands that inform viewers about available emotes or for integrating emote information into other chatbot functionalities.

## Usage

To use this variable, simply include `$(7tvemotes)` in your StreamElements Chatbot command or message. When the command is triggered, the variable will be replaced with a space-separated list of active 7TV emotes.

## Examples

### Example 1: Basic Usage

Command:
```
!7tvemotes
```

Chatbot Response:
```
The active 7TV emotes in this channel are: $(7tvemotes)
```

Actual Output:
```
The active 7TV emotes in this channel are: LULW KEKW 5Head DinkDonk PogU
```

## Parameters

The `$(7tvemotes)` variable does not accept any parameters.

## Related Variables

- [$(bttvemotes)](bttvemotes): Lists active BetterTTV emotes in the channel
- [$(ffzemotes)](ffzemotes): Lists active FrankerFaceZ emotes in the channel

## FAQ

**Q: How often is the 7TV emote list updated?**

A: The 7TV emote list is cached for 48 hours. To update the list immediately, you can use the command `!emotes reload`.

**Q: Can I filter or limit the number of emotes displayed?**

A: The `$(7tvemotes)` variable doesn't have built-in filtering or limiting options. To manipulate the output, you'll need to use additional StreamElements variables or custom code.

**Q: What if there are no 7TV emotes in the channel?**

A: If there are no active 7TV emotes, the variable will return an empty string.
