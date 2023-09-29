---
id: symbol
tags:
  - chatbot
  - filters
---
# Symbol

The Symbol filter helps manage the use of symbols in chat messages. It checks the number and percentage of symbols in a message and compares them with the set limits. If a message violates these limits, the filter takes action according to the configured settings.

### Supported Settings

- `Maximum amount`: This is the maximum number of symbols allowed in a message. If a message contains more symbols than this limit, it will be flagged by the filter.
- `Minimum amount`: This is the minimum number of symbols a message must have before the filter checks for a violation. If a message contains fewer symbols than this limit, it will not be checked by the filter.
- `Maximum percent`: This is the maximum percentage of a message that can be symbols. If the percentage of symbols in a message exceeds this limit, it will be flagged by the filter.
- `Timeout duration`: This is the duration (in seconds) for which a user will be timed out if their message violates the symbol limits.
- `Excluded user groups`: These are the user groups that are exempt from the symbol filter. Messages from users in these groups will not be checked by the filter.
- `Custom timeout message`: This is the message that will be displayed when a user is timed out due to a violation of the symbol limits. This message can be customized to provide specific information about the violation and the timeout.
