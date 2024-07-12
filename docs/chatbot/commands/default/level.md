---
id: level
sidebar_label: "!level"
description: "Learn how to use the !level command in StreamElements chatbot to view and set user levels for chat moderation and customization."
keywords:
- StreamElements
- chatbot
- commands
- level
- user levels
- moderation
- customization
---

# !level

## Overview

The `!level` command allows streamers and moderators to view and set user levels in the chat. User levels can be used to customize permissions, create special commands, or manage chat moderation more effectively.

## Usage

```
!level <username>
!level <username> <value>
!level <username> reset
```

## Examples

1. Check a user's level:
   ```
   !level darkoe
   ```
   Output: `@styler, the level of darkoe is 100`

2. Set a user's level:
   ```
   !level darkoe 500
   ```
   Output: `@styler, successfully set darkoe's level to 500, you can reset it with !level darkoe reset`

3. Reset a user's level:
   ```
   !level darkoe reset
   ```
   Output: `@styler, successfully reset darkoe's level to 100 Kappa`

## Parameters

- `<username>` (required): The username of the person whose level you want to check or set.
- `<value>` (optional): The level value to set for the user.
- `reset` (optional): Resets the user's level to the default value of 100.

## User Level Values

- `100`: Normal user (default value)
- `250`: Subscriber (automatically set for subscribers)
- `300`: Regular
- `400`: VIP (automatically set for VIPs)
- `500`: Moderator (automatically set for moderators)
- `1000`: Supermod

**Note:** Although subscriber, VIP, and moderator levels are automatically set, you can manually assign these levels to specific users. This is useful for creating commands accessible only to subscribers while allowing specific non-subscribers to use them.

## Configuration

The `!level` command doesn't require additional configuration. User levels are automatically assigned based on their roles in the chat (subscriber, VIP, moderator). However, you can manually set or change levels using the command.

## Customization

You can use user levels to create custom commands or features in your stream. For example:

- Create commands that only users with a certain level or higher can use
- Set up automatic responses or actions based on a user's level
- Implement a loyalty system using levels

## Related Commands

- [`!permit`](permit.md): Temporarily allow a user to post links (often used in conjunction with user levels)

## Error Messages

If the command is used incorrectly, you may see these error messages:

```
@styler, usage !level USER 500/reset
@styler, valid levels are: 100 (pleb), 250 (sub), 300 (regular), 400 (VIP), 500 (mod), 1000 (supermod)
```

These messages help guide users to correct usage of the `!level` command.
