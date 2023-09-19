---
id: editcounter
tags:
  - chatbot
  - commands
---
# !editcounter

### Overview

The `!editcounter` command is used to edit the counter of a specific event or item in the chat.

### Arguments

- `id`: The name of the counter you want to edit.
- `value`: The new value you want to set for the counter. You can use `+` or `-` to add or subtract from the current value. (If not specified, it will set the counter to the value)

### Usage

```
!editcounter <id> <value>
```

### Example Input

```
!editcounter social 1000

!editcounter social -10

!editcounter social +10
```

### Example Output

```
@Styler changed the test counter from 10 to 10

@Styler changed the test counter from 10 to 0 

@Styler changed the test counter from 10 to 20 
```

#### Example Error

```
@Styler, usage: !editcounter <id> +1/-1/123 
```
