---
id: votekick
tags:
  - chatbot
  - module
  - voteKick
description: A tribunal for chat to decide if a user should be kicked from the chat
keywords:
  - streamelements votekick module
  - votekick command
---

:::note
This module is currently in beta and may not currently be visible to all users.
:::

# Votekick

The votekick module is a chatbot module that allows chat to vote on whether or not to kick a user from the chat. This is a great way to enhance engagement from the chat or allow users to keep the chat safer when moderators are not around without giving too much power to the wrong hands.

### Commands

- [!votekick](/chatbot/commands/default/votekick) - Begins a votekick tribunal.

### Settings

Name | Description
--- | ---
Voting Mode | The mode of voting for the votekick. This can be set to "Twitch Chat" or "Twitch Polls" to use native polls on Twitch.
Minimum Votes | The minimum number of votes required to kick the user. This must be at least 1.
Voting Duration | The duration of the votekick. This can be between 10 and 1800 seconds.
Kick Duration | The length of time (in seconds) that the user will be removed from chat. This can be between 10 and 1209600 seconds.
Yea Keyword | The keyword that will be used as a "yes" vote. It is recommended for this to be an emote.
Nay Keyword | The keyword that will be used as a "no" vote. It is recommended for this to be an emote.
