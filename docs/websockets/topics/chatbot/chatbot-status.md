# Status

## Topic

`channel.chatbot.status`

## Description

This event is triggered whenever there is a change in the chatbot's status. It sends out a `partial` update highlighting the modified field.

#### Payload

```json
{
    "id": "01HNX3Q5CS8D309V6DXJ3ZADEQ",
    "ts": "2024-02-05T17:05:41Z",
    "topic": "channel.chatbot.status",
    "type":"message",
    "data": {
        "mod": true
    }
}
```

Supported fields:

- `banned` (boolean): Whether the chatbot is banned or not.
- `muted` (boolean): Whether the chatbot is muted or not.
- `joined` (boolean): Whether the chatbot is joined or not.
- `mod` (boolean): Whether the chatbot is a moderator or not.
