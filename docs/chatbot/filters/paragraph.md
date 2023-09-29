---
id: paragraph
tags:
  - chatbot
  - filters
---
# Paragraph

The Paragraph filter helps manage the length of chat messages. It checks the number of characters in a message and compares them with the set limit. If a message violates this limit, the filter takes action according to the configured settings.

### Supported Settings

- `Maximum amount`: This is the maximum number of characters allowed in a message. If a message contains more characters than this limit, it will be flagged by the filter.
- `Timeout duration`: This is the duration (in seconds) for which a user will be timed out if their message violates the character limit.
- `Excluded user groups`: These are the user groups that are exempt from the paragraph filter. Messages from users in these groups will not be checked by the filter.
- `Custom timeout message`: This is the message that will be displayed when a user is timed out due to a violation of the character limit. This message can be customized to provide specific information about the violation and the timeout.
