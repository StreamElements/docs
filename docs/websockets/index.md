# Websockets

## Astro Websocket Gateway

Astro is our dedicated websocket gateway. It provides a publish-subscribe (pubsub) pattern for real-time data updates.

Clients establish a WebSocket connection to: `wss://astro.streamelements.com`

### Request from client to server

| Parameter | Type | Description |
| --- | --- | --- |
| `type` | `string` | The type of request. Valid options are `subscribe` AND `unsubscribe` |
| `nonce` | `string` | A unique identifier for the request. This can be handy to identity the response (Optional) |
| `data.topic` | `string` | The topic to subscribe to. |
| `data.token` | `string` | The token to authenticate the request. |
| `data.token_type` | `string` | The type of token. Valid options are `apikey` and `jwt` |

```json
{
  "type": "subscribe",
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
| `data` | `object` | The data of the response. |

```json
{
    "id": "01HB0YE5TR26EH71DVPJ68MA82",
    "ts": "2023-09-20T16:43:21Z",
    "type": "response",
    "nonce": "86ccb2b3-eb8d-4b3c-902d-509c3f5ca88c",
    "data": "successfully subscribed to topic"
}
```

### Errors

| Error | Description |
| --- | --- |
| `err_internal_error` | An internal error occurred. |
| `err_bad_request` | The request was malformed or invalid. |
| `err_unauthorized` | The request lacked valid authentication credentials. |
| `rate_limit_exceeded` | The rate limit for the API has been exceeded. |
| `invalid_message` | The message was invalid or could not be processed. |

```json
{
    "id": "01HB0YE5Y88FXMXXCN4ME7M8A1",
    "ts": "2023-09-20T16:43:21Z",
    "type": "response",
    "nonce": "86ccb2b3-eb8d-4b3c-902d-509c3f5ca88c",
    "error": "err_unauthorized",
    "data": {
        "message": "invalid token"
    }
}
```

### Topics

This will be released in the near future.

<!-- | Topic | Required Scope | You are notified when |
| --- | --- | --- |
| `chatbot.timeout` | `bot:read` | When the chatbot times someone out | -->
