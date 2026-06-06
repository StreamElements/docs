---
title: Paragraph Filter
sidebar:
  label: Paragraph
description: "Limit the maximum length of chat messages with the StreamElements Chatbot Paragraph filter's character limit, timeout duration, and exclusions."
keywords:
- StreamElements
- chatbot
- Twitch
- paragraph filter
- message length
- chat moderation
---

The Paragraph filter helps manage the length of chat messages. It checks the number of characters in a message and compares them with the set limit. If a message violates this limit, the filter takes action according to the configured settings.

## Settings

| Setting | Description |
|---------|-------------|
| Maximum amount | The maximum number of characters allowed in a message. If a message contains more characters than this limit, it will be flagged by the filter. |
| Timeout duration | The duration (in seconds) for which a user will be timed out if their message violates the character limit. |
| Custom timeout message | The message that will be displayed when a user is timed out due to a violation of the character limit. This message can be customized to provide specific information about the violation and the timeout. |
| Excluded user groups | The user groups that are exempt from the paragraph filter. Messages from users in these groups will not be checked by the filter. |
