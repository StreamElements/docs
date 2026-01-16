---
id: quotes
sidebar_label: "Quotes"
description: "Learn how to use the StreamElements Quotes system to save and share memorable moments from your stream with your community."
tags:
  - chatbot
  - quotes
  - stream engagement
  - community
keywords:
  - StreamElements quotes
  - bot quotes
  - stream quotes
  - memorable moments
  - Twitch quotes
  - chat quotes
  - quote system
---

# Quotes

The Quotes system allows you and your moderators to save memorable moments, funny sayings, or notable events from your streams. Viewers can then recall these quotes using chat commands, creating a fun way to relive past highlights with your community.

You can manage your quotes in the [StreamElements Dashboard](https://streamelements.com/dashboard/bot/quotes).

## Dashboard Overview

The Bot Quotes page provides a centralized location to manage all your saved quotes:

- **Search**: Filter quotes by text content
- **Add Quote**: Manually add new quotes via the dashboard
- **Quote List**: View all quotes with their ID, text, creation date, associated game, and who added them
- **Actions**: Edit or delete individual quotes

## Adding Quotes

### Via Chat

Moderators and the broadcaster can add quotes directly from chat using the `!quote add` command:

```
!quote add Never gonna give you up!
```

The bot will confirm the quote was added and assign it a unique ID.

### Via Dashboard

1. Navigate to [Bot Quotes](https://streamelements.com/dashboard/bot/quotes) in your dashboard
2. Click the **+ ADD QUOTE** button
3. Enter the quote text
4. Click **Save**

The quote will be saved with the current timestamp.

## Displaying Quotes

### Random Quote

Viewers can display a random quote from your collection:

```
!quote
```

### Specific Quote

To display a specific quote by its ID:

```
!quote 42
```

## Managing Quotes

### Editing Quotes

To edit an existing quote:

1. Go to the [Bot Quotes](https://streamelements.com/dashboard/bot/quotes) page
2. Find the quote you want to edit
3. Click the pencil icon in the Actions column
4. Update the quote text
5. Save your changes

### Removing Quotes

**Via Chat (Moderator+):**

```
!quote remove 42
```

**Via Dashboard:**

1. Find the quote in the list
2. Click the trash icon in the Actions column
3. Confirm the deletion

## Chat Command Reference

| Command | Description | Permission |
|---------|-------------|------------|
| `!quote` | Display a random quote | Everyone |
| `!quote <id>` | Display a specific quote | Everyone |
| `!quote add <text>` | Add a new quote | Moderator+ |
| `!quote remove <id>` | Remove a quote | Moderator+ |

### Command Aliases

- `!quote add` can also be written as `!quote +`
- `!quote remove` can also be written as `!quote -`

## Quote Variables

You can use quote variables in custom commands and timers. For detailed documentation, see the [$(quote) variable reference](../variables/quote.md).

- `$(quote)` - Returns a random quote
- `$(quote <id>)` - Returns a specific quote by ID

### Example Custom Command

Create a command that displays a random quote with custom formatting:

```
!cmd add randomquote Here's a memorable moment: $(quote)
```

## Configuration

The permission levels for adding and removing quotes can be adjusted under **Chatbot** -> **Chat Commands** -> **Default Commands** in your [StreamElements Dashboard](https://streamelements.com/dashboard/bot/commands/default).
