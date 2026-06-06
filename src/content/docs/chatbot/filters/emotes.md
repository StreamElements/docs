---
title: Emote Filter
sidebar:
  label: Emotes
description: "Limit the number of emotes allowed in a single chat message with the StreamElements Chatbot Emote filter."
keywords:
- emote filter
- chat moderation
- StreamElements
- emote limit
- timeout settings
---

The Emote filter helps manage the use of emotes in chat messages. It checks the number of emotes in a message and compares them with the set limit. If a message violates this limit, the filter takes action according to the configured settings.

## Settings

| Setting | Description |
|---------|-------------|
| Maximum amount | The maximum number of emotes allowed in a message. If a message contains more emotes than this limit, it will be flagged by the filter. |
| Timeout duration | The duration (in seconds) for which a user will be timed out if their message violates the emote limit. |
| Custom timeout message | The message that will be displayed when a user is timed out due to a violation of the emote limit. This message can be customized to provide specific information about the violation and the timeout. |
| Excluded user groups | The user groups that are exempt from the emote filter. Messages from users in these groups will not be checked by the filter. |
