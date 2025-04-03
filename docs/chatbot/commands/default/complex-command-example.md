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

This page demonstrates how complex commands are displayed with our custom syntax highlighting.

## Command Syntax Examples

### Simple Command With Required Parameters

```secommand
!command <parameter1> <parameter2>
```

### Command With Optional Parameters

```secommand
!command <required> [optional]
```

### Command With Multiple Options

```secommand
!points [add/remove/set] <username> <amount>
```

### Complex Command Structure

```secommand
!giveaway start <prize> <duration> [winners] [requirements]
```

## How It Works

Our custom syntax highlighting makes it easy to distinguish:

- The command name (orange)
- Required parameters (blue, within `<>`)
- Optional parameters (purple, within `[]`)

This makes it easier for users to understand command structure at a glance. 
