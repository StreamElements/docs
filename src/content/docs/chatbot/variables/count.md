---
title: "$(count)"
description: "Create, display, and modify custom counters in StreamElements Chatbot with the $(count) variable."
keywords:
  - count
  - counter
  - death counter
  - command counter
  - StreamElements
  - chatbot
  - variable
---

The `$(count)` variable is a versatile tool in the StreamElements Chatbot that allows you to create, display, and manipulate custom counters for various purposes in your stream. It's commonly used for tracking deaths in games, counting command usage, or keeping score of any recurring event.

## Usage

The basic syntax for using the `$(count)` variable is:

```streamelements
$(count [counter_name] [modifier])
```

Where:

- `[counter_name]` is an optional name for your counter (default is the command name)
- `[modifier]` can be used to set or modify the counter value

## Examples

1. Basic usage (increments by 1 each time):

   ```streamelements
   !cmd add !deaths $(count)
   ```

2. Named counter with custom increment:

   ```streamelements
   !cmd add !bossfails $(count bossfails +1)
   ```

## Parameters

- `[counter_name]`: (Optional) A unique identifier for your counter. If not specified, the command name is used as the counter name.
- `[modifier]`: (Optional) Can be used to set or modify the counter value:
  - `+n`: Increment the counter by n (e.g., `+1`, `+5`)
  - `-n`: Decrement the counter by n (e.g., `-1`, `-3`)
  - `n`: Set the counter to a specific value n (e.g., `0`, `100`)

## Configuration

Counters are automatically created when first used and persist across stream sessions. You can manage counters in the StreamElements dashboard under the Chatbot section.

## Related Variables

- [`$(getcount)`](/chatbot/variables/getcount/): Display the current value of a counter

## FAQ

**Q: Can I have multiple counters?**

A: Yes, you can create multiple counters by using different names (e.g., `$(count deaths)`, `$(count wins)`).

**Q: How do I reset a counter?**

A: You can reset a counter to zero using `$(count [counter_name] 0)`.
