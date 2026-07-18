---
title: Votekick Module
sidebar:
  label: Votekick
description: "Configure the StreamElements Votekick module to let viewers vote on temporarily removing a user from chat."
keywords:
- StreamElements votekick
- Twitch chat moderation
- interactive viewer engagement
- community-driven moderation
- Twitch polls integration
- chat voting system
- StreamElements chatbot
- Twitch stream management
- audience participation tools
- temporary user removal
---

The Votekick module is a powerful chatbot feature that enables viewers to vote on whether to temporarily remove a user from the chat. If the vote passes, the user is timed out in chat for the configured duration.

## Usage

Moderators and above can initiate a votekick with the following command:

```streamelements
!votekick <username> [duration]
```

Replace `<username>` with the name of the user you want to start a vote against. The optional duration (in seconds) overrides the configured voting duration for this vote; in both cases the voting duration is clamped between 10 seconds and 30 minutes.

A votekick passes when the total number of votes reaches the required votes setting **and** at least 51% of the votes are "yes". In chat-voting mode, each user gets exactly one vote.

## Examples

1. Start a votekick for user "TrollUser123":

   ```streamelements
   !votekick TrollUser123
   ```

2. Vote in an active votekick (using the keywords configured in the dashboard, for example):

   ```
   PogChamp
   ```

   or

   ```
   NotLikeThis
   ```

## Configuration

The module's values come from the dashboard settings — customize the Votekick behavior with the following:

| Setting | Description |
|---------|-------------|
| Enabled | Whether the module is enabled |
| Native Twitch Poll | Run the vote as a native Twitch poll instead of counting chat keywords. Only available to Twitch affiliates and partners — otherwise the bot replies that polls are unavailable |
| Required Votes | The number of votes needed for the votekick to pass |
| Voting Duration | The length of the voting period, in seconds (clamped between 10 seconds and 30 minutes) |
| Kick Duration | How long the user is timed out in chat, in seconds |
| Yea Keyword | The chat keyword for a "yes" vote (chat-voting mode) |
| Nay Keyword | The chat keyword for a "no" vote (chat-voting mode) |

## Related Commands

- [`!votekick`](/chatbot/commands/default/votekick/): Starts a vote to temporarily remove a user from chat.
