---
id: votekick
sidebar_label: "!votekick"
description: "Learn how to use StreamElements' !votekick command for community-driven chat moderation and temporary user removal"
keywords:
- StreamElements votekick command
- Twitch chat moderation
- community-driven moderation
- temporary chat ban
- viewer engagement
- stream interaction
- chat management
- StreamElements bot commands
- Twitch streaming tools
- chat voting system
---

# !votekick

## Overview

The `!votekick` command initiates a community vote to temporarily remove a user from the chat. This feature allows viewers to participate in chat moderation by voting on whether a potentially disruptive user should be kicked.

## Usage

```
!votekick <username> [duration]
```

## Examples

1. Start a votekick for user "chatty_person" with the default duration:
```
!votekick chatty_person
```

2. Start a votekick for user "noisy_viewer" with a custom duration of 5 minutes:
```
!votekick noisy_viewer 5m
```

## Parameters

- `<username>`: The name of the user to be potentially kicked (required)
- `[duration]`: The length of time for the voting period (optional)
  - If not specified, uses the default duration set in the module configuration
  - Can be specified in seconds (s), minutes (m), or hours (h)

## Configuration

Moderators can configure the following settings for the `!votekick` command through the StreamElements dashboard [bot modules page](https://streamelements.com/dashboard/bot/modules/votekick):

- Vote Duration: Set the default duration for the voting period
- Minimum Votes: Specify the minimum number of votes required for a valid votekick
- Vote Threshold: Define the percentage of positive votes needed for the votekick to pass
- Timeout Duration: Set how long the user will be timed out if the vote passes
- Cooldown: Establish a cooldown period between votekick attempts

To modify these settings:

1. Log in to your StreamElements dashboard
2. Navigate to Bot > Modules
3. Find and click on the "Votekick" module
4. Adjust the settings as needed
5. Save your changes
