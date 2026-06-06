---
title: "$(args)"
description: "Access arguments passed to StreamElements Chatbot commands with the $(args) variable and its numeric variants."
keywords:
  - args
  - arguments
  - chatbot commands
  - user input
  - dynamic responses
---

The `$(args)` variable is a powerful feature in StreamElements chatbot commands that allows you to access and manipulate arguments passed by users. This enables dynamic responses based on user input, enhancing the interactivity of your chatbot.

## Usage

The basic syntax for using the `$(args)` variable is:

```streamelements
$(args)
```

You can access specific arguments using numeric indices, starting from 1:

```streamelements
$(1), $(2), $(3), etc.
```

## Examples

1. Greeting a user:

   ```streamelements
   !cmd add !greet Hello, $(1)!
   ```

   User input: `!greet World`

   Output: `Hello, World!`

2. Introducing a user:

   ```streamelements
   !cmd add !introduce $(1) is $(2) years old
   ```

   User input: `!introduce Alice 25`

   Output: `Alice is 25 years old`

## Parameters

The `$(args)` variable has two special variants:

1. `$(n.emote)`: Outputs an argument only if it is a valid emote.

   ```streamelements
   !cmd add !emote $(1.emote)
   ```

   User input: `!emote Kappa`

   Output: `Kappa`

2. `$(n.word)`: Outputs an argument only if it does not contain symbols.

   ```streamelements
   !cmd add !word $(1.word)
   ```

   User input: `!word Hello`

   Output: `Hello`

Where `n` is the argument index in both cases.

## Related Variables

- [$(user)](/chatbot/variables/user/): Represents the username of the person using the command
- [$(channel)](/chatbot/variables/channel/): Represents the channel name where the command is used

## FAQ

**Q: What happens if I try to access an argument that wasn't provided?**

A: If you try to access an argument that wasn't provided (e.g., `$(2)` when only one argument was given), the output will be blank.
