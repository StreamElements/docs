---
id: quote
title: Using the !quote Command for Chat Quotes
sidebar_label: "!quote"
description: "Learn how to use the StreamElements !quote command to add, remove, and display memorable quotes from your stream chat."
tags:
  - chatbot
  - commands
  - fun
  - engagement
  - quotes
keywords:
- quote command
- add quote
- remove quote
- display quotes
- chat engagement
- StreamElements
- Twitch
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch", "YouTube"]} />

## Overview

The `!quote` command allows streamers and moderators to manage and display a collection of memorable quotes from chat. Viewers can typically use the base command to see a random quote, while moderators manage the collection.

## Usage / Syntax

The command works in two main ways:

1.  **Display a random quote:**
    ```
    !quote
    ```
2.  **Manage quotes (using subcommands):**
    ```
    !quote <subcommand> [arguments]
    ```

- **Permissions**: Displaying quotes is usually open to viewers. Adding/removing quotes (`add`, `remove` subcommands) is typically restricted to moderators and the broadcaster.

## Subcommands

-   **(Base Command)** `!quote`
    -   **Description**: Displays a random quote from the stored collection.
    -   **Permissions**: Usually Viewers+
-   `add <quote_text>`
    -   **Alias**: `!quote + <quote_text>`
    -   **Description**: Adds the provided text as a new quote to the collection.
    -   **Permissions**: Usually Moderators+
-   `remove <quote_id>`
    -   **Alias**: `!quote - <quote_id>`
    -   **Description**: Removes the quote with the specified ID number from the collection.
    -   **Permissions**: Usually Moderators+

## Examples

Display a random quote:

<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!quote"
  outputMessage="Quote #42: That was hilarious! (Added by ModUser)"
/>

Add a new quote:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!quote add What a great stream today!"
  outputMessage="@ModUser, successfully added quote #101."
/>

Remove a quote using its ID:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!quote remove 101"
  outputMessage="@ModUser, successfully removed quote #101."
/>

Add a new quote using the alias:

<ExampleChatInteraction
  inputPersona="moderator"
  inputUsernameOverride="ModUser"
  inputMessage="!quote + Another classic moment!"
  outputMessage="@ModUser, successfully added quote #102."
/>
