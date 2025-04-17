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
    } else if (message.topic === 'channel.session.update') {
      // Handle session update event
      console.log('Session update - Key:', message.data.key);
      console.log('Session update - Data:', message.data.data);
      
      // Example: Handle latest follower update
      if (message.data.key === 'latest_follower') {
        console.log('Latest follower updated:', message.data.data.name);
        // Update UI or trigger actions based on this event
      }
    } else if (message.topic === 'channel.session.reset') {
      // Handle session reset event
      console.log('Session reset - Full session data:', message.data.session);
      
      // Process reset session data
      const session = message.data.session;
      console.log('Current follower count:', session.follower_count);
      console.log('Latest follower:', session.latest_follower?.name);
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
    } else if (message.topic === 'channel.session.update') {
      // Handle session update event
      console.log('Session update - Key:', message.data.key);
      console.log('Session update - Data:', message.data.data);
      
      // Example: Handle latest follower update
      if (message.data.key === 'latest_follower') {
        console.log('Latest follower updated:', message.data.data.name);
        // Update UI or trigger actions based on this event
      }
    } else if (message.topic === 'channel.session.reset') {
      // Handle session reset event
      console.log('Session reset - Full session data:', message.data.session);
      
      // Process reset session data
      const session = message.data.session;
      console.log('Current follower count:', session.follower_count);
      console.log('Latest follower:', session.latest_follower?.name);
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
                    elif message.get("topic") == "channel.session.update":
                        # Handle session update event
                        print(f"Session update - Key: {message.get('data').get('key')}")
                        print(f"Session update - Data: {message.get('data').get('data')}")
                        
                        # Example: Handle latest follower update
                        if message.get("data").get("key") == "latest_follower":
                            print(f"Latest follower updated: {message.get('data').get('data').get('name')}")
                    elif message.get("topic") == "channel.session.reset":
                        # Handle session reset event
                        print(f"Session reset - Full session data: {message.get('data').get('session')}")
                        
                        # Process reset session data
                        session = message.get("data").get("session")
                        print(f"Current follower count: {session.get('follower_count')}")
                        print(f"Latest follower: {session.get('latest_follower')}")
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
                            else if (topic == "channel.session.update")
                            {
                                // Handle session update event
                                Console.WriteLine("Session update event received");
                                
                                // Example: Handle latest follower update
                                JsonElement data = root.GetProperty("data");
                                if (data.TryGetProperty("key", out JsonElement key) && key.GetString() == "latest_follower")
                                {
                                    Console.WriteLine("Latest follower updated");
                                    // Update UI or trigger actions based on this event
                                }
                            }
                            else if (topic == "channel.session.reset")
                            {
                                // Handle session reset event
                                Console.WriteLine("Session reset event received");
                                
                                // Process reset session data
                                JsonElement session = root.GetProperty("session");
                                Console.WriteLine($"Current follower count: {session.GetProperty("follower_count").GetInt32()}");
                                Console.WriteLine($"Latest follower: {session.GetProperty("latest_follower")?.GetString()}");
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
- Check the available [Topics](./topics) for subscription

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

## Go

### Usage

This example uses the `github.com/gorilla/websocket` package to implement a websocket client in Go.

### Examples

```go
// StreamElements Websocket Client - Go Example
package main

import (
	"log"
	"net/url"

	"github.com/gorilla/websocket"
)

func main() {
	u := url.URL{Scheme: "wss", Host: "astro.streamelements.com", Path: "/"}
	log.Printf("Connecting to %s", u.String())

	conn, _, err := websocket.DefaultDialer.Dial(u.String(), nil)
	if err != nil {
		log.Fatal("Error connecting:", err)
	}
	defer conn.Close()

	log.Println("Connected to StreamElements Astro")

	// Subscribe to a topic
	subscribeMessage := map[string]interface{}{
		"type": "subscribe",
		"nonce": crypto.RandomUUID(),
		"data": map[string]interface{}{
			"topic": "channel.follow",
			"room": "channelId123", // Optional: defaults to authenticated channel if not specified
			"token": "YOUR_JWT_TOKEN",
			"token_type": "jwt"
		},
	}

	if err := conn.WriteJSON(subscribeMessage); err != nil {
		log.Println("Error subscribing:", err)
		return
	}

	// Start a goroutine to read messages from the websocket
	done := make(chan struct{})
	go func() {
		defer close(done)
		for {
			var msg Message
			err := conn.ReadJSON(&msg)
			if err != nil {
				log.Println("Error reading message:", err)
				return
			}

			log.Printf("Received message: %+v", msg)

			// Handle different message types
			switch msg.Type {
			case "response":
				log.Println("Received response:", msg)
			case "message":
				log.Println("Received notification:", msg)
				// Process the notification based on the topic
				if msg.Topic == "channel.follow" {
					log.Println("New follower:", msg.Data)
				} else if msg.Topic == "channel.session.update" {
					// Handle session update event
					data, ok := msg.Data.(map[string]interface{})
					if !ok {
						log.Println("Error parsing data for session update")
						continue
					}

					key, ok := data["key"].(string)
					if !ok {
						log.Println("Error parsing key for session update")
						continue
					}

					log.Printf("Session update - Key: %s", key)
					
					// Example: Handle latest follower update
					if key == "latest_follower" {
						if eventData, ok := data["data"].(map[string]interface{}); ok {
							if name, ok := eventData["name"].(string); ok {
								log.Printf("Latest follower updated: %s", name)
							}
						}
					}
				} else if msg.Topic == "channel.session.reset" {
					// Handle session reset event
					data, ok := msg.Data.(map[string]interface{})
					if !ok {
						log.Println("Error parsing data for session reset")
						continue
					}

					if session, ok := data["session"].(map[string]interface{}); ok {
						log.Println("Session reset - Full session data received")
						
						// Process reset session data
						if followerCount, ok := session["follower_count"].(float64); ok {
							log.Printf("Current follower count: %d", int(followerCount))
						}
						
						if latestFollower, ok := session["latest_follower"].(map[string]interface{}); ok {
							if name, ok := latestFollower["name"].(string); ok {
								log.Printf("Latest follower: %s", name)
							}
						}
					}
				}
			}
		}
	}()

	// Example of unsubscribing from a topic
	unsubscribeMessage := map[string]interface{}{
		"type": "unsubscribe",
		"nonce": crypto.RandomUUID(),
		"data": map[string]interface{}{
			"topic": "channel.follow",
			"token": "YOUR_JWT_TOKEN",
			"token_type": "jwt"
		},
	}

	if err := conn.WriteJSON(unsubscribeMessage); err != nil {
		log.Println("Error unsubscribing:", err)
	}
}
``` 
