---
id: votekick
sidebar_label: "Votekick"
description: "Master the StreamElements Votekick module: Empower your Twitch community with interactive chat moderation and boost viewer engagement through democratic voting"
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

# Votekick Module

## Overview

The Votekick module is a powerful chatbot feature that enables viewers to vote on whether to temporarily remove a user from the chat.

## Usage

To initiate a votekick, use the following command:

```
!votekick <username>
```

Replace `<username>` with the name of the user you want to start a vote against.

## Examples

1. Start a votekick for user "TrollUser123":
   ```
   !votekick TrollUser123
   ```

2. Vote in an active votekick (using default keywords):
   ```
   PogChamp
   ```
   or
   ```
   NotLikeThis
   ```

## Parameters

The `!votekick` command doesn't require additional parameters beyond the target username.

## Configuration

Customize the Votekick module behavior through the following settings:

| Setting | Description | Options/Range |
|---------|-------------|---------------|
| Voting Mode | Choose the voting interface | "Twitch Chat" or "Twitch Polls" |
| Minimum Votes | Set the required votes to kick | Minimum: 1 |
| Voting Duration | Set the length of the voting period | 10 to 1800 seconds |
| Kick Duration | Set how long the user is removed from chat | 10 to 1,209,600 seconds |
| Yea Keyword | Set the keyword for a "yes" vote | Recommended: Twitch emote |
| Nay Keyword | Set the keyword for a "no" vote | Recommended: Twitch emote |
