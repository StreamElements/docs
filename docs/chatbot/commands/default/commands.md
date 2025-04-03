---
id: commands
title: Using the !commands Command for Commands List Link
sidebar_label: "!commands"
description: "Learn how the StreamElements !commands command provides a link to the channel's public commands page."
tags:
  - chatbot
  - commands
  - help
  - list
keywords:
- StreamElements
- chatbot
- custom commands
- commands list
- streamer commands
- Twitch commands
- YouTube commands
- bot commands
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!commands` command provides viewers with a direct link to the channel's public StreamElements commands page. This page lists all enabled custom and default commands for the channel.

## Usage / Syntax

To display the link to the commands page, type:

```
!commands
```

## Parameters / Configuration / Options

- **Parameters**: This command does not take any parameters.

## Examples

Displaying the link to the commands page:

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!commands"
  outputMessage="https://streamelements.com/[ChannelName]/commands"
/>
