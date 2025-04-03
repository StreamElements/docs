---
id: command
title: Using the !command Meta-Command
sidebar_label: "!command"
description: "Learn how moderators use the StreamElements !command meta-command to add, edit, remove, and manage other custom chat commands."
tags:
  - chatbot
  - commands
  - moderation
  - custom commands
  - management
keywords:
- streamelements
- chatbot
- commands
- add command
- remove command
- edit command
- alias command
- show command
- command options
- streamelements add command
- custom commands
- manage commands
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!command` command is a meta-command used by moderators and the broadcaster to manage other custom chat commands within the StreamElements chatbot. It allows adding, removing, editing, viewing, and configuring options for custom commands directly via chat.

## Usage / Syntax

The general syntax uses subcommands:

```
!command <subcommand> [arguments...]
```

- **Alias**: `!cmd`
- **Permissions**: All subcommands are typically restricted to moderators and the broadcaster.

## Subcommands

-   **`add <command_name> <response_text>`**
    -   Adds a new custom command.
    -   Aliases: `+`
-   **`remove <command_name>`**
    -   Removes an existing custom command.
    -   Aliases: `-`, `delete`, `del`, `rem`
-   **`edit <command_name> <new_response_text>`**
    -   Updates the response text of an existing custom command.
    -   Aliases: `update`
-   **`alias <command_name>`**
    -   Lists the aliases associated with a specific command.
    -   Aliases: `aliases`
-   **`show <command_name>`**
    -   Displays the full details (response, configuration) of a specific command.
    -   Aliases: `debug`
-   **`options <command_name> [option flags...]`**
    -   Sets advanced options for a command (see Parameters section below).
    -   Aliases: `option`, `opt`, `opts`, `o`, `🔧`

## Parameters / Configuration / Options

This section details the flags used with the `!command options` subcommand:

| Option Flag | Value Type | Description                                        |
| :---------- | :--------- | :------------------------------------------------- |
| `-cd`       | `seconds`  | Global cooldown (how often the command can be used). |
| `-usercd`   | `seconds`  | Per-user cooldown (how often one user can use it). |
| `-cost`     | `points`   | Loyalty points required to use the command.      |
| `-level`    | `number`   | Minimum user level required (e.g., 100, 250, 500). |
| `-type`     | `say|whisper|reply` | How the bot responds (`say` is default).           |
| `-enable`   | (none)     | Enables the command.                               |
| `-disable`  | (none)     | Disables the command.                              |

- **Customization**: Command responses can include [StreamElements variables](https://docs.streamelements.com/docs/chatbot/variables-list) (e.g., `${user}`, `${channel}`, `${random.user}`) and functions (e.g., `${count}`, `${settitle}`).

## Examples

Add a new command `!socials`:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage='!command add !socials Follow me on Twitter @MyTwitter'
  outputMessage="@ModUser, successfully added command socials."
/>

Edit the `!socials` command:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage='!command edit !socials Check out Twitter @MyTwitter and Insta @MyInsta'
  outputMessage="@ModUser, successfully updated command socials."
/>

Set options for `!socials` (10s global cooldown, 30s user cooldown, cost 10 points):

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!command options !socials -cd 10 -usercd 30 -cost 10"
  outputMessage="@ModUser, successfully updated command socials."
/>

Show details for `!socials`:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!command show !socials"
  outputMessage="@ModUser, command socials: Check out Twitter @MyTwitter and Insta @MyInsta (Cooldown: 10s, User Cooldown: 30s, Cost: 10)"
/>

Remove the `!socials` command:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!command remove !socials"
  outputMessage="@ModUser, successfully removed command socials."
/>
