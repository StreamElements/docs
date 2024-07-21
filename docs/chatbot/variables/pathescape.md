---
id: pathescape
sidebar_label: "$(pathescape)"
description: "Escape strings for URL paths in StreamElements Chatbot. Learn how to use $(pathescape) with syntax, examples, and parameters."
tags:
  - chatbot
  - variable
  - url
keywords:
  - StreamElements
  - URL encoding
  - path escape
  - chatbot variable
---

# $(pathescape) Variable

## Overview

The `$(pathescape)` variable is a utility function in the StreamElements Chatbot that escapes a string for safe use in a URL path. It converts special characters and spaces into their URL-encoded equivalents, ensuring that the resulting string can be used as part of a valid URL.

## Usage

To use `$(pathescape)`, include it in your command or message with the string you want to escape as its parameter:

```
$(pathescape *string*)
```

Replace *string* with the text you want to encode for use in a URL path.

## Examples

### Basic Usage

Input:
```
$(pathescape "Hello World!")
```

Output:
```
Hello%20World%21
```

### In a URL

Input:
```
https://api.example.com/$(pathescape "User Input & Symbols?")
```

Output:
```
https://api.example.com/User%20Input%20%26%20Symbols%3F
```


### Using with $(customapi)

Input:
```
$(customapi "https://api.example.com/$(pathescape {input})")
```

Output:
```
https://api.example.com/User%20Input%20%26%20Symbols%3F
```

## Parameters

The `$(pathescape)` variable accepts a single parameter:

- **string**: The text you want to escape for use in a URL path. This parameter is required.

If no string is provided, the variable will return an error.

## FAQ

**Q: What characters does $(pathescape) encode?**

A: It encodes special characters, spaces, and symbols that could cause issues in URL paths, such as `&`, `?`, `=`, `+`, and spaces.

