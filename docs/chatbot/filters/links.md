---
id: links
tags:
  - chatbot
  - filters
---
# Links

### Description

The Link filter helps manage the posting of links in chat messages. It checks if a message contains any links and compares them with the set allowlist and blocklist. If a message contains a link that is not in the allowlist or is in the blocklist, the filter takes action according to the configured settings.

### Supported Settings

- `Timeout duration`: This is the duration (in seconds) for which a user will be timed out if their message violates the link rules.
- `Excluded user groups`: These are the user groups that are exempt from the link filter. Messages from users in these groups will not be checked by the filter.
- `Custom timeout message`: This is the message that will be displayed when a user is timed out due to a violation of the link rules. This message can be customized to provide specific information about the violation and the timeout.
- `Allowlist`: This is a list of links or link patterns that are allowed in messages. The filter supports wildcard characters in this list, allowing for flexible rules.
- `Blocklist`: This is a list of links or link patterns that are not allowed in messages. Any link that matches a pattern in this list is treated as harmful and will result in a harsher punishment for the user.
