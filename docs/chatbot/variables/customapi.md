---
id: customapi
sidebar_label: "$(customapi)"
description: "Learn how to use $(customapi) in StreamElements Chatbot to make API requests and display responses in chat messages."
tags:
- variables
- api
- integrations
keywords:
- StreamElements
- chatbot
- customapi
- API request
- variable
- urlfetch
---

# $(customapi) Variable

## Overview

The `$(customapi)` variable enables you to make HTTP requests to external APIs and display the responses directly in your stream's chat. This powerful feature allows you to integrate real-time data from various sources into your chat messages and commands.

## Usage

To use the `$(customapi)` variable, include it in your chat message or command response followed by the URL you want to request:

```
$(customapi URL)
```

Replace *URL* with the actual API endpoint you want to call.

## Examples

### Fetching the latest YouTube video

```
$(customapi https://decapi.me/youtube/latest_video?id=UCjerlCIbLPQwSnYlClkjDXg)
```

Output:
```
STREAMELEMENTS PATCH NOTES - SEPTEMBER 10, 2023 #streamelements #updates #patchnotes - https://youtu.be/-q_q37PoaM8
```

### Getting a random joke

```
$(customapi https://official-joke-api.appspot.com/random_joke)
```

Output:
```
{"id":323,"type":"general","setup":"Why did the cookie cry?","punchline":"Because his father was a wafer so long!"}
```

## Parameters

The `$(customapi)` variable itself doesn't accept parameters. However, you can include query parameters in the URL if the API requires them. For example:

```
$(customapi https://api.example.com/data?param1=value1&param2=value2)
```

## Aliases

- `$(urlfetch)`

## FAQ

**Q: Can I use `$(customapi)` to make POST requests?**

A: No, `$(customapi)` only supports GET requests.

**Q: How can I handle JSON responses?**

A: `$(customapi)` returns the raw response. To parse JSON, you may need to use additional tools or custom integrations.
