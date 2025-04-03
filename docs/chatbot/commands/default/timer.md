---
id: timer
title: Using the !timer Command to Create Timed Chat Messages
sidebar_label: "!timer"
description: "Learn how to use the !timer command to create and manage automated messages that appear in your stream chat at regular intervals."
tags:
  - chatbot
  - commands
  - automation
  - moderation
keywords:
  - timer command
  - automated messages
  - chat automation
  - streamelements
  - timed announcements
  - stream management
---

import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';
import PlatformBadges from '@site/src/components/PlatformBadges';

# !timer
<PlatformBadges supported={[ 'Twitch', 'YouTube' ]} />

## Overview

The `!timer` command allows streamers and moderators to create, manage, and delete automated messages that appear in chat at regular intervals. Timers are useful for providing periodic reminders, promoting social media, or sharing important information without manual intervention.

## Usage

The `!timer` command uses subcommands to manage timers:

- **Add a new timer:**
  ```
  !timer add <name> <minutes> <message>
  ```
- **Edit an existing timer's message:**
  ```
  !timer edit <name> <message>
  ```
- **Remove an existing timer:**
  ```
  !timer remove <name>
  ```
- **List all active timers:**
  ```
  !timer list
  ```

## Parameters

### `!timer add`

| Parameter | Required | Description                                          | Example                 |
| :-------- | :------- | :--------------------------------------------------- | :---------------------- |
| `name`    | Yes      | A unique name to identify the timer.               | `social`                |
| `minutes` | Yes      | The interval in minutes between message postings.    | `15`                    |
| `message` | Yes      | The content of the message the timer will post.    | `Follow on Twitter!` |

### `!timer edit`

| Parameter | Required | Description                                       | Example                 |
| :-------- | :------- | :------------------------------------------------ | :---------------------- |
| `name`    | Yes      | The name of the timer to edit.                  | `social`                |
| `message` | Yes      | The new message content for the timer.          | `Follow us everywhere!` |

### `!timer remove`

| Parameter | Required | Description                          | Example  |
| :-------- | :------- | :----------------------------------- | :------- |
| `name`    | Yes      | The name of the timer to remove.     | `social` |

### `!timer list`

This subcommand takes no parameters.

## Examples

### Add a new timer
<ExampleChatInteraction
  inputPersona="moderator"
  inputMessage="!timer add social 15 Follow us on Twitter at @StreamChannel!"
  outputMessage="Timer 'social' has been added successfully."
/>

### List active timers
<ExampleChatInteraction
  inputPersona="moderator"
  inputMessage="!timer list"
  outputMessage="Active timers: social (15min), discord (30min), subscribe (20min)"
/>
