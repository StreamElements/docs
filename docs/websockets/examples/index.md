---
id: websocket-examples
sidebar_label: "Code Examples"
description: "Implementation examples of StreamElements' websocket client in various programming languages."
tags:
- api
- websockets
- code examples
- implementation
keywords:
- streamelements websocket examples
- websocket client code
- javascript websocket
- python websocket
- node.js websocket
- channel session update
- channel session reset
---

# Websocket Client Examples

## Overview

This page provides implementation examples of StreamElements' websocket client in various programming languages. These examples demonstrate how to connect to the Astro Websocket Gateway, subscribe to topics, and handle incoming messages.

## JavaScript (Browser)

### Usage

This example shows how to implement a websocket client using native WebSocket in a browser environment.

### Examples

```javascript
// StreamElements Websocket Client - Browser Example
const websocket = new WebSocket('wss://astro.streamelements.com');

// Connection opened
websocket.addEventListener('open', (event) => {
  console.log('Connected to StreamElements Astro');
});

// Listen for messages
websocket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data);

  switch (message.type) {
    case 'welcome':
      console.log('Welcome received, client ID:', message.data.client_id);

      // Subscribe to a topic after receiving welcome
      websocket.send(JSON.stringify({
        type: 'subscribe',
        nonce: crypto.randomUUID(),
        data: {
          topic: 'channel.activities',
          room: 'YOUR_CHANNEL_ID',
          token: 'YOUR_JWT_TOKEN',
          token_type: 'jwt'
        }
      }));
      break;

    case 'response':
      if (message.error) {
        console.error('Error:', message.error, message.data.message);
      } else {
        console.log('Success:', message.data.message);
      }
      break;

    case 'message':
      console.log(`[${message.topic}] in room ${message.room}:`, message.data);

      if (message.topic === 'channel.activities') {
        console.log('New activity:', message.data.type, message.data);
      } else if (message.topic === 'channel.session.update') {
        console.log('Session update - Key:', message.data.key);
        console.log('Session update - Data:', message.data.data);
      } else if (message.topic === 'channel.session.reset') {
        console.log('Session reset - Full session data:', message.data.session);
      }
      break;

    case 'reconnect':
      console.log('Server is shutting down, reconnecting...');
      const token = message.data.reconnect_token;
      // Open a new connection with the reconnect token
      const newWs = new WebSocket(
        `wss://astro.streamelements.com/?reconnect_token=${token}`
      );
      // Transfer your event listeners to newWs...
      break;
  }
});

// Connection error
websocket.addEventListener('error', (event) => {
  console.error('WebSocket error:', event);
});

// Connection closed
websocket.addEventListener('close', (event) => {
  console.log('Connection closed:', event.code, event.reason);
  // Implement reconnection logic here if needed
});

// Unsubscribe from a specific room
function unsubscribe(topic, room) {
  websocket.send(JSON.stringify({
    type: 'unsubscribe',
    nonce: crypto.randomUUID(),
    data: {
      topic: topic,
      room: room
    }
  }));
}

// Unsubscribe from all rooms for a topic
function unsubscribeAll(topic) {
  websocket.send(JSON.stringify({
    type: 'unsubscribe',
    nonce: crypto.randomUUID(),
    data: {
      topic: topic
    }
  }));
}
```

## Node.js

### Usage

This example uses the `ws` library to implement a websocket client in Node.js.

### Examples

```javascript
// StreamElements Websocket Client - Node.js Example
const WebSocket = require('ws');
const { randomUUID } = require('crypto');

const ws = new WebSocket('wss://astro.streamelements.com');

ws.on('open', () => {
  console.log('Connected to StreamElements Astro');
});

