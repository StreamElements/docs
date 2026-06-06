---
title: "$(ffzemotes)"
description: "Display the list of active FrankerFaceZ emotes in a Twitch channel with the $(ffzemotes) variable in StreamElements Chatbot commands."
keywords:
  - ffz
  - emotes
  - frankerfacez
  - twitch
  - chat
---

The `$(ffzemotes)` variable is used to display a list of active FrankerFaceZ (FFZ) emotes in your Twitch channel. This can be helpful for viewers to see which custom emotes are available for use in the chat.

## Usage

To use this variable, simply include `$(ffzemotes)` in your chat message or command response. The chatbot will automatically replace it with a list of active FFZ emotes.

## Examples

### Example 1: Displaying FFZ Emotes

**Command:**
```streamelements
!ffzemotes
```

**Chatbot Response:**
```streamelements
The active FFZ emotes in this channel are: $(ffzemotes)
```

**Output:**
```
The active FFZ emotes in this channel are: LULW KEKW 5Head PogU
```

### Example 2: Creating a Custom Command

**Command:**
```streamelements
!command add !customemotes Our channel's FFZ emotes: $(ffzemotes)
```

**Usage:**
```streamelements
!customemotes
```

**Chatbot Response:**
```
Our channel's FFZ emotes: LULW KEKW 5Head PogU
```

## Related Variables

- [$(bttvemotes)](/chatbot/variables/bttvemotes/): Lists active BetterTTV emotes in the channel
- [$(7tvemotes)](/chatbot/variables/7tvemotes/): Lists active 7TV emotes in the channel

## FAQ

**Q: How often is the FFZ emote list updated?**

A: The FFZ emote list is cached for 48 hours. To update the list immediately, you can use the command `!emotes reload`.

**Q: Can I filter or limit the number of emotes displayed?**

A: The `$(ffzemotes)` variable doesn't have built-in filtering or limiting options. To manipulate the output, you'll need to use additional StreamElements variables or custom code.

**Q: What if there are no FFZ emotes in the channel?**

A: If there are no active FFZ emotes, the variable will return an empty string.
