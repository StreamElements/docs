---
id: givepoints
sidebar_label: "!givepoints"
description: "Learn how to use the !givepoints command in StreamElements chatbot to transfer loyalty points between users."
keywords:
- givepoints command
- transfer points streamelements
- loyalty points
- chatbot commands
- stream currency
---

# !givepoints

## Overview

The `!givepoints` command allows users to transfer their loyalty points to another user in the chat. This feature is useful for rewarding viewers, running community events, or sharing points with friends.

## Usage

To use the `!givepoints` command, type it in chat followed by the recipient's username and the amount of points you want to transfer.

Syntax: `!givepoints <username> <amount>`

## Examples

1. Giving 1000 points to a user named "viewer123":
   ```
   !givepoints viewer123 1000
   ```

2. Transferring 500 points to a moderator named "mod_expert":
   ```
   !givepoints mod_expert 500
   ```

## Parameters

- `<username>`: The name of the user who will receive the points. Must be a valid username in the chat.
- `<amount>`: The number of points to transfer. Must be a positive integer and cannot exceed the sender's current point balance.

## Related Commands

- [`!points`](points.md): Check your current point balance
- [`!top`](top.md): View the leaderboard of users with the most points

## Aliases

The `!givepoints` command can also be used with the following aliases:
- `!give`
- `!transfer`

## Error Handling

The command includes built-in error handling for common issues:

1. Invalid username:
   ```
   @Sender, That doesn't look like a valid username Keepo
   ```

2. Insufficient points:
   ```
   @Sender, You only have 420 points.
   ```

3. User not found in database:
   ```
   @Sender, I couldn't find that user in the database :/
   ```

