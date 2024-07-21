---
id: math
sidebar_label: "$(math)"
description: "Learn how to use the $(math) variable in StreamElements Chatbot for performing mathematical calculations in chat messages."
tags:
  - chatbot
  - variable
  - math
keywords:
  - StreamElements
  - chatbot
  - math
  - calculations
  - expressions
---

# $(math) Variable

## Overview

The `$(math)` variable allows you to perform mathematical calculations and operations directly in your StreamElements Chatbot messages. It utilizes the math.js library, providing a wide range of mathematical functions and capabilities.

## Usage

To use the `$(math)` variable, include it in your message followed by a valid math.js expression:

```
$(math *expression*)
```

Replace *expression* with the mathematical operation you want to perform.

## Examples

Here are some practical examples of how to use the `$(math)` variable:

1. Basic arithmetic:
   ```
   Bot: 2 + 2 equals $(math "2 + 2")
   Output: 2 + 2 equals 4
   ```

2. Rounding a division result:
   ```
   Bot: 10 divided by 3, rounded to the nearest integer, is $(math "round(10/3)")
   Output: 10 divided by 3, rounded to the nearest integer, is 3
   ```

3. Generating a random number:
   ```
   Bot: Your random number between 1 and 10 is $(math "random(1,10)")
   Output: Your random number between 1 and 10 is 7.525986609745358
   ```

## Parameters

The `$(math)` variable takes a single parameter: a valid math.js expression. This can include:

- Basic arithmetic operations (`+`, `-`, `*`, `/`)
- Mathematical functions (e.g., `round()`, `floor()`, `ceil()`, `log()`, `sin()`, `cos()`)
- Constants (e.g., `pi`, `e`)
- Logical operators (e.g., `>`, `<`, `==`, `!=`)

For a complete list of supported operations and functions, refer to the [math.js documentation](https://mathjs.org/docs/index.html).

## Related Variables

- [`$(customapi)`](customapi.md): Can be used to fetch and process numerical data from external sources

## FAQ

**Q: Can I use variables in my math expressions?**

A: Yes, you can use other StreamElements variables within your `$(math)` expression. For example: `$(math "{points} * 2")` would double the user's points.

**Q: Is there a limit to the complexity of expressions I can use?**

A: While there's no strict limit, very complex expressions may take longer to process. It's best to keep expressions relatively simple for optimal performance.
