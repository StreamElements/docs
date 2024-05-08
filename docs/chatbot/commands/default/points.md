---
id: points
description: Learn how to use the !points command in StreamElements chatbot to display user points and leaderboard rank. Easily check your own or other users' loyalty points.
keywords:
  - StreamElements
  - chatbot
  - commands
  - loyalty
  - points
  - leaderboard
  - rank
tags:
  - chatbot
  - commands
  - loyalty
---
# !points

The `!points` command is used to display the number of points a user has and their rank on the leaderboard.

Without any arguments, this command will display the points and rank of the user who issued the command.

### Arguments

- `username` (optional): The username of the user whose points and rank you want to display.
  - If no username is provided, the command will display the points and rank of the user who issued the command.
  - It will default to the user who issued the command if the username is not found.

#### Example Input

```
!points

!points adeithe
```

#### Example Output

```
styler has 2643 nammers and is rank 22658/22671 on the leaderboard. 

adeithe has 0 nammers and is rank 22669/22671 on the leaderboard. 
```
