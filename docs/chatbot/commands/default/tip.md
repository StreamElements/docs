---
id: tip
title: Using the !tip Command for Donation Links
sidebar_label: "!tip"
description: "Learn how to use the !tip command in StreamElements chatbot to provide a tipping link for viewers."
tags:
  - chatbot
  - commands
  - donations
  - support
keywords:
- tip command
- tipping
- donations
- streamer support
- chatbot
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!tip` command provides a convenient way for viewers to access the streamer's tipping link directly in chat. When used, it generates a message containing a URL where viewers can make monetary contributions to support the streamer.

The link displayed is configured in the StreamElements Tipping Settings page.

## Usage / Syntax

To display the tip link, simply type the command in chat:

```
!tip
```

This command has no parameters.

## Examples

A viewer or moderator uses the command:

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!tip"
  outputMessage="You can Tip to [StreamerName] using this link [YourTipLink]"
/>

*Note: The exact text and the link depend on the streamer's configuration.*
