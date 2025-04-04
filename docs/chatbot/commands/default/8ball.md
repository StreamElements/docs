---
id: 8ball
sidebar_label: "!8ball"
description: "Ask the StreamElements chatbot a question with the !8ball command and receive a random, magic 8-ball style answer. Fun for viewer engagement."
tags:
  - chatbot
  - commands
  - fun
  - default
keywords:
  - 8ball command
  - magic 8 ball chatbot
  - interactive stream commands
  - viewer engagement tools
  - streamelements chatbot
  - fun command
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

# !8ball

<PlatformBadges supported={[ 'Twitch', 'YouTube', 'Trovo', 'Kick' ]} />

## Overview

The `!8ball` command simulates a magic 8-ball toy, providing random responses to viewer questions. This interactive feature engages your audience and adds an element of unpredictability to your chat.

## Usage

Type `!8ball` followed by a question in the chat. The chatbot will respond with a random fortune-like answer.

```streamelements
!8ball <question>
```
*The `<question>` part is optional and doesn't influence the random outcome.*

## Parameters / Configuration / Options

This command doesn't take specific parameters beyond the optional question text.

The `!8ball` command is part of the **8ball module**, which is typically enabled by default. You can customize the possible responses within the module settings on your StreamElements dashboard.

## Examples

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!8ball Will I win my next game?"
  outputMessage="It is decidedly so."
/>

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!8ball What should I have for dinner?"
  outputMessage="Cannot predict now."
/>

## Aliases

The following aliases can be used interchangeably with `!8ball`:

- `!eightball`
- `!69ball`
- `!420ball`
