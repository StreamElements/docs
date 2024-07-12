---
id: editcounter
sidebar_label: "!editcounter"
description: "Learn how to use the !editcounter command in StreamElements chatbot to modify counter values in your stream chat."
keywords:
- editcounter
- counter
- increment
- decrement
- set value
- StreamElements
- chatbot
- commands
---

# !editcounter

## Overview

The `!editcounter` command allows you to modify the value of a specific counter in your StreamElements chatbot. This command is useful for tracking various events or items during your stream.

## Usage

```
!editcounter <counter_id> <value>
```

## Parameters

- `counter_id`: The name or identifier of the counter you want to edit.
- `value`: The new value for the counter. You can use:
  - A positive or negative number to set an absolute value
  - `+` followed by a number to increment the counter
  - `-` followed by a number to decrement the counter

## Examples

1. Set a counter to a specific value:
   ```
   !editcounter social 1000
   ```
   Output: `@Username changed the social counter from 500 to 1000`

2. Increment a counter:
   ```
   !editcounter viewers +10
   ```
   Output: `@Username changed the viewers counter from 50 to 60`

3. Decrement a counter:
   ```
   !editcounter points -5
   ```
   Output: `@Username changed the points counter from 20 to 15`

