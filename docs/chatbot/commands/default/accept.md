---
id: accept
title: Using the !accept Command to Respond to Duels
sidebar_label: "!accept"
description: "Use the !accept command to quickly respond to duel requests in your Twitch chat."
tags:
  - chatbot
  - commands
  - engagement
keywords:
- accept
- command
- duel
- invite
- Twitch
- StreamElements
- chatbot
---
import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

# !accept
<PlatformBadges supported={[ 'Twitch', 'YouTube' ]} />

## Overview

The `!accept` command allows users to accept duel requests initiated by other viewers in the Twitch chat.

## Usage

To accept a pending duel invitation, type the command in the chat:

```
!accept
```

This command does not require any additional parameters.

## Examples

### Accepting a Duel

First, User A challenges User B:
```
!duel UserB 10
```
Then, User B accepts:
<ExampleChatInteraction
  inputPersona="viewer"
  inputUsernameOverride="UserB"
  inputMessage="!accept"
  outputMessage="UserB won the Duel vs UserA PogChamp UserB won 10 points."
/>
