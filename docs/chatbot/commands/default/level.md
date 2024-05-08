---
id: level
description: Learn how to use the !level command in StreamElements chatbot to show or set a user's level. Customize user levels for subscribers, VIPs, mods and more.
keywords:
  - StreamElements
  - chatbot
  - commands
  - level
  - user levels
tags:
  - chatbot
  - commands
---

# !level

The `!level` command is used to show/set a level of a user.

### Arguments

- `<username>` (required): The username of the person you want to check or set the level.
- `<value>` (optional): The level value.
- `reset` (optional): Reset the level to 100.

### Possible values

- `100` - normal user (default value)
- `250` - subscriber (automatically set for a subscriber)
- `300` - regular
- `400` - VIP (automatically set for a VIP)
- `500` - mod (automatically set for a moderator)
- `1000` - supermod

Note: Although `subscriber`, `VIP` and `mod` are automatically set, you can also manually define the same level to a specific user. Useful if you want to create a command only for subscribers, but also want to permit a specific user to be able to run that command.

### Usage

````
!level <username>

!level <username> <value>

!level <username> reset
````

### Example input

```
!level darkoe

!level darkoe 500

!level darkoe reset
```

### Example output

```
@styler, the level of darkoe is 100

@styler, successfully set darkoe's level to 500, you can reset it with !level darkoe reset

@styler, successfully reset darkoe's level to 100 Kappa
```

### Example error

```
@styler, usage !level USER 500/reset

@styler, valid levels are: 100 (pleb), 250 (sub), 300 (regular), 400 (VIP), 500 (mod), 1000 (supermod)
```
