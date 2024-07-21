---
id: quote
sidebar_label: "$(quote)"
description: "Learn how to use the $(quote) command in StreamElements Chatbot to display random or specific saved quotes in your Twitch chat."
tags:
  - chatbot
  - variable
keywords:
  - quotes
  - twitch quotes
  - streamelements quotes
  - chat commands
---

# $(quote)

## Overview

The `$(quote)` command allows you to display a randomly saved quote or a specific quote by ID in your Twitch chat using the StreamElements Chatbot.

## Usage

To use the `$(quote)` command, simply type it in your chat message or include it in a custom command. You can optionally specify a quote ID to display a specific quote.

## Examples

1. Display a random quote:
   ```
   $(quote)
   ```

2. Display a specific quote by ID:
   ```
   $(quote 3)
   ```

## Parameters

- `*quoteID*` (optional): The ID of the specific quote you want to display. If not provided, a random quote will be shown.

## Related Commands

- [`!quote`](../commands/default/quote): Adds a new quote to your collection

## FAQ

**Q: Can I use $(quote) in custom commands?**

A: Yes, you can include `$(quote)` in your custom commands to display quotes as part of the command's response.
