---
title: Caps Filter
sidebar:
  label: Caps
description: "Limit the number and percentage of capital letters in chat messages with the StreamElements Chatbot Caps filter."
keywords:
- StreamElements
- chatbot
- caps filter
- moderation
- chat management
---

The Caps filter helps manage the use of capital letters in chat messages. It checks the number and percentage of capital letters in a message and compares them with the set limits. If a message violates these limits, the filter takes action according to the configured settings.

## Settings

| Setting | Description |
|---------|-------------|
| Maximum amount | The maximum number of capital letters allowed in a message. If a message contains more capital letters than this limit, it will be flagged by the filter. |
| Minimum characters | The minimum number of characters a message must have before the filter checks for a violation. If a message contains fewer characters than this limit, it will not be checked by the filter. |
| Maximum percent | The maximum percentage of a message that can be capital letters. If the percentage of capital letters in a message exceeds this limit, it will be flagged by the filter. |
| Timeout duration | The duration (in seconds) for which a user will be timed out if their message violates the capital letters limits. |
| Custom timeout message | The message that will be displayed when a user is timed out due to a violation of the capital letters limits. This message can be customized to provide specific information about the violation and the timeout. |
| Excluded user groups | The user groups that are exempt from the caps filter. Messages from users in these groups will not be checked by the filter. |
