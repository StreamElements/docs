# Websockets

## Astro Websocket Gateway

Astro is StreamElements' dedicated websocket gateway. It employs a publish-subscribe (pubsub) pattern to facilitate real-time data updates.

To establish a WebSocket connection, clients should connect to: `wss://astro.streamelements.com`

### Client-to-Server Request

The following parameters are used in a client-to-server request:

| Parameter | Type | Description |
| --- | --- | --- |
| `type` | `string` | Defines the type of request. Valid options are `subscribe` and `unsubscribe`. |
| `nonce` | `string` | A unique identifier for the request. Useful for identifying the corresponding response (Optional). |
| `data.topic` | `string` | The topic to which the client wishes to subscribe. |
| `data.token` | `string` | The token used to authenticate the request. |
| `data.token_type` | `string` | Specifies the type of token. Valid options are `apikey` and `jwt`. |

Here is an example of a client-to-server request:

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

### Server-to-Client Response

The following parameters are used in a server-to-client response:

| Parameter | Type | Description |
| --- | --- | --- |
| `id` | `string` | The unique identifier of the response. |
| `type` | `string` | Defines the type of response. The only valid option is `RESPONSE`. |
| `nonce` | `string` | The nonce of the original request. |
| `error` | `string` | The error code, if any. |
| `data` | `object` | The data contained in the response. |

Here is an example of a server-to-client response:

```json
{
    "id": "01HB0YE5TR26EH71DVPJ68MA82",
    "ts": "2023-09-20T16:43:21Z",
    "type": "response",
    "nonce": "86ccb2b3-eb8d-4b3c-902d-509c3f5ca88c",
    "data": "successfully subscribed to topic"
}
```

### Server Notifications

Clients can receive notifications from the server. Here is an example:

```json
{
    "id": "01HB0YF39XF16HMHCPDYZYJYFK",
    "ts": "2023-09-23T12:06:25Z",
    "type": "message",
    "topic": "astro",
    "data": {
        "message":"Hello world!"
    }
}
```

### Error Codes

The following error codes may be returned in a server-to-client response:

| Error | Description |
| --- | --- |
| `err_internal_error` | An internal error occurred. |
| `err_bad_request` | The request was malformed or invalid. |
| `err_unauthorized` | The request lacked valid authentication credentials. |
| `rate_limit_exceeded` | The rate limit for the API has been exceeded. |
| `invalid_message` | The message was invalid or could not be processed. |

Here is an example of a server-to-client response containing an error:

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

Information on available topics will be released in the near future.

<!-- | Topic | Required Scope | You are notified when |
| --- | --- | --- |
| `chatbot.timeout` | `bot:read` | When the chatbot times someone out | -->

