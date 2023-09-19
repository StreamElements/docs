# !bet

### Overview

The `!bet` command is used to place a bet in a running contest. This can be useful for users to participate in contests and potentially win rewards.

### Module

- None

### Arguments

- `option` (required): The option you want to bet on.
- `points` (required): The amount of points you want to bet.

Note:

- Points can be expressed in several ways:
  - As a percentage of the user's total points. For example, `!bet 50%` will wager 50% of the user's points.
  - Using `k` to represent thousands. For example, `!bet 5k` will wager 5000 points.
  - Using `m` to represent millions. For example, `!bet 1m` will wager 1,000,000 points.

### Example Input

```
!bet win 10 
```

### Example Output

```
@Styler, you have bet 10 nammers on Win. 
```
