---
id: accountage
title: Using the !accountage Command to Check Twitch Account Age
sidebar_label: "!accountage"
description: "Check the age of any Twitch account using the !accountage command"
tags:
  - chatbot
  - commands
  - moderation
keywords:
- accountage
- account age
- Twitch account
- user verification
- moderation
---
import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

# !accountage
<PlatformBadges supported={[ 'Twitch' ]} />

## Overview

The `!accountage` command allows users to check the age of a Twitch account. This tool is particularly useful for moderators to verify user authenticity or determine eligibility for certain privileges based on account age.

## Usage

To use the command, type `!accountage` followed by an optional username:

```
!accountage [username]
```

If no username is provided, the command will check the account age of the user who issued the command.

## Parameters

| Parameter    | Required | Description                                                                                                           | Example  |
| :----------- | :------- | :-------------------------------------------------------------------------------------------------------------------- | :------- |
| `[username]` | No       | The Twitch username of the account to check. If omitted, checks the account age of the user issuing the command. | `styler` |

## Examples

### Check a specific user's account age
<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!accountage styler"
  outputMessage="@Styler, styler was created 8 years 2 months 28 days 7 hours ago."
/>

### Check your own account age
<ExampleChatInteraction
  inputPersona="viewer"
  inputUsernameOverride="YourUsername" // Placeholder for the actual user
  inputMessage="!accountage"
  outputMessage="@YourUsername, your account was created 3 years 5 months 12 days 4 hours ago."
/>

## Configuration

The `!accountage` command is available by default and does not require additional configuration.

### Aliases

The `!accountage` command has the following default aliases:
- `!accage`
- `!created`

These aliases can be used interchangeably with the main command.

