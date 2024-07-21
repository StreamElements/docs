---
id: ffzemotes
sidebar_label: "$(ffzemotes)"
description: "Learn how to use the $(ffzemotes) variable to display active FrankerFaceZ emotes in your Twitch channel."
tags:
  - chatbot
  - variable
  - emotes
keywords:
  - ffz
  - emotes
  - frankerfacez
  - twitch
  - chat
---

# $(ffzemotes) Variable

## Overview

The `$(ffzemotes)` variable is used to display a list of active FrankerFaceZ (FFZ) emotes in your Twitch channel. This can be helpful for viewers to see which custom emotes are available for use in the chat.

## Usage

To use this variable, simply include `$(ffzemotes)` in your chat message or command response. The chatbot will automatically replace it with a list of active FFZ emotes.

## Examples

### Example 1: Displaying FFZ Emotes

**Command:**
```
!ffzemotes
```

**Chatbot Response:**
```
The active FFZ emotes in this channel are: $(ffzemotes)
```

**Output:**
```
The active FFZ emotes in this channel are: LULW KEKW 5Head PogU
```

### Example 2: Creating a Custom Command

**Command:**
```
!command add !customemotes Our channel's FFZ emotes: $(ffzemotes)
```

**Usage:**
```
!customemotes
```

**Chatbot Response:**
```
Our channel's FFZ emotes: LULW KEKW 5Head PogU
```

## Parameters

This variable does not accept any parameters.

## Related Variables

- [$(bttvemotes)](bttvemotes): Lists active BetterTTV emotes in the channel
- [$(7tvemotes)](7tvemotes): Lists active 7TV emotes in the channel

## FAQ

**Q: How often is the FFZ emote list updated?**

A: The FFZ emote list is cached for 48 hours. To update the list immediately, you can use the command `!emotes reload`.

**Q: Can I filter or limit the number of emotes displayed?**

A: The `$(ffzemotes)` variable doesn't have built-in filtering or limiting options. To manipulate the output, you'll need to use additional StreamElements variables or custom code.

**Q: What if there are no FFZ emotes in the channel?**

A: If there are no active FFZ emotes, the variable will return an empty string.
