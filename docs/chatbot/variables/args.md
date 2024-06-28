---
id: args
tags:
  - chatbot
  - variable
keywords:
  - args
  - arguments
---

# $(args)

The `$(args)` variable is a powerful feature in StreamElements chatbot commands that allows you to access and manipulate arguments passed by users. This enables dynamic responses based on user input, enhancing the interactivity of your chatbot.

## Basic Usage

### Syntax

```
$(args)
```

### Description

The `$(args)` variable represents all arguments passed to a command. You can access specific arguments using numeric indices, starting from 1.

### Examples

1. Accessing the first argument:
   ```
   Command: !greet $(1)
   User input: !greet World
   Output: Hello, World!
   ```

2. Using multiple arguments:
   ```
   Command: !introduce $(1) is $(2) years old
   User input: !introduce Alice 25
   Output: Alice is 25 years old
   ```

## Advanced Features

### $(args.emote)

This variant outputs an argument only if it is a valid emote.

#### Syntax

```
$(n.emote)
```
Where `n` is the argument index.

#### Example

```
Command: !emote $(1.emote)
User input: !emote Kappa
Output: Kappa

User input: !emote Hello
Output: [No output, as "Hello" is not an emote]
```

### $(args.word)

This variant outputs an argument only if it does not contain symbols.

#### Syntax

```
$(n.word)
```
Where `n` is the argument index.

#### Example

```
Command: !word $(1.word)
User input: !word Hello
Output: Hello

User input: !word Hello!
Output: [No output, as "Hello!" contains a symbol]
```
