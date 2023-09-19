---
id: pathescape
tags:
  - chatbot
  - variable
---

# $(pathescape)

Escapes a string for use in a URL path

#### Parameters

This variable accepts a string as input. If no string is provided the variable will error.

#### Example Input

```
api.com/${pathescape ${1}}
```

#### Example Output

```
api.com/%F0%9F%85%B1
```
