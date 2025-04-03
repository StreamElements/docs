---
id: vanish
title: Using the !vanish Command to Hide User Messages
sidebar_label: "!vanish"
description: "Learn how to use the !vanish command to temporarily hide all your recent messages in chat, helping maintain a clean stream experience."
tags:
  - chatbot
  - commands
  - moderation
  - chat-tools
keywords:
  - vanish command
  - hide messages
  - streamelements commands
  - chat moderation
  - clean chat
---

import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';
import PlatformBadges from '@site/src/components/PlatformBadges';

# !vanish
<PlatformBadges supported={[ 'Twitch', 'YouTube' ]} />

## Overview

The `!vanish` command allows users to temporarily hide all of their recent messages in the chat. This is useful for viewers who want to correct a mistake or remove potentially disruptive messages before moderators need to intervene.

## Usage

To use the `!vanish` command, simply type it in chat:

```
!vanish
```

## Examples

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!vanish"
  outputMessage="All of Viewer's recent messages have been removed from chat."
/>

