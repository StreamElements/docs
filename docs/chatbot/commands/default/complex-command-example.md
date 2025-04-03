---
id: complex-command-example
sidebar_label: "Complex Command Example"
description: "Example of complex command syntax highlighting in the StreamElements chatbot documentation"
tags:
  - chatbot
  - commands
  - syntax
keywords:
  - complex commands
  - command syntax
  - StreamElements chatbot
  - command options
  - command parameters
---

# Complex Command Example

import PlatformBadges from '@site/src/components/PlatformBadges';

<PlatformBadges supported={[ 'Twitch', 'YouTube', 'Kick' ]} />

## Overview

This page demonstrates how complex commands are displayed with our enhanced syntax highlighting.

## Command Syntax Examples

### Basic Command With Parameters

```streamelements
!addpoints <username> <amount>
```

### Command With Subcommands

```streamelements
!points add <username> <amount>
!points remove <username> <amount>
```

### Command With Optional Parameters

```streamelements
!giveaway start <prize> [winners] [duration]
```

### Command With Flags

```streamelements
!poll create <question> --duration 60 --options "Yes" "No" "Maybe"
```

### Command With Variables

```streamelements
!shoutout <username> ${channel.game} has been streaming for $(channel.uptime)
```

### Command With Variable Formats

Both variable formats are supported:

```streamelements
!winner The winner is ${user.name} (aka $(user.displayName)) with $(pointsName): ${user.points}!
```

### Command With Special Keywords and Numbers

```streamelements
!raffle start <prize> --winners 3 --allow-subscribers true --entries all
```

## Color Coding Key

Our enhanced syntax highlighting makes commands easier to understand with color coding:

- **Commands** (orange): The primary command name (e.g., `!points`)
- **Subcommands** (light orange): Secondary commands (e.g., `add` in `!points add`)
- **Required parameters** (blue): Mandatory inputs in `<angle brackets>`
- **Optional parameters** (purple): Optional inputs in `[square brackets]`
- **Flags** (teal): Command flags like `--duration`
- **Numbers** (red): Numeric values
- **Variables** (green): Dynamic values like `${channel.uptime}` or `$(user.name)`
- **Keywords** (gold): Special keywords like `true`, `false`, `all`

This visual distinction helps users quickly understand command structure and required inputs. 
