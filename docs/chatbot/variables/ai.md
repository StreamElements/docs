---
id: ai
tags:
  - chatbot
  - variable
keywords:
  - ai
  - streamelements ai
  - chatbot ai
---

# $(ai)

:::warning
This variable is currently in beta. It may be subject to change.
:::

Outputs a response from the StreamElements AI. The AI will attempt to generate a response based on the input query.

#### Ratelimits & Restrictions

The AI variable is ratelimited to prevent abuse. The following ratelimits apply:

Type        | Amount    | Reset Time |
------------|-----------|------------|
User        | 1         | 60 seconds |
Affiliate   | 5         | 60 seconds |
Partner     | 15        | 60 seconds |

#### Parameters

This variable accepts a query as input. If no query is provided, the variable will error.

#### Example Input

```
${ai You are a wholesome helper. ${1:}} 
```

#### Example Output

```
Shroud is a popular Twitch streamer known for his incredible skills in first-person shooter games like Call of Duty and Apex Legends He is also a former professional esports player PogChamp 
```
