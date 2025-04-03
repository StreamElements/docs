---
id: permit
title: Using the !permit Command to Allow Links
sidebar_label: "!permit"
description: "Learn how to use the !permit command in StreamElements chatbot to temporarily allow viewers to post links without getting timed out."
tags:
  - chatbot
  - commands
  - moderation
  - link protection
keywords:
- permit command
- prevent timeout
- moderation commands
- chatbot commands
- StreamElements
- allow links
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!permit` command is a moderation tool that temporarily allows a specific viewer to post links or engage in other behavior that might normally trigger an automatic timeout by the bot's link or spam filters. This is useful for granting temporary exceptions.

## Usage / Syntax

To permit a viewer, use the following syntax:

```
!permit <username> [duration_seconds]
```

## Parameters / Configuration / Options

| Parameter            | Required | Description                                                             | Example |
| :------------------- | :------- | :---------------------------------------------------------------------- | :------ |
| `<username>`         | Required | The username of the viewer to grant the permit to.                      | `ViewerName` |
| `[duration_seconds]` | Optional | The duration of the permit in seconds. Defaults to `60` if omitted. | `120`   |

- **Permissions**: This command is typically restricted to moderators and the broadcaster.
- **Aliases**: No default aliases, but custom ones can be created.

## Examples

Permit a user for the default duration (60 seconds):

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!permit ViewerName"
  outputMessage="@ViewerName, you will not get timed out for the next 60 seconds."
/>

Permit a user for a custom duration (120 seconds):

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!permit AnotherViewer 120"
  outputMessage="@AnotherViewer, you will not get timed out for the next 120 seconds."
/>
