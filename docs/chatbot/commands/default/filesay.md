---
id: filesay
sidebar_label: "!filesay"
description: "Learn how to use the !filesay command to send multiple lines of text to chat from a URL, useful for bulk moderation actions like banning users."
keywords:
- filesay
- chatbot command
- moderation
- banning users
- chat management
- streaming
- twitch
- youtube
---

# !filesay

## Overview

The `!filesay` command allows streamers and moderators to send multiple lines of text to chat from a URL. This powerful tool is particularly useful for bulk moderation actions, such as banning a large number of users simultaneously.

## Usage

```
!filesay <url>
```

Replace `<url>` with the web address of a plain text file containing the messages you want to send to chat. Each line in the file will be sent as a separate message.

## Examples

### Example 1: Banning multiple users

```
!filesay https://pastebin.com/raw/123
```

Output:
```
badactor1 has been permanently banned from the chat.
badactor2 has been permanently banned from the chat.
badactor3 has been permanently banned from the chat.
badactor4 has been permanently banned from the chat.
badactor5 has been permanently banned from the chat.
```

### Example 2: Sending multiple announcements

```
!filesay https://example.com/announcements.txt
```

Output:
```
Welcome to the stream, everyone!
Today's schedule: Gaming from 2-4 PM, Q&A from 4-5 PM
Don't forget to follow and subscribe for more content!
```

## Parameters

- `url`: The web address of a plain text file containing the messages to be sent to chat. Each line in the file will be treated as a separate message.

## Related Commands

- [`!nuke`](nuke.md)
- [`!nukeusername`](nukeusername.md)

## Configuration

No additional configuration is required to use the `!filesay` command.

## Aliases

There are no aliases for the `!filesay` command.
