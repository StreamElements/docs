---
id: accept
sidebar_label: "!accept"
description: "Use the !accept command to accept pending duel challenges initiated with the !duel command in StreamElements chatbot."
tags:
  - chatbot
  - commands
  - duel
  - game
  - default
keywords:
  - accept command
  - duel command
  - chatbot games
  - streamelements chatbot
  - accept challenge
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import MultiChatInteraction from '@site/src/components/MultiChatInteraction';

# !accept

<PlatformBadges supported={[ 'Twitch' ]} />

## Overview

The `!accept` command allows users to accept pending duel requests initiated by the [`!duel`](duel.md) command.

## Usage / Syntax

To use the `!accept` command, simply type it in the chat when you have a pending duel request.

```streamelements
!accept
```

## Parameters / Configuration / Options

This command does not take any parameters.

The `!accept` command is part of the **Duel module**. This module must be enabled in your StreamElements chatbot settings for the command to function.

## Examples

<MultiChatInteraction
    messages={[
        {
            username: "Challenger",
            message: "!duel TargetUser 100"
        },
        {
            username: 'StreamElements',
            message: '@TargetUser, @Challenger wants to duel you for 10 points, you can !accept or !deny within 2 minutes',
            userColor: '#5B99FF',
            badges: ['partner', 'moderator'],
            isBot: true
        },
        {
            username: "TargetUser",
            message: "!accept"
        },
        { 
            username: 'StreamElements',
            message: 'TargetUser won the Duel vs Challenger PogChamp',
            userColor: '#5B99FF',
            badges: ['partner', 'moderator'],
            isBot: true
        }
    ]}
/>

## Related Commands

- [`!duel`](duel.md): Initiate a duel with another user.
- [`!cancelduel`](cancelduel.md): Cancel an outgoing duel request.
- [`!deny`](deny.md): Deny an incoming duel request.
