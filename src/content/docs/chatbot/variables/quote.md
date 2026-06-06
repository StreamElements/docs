---
title: "$(quote)"
description: "Display a random or specific saved quote in Twitch chat with the $(quote) variable in StreamElements Chatbot."
keywords:
  - quotes
  - twitch quotes
  - streamelements quotes
  - chat commands
---

The `$(quote)` variable allows you to display a randomly saved quote or a specific quote by ID in your Twitch chat using the StreamElements Chatbot.

## Usage

To use the `$(quote)` variable, embed it in a custom command. You can optionally specify a quote ID to display a specific quote.

```streamelements
!cmd add !randomquote $(quote)
```

## Examples

1. Display a random quote:

   ```streamelements
   $(quote)
   ```

2. Display a specific quote by ID:

   ```streamelements
   $(quote 3)
   ```

## Parameters

- `quote_id` (optional): The ID of the specific quote you want to display. If not provided, a random quote will be shown.

## Related Commands

- [`!quote`](/chatbot/commands/default/quote/): Adds a new quote to your collection

## FAQ

**Q: Can I use $(quote) in custom commands?**

A: Yes, you can include `$(quote)` in your custom commands to display quotes as part of the command's response.
