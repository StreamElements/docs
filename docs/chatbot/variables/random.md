---
id: random
---

# $(random)

Allows you to generate random output from a list of options.

## $(random.number)

Displays a random number generated from X to Y.

#### Parameters

This variable accepts two numbers as input. If no numbers are provided the variable will error.

#### Example Input

```
${random.number 1-10}
```

#### Example Output

```
7
```

## $(random.emote)

Displays a random emote from a list of emotes.

#### Parameters

This variable accepts no arguments.

#### Example Input

```
${random.emote}
```

#### Example Output

```
Kappa
```

## $(random.chatter)

Displays a random chatter from a list of chatters.

#### Parameters

This variable accepts no arguments.

#### Example Input

```
${random.chatter}
```

#### Example Output

```
XDBot
```

## $(random.pick)

Displays a random item from a list of items.

#### Parameters

This variable accepts a list of items as input. If no items are provided the variable will error.

#### Example Input

```
${random.pick '1' '2' 'rare pepe'}
```

#### Example Output

```
rare pepe
```
