---
id: nuke
title: Using the !nuke Command for Phrase-Based Moderation
sidebar_label: "!nuke"
description: "Learn how moderators use the StreamElements !nuke command to timeout, ban, or delete messages containing specific phrases or regex patterns."
tags:
  - chatbot
  - commands
  - moderation
  - nuke
  - twitch
keywords:
- nuke command
- chat moderation
- timeout users
- ban users
- delete messages
- StreamElements chatbot
- phrase moderation
- regex moderation
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch"]} />

## Overview

The `!nuke` command is a powerful moderation tool allowing moderators to swiftly act upon multiple chat messages (and the users who sent them) based on matching text content or a regular expression. It scans recent chat history and applies a specified action (timeout, ban, delete).

## Usage / Syntax

Execute a nuke based on message content:

```
!nuke <lookback_seconds> <action> <match_string_or_regex>
```

## Parameters / Configuration / Options

| Parameter                 | Required | Description                                                                                                | Example         |
| :------------------------ | :------- | :--------------------------------------------------------------------------------------------------------- | :-------------- |
| `<lookback_seconds>`      | Required | How many seconds of chat history to scan (max `300`).                                                       | `120`           |
| `<action>`                | Required | The moderation action: `<timeout_seconds>` (e.g., `60`), `ban`, or `delete`.                               | `60` or `ban`   |
| `<match_string_or_regex>` | Required | The exact text phrase or a regular expression (enclosed in `/`, e.g., `/spam\d+/`) to match in messages. | `bad phrase`    |

- **Regex**: For regular expression matching, enclose the pattern in forward slashes (e.g., `!nuke 60 ban /regex[pP]attern/`).
- **Permissions**: This command is typically restricted to moderators and the broadcaster.
- **Aliases**: No default aliases, but custom ones can be created.

## Examples

Timeout users for 60s who sent "bad phrase" in the last 120s:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!nuke 120 60 bad phrase"
  outputMessage="@ModUser initiated a nuke. Checking messages from the last 120s... Nuked X users."
/>

Ban users who sent messages matching `/spam\d+/` in the last 300s:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!nuke 300 ban /spam\d+/"
  outputMessage="@ModUser initiated a nuke. Checking messages from the last 300s... Nuked Y users."
/>

Delete messages containing "discord link" from the last 30s:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!nuke 30 delete discord link"
  outputMessage="@ModUser initiated a nuke. Checking messages from the last 30s... Nuked Z messages."
/>

*Note: Exact bot responses may vary slightly.*

## Related Commands

- [`!nukeusername`](nukeusername.md): Nuke users based on username.

## Configuration

The `!nuke` command is available by default to moderators and the broadcaster. To change permissions, modify the command settings in your StreamElements dashboard.

## Aliases

There are no default aliases for the `!nuke` command. However, you can create custom aliases in your StreamElements dashboard if desired.
