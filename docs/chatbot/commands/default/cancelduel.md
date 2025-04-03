---
id: cancelduel
title: Using the !cancelduel Command to Halt Ongoing Duels
sidebar_label: "!cancelduel"
description: "Learn how to use the !cancelduel command to instantly halt ongoing duels in your Twitch stream, enhancing viewer interaction management."
tags:
  - chatbot
  - commands
  - moderation
  - engagement
keywords:
- cancelduel
- cancel duel
- stop duel
- halt duel
- twitch duel
- chatbot duel
- moderator command
---
import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

# !cancelduel
<PlatformBadges supported={[ 'Twitch', 'YouTube' ]} />

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

<ExampleChatInteraction
  inputPersona="moderator"
  inputMessage="!cancelduel"
  outputMessage="@styler, darkoe denied your duel :("
/>

### Example 2: Canceling when no duel is active

<ExampleChatInteraction
  inputPersona="moderator"
  inputMessage="!cancelduel"
  outputMessage="There is no active duel to cancel."
/>

## Configuration

The `!cancelduel` command is part of the [duel module](mdc:chatbot/modules/duel.md). Ensure that this module is enabled in your StreamElements chatbot settings to use this command.

### Aliases

There are no default aliases for this command. However, you can create custom aliases in your StreamElements dashboard if desired.

### Customization

You can customize the response message for a canceled duel in your StreamElements dashboard. This allows you to tailor the message to fit your stream's tone and style.
