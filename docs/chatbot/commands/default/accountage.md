---
id: accountage
sidebar_label: "!accountage"
description: "Check the age of any Twitch account using the !accountage command"
keywords:
- accountage
- account age
- Twitch account
- user verification
- moderation
---

# !accountage

## Overview

The `!accountage` command allows users to check the age of a Twitch account. This tool is particularly useful for moderators to verify user authenticity or determine eligibility for certain privileges based on account age.

## Usage

To use the command, type `!accountage` followed by an optional username:

```
!accountage [username]
```

If no username is provided, the command will check the account age of the user who issued the command.

## Examples

1. Check the age of a specific user's account:
   ```
   !accountage styler
   ```
   Output:
   ```
   @Styler, styler was created 8 years 2 months 28 days 7 hours ago.
   ```

2. Check your own account age:
   ```
   !accountage
   ```
   Output:
   ```
   @YourUsername, your account was created 3 years 5 months 12 days 4 hours ago.
   ```

## Parameters

- `username` (optional): The Twitch username of the account you want to check. If omitted, the command checks the account age of the user who issued the command.

## Related Commands

- [`!followage`](followage.md): Checks how long a user has been following the channel

## Aliases

The `!accountage` command has the following default aliases:
- `!accage`
- `!created`

These aliases can be used interchangeably with the main command.

