---
id: quote
sidebar_label: "!quote"
description: "Learn how to use the !quote command in StreamElements chatbot to manage and display memorable quotes from your Twitch chat."
keywords:
- quote command
- add quote
- remove quote
- display quotes
- chat engagement
- StreamElements
- Twitch
---

# !quote

## Overview

The `!quote` command allows streamers and moderators to manage a collection of memorable quotes from their Twitch chat. This feature helps engage your community by saving and sharing their best moments.

## Usage

The basic syntax for the `!quote` command is:

```
!quote [subcommand] [arguments]
```

When used without any subcommands, `!quote` displays a random quote from the collection.

## Examples

1. Display a random quote:
   ```
   !quote
   ```

2. Add a new quote:
   ```
   !quote add This is a memorable moment from the stream!
   ```

3. Remove a quote:
   ```
   !quote remove 1
   ```

## Parameters

The `!quote` command has two main subcommands:

1. `add`: Adds a new quote to the collection.
2. `remove`: Removes an existing quote from the collection.

### Add Subcommand

- **Syntax**: `!quote add <quote_text>`
- **Description**: Adds a new quote to the collection.
- **Example**:
  ```
  !quote add That was an amazing play!
  ```
- **Output**:
  ```
  @Username, successfully added quote 1.
  ```

### Remove Subcommand

- **Syntax**: `!quote remove <quote_id>`
- **Description**: Removes an existing quote from the collection using its ID.
- **Example**:
  ```
  !quote remove 1
  ```
- **Output**:
  ```
  @Username, successfully removed quote 1.
  ```

## Aliases

- `!quote add` alias: `!quote +`
- `!quote remove` alias: `!quote -`
