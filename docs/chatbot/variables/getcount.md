---
id: getcount
sidebar_label: "$(getcount)"
description: "Learn how to use the $(getcount) variable in StreamElements Chatbot to retrieve counter values without incrementing them."
tags:
  - chatbot
  - variable
  - counter
keywords:
  - StreamElements
  - chatbot
  - counter
  - variable
  - streaming
---

# $(getcount)

## Overview

The `$(getcount)` variable allows you to retrieve the current value of a counter without incrementing it. This is useful for displaying counter values in chat messages or on stream overlays.

## Usage

To use the `$(getcount)` variable, you need to provide the name of the counter as a parameter. The syntax is as follows:

```
$(getcount counterName)
```

## Examples

Here are two practical examples of how to use the `$(getcount)` variable:

1. Displaying the current number of subscribers:

```
We currently have $(getcount subscribers) subscribers! Thank you for your support!
```

2. Showing the number of times a specific command has been used:

```
The !hug command has been used $(getcount hugs) times in this stream.
```

## Parameters

The `$(getcount)` variable takes one parameter:

- `counterName`: The name of the counter you want to retrieve the value for. This is a required parameter.

## Related Variables

- [`$(count)`](count.md): Increments a counter and returns its new value

## FAQ

**Q: Can I use $(getcount) to create a new counter?**
A: No, `$(getcount)` only retrieves existing counter values. To create a new counter, use the `$(count)` variable first.

**Q: What happens if I try to get the count of a non-existent counter?**
A: If the counter doesn't exist, `$(getcount)` will return 0.

**Q: Is there a limit to how many counters I can have?**
A: StreamElements doesn't specify a limit, but it's good practice to use counters judiciously to avoid performance issues.
