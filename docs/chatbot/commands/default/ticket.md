---
id: ticket
sidebar_label: "!ticket"
description: "Learn how to use the !ticket command in StreamElements chatbot to purchase tickets for giveaways and participate in raffles."
keywords:
- StreamElements
- chatbot
- commands
- ticket
- giveaways
- raffles
- loyalty
---

# !ticket

## Overview

The `!ticket` command allows viewers to purchase tickets for ongoing giveaways in a stream. This command is part of the StreamElements chatbot loyalty system and enables viewers to participate in raffles and win prizes.

## Usage

To use the `!ticket` command, type it in the chat followed by the number of tickets you want to purchase. If no number is specified, it defaults to buying one ticket.

```
!ticket <number_of_tickets>
```

## Examples

1. Buying a single ticket:
   ```
   !ticket
   ```
   Output: `@Username, you successfully bought 1 ticket!`

2. Buying multiple tickets:
   ```
   !ticket 5
   ```
   Output: `@Username, you successfully bought 5 tickets!`

## Parameters

- `<number_of_tickets>` (optional): The number of tickets you want to purchase. If not specified, defaults to 1.

## Related Commands

- [`!giveaway`](giveaway.md): Used by moderators to start or manage giveaways
- [`!points`](points.md): Check your current loyalty points balance

## Aliases

- `!enter`: Can be used interchangeably with `!ticket`

## Configuration

Streamers can configure the cost of tickets and the maximum number of tickets a viewer can purchase. This is typically done through the StreamElements dashboard.

