---
id: mediarequest
description: "Learn how to use the !volume command in StreamElements to control the volume of media requests in your Twitch or YouTube chat. Easily set or check the current volume level."
tags:
  - chatbot
  - commands
  - loyalty
  - media request
  - volume control
keywords:
  - "!volume command"
  - "media request volume"
  - "set volume level"
---
# !volume

The `!volume` command is used in conjunction with the mediarequest feature. It can be used to get the current volume without an argument. With an argument, it will set the volume. The argument should be a number between 0 and 100.

### Arguments

- `volume` (optional), The desired volume level. If no volume level is provided, the command will return the current volume level.

### Example Input

```
!volume 

!volume 10 
```

### Example Output

```
Current volume is 50%

Styler set the songrequest volume to 10 
```
