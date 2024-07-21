---
id: queryescape
sidebar_label: "$(queryescape)"
description: "Learn how to use the $(queryescape) variable to encode strings for URL usage in StreamElements Chatbot commands."
tags:
  - chatbot
  - variable
  - url
keywords:
  - query escape
  - url encoding
  - StreamElements
  - chatbot command
---

# $(queryescape) Variable

## Overview

The `$(queryescape)` variable is used to encode a string for safe use in URLs. It replaces spaces with plus signs and escapes special characters, making it ideal for creating dynamic search queries or links within chatbot commands.

## Usage

To use the `$(queryescape)` variable, include it in your command with the text you want to encode as its parameter:

```
$(queryescape *text*)
```

Replace *text* with the string you want to encode for URL usage.

## Examples

### Example 1: Creating a Google search link

```
!command add !google ${urlfetch https://google.com/search?q=$(queryescape ${1:})}
```

This command creates a Google search link based on the user's input.

**User Input:** `!google StreamElements chatbot`
**Output:** `https://google.com/search?q=StreamElements+chatbot`

### Example 2: YouTube search query

```
!command add !yt https://www.youtube.com/results?search_query=$(queryescape ${1:})
```

This command generates a YouTube search link using the provided search terms.

**User Input:** `!yt funny cat videos`
**Output:** `https://www.youtube.com/results?search_query=funny+cat+videos`

## Parameters

The `$(queryescape)` variable takes a single parameter:

- **text**: The string you want to encode for URL usage. This can be static text or a dynamic value from another variable or user input.

## Related Commands

- [`$(customapi)`](customapi.md): Used to fetch content from a URL, often combined with `$(queryescape)` for dynamic web requests.
- [`${args}`](args.md): Represents user input in custom commands, frequently used with `$(queryescape)` to create dynamic queries.

## FAQ

**Q: Why should I use $(queryescape) instead of just inserting text directly into a URL?**

A: Using `$(queryescape)` ensures that special characters and spaces are properly encoded, preventing errors in the URL and ensuring it works correctly across different platforms and browsers.

**Q: Can I use $(queryescape) with other variables or in more complex commands?**

A: Yes, you can combine `$(queryescape)` with other variables and use it in complex commands. It's especially useful when working with user input or dynamic data that needs to be included in URLs.
