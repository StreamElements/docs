---
id: customapi
sidebar_label: "$(customapi)"
description: "Learn how to use the $(customapi) variable in StreamElements Chatbot to make API requests and display responses in chat."
keywords:
- StreamElements
- chatbot
- customapi
- API request
- variable
---

# $(customapi)

## Overview

The `$(customapi)` variable allows you to make a request to a specified URL and return the response directly in chat. This powerful feature enables you to integrate external data sources into your stream's chat messages.

## Usage

To use the `$(customapi)` variable, include it in your chat message or command response followed by the URL you want to request:

```
$(customapi URL)
```

Replace `URL` with the actual API endpoint you want to call.

## Examples

### Example 1: Fetching the latest YouTube video

```
$(customapi https://decapi.me/youtube/latest_video?id=UCjerlCIbLPQwSnYlClkjDXg)
```

Output:
```
STREAMELEMENTS PATCH NOTES - SEPTEMBER 10, 2023 #streamelements #updates #patchnotes - https://youtu.be/-q_q37PoaM8
```

### Example 2: Getting a random joke

```
$(customapi https://official-joke-api.appspot.com/random_joke)
```

Output:
```
{"id":323,"type":"general","setup":"Why did the cookie cry?","punchline":"Because his father was a wafer so long!"}
```

## Parameters

The `$(customapi)` variable itself does not take any parameters. However, you can include query parameters in the URL you're requesting if the API requires them.


## Aliases

- `$(urlfetch)`


