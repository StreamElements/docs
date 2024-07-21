---
id: random
sidebar_label: "$(random)"
description: "Learn how to use StreamElements' random variables to generate dynamic content in your stream chat, including numbers, emotes, and chatters."
tags:
- variables
- customization
- engagement
keywords:
- streamelements
- chatbot
- random variables
- stream chat
- viewer interaction
---

# Random Variables

## Overview

StreamElements offers a set of powerful random variables that allow you to generate dynamic, randomized content in your stream chat. These variables are essential tools for creating engaging interactions, mini-games, and surprise elements that keep your audience entertained and involved.

## Usage

Random variables can be used in any chat message or command. To use a random variable, simply include it in your message using the following syntax: `$(variable_name)` or `${variable_name}`.

## Examples

Here are two practical examples of how you can use random variables:

```
Congratulations, $(random.chatter)! You've won a prize!
The magic number is ${random 1-100}!
```

## Parameters

Some random variables accept parameters to customize their output. Parameters are specified within the variable brackets.

## Random Variables

### $(random) or $(random.number)

#### Overview

Generates a random number between two specified values.

#### Usage

```
$(random X-Y)
```
or
```
$(random.number X-Y)
```

Where `X` is the lower bound and `Y` is the upper bound.

#### Examples

```
The dice roll is: ${random 1-6}
Your lucky number is: $(random.number 1-100)
```

#### Parameters

- `X`: Lower bound (inclusive)
- `Y`: Upper bound (inclusive)

### $(random.emote)

#### Overview

Displays a random emote from the available emotes in the channel.

#### Usage

```
$(random.emote)
```

#### Examples

```
Here's a random emote: $(random.emote)
Let's celebrate with $(random.emote)!
```

### $(random.chatter)

#### Overview

Selects a random chatter from the current active chatters in the stream.

#### Usage

```
$(random.chatter)
```

#### Examples

```
Congratulations, $(random.chatter)! You've been selected!
Our spotlight viewer is: $(random.chatter)
```

### $(random.pick)

#### Overview

Selects a random item from a provided list of options.

#### Usage

```
$(random.pick 'item1' 'item2' 'item3' ...)
```

#### Examples

```
Today's special is: ${random.pick 'pizza' 'pasta' 'salad'}
The next game we'll play is: $(random.pick 'Fortnite' 'Minecraft' 'Among Us')
```

#### Parameters

- A list of items enclosed in single quotes and separated by spaces

## Related Commands

- [$(customapi)](customapi): Fetch content from a URL, which can be used to create more complex random selections
- [$(math)](math): Perform mathematical operations and return the result

## FAQ

**Q: Can I use random variables in custom commands?**

A: Yes, random variables can be used in any custom command or chat message.

**Q: Are the random numbers generated truly random?**

A: The random numbers are pseudorandom, which means they are generated using an algorithm. this is sufficiently random.
