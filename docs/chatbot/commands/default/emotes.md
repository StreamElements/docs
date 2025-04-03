---
id: emotes
title: Using the !emotes Command to List/Reload Emotes
sidebar_label: "!emotes"
description: "Learn how the StreamElements !emotes command displays available channel emotes (Twitch, BTTV, FFZ, 7TV) or reloads the emote cache."
tags:
  - chatbot
  - commands
  - emotes
  - help
  - bttv
  - ffz
  - 7tv
keywords:
- emotes
- chatbot
- twitch
- bttv
- ffz
- 7tv
- streamelements
- list emotes
- reload emotes
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!emotes` command serves two purposes: it can list the available emotes from a specific platform (Twitch, BTTV, FFZ, 7TV) currently active in the channel, or it can trigger a reload of the bot's emote cache.

## Usage / Syntax

The command has two forms:

1.  **List emotes for a platform:**
    ```
    !emotes <platform>
    ```
2.  **Reload the emote cache:**
    ```
    !emotes reload
    ```

## Parameters / Configuration / Options

| Parameter    | Required (One Of) | Description                                                                                                     | Example |
| :----------- | :---------------- | :-------------------------------------------------------------------------------------------------------------- | :------ |
| `<platform>` | Yes               | Which platform's emotes to list: `twitch`, `bttv`, `ffz`, or `7tv`.                                             | `7tv`   |
| `reload`     | Yes               | The keyword `reload` to refresh the bot's knowledge of available emotes (e.g., after adding/removing emotes). | `reload`|

- **Permissions**: Listing emotes (`!emotes <platform>`) is typically available to viewers. Reloading (`!emotes reload`) is usually restricted to moderators and the broadcaster.
- **Configuration**: For platform-specific emotes (BTTV, FFZ, 7TV) to be listed, the respective service must be enabled and configured for the channel.
- **Aliases**: No default aliases.

## Examples

List available 7TV emotes for the channel:

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!emotes 7tv"
  outputMessage="Active 7TV emotes in chat: GIGACHAD JUSSY Joel JoelPride Joeler Joelest OMEGALUL donowall mamamia modCheck peepoLeave"
/>

Reload the bot's emote cache:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!emotes reload"
  outputMessage="@ModUser, successfully updated emotes :)"
/>

## Related Commands

- `!emotecount`: Counts the number of emotes in the chat

## Customization

While the `!emotes` command itself cannot be customized, you can enhance your emote experience by:

1. Adding custom emotes to your channel through Twitch's interface
2. Enabling BTTV, FFZ, and 7TV integrations for your channel
3. Creating custom commands that use specific emotes for engagement

Remember to keep your emote list updated regularly to provide the best experience for your viewers.
