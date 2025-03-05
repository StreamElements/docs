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
  
  // Subscribe to a topic
  const subscribeMessage = {
    type: 'subscribe',
    nonce: crypto.randomUUID(),
    data: {
      topic: 'channel.follow',
      room: 'channelId123', // Optional: defaults to authenticated channel if not specified
      token: 'YOUR_JWT_TOKEN',
      token_type: 'jwt'
    }
  };
  
  websocket.send(JSON.stringify(subscribeMessage));
});

// Listen for messages
websocket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data);
  console.log('Message from server:', message);
  
  // Handle different message types
  if (message.type === 'response') {
    console.log('Received response:', message);
  } else if (message.type === 'message') {
    console.log('Received notification:', message);
    // Process the notification based on the topic
    if (message.topic === 'channel.follow') {
      // Handle follow event
      console.log('New follower:', message.data);
    }
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

// Example of unsubscribing from a topic
function unsubscribe(topic, room) {
  const unsubscribeMessage = {
    type: 'unsubscribe',
    nonce: crypto.randomUUID(),
    data: {
      topic: topic,
      room: room, // Optional: if not specified, unsubscribes from all rooms for this topic
      token: 'YOUR_JWT_TOKEN',
      token_type: 'jwt'
    }
  };
  
  websocket.send(JSON.stringify(unsubscribeMessage));
}
```

## Node.js

### Usage

This example uses the `ws` library to implement a websocket client in Node.js.

### Examples

```javascript
// StreamElements Websocket Client - Node.js Example
const WebSocket = require('ws');
const { v4: uuidv4 } = require('uuid');

// Create a new websocket connection
const ws = new WebSocket('wss://astro.streamelements.com');

// Connection opened
ws.on('open', () => {
  console.log('Connected to StreamElements Astro');
  
  // Subscribe to a topic
  const subscribeMessage = {
    type: 'subscribe',
    nonce: uuidv4(),
    data: {
      topic: 'channel.follow',
      room: 'channelId123', // Optional: defaults to authenticated channel if not specified
      token: 'YOUR_JWT_TOKEN',
      token_type: 'jwt'
    }
  };
  
  ws.send(JSON.stringify(subscribeMessage));
});

// Listen for messages
ws.on('message', (data) => {
  const message = JSON.parse(data);
  console.log('Message from server:', message);
  
  // Handle different message types
  if (message.type === 'response') {
    console.log('Received response:', message);
  } else if (message.type === 'message') {
    console.log('Received notification:', message);
    // Process the notification based on the topic
    if (message.topic === 'channel.follow') {
      // Handle follow event
      console.log('New follower:', message.data);
    }
  }
});

// Connection error
ws.on('error', (error) => {
  console.error('WebSocket error:', error);
});

// Connection closed
ws.on('close', (code, reason) => {
  console.log('Connection closed:', code, reason);
  // Implement reconnection logic here if needed
});

// Example of unsubscribing from a topic
function unsubscribe(topic, room) {
  const unsubscribeMessage = {
    type: 'unsubscribe',
    nonce: uuidv4(),
    data: {
      topic: topic,
      room: room, // Optional: if not specified, unsubscribes from all rooms for this topic
      token: 'YOUR_JWT_TOKEN',
      token_type: 'jwt'
    }
  };
  
  ws.send(JSON.stringify(unsubscribeMessage));
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
        
        # Subscribe to a topic
        subscribe_message = {
            "type": "subscribe",
            "nonce": str(uuid.uuid4()),
            "data": {
                "topic": "channel.follow",
                "room": "channelId123",  # Optional: defaults to authenticated channel if not specified
                "token": "YOUR_JWT_TOKEN",
                "token_type": "jwt"
            }
        }
        
        await websocket.send(json.dumps(subscribe_message))
        
        # Listen for messages
        while True:
            try:
                response = await websocket.recv()
                message = json.loads(response)
                print(f"Message from server: {message}")
                
                # Handle different message types
                if message.get("type") == "response":
                    print(f"Received response: {message}")
                elif message.get("type") == "message":
                    print(f"Received notification: {message}")
                    # Process the notification based on the topic
                    if message.get("topic") == "channel.follow":
                        # Handle follow event
                        print(f"New follower: {message.get('data')}")
            except websockets.exceptions.ConnectionClosed:
                print("Connection closed")
                break
            except Exception as e:
                print(f"Error: {e}")
                break

# Example of unsubscribing from a topic
async def unsubscribe(websocket, topic, room=None):
    unsubscribe_message = {
        "type": "unsubscribe",
        "nonce": str(uuid.uuid4()),
        "data": {
            "topic": topic,
            "token": "YOUR_JWT_TOKEN",
            "token_type": "jwt"
        }
    }
    
    # Add room if specified
    if room:
        unsubscribe_message["data"]["room"] = room
    
    await websocket.send(json.dumps(unsubscribe_message))

# Run the client
asyncio.run(connect_to_streamelements())
```

## C#

### Usage

This example uses the `System.Net.WebSockets` namespace to implement a websocket client in C#.

### Examples

```csharp
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
            
            // Subscribe to a topic
            var subscribeMessage = new
            {
                type = "subscribe",
                nonce = Guid.NewGuid().ToString(),
                data = new
                {
                    topic = "channel.follow",
                    room = "channelId123", // Optional: defaults to authenticated channel if not specified
                    token = "YOUR_JWT_TOKEN",
                    token_type = "jwt"
                }
            };
            
            await SendMessageAsync(subscribeMessage);
            
            // Start receiving messages
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
        byte[] buffer = new byte[4096];
        
        while (webSocket.State == WebSocketState.Open)
        {
            try
            {
                WebSocketReceiveResult result = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), cts.Token);
                
                if (result.MessageType == WebSocketMessageType.Text)
                {
                    string json = Encoding.UTF8.GetString(buffer, 0, result.Count);
                    Console.WriteLine($"Message received: {json}");
                    
                    // Parse and handle the message
                    using (JsonDocument doc = JsonDocument.Parse(json))
                    {
                        JsonElement root = doc.RootElement;
                        string messageType = root.GetProperty("type").GetString();
                        
                        if (messageType == "response")
                        {
                            Console.WriteLine("Received response");
                        }
                        else if (messageType == "message")
                        {
                            string topic = root.GetProperty("topic").GetString();
                            Console.WriteLine($"Received notification for topic: {topic}");
                            
                            if (topic == "channel.follow")
                            {
                                // Handle follow event
                                Console.WriteLine("New follower event received");
                            }
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
        var data = new
        {
            topic = topic,
            token = "YOUR_JWT_TOKEN",
            token_type = "jwt"
        };
        
        // If room is specified, add it to the data object
        var unsubscribeMessage = new
        {
            type = "unsubscribe",
            nonce = Guid.NewGuid().ToString(),
            data = room != null ? new { topic, room, token = "YOUR_JWT_TOKEN", token_type = "jwt" } : data
        };
        
        await SendMessageAsync(unsubscribeMessage);
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

// Usage example
class Program
{
    static async Task Main(string[] args)
    {
        var client = new StreamElementsClient();
        await client.ConnectAsync();
        
        // Keep the application running
        Console.WriteLine("Press any key to disconnect...");
        Console.ReadKey();
        
        client.Disconnect();
    }
}
```

## Related Commands

- See the [Websockets](../index.md) documentation for more information on the Astro Websocket Gateway
- Check the available [Topics](../topics/index.md) for subscription

## FAQ

### How do I handle reconnection?

For production applications, it's important to implement a reconnection strategy. Here's a simple example in JavaScript:

```javascript
function connectWithRetry() {
  const ws = new WebSocket('wss://astro.streamelements.com');
  
  ws.addEventListener('open', (event) => {
    console.log('Connected to StreamElements Astro');
    // Reset reconnection attempts counter
    reconnectionAttempts = 0;
    // Subscribe to topics
    // ...
  });
  
  ws.addEventListener('close', (event) => {
    console.log('Connection closed:', event.code, event.reason);
    // Implement exponential backoff
    const reconnectDelay = Math.min(1000 * Math.pow(2, reconnectionAttempts), 30000);
    reconnectionAttempts++;
    
    console.log(`Reconnecting in ${reconnectDelay}ms...`);
    setTimeout(connectWithRetry, reconnectDelay);
  });
  
  // Other event listeners
  // ...
  
  return ws;
}

let reconnectionAttempts = 0;
let websocket = connectWithRetry();
```

### How do I authenticate with OAuth?

To authenticate using OAuth instead of JWT:

```javascript
const subscribeMessage = {
  type: 'subscribe',
  nonce: crypto.randomUUID(),
  data: {
    topic: 'channel.follow',
    room: 'channelId123',
    token: 'YOUR_OAUTH_TOKEN',
    token_type: 'oauth'
  }
};
```

### How do I handle rate limiting?

If you receive a `rate_limit_exceeded` error, implement a backoff strategy:

```javascript
websocket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data);
  
  if (message.error === 'rate_limit_exceeded') {
    console.log('Rate limit exceeded, backing off...');
    // Wait before retrying
    setTimeout(() => {
      // Retry subscription
    }, 5000);
  }
});
``` 
