---
id: nukeusername
tags:
  - chatbot
  - commands
  - moderation
---
# !nukeusername

The `!nukeusername` command is used to perform a timeout, ban, or deletion on a user's activity in the chat. This command will search the user's activity for a specified string and perform the specified action on the user if the string is found. This command will error if the user is not found in the chat.

### Arguments

- `lookback in seconds`: This is the time window in the past in which to search for the user's activity.
- `timeout in seconds, 'ban' or 'delete'`: This is the action to perform on the user. It can be a timeout for a specified number of seconds, a ban, or a deletion of the user's activity.
- `match string, for regex, wrap in slashes /abc/`: This is the string to match in the user's activity. If a regular expression is used, it should be wrapped in slashes.

#### Example Input

```
!nukeusername 60 60 /test/
```

#### Example Output

```
Nuking 2 chatters ☢ ️ ☢ ️ ☢ ️ This will take about 1 secs ☢ ️ ☢ ️ ☢ ️ 
```