ws.on('message', (data) => {
  const message = JSON.parse(data);

  switch (message.type) {
    case 'welcome':
      console.log('Welcome received, client ID:', message.data.client_id);

      // Subscribe to a topic after receiving welcome
      ws.send(JSON.stringify({
        type: 'subscribe',
        nonce: randomUUID(),
        data: {
          topic: 'channel.activities',
          room: 'YOUR_CHANNEL_ID',
          token: 'YOUR_JWT_TOKEN',
          token_type: 'jwt'
        }
      }));
      break;

    case 'response':
      if (message.error) {
        console.error('Error:', message.error, message.data.message);
      } else {
        console.log('Success:', message.data.message);
      }
      break;

    case 'message':
      console.log(`[${message.topic}] in room ${message.room}:`, message.data);

      if (message.topic === 'channel.activities') {
        console.log('New activity:', message.data.type, message.data);
      } else if (message.topic === 'channel.session.update') {
        console.log('Session update - Key:', message.data.key);
        console.log('Session update - Data:', message.data.data);
      } else if (message.topic === 'channel.session.reset') {
        console.log('Session reset - Full session data:', message.data.session);
      }
      break;

    case 'reconnect':
      console.log('Server is shutting down, reconnecting...');
      const token = message.data.reconnect_token;
      const newWs = new WebSocket(
        `wss://astro.streamelements.com/?reconnect_token=${token}`
      );
      // Transfer event listeners to newWs...
      break;
  }
});

ws.on('error', (error) => {
  console.error('WebSocket error:', error);
});

ws.on('close', (code, reason) => {
  console.log('Connection closed:', code, reason.toString());
});

// Unsubscribe from a specific room
function unsubscribe(topic, room) {
  ws.send(JSON.stringify({
    type: 'unsubscribe',
    nonce: randomUUID(),
    data: {
      topic: topic,
      room: room
    }
  }));
}
```

## Python

### Usage

This example uses the `websockets` library to implement a websocket client in Python.

### Examples

```python
# StreamElements Websocket Client - Python Example
import asyncio
import json
import uuid
import websockets

async def connect_to_streamelements():
    uri = "wss://astro.streamelements.com"

    async with websockets.connect(uri) as websocket:
        print("Connected to StreamElements Astro")

        async for raw in websocket:
            message = json.loads(raw)
            msg_type = message.get("type")

            if msg_type == "welcome":
                print(f"Welcome received, client ID: {message['data']['client_id']}")

                # Subscribe to a topic after receiving welcome
                await websocket.send(json.dumps({
                    "type": "subscribe",
                    "nonce": str(uuid.uuid4()),
                    "data": {
                        "topic": "channel.activities",
                        "room": "YOUR_CHANNEL_ID",
                        "token": "YOUR_JWT_TOKEN",
                        "token_type": "jwt"
                    }
                }))

            elif msg_type == "response":
                if message.get("error"):
                    print(f"Error: {message['error']} - {message['data']['message']}")
                else:
                    print(f"Success: {message['data']['message']}")

            elif msg_type == "message":
                topic = message.get("topic")
                print(f"[{topic}] in room {message.get('room')}: {message.get('data')}")

                if topic == "channel.activities":
                    print(f"New activity: {message['data']}")
                elif topic == "channel.session.update":
                    print(f"Session update - Key: {message['data']['key']}")
                elif topic == "channel.session.reset":
                    print(f"Session reset: {message['data']['session']}")

            elif msg_type == "reconnect":
                print("Server is shutting down, reconnecting...")
                token = message["data"]["reconnect_token"]
                # Reconnect with the token
                new_uri = f"wss://astro.streamelements.com/?reconnect_token={token}"
                # Open new connection with new_uri...
                break

async def unsubscribe(websocket, topic, room=None):
    msg = {
        "type": "unsubscribe",
        "nonce": str(uuid.uuid4()),
        "data": {
            "topic": topic
        }
    }
    if room:
        msg["data"]["room"] = room
    await websocket.send(json.dumps(msg))

asyncio.run(connect_to_streamelements())
```

## C#

### Usage

This example uses the `System.Net.WebSockets` namespace to implement a websocket client in C#.

### Examples

```cs
// StreamElements Websocket Client - C# Example
using System;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Text.Json;

class StreamElementsClient
{
    private ClientWebSocket webSocket;
    private CancellationTokenSource cts;

    public async Task ConnectAsync()
    {
        webSocket = new ClientWebSocket();
        cts = new CancellationTokenSource();

        try
        {
            await webSocket.ConnectAsync(new Uri("wss://astro.streamelements.com"), cts.Token);
            Console.WriteLine("Connected to StreamElements Astro");
            await ReceiveMessagesAsync();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error connecting: {ex.Message}");
        }
    }

    private async Task SendMessageAsync(object message)
    {
        string json = JsonSerializer.Serialize(message);
        byte[] buffer = Encoding.UTF8.GetBytes(json);
        await webSocket.SendAsync(new ArraySegment<byte>(buffer), WebSocketMessageType.Text, true, cts.Token);
    }

