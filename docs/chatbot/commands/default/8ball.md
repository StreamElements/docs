---
id: 8ball
title: Using the !8ball Command for Fortune-Telling Fun
sidebar_label: "!8ball"
description: "Engage your audience with the !8ball command that provides random fortune-telling responses to viewer questions, adding interactive fun to your streams."
tags:
  - chatbot
  - commands
  - interactive
  - engagement
keywords:
  - 8ball command
  - magic 8 ball chatbot
  - interactive stream commands
  - viewer engagement tools
  - fortune telling bot
---

import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';
import PlatformBadges from '@site/src/components/PlatformBadges';

# !8ball
<PlatformBadges supported={[ 'Twitch', 'YouTube' ]} />

## Overview

The `!8ball` command simulates a magic 8-ball toy, providing random responses to viewer questions. This interactive feature engages your audience and adds an element of unpredictability to your chat.

## Usage

Type `!8ball` followed by an optional question in the chat. While the question doesn't influence the random answer, including one provides context for the interaction.

```
!8ball [question]
```

## Parameters

| Parameter   | Required | Description                                                        | Example                  |
| :---------- | :------- | :----------------------------------------------------------------- | :----------------------- |
| `[question]`| No       | The optional question to ask the magic 8-ball.                    | `Will I win my next game?` |

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
