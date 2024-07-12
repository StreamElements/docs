---
id: module
sidebar_label: "!module"
description: "Learn how to enable or disable chatbot modules using the !module command in StreamElements chatbot. Control your chatbot's functionality with ease."
keywords:
- chatbot
- module
- enable
- disable
- StreamElements
- command
---

# !module

## Overview

The `!module` command allows streamers and moderators to enable or disable specific chatbot modules directly from the chat. This powerful tool helps you control the functionality of your StreamElements chatbot in real-time, tailoring its features to your stream's needs.

## Usage

To use the `!module` command, type it in chat followed by the module name and the desired action (enable or disable).

Syntax: `!module <module_name> <action>`

## Examples

1. Disabling the roulette module:
   ```
   !module roulette disable
   ```

2. Enabling the quotes module:
   ```
   !module quotes enable
   ```

## Parameters

- `<module_name>`: The name of the module you want to enable or disable (e.g., roulette, quotes, giveaway).
- `<action>`: The action to perform on the module. Use either `enable` to turn on the module or `disable` to turn it off.

## Related Commands

- [`!commands`](commands.md): Lists all available chatbot commands
- [`!permit`](permit.md): Grants temporary permission for users to post links

## Configuration

The `!module` command is available by default to the broadcaster and moderators. You can adjust command permissions in the StreamElements dashboard under the Chatbot > Commands section.
