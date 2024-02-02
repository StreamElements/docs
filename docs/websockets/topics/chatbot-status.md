# channel.chatbot.status

## Description

This event is triggered whenever there is a change in the chatbot's status. It sends out a `partial`` update highlighting the modified field.

#### Payload

```json
{
    "mod": true
}
```

Supported fields:

- `banned` (boolean): Whether the chatbot is banned or not.
- `muted` (boolean): Whether the chatbot is muted or not.
- `joined` (boolean): Whether the chatbot is joined or not.
- `mod` (boolean): Whether the chatbot is a moderator or not.
