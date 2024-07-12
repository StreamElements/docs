---
id: emotes
sidebar_label: "!emotes"
description: "Learn how to use the !emotes command in StreamElements chatbot to display and manage available emotes from various platforms."
keywords:
- emotes
- chatbot
- twitch
- bttv
- ffz
- 7tv
- streamelements
---

# !emotes

## Overview

The `!emotes` command allows streamers and moderators to display and manage available emotes in the chat. It supports emotes from multiple platforms, including Twitch, BTTV (BetterTTV), FFZ (FrankerFaceZ), and 7TV. This command helps viewers see available emotes and enables moderators to update the emote list.

## Usage

```
!emotes <platform>
!emotes reload
```

## Examples

1. Display 7TV emotes:
   ```
   !emotes 7tv
   ```
   Output:
   ```
   Active 7TV emotes in chat: GIGACHAD JUSSY Joel JoelPride Joeler Joelest OMEGALUL donowall mamamia modCheck peepoLeave
   ```

2. Reload all emotes:
   ```
   !emotes reload
   ```
   Output:
   ```
   @styler, successfully updated emotes :)
   ```

## Parameters

- `<platform>`: The platform to display emotes for. Available options are:
  - `twitch`: Display Twitch emotes
  - `bttv`: Display BetterTTV emotes
  - `ffz`: Display FrankerFaceZ emotes
  - `7tv`: Display 7TV emotes

- `reload`: Updates the emote list for all platforms

## Related Commands

- `!emotecount`: Counts the number of emotes in the chat

## Configuration

The `!emotes` command typically doesn't require additional configuration. However, ensure that your StreamElements chatbot is properly connected to your Twitch channel and has the necessary permissions to manage emotes.

## Aliases

There are no known aliases for the `!emotes` command.

## Customization

While the `!emotes` command itself cannot be customized, you can enhance your emote experience by:

1. Adding custom emotes to your channel through Twitch's interface
2. Enabling BTTV, FFZ, and 7TV integrations for your channel
3. Creating custom commands that use specific emotes for engagement

Remember to keep your emote list updated regularly to provide the best experience for your viewers.
