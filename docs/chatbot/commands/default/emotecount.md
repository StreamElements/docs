---
id: emotecount
title: Using the !emotecount Command for Emote Usage Stats
sidebar_label: "!emotecount"
description: "Learn how the StreamElements !emotecount command displays the usage frequency of a specific emote in chat."
tags:
  - chatbot
  - commands
  - emotes
  - stats
  - fun
keywords:
- emotecount
- emote usage
- chat interaction
- Twitch emotes
- StreamElements chatbot
- emote stats
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!emotecount` command allows viewers to check how many times a specific emote has been used in the chat since tracking began. This requires the Emote Counter module to be enabled.

## Usage / Syntax

Check the usage count for an emote:

```
!emotecount <emote_name>
```

## Parameters / Configuration / Options

| Parameter      | Required | Description                                             | Example |
| :------------- | :------- | :------------------------------------------------------ | :------ |
| `<emote_name>` | Required | The exact name of the emote (case-sensitive usually). | `Kappa` |

- **Permissions**: Typically available to all viewers.
- **Error Messages**: The bot will respond if the emote is not found or if there's an issue retrieving the count.

## Examples

Checking the usage count for "Kappa":

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!emotecount Kappa"
  outputMessage="@ViewerName The emote Kappa has been used 3742 times! PogChamp"
/>

Checking the usage count for a custom emote "myChannelPog":

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!emotecount myChannelPog"
  outputMessage="@ViewerName The emote myChannelPog has been used 156 times! PogChamp"
/>

Checking an unknown emote:

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!emotecount UnknownEmote"
  outputMessage="@ViewerName The emote UnknownEmote was not found. NotLikeThis"
/>

*Note: The exact response messages might be customizable.*

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
