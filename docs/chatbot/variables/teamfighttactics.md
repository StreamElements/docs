---
id: teamfighttactics
sidebar_label: "$(teamfighttactics)"
description: "Get a Teamfight Tactics player's rank and LP using StreamElements Chatbot. Supports Riot IDs and multiple regions."
tags:
  - chatbot
  - variable
  - Teamfight Tactics
keywords:
  - streamelements tft rank command
  - teamfighttactics command
  - riot id rank lookup
  - summoner rank checker
---

# $(teamfighttactics) Variable

## Overview

The `$(teamfighttactics)` variable allows you to retrieve and display the current rank and LP (League Points) of a specified Teamfight Tactics player using the StreamElements Chatbot.

## Usage

To use this variable, you need to provide two parameters: the region and the player's Riot ID.

```
$(teamfighttactics <region> <Riot ID>)
```

## Examples

```
$(teamfighttactics euw styler#euw)
$(teamfighttactics na Doublelift#na1)
```

Example output:
```
Current Rank: Gold IV (32 LP)
```

## Parameters

1. **Region**: The server region of the player (e.g., `euw`, `na`)
2. **Riot ID**: The player's unique identifier

## Supported Regions

- `br` (Brazil)
- `eune` (Europe Nordic & East)
- `euw` (Europe West)
- `jp` (Japan)
- `kr` (Republic of Korea)
- `lan` (Latin America North)
- `las` (Latin America South)
- `na` (North America)
- `oce` (Oceania)
- `pbe` (Public Beta Environment)
- `ph` (Philippines)
- `ru` (Russia)
- `sg` (Singapore)
- `th` (Thailand)
- `tw` (Taiwan)
- `tr` (Turkey)
- `vn` (Vietnam)

## FAQ

**Q: Why isn't the rank updating immediately?**

A: Rank data may have a slight delay due to API caching. It typically updates within a few minutes after a player's ranked game.
