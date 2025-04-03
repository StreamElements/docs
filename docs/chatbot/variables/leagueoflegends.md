---
id: leagueoflegends
sidebar_label: "$(leagueoflegends)"
description: "Get a League of Legends player's rank and LP using StreamElements Chatbot. Supports Riot IDs and multiple regions."
tags:
  - chatbot
  - variable
  - League of Legends
keywords:
  - streamelements lol rank command
  - league of legends command
  - riot id rank lookup
  - summoner rank checker
---

# $(leagueoflegends) Variable

## Overview

The `$(leagueoflegends)` variable allows you to retrieve and display the current rank and LP (League Points) of a specified League of Legends player using the StreamElements Chatbot.

## Usage

To use this variable, you need to provide two parameters: the region and the player's Riot ID or Summoner Name.

```streamelements
$(leagueoflegends <Riot ID/Summoner Name> <region>)
```

:::info Riot IDs
League of Legends is transitioning to Riot IDs. During the transition, you can use either Riot IDs or Summoner Names. After the transition, only Riot IDs will be supported.
:::

**Note:** If the Riot ID contains spaces, wrap it in quotes.

## Examples

```
$(leagueoflegends styler#euw euw)
$(leagueoflegends "Doublelift#na1" na)
```

Example output:
```
Current Rank: Challenger I (1229 LP)
```

## Parameters

1. **Region**: The server region of the player (e.g., `euw`, `na`)
2. **Riot ID/Summoner Name**: The player's unique identifier

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
