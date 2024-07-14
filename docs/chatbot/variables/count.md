---
id: count
sidebar_label: "$(count)"
description: "Learn how to use the $(count) variable in StreamElements Chatbot to display and manipulate command counters for your stream."
keywords:
- count
- counter
- death counter
- command counter
- StreamElements
- chatbot
- variable
---

# $(count) Variable

## Overview

The `$(count)` variable is a powerful tool in the StreamElements Chatbot that allows you to display and manipulate counters for various purposes in your stream. It's commonly used for tracking deaths in games, counting command usage, or keeping score of any recurring event.

## Usage

The basic syntax for using the `$(count)` variable is:

```
$(count [counter_name] [optional_modifier])
```

Where:
- `[counter_name]` is an optional name for your counter (default is the command name)
- `[optional_modifier]` can be used to set or modify the counter value

## Examples

1. Basic usage (increments by 1 each time):
   ```
   !deaths $(count)
   ```

2. Named counter with custom increment:
   ```
   !bossfails $(count bossfails +1)
   ```

## Parameters

- `[counter_name]`: (Optional) A unique identifier for your counter. If not specified, the command name is used as the counter name.
- `[optional_modifier]`: (Optional) Can be used to set or modify the counter value:
  - `+n`: Increment the counter by n (e.g., `+1`, `+5`)
  - `-n`: Decrement the counter by n (e.g., `-1`, `-3`)
  - `n`: Set the counter to a specific value n (e.g., `0`, `100`)

## Related Variables

- [`$(getcount)`](getcount.md): Display the current value of a counter

## Configuration

Counters are automatically created when first used and persist across stream sessions. You can manage counters in the StreamElements dashboard under the "Botting" section.

## FAQ

**Q: Can I have multiple counters?**
A: Yes, you can create multiple counters by using different names (e.g., `$(count deaths)`, `$(count wins)`).

**Q: How do I reset a counter?**
A: You can reset a counter to zero using `$(count [counter_name] 0)`.
