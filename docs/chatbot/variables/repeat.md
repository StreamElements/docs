---
id: repeat
sidebar_label: "$(repeat)"
description: "Learn how to use the $(repeat) variable to repeat phrases in StreamElements Chatbot. Includes usage, examples, and parameters."
tags:
- chatbot
- variable
- text manipulation
keywords:
- StreamElements
- repeat
- chatbot command
- text repetition
---

# $(repeat) Variable

## Overview

The `$(repeat)` variable allows you to repeat a specified phrase multiple times in your StreamElements Chatbot messages. This can be useful for creating emphasis, generating patterns, or simply for fun interactions in chat.

## Usage

The basic syntax for using the `$(repeat)` variable is:

```
$(repeat <number> <phrase>)
```

Where `<number>` is the number of times you want to repeat the phrase, and `<phrase>` is the text you want to repeat.

## Examples

### Basic Repetition

To repeat a word three times:

```
$(repeat 3 Kappa)
```

Output:
```
Kappa Kappa Kappa
```

### Using with Other Variables

You can combine `$(repeat)` with other variables:

```
$(repeat 2 "$(user) is awesome!")
```

If triggered by user "StreamerPro", the output would be:
```
StreamerPro is awesome! StreamerPro is awesome!
```

## Parameters

The `$(repeat)` variable requires two parameters:

1. **Number**: The number of times to repeat the phrase. Must be a positive integer.
2. **Phrase**: The text or variable to be repeated.

**Note**: Ensure to wrap the phrase in quotes if it contains spaces or special characters

## Related Variables

- [`$(queryescape)`](queryescape.md): Escapes text for use in URL query parameters.
- [`$(random)`](random.md): Generates random numbers or selects random items, which can be used with `$(repeat)`.

## FAQ

**Q: Is there a limit to how many times I can repeat a phrase?**

A: While there's no strict limit, it's recommended to use reasonable repetition counts to avoid spamming the chat or exceeding message length limits.

**Q: Can I use $(repeat) within other variables?**

A: Yes, you can nest `$(repeat)` within other variables or use other variables within `$(repeat)`.
