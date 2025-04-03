---
id: nukeusername
title: Using the !nukeusername Command for User-Specific Moderation
sidebar_label: "!nukeusername"
description: "Learn how moderators use the StreamElements !nukeusername command to check a specific user's recent messages and timeout/ban/delete if they match a phrase or regex."
tags:
  - chatbot
  - commands
  - moderation
  - nuke
  - twitch
keywords:
- nukeusername
- chatbot command
- user activity moderation
- timeout user
- ban user
- delete user messages
- regex matching
- user moderation
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch"]} />

## Overview

The `!nukeusername` command is a targeted moderation tool. It allows moderators to scan a *specific user's* recent chat messages for a matching phrase or pattern and apply an action (timeout, ban, delete) only to that user if a match is found within the specified time window.

## Usage / Syntax

Execute a nuke based on a specific user's message content:

```
!nukeusername <username> <lookback_seconds> <action> <match_string_or_regex>
```

## Parameters / Configuration / Options

| Parameter                 | Required | Description                                                                                                  | Example         |
| :------------------------ | :------- | :----------------------------------------------------------------------------------------------------------- | :-------------- |
| `<username>`              | Required | The username of the specific viewer whose messages to scan.                                                  | `ProblemUser`   |
| `<lookback_seconds>`      | Required | How many seconds of the *target user's* chat history to scan (max `300`).                                  | `180`           |
| `<action>`                | Required | The moderation action: `<timeout_seconds>` (e.g., `60`), `ban`, or `delete`.                                 | `ban`           |
| `<match_string_or_regex>` | Required | The exact text phrase or a regular expression (enclosed in `/`) to match in the target user's messages. | `bad link`      |

- **Regex**: For regular expression matching, enclose the pattern in forward slashes (e.g., `!nukeusername User 60 ban /regex[pP]attern/`).
- **Permissions**: This command is typically restricted to moderators and the broadcaster.
- **Aliases**: No default aliases, but custom ones can be created.

## Examples

Timeout "SpamUser" for 60s if they said "test" in the last minute:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!nukeusername SpamUser 60 60 test"
  outputMessage="@ModUser initiated a user nuke on SpamUser. Checking messages... User timed out for 60s."
/>

Ban "BadActor" if they sent messages matching a regex in the last 2 minutes:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!nukeusername BadActor 120 ban /\d{3}-\d{3}-\d{4}/"
  outputMessage="@ModUser initiated a user nuke on BadActor. Checking messages... User banned."
/>

Delete messages from "LinkSpammer" containing "badsite.com" from the last 5 minutes:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!nukeusername LinkSpammer 300 delete badsite.com"
  outputMessage="@ModUser initiated a user nuke on LinkSpammer. Checking messages... Deleted X messages."
/>

*Note: Exact bot responses may vary slightly.*

## Related Commands

- [`!nuke`](nuke.md): Nuke users based on message content

## Configuration

The `!nukeusername` command is available to moderators and the broadcaster by default. Custom permissions can be set up in the StreamElements dashboard.

## Aliases

There are no default aliases for this command. Custom aliases can be created in the StreamElements dashboard.
