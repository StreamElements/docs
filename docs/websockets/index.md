# Websockets

## Astro Websocket Gateway

Astro is our dedicated websocket gateway. It provides a publish-subscribe (pubsub) pattern for real-time data updates.

Clients establish a WebSocket connection to: `wss://astro.streamelements.com`

### Request from client to server

| Parameter | Type | Description |
| --- | --- | --- |
| `type` | `string` | The type of request. Valid options are `SUBSCRIBE` AND `UNSUBSCRIBE` |
| `nonce` | `string` | A unique identifier for the request. This can be handy to identity the response (Optional) |
| `data.topic` | `string` | The topic to subscribe to. |
| `data.token` | `string` | The token to authenticate the request. |
| `data.token_type` | `string` | The type of token. Valid options are `apikey` and `jwt` |

```json
{
  "type": "SUBSCRIBE",
  "nonce": "86ccb2b3-eb8d-4b3c-902d-509c3f5ca88c",
  "data": {
    "topic": "channel.follow",
    "token": "test_token",
    "token_type": "jwt"
  }
}
```

### Response from server to client

| Parameter | Type | Description |
| --- | --- | --- |
| `id` | `string` | The unique identifier of the response. |
| `type` | `string` | The type of response. Valid options are `RESPONSE` |
| `nonce` | `string` | The nonce of the request. |
| `error` | `string` | The error code. |

```json
{
    "id": "04c25ba8-9162-4968-968b-9f7f5d3bc361",
    "ts": "2023-09-20T16:43:21Z",
    "type": "RESPONSE",
    "nonce": "86ccb2b3-eb8d-4b3c-902d-509c3f5ca88c",
    "data": "successfully subscribed to topic"
}
```

### Topics

| Topic | Required Scope | You are notified when |
| --- | --- | --- |
| `chatbot.timeout` | `bot:read` | When the chatbot times someone out |
