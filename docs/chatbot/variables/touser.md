---
id: touser
tags:
  - chatbot
  - variable
---

# $(touser)

Displays either the first word after the command $[1], or the sender’s name. This is an alias for ${1|sender}

#### Parameters

This variable accepts a word as input. If no word is provided, the variable will default to the user who triggered the command.

#### Example Input

```
${touser}
```

#### Example Output

```
styler
```
