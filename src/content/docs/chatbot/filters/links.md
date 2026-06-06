---
title: Link Filter
sidebar:
  label: Links
description: "Control link posting in chat with allowlists, blocklists, and timeout settings using the StreamElements Chatbot Link filter."
keywords:
- StreamElements
- chatbot
- link filter
- moderation
- allowlist
- blocklist
---

The Link filter helps manage the posting of links in chat messages. It checks if a message contains any links and compares them with the set allowlist and blocklist. If a message contains a link that is not in the allowlist or is in the blocklist, the filter takes action according to the configured settings.

## Settings

| Setting | Description |
|---------|-------------|
| Allowlist | A list of links or link patterns that are allowed in messages. The filter supports wildcard characters in this list, allowing for flexible rules. |
| Blocklist | A list of links or link patterns that are not allowed in messages. Any link that matches a pattern in this list is treated as harmful and will result in a harsher punishment for the user. |
| Timeout duration | The duration (in seconds) for which a user will be timed out if their message violates the link rules. Setting to 0 will just delete the message. |
| Custom timeout message | The message that will be displayed when a user is timed out due to a violation of the link rules. This message can be customized to provide specific information about the violation and the timeout. |
| Excluded user groups | The user groups that are exempt from the link filter. Messages from users in these groups will not be checked by the filter. |
