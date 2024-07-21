---
id: bttvemotes
sidebar_label: "$(bttvemotes)"
description: "Learn how to use the $(bttvemotes) variable to display active BetterTTV emotes in your Twitch channel."
tags:
- chatbot
- variable
- emotes
keywords:
- bttv
- emotes
- betterttv
- twitch
- chat
---

# $(bttvemotes) Variable

## Overview

The `$(bttvemotes)` variable lists all active BetterTTV (BTTV) emotes in your Twitch channel. This feature allows streamers and viewers to easily see which custom BTTV emotes are available for use in the chat.

## Usage

To use this variable, simply include `$(bttvemotes)` in your chatbot command or message. The variable doesn't require any additional parameters.

## Examples

### Example 1: Displaying BTTV Emotes

**Command:**
```
!bttvemotes
```

**Chatbot Response:**
```
The active BTTV emotes in this channel are: $(bttvemotes)
```

**Output:**
```
The active BTTV emotes in this channel are: LULW KEKW 5Head PogU
```

### Example 2: Creating a Custom Command

**Command:**
```
!command add !customemotes Our channel's BTTV emotes: $(bttvemotes)
```

**Usage:**
```
!customemotes
```

**Chatbot Response:**
```
Our channel's BTTV emotes: LULW KEKW 5Head PogU
```

## Parameters

This variable does not accept any parameters.

## Related Commands

- [$(ffzemotes)](ffzemotes): Lists active FrankerFaceZ (FFZ) emotes in the channel
- [$(7tvemotes)](7tvemotes): Lists active 7TV emotes in the channel

## FAQ

**Q: How often is the list of BTTV emotes updated?**
A: The BTTV emote list is cached for 48 hours. To update the list immediately, you can use the command `!emotes reload`.

**Q: Can I use this variable to check BTTV emotes in other channels?**
A: No, the `$(bttvemotes)` variable only shows BTTV emotes for the channel where the chatbot is active.

**Q: What if there are no BTTV emotes enabled in my channel?**
A: If no BTTV emotes are enabled, the variable will return an empty result.
