---
id: emotes
sidebar_label: "Emotes"
description: "Learn how to manage emote usage in your stream chat with the StreamElements Emote Filter. Set limits, customize timeout messages, and exclude user groups."
tags:
- chatbot
- moderation
- filters
keywords:
- emote filter
- chat moderation
- StreamElements
- emote limit
- timeout settings
---

# Emote Filter

The Emote filter helps manage the use of emotes in chat messages. It checks the number of emotes in a message and compares them with the set limit. If a message violates this limit, the filter takes action according to the configured settings.

### Supported Settings

- `Timeout duration`: This is the duration (in seconds) for which a user will be timed out if their message violates the emote limit.
- `Excluded user groups`: These are the user groups that are exempt from the emote filter. Messages from users in these groups will not be checked by the filter.
- `Custom timeout message`: This is the message that will be displayed when a user is timed out due to a violation of the emote limit. This message can be customized to provide specific information about the violation and the timeout.
- `Maximum amount`: This is the maximum number of emotes allowed in a message. If a message contains more emotes than this limit, it will be flagged by the filter.
