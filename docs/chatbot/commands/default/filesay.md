---
id: filesay
tags:
  - chatbot
  - commands
  - moderation
---
# !filesay

The `!filesay` command is used to have the bot send multiple lines of text to the chat in a short period via a URL. This is especially useful for cases where streamers and/or moderators want to ban a large number of users from the chat using a pastebin file.

### Module

- None

### Arguments

- `url` - The URL of the file to read from. This file must be a plain text file with each line being a separate message to send to the chat.

### Example Input

```
!filesay https://pastebin.com/raw/MmqTJSfH
```

### Example Output

```
badactor1 has been permantently banned from the chat.
badactor2 has been permantently banned from the chat.
badactor3 has been permantently banned from the chat.
badactor4 has been permantently banned from the chat.
badactor5 has been permantently banned from the chat.
```

#### Example Error

```
@Adeithe, usage: !filesay https://link.to/raw/text/file

@Adeithe, running this command will take more than 5 minutes, please use a file no longer than 1500 lines.
```