    private async Task ReceiveMessagesAsync()
    {
        byte[] buffer = new byte[40960];

        while (webSocket.State == WebSocketState.Open)
        {
            try
            {
                WebSocketReceiveResult result = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), cts.Token);

                if (result.MessageType == WebSocketMessageType.Text)
                {
                    string json = Encoding.UTF8.GetString(buffer, 0, result.Count);

                    using (JsonDocument doc = JsonDocument.Parse(json))
                    {
                        JsonElement root = doc.RootElement;
                        string messageType = root.GetProperty("type").GetString();

                        switch (messageType)
                        {
                            case "welcome":
                                Console.WriteLine($"Welcome received, client ID: {root.GetProperty("data").GetProperty("client_id").GetString()}");

                                // Subscribe to a topic after receiving welcome
                                await SendMessageAsync(new
                                {
                                    type = "subscribe",
                                    nonce = Guid.NewGuid().ToString(),
                                    data = new
                                    {
                                        topic = "channel.activities",
                                        room = "YOUR_CHANNEL_ID",
                                        token = "YOUR_JWT_TOKEN",
                                        token_type = "jwt"
                                    }
                                });
                                break;

                            case "response":
                                if (root.TryGetProperty("error", out JsonElement error))
                                {
                                    Console.WriteLine($"Error: {error.GetString()} - {root.GetProperty("data").GetProperty("message").GetString()}");
                                }
                                else
                                {
                                    Console.WriteLine($"Success: {root.GetProperty("data").GetProperty("message").GetString()}");
                                }
                                break;

                            case "message":
                                string topic = root.GetProperty("topic").GetString();
                                Console.WriteLine($"[{topic}] in room {root.GetProperty("room").GetString()}");

                                if (topic == "channel.activities")
                                {
                                    Console.WriteLine("New activity received");
                                }
                                else if (topic == "channel.session.update")
                                {
                                    JsonElement data = root.GetProperty("data");
                                    Console.WriteLine($"Session update - Key: {data.GetProperty("key").GetString()}");
                                }
                                else if (topic == "channel.session.reset")
                                {
                                    Console.WriteLine("Session reset received");
                                }
                                break;

                            case "reconnect":
                                string reconnectToken = root.GetProperty("data").GetProperty("reconnect_token").GetString();
                                Console.WriteLine("Server is shutting down, reconnecting...");
                                // Reconnect with: wss://astro.streamelements.com/?reconnect_token={reconnectToken}
                                break;
                        }
                    }
                }
                else if (result.MessageType == WebSocketMessageType.Close)
                {
                    await webSocket.CloseAsync(WebSocketCloseStatus.NormalClosure, "Connection closed by server", cts.Token);
                    Console.WriteLine("Connection closed");
                    break;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error receiving message: {ex.Message}");
                break;
            }
        }
    }

    public async Task UnsubscribeAsync(string topic, string room = null)
    {
        var data = room != null
            ? (object)new { topic, room }
            : new { topic };

        await SendMessageAsync(new
        {
            type = "unsubscribe",
            nonce = Guid.NewGuid().ToString(),
            data
        });
    }

    public void Disconnect()
    {
        if (webSocket.State == WebSocketState.Open)
        {
            webSocket.CloseAsync(WebSocketCloseStatus.NormalClosure, "Client disconnecting", cts.Token).Wait();
        }
        cts.Cancel();
    }
}

class Program
{
    static async Task Main(string[] args)
    {
        var client = new StreamElementsClient();
        await client.ConnectAsync();

        Console.WriteLine("Press any key to disconnect...");
        Console.ReadKey();
        client.Disconnect();
    }
}
```

## Go

### Usage

This example uses the `github.com/gorilla/websocket` package to implement a websocket client in Go.

### Examples

```go
// StreamElements Websocket Client - Go Example
package main

import (
	"encoding/json"
	"log"
	"net/url"

	"github.com/google/uuid"
	"github.com/gorilla/websocket"
)

type Message struct {
	ID    string      `json:"id,omitempty"`
	TS    string      `json:"ts,omitempty"`
	Type  string      `json:"type"`
	Topic string      `json:"topic,omitempty"`
	Room  string      `json:"room,omitempty"`
	Nonce string      `json:"nonce,omitempty"`
	Error string      `json:"error,omitempty"`
	Data  interface{} `json:"data,omitempty"`
}

