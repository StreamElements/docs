---
id: cancelduel
sidebar_label: "!cancelduel"
description: "Learn how to use the !cancelduel command to instantly halt ongoing duels in your Twitch stream, enhancing viewer interaction management."
keywords:
- cancelduel
- cancel duel
- stop duel
- halt duel
- twitch duel
- chatbot duel
- moderator command
---

# !cancelduel

## Overview

The `!cancelduel` command allows moderators to immediately stop an ongoing duel between viewers in your Twitch stream. This command is essential for managing viewer interactions and maintaining control over the chat environment.

## Usage

To cancel a duel, a moderator simply needs to type the command in the chat:

```
!cancelduel
```

This command doesn't require any additional arguments.

## Examples

### Example 1: Canceling a duel

Moderator input:
```
!cancelduel
```

Chatbot output:
```
@styler, darkoe denied your duel :(
```

### Example 2: Canceling when no duel is active

Moderator input:
```
!cancelduel
```

Chatbot output:
```
There is no active duel to cancel.
```

## Related Commands

- `!duel`: Initiates a duel between two viewers
- `!acceptduel`: Allows a challenged viewer to accept a duel

## Configuration

The `!cancelduel` command is part of the [duel module](../../modules/duel). Ensure that this module is enabled in your StreamElements chatbot settings to use this command.

## Aliases

There are no default aliases for this command. However, you can create custom aliases in your StreamElements dashboard if desired.

## Customization

You can customize the response message for a canceled duel in your StreamElements dashboard. This allows you to tailor the message to fit your stream's tone and style.
