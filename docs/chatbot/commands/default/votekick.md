---
id: votekick
title: Using the !votekick Command for Community Moderation
sidebar_label: "!votekick"
description: "Learn how to use StreamElements' !votekick command for community-driven chat moderation and temporary user removal."
tags:
  - chatbot
  - commands
  - moderation
  - community
keywords:
- StreamElements votekick command
- Twitch chat moderation
- community-driven moderation
- temporary chat ban
- viewer engagement
- stream interaction
- chat management
- StreamElements bot commands
- Twitch streaming tools
- chat voting system
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch"]} />

## Overview

The `!votekick` command initiates a community vote to temporarily remove a user from the chat (timeout). This feature allows viewers to participate in moderation by voting on whether a potentially disruptive user should be kicked. It requires the Votekick module to be enabled.

## Usage / Syntax

Initiate a votekick poll using the following syntax:

```
!votekick <username> [duration]
```

## Parameters / Configuration / Options

| Parameter  | Required | Description                                                                                         | Example      |
| :--------- | :------- | :-------------------------------------------------------------------------------------------------- | :----------- |
| `<username>` | Required | The username of the user to potentially kick.                                                       | `DisruptiveUser` |
| `[duration]` | Optional | The duration of the voting period (e.g., `30s`, `2m`, `1h`). Defaults to the module setting. | `5m`         |

- **Configuration**: The Votekick module has several settings configurable on the StreamElements dashboard (Bot -> Modules -> Votekick):
    - **Vote Duration**: Default time limit for the voting period.
    - **Minimum Votes**: Required number of votes for the poll to be valid.
    - **Vote Threshold**: Percentage of 'yes' votes needed to pass.
    - **Timeout Duration**: How long the user is timed out if the vote passes.
    - **Cooldown**: Time before another votekick can be started.
    - **Permissions**: Who can initiate a votekick (e.g., moderators, subscribers).

## Examples

Start a votekick for user "ChattyPerson" with the default vote duration:

<ExampleChatInteraction
  inputPersona="moderator" 
  inputUsernameOverride="ModUser"
  inputMessage="!votekick ChattyPerson"
  outputMessage="A votekick for ChattyPerson has started! Type !vote yes or !vote no to participate."
/>

Start a votekick for user "NoisyViewer" with a 5-minute voting duration:

<ExampleChatInteraction
  inputPersona="moderator" 
  inputUsernameOverride="ModUser"
  inputMessage="!votekick NoisyViewer 5m"
  outputMessage="A votekick for NoisyViewer has started (5m voting time)! Type !vote yes or !vote no to participate."
/>