func main() {
	u := url.URL{Scheme: "wss", Host: "astro.streamelements.com", Path: "/"}
	log.Printf("Connecting to %s", u.String())

	conn, _, err := websocket.DefaultDialer.Dial(u.String(), nil)
	if err != nil {
		log.Fatal("Error connecting:", err)
	}
	defer conn.Close()

	log.Println("Connected to StreamElements Astro")

	for {
		var msg Message
		err := conn.ReadJSON(&msg)
		if err != nil {
			log.Println("Error reading message:", err)
			return
		}

		switch msg.Type {
		case "welcome":
			log.Printf("Welcome received: %+v", msg.Data)

			// Subscribe to a topic after receiving welcome
			subscribeMsg := map[string]interface{}{
				"type":  "subscribe",
				"nonce": uuid.New().String(),
				"data": map[string]interface{}{
					"topic":      "channel.activities",
					"room":       "YOUR_CHANNEL_ID",
					"token":      "YOUR_JWT_TOKEN",
					"token_type": "jwt",
				},
			}
			if err := conn.WriteJSON(subscribeMsg); err != nil {
				log.Println("Error subscribing:", err)
				return
			}

		case "response":
			if msg.Error != "" {
				log.Printf("Error: %s", msg.Error)
			} else {
				log.Printf("Success: %+v", msg.Data)
			}

		case "message":
			log.Printf("[%s] in room %s: %+v", msg.Topic, msg.Room, msg.Data)

		case "reconnect":
			log.Println("Server is shutting down, reconnecting...")
			if data, ok := msg.Data.(map[string]interface{}); ok {
				if token, ok := data["reconnect_token"].(string); ok {
					reconnectURL := url.URL{
						Scheme:   "wss",
						Host:     "astro.streamelements.com",
						Path:     "/",
						RawQuery: "reconnect_token=" + token,
					}
					log.Printf("Reconnecting to %s", reconnectURL.String())
					// Open new connection with reconnectURL...
				}
			}
			return
		}
	}
}
```

## Related

- See the [Websockets](../index.md) documentation for the full protocol reference
- Check the available [Topics](../topics/index.md) for subscription

## FAQ

### How do I handle reconnection?

Astro sends a `reconnect` message with a token before graceful shutdown. Use this token to reconnect without re-subscribing:

```javascript
websocket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data);

  if (message.type === 'reconnect') {
    const token = message.data.reconnect_token;
    const newWs = new WebSocket(
      `wss://astro.streamelements.com/?reconnect_token=${token}`
    );
    // The new connection will restore all subscriptions automatically
  }
});
```

For unexpected disconnects (network errors, etc.), implement exponential backoff and re-subscribe:

```javascript
function connectWithRetry() {
  const ws = new WebSocket('wss://astro.streamelements.com');

  ws.addEventListener('open', () => {
    console.log('Connected to StreamElements Astro');
    reconnectionAttempts = 0;
  });

  ws.addEventListener('close', (event) => {
    const reconnectDelay = Math.min(1000 * Math.pow(2, reconnectionAttempts), 30000);
    reconnectionAttempts++;
    console.log(`Reconnecting in ${reconnectDelay}ms...`);
    setTimeout(connectWithRetry, reconnectDelay);
  });

  return ws;
}

let reconnectionAttempts = 0;
let websocket = connectWithRetry();
```

### How do I authenticate with OAuth2?

To authenticate using OAuth2 instead of JWT:

```javascript
const subscribeMessage = {
  type: 'subscribe',
  nonce: crypto.randomUUID(),
  data: {
    topic: 'channel.activities',
    room: 'YOUR_CHANNEL_ID',
    token: 'YOUR_OAUTH2_TOKEN',
    token_type: 'oauth2'
  }
};
```

### How do I handle rate limiting?

Commands are rate-limited at 1 per 100ms with a burst of 100 per 10 seconds. If you receive a `rate_limit_exceeded` error, back off before retrying:

```javascript
websocket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data);

  if (message.error === 'rate_limit_exceeded') {
    console.log('Rate limit exceeded, backing off...');
    // Wait before retrying - note that rate limit responses do not include a nonce
    setTimeout(() => {
      // Retry your command
    }, 5000);
  }
});
```
