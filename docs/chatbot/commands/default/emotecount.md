---
id: emotecount
sidebar_label: "!emotecount"
description: "Use the !emotecount command to display the usage frequency of specific emotes in your Twitch chat."
keywords:
- emotecount
- emote usage
- chat interaction
- Twitch emotes
- StreamElements chatbot
---

# !emotecount

## Overview

The `!emotecount` command allows streamers and viewers to check how many times a specific emote has been used in the chat. This feature can be useful for tracking popular emotes, running emote-based contests, or simply adding a fun interactive element to your stream.

## Usage

To use the `!emotecount` command, type it in chat followed by the name of the emote you want to check:

```
!emotecount <emote_name>
```

Replace *emote_name* with the actual name of the emote you're interested in.

## Examples

Here are two practical examples of using the `!emotecount` command:

1. Checking the usage of a popular Twitch emote:

   ```
   !emotecount Kappa
   ```

   Possible response:
   ```
   @User The emote Kappa has been used 3742 times! PogChamp
   ```

2. Checking the usage of a custom channel emote:

   ```
   !emotecount MyAwesomeEmote
   ```

   Possible response:
   ```
   @User The emote MyAwesomeEmote has been used 156 times! PogChamp
   ```

## Parameters

The `!emotecount` command takes one parameter:

- `emote_name`: The name of the emote you want to check. This can be a global Twitch emote, a channel-specific emote, or an emote from a third-party service that your channel uses.

## Related Commands

- [`!emotes`](emotes.md): Shows the available emotes in the chat.

## Error Handling

If you encounter an error when using the `!emotecount` command, you may see one of the following messages:

1. When the emote is not found:
   ```
   @User The emote XD was not found. NotLikeThis
   ```

2. When there's a problem retrieving the emote count:
   ```
   @User Unable to retrieve the emote count. Please try again later. NotLikeThis
   ```

If you consistently encounter errors, make sure you're spelling the emote name correctly and that it's available in your channel or on Twitch globally.
