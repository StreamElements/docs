---
id: givepoints
description: Learn how to use the !givepoints command in StreamElements chatbot to transfer loyalty points from one user to another.
tags:
  - chatbot
  - commands
  - loyalty
  - points
  - transfer
  - givepoints
keywords:
  - givepoints command
  - transfer points streamelements
  - loyalty points
---
# !givepoints

The `!givepoints` command transfers points from the sender to the specified user.

### Module

- None

### Default Aliases

- `!give`
- `!transfer`

#### Arguments

- `username` - The username of the user to give points to.
- `amount` - The amount of points to give to the user.

#### Example Input

```
!givepoints styler 10000
```

#### Example Output

```
Adeithe gave 10000 points to styler PogChamp
```

#### Example Errors

```
@Adeithe, That doesnt look like a valid username Keepo

@Adeithe, You only have 420 points.

@Adeithe, I couldn't find that user in the database :/
```
