---
id: leagueoflegends
tags:
  - chatbot
  - variable
  - League of Legends
description: Outputs the summoner rank and LP of a specified League of Legends player
keywords:
  - streamelements lol rank command
  - league of legends command
---

# $(leagueoflegends)

Outputs the summoner rank and LP of a specified League of Legends player.

:::info Riot IDs
League of legends is transitioning to Riot IDs. This means that you will need to use your Riot ID instead of your summoner name.

During the transition period, you can use either your Riot ID or your summoner name. After the transition period, you will only be able to use your Riot ID.
:::

#### Parameters

This variable takes two parameters:

1. Region
2. Riot ID/Summoner Name

**NOTE:** If your Riot ID contains one or more spaces, you will need to wrap it in quotes.

#### Supported Regions

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

#### Example Input

```
$(leagueoflegends styler#euw euw)
$(leagueoflegends "styler#euw" euw)
```

#### Example Output

```
Current Rank: Challenger I (1229 LP)
```
