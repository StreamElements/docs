---
id: permit
sidebar_label: "!permit"
description: "Learn how to use the !permit command in StreamElements chatbot to temporarily prevent viewers from getting timed out"
keywords:
- permit command
- prevent timeout
- moderation commands
- chatbot commands
- StreamElements
---

# !permit

## Overview

The `!permit` command is a moderation tool used in StreamElements chatbot to temporarily prevent a specific viewer from being timed out. This command is useful when you want to allow a viewer to post links or other content that might normally trigger an automatic timeout.

## Usage

```
!permit <username> [duration]
```

## Parameters

- `<username>`: The name of the viewer to be exempted from timeouts.
- `[duration]` (optional): The number of seconds the permit should last. If not specified, the default is 60 seconds.

## Examples

1. Permit a user for the default duration:
   ```
   !permit darkoe
   ```
   Output:
   ```
   @Darkoe, you will not get timed out for the next 60 seconds.
   ```

2. Permit a user for a custom duration:
   ```
   !permit darkoe 120
   ```
   Output:
   ```
   @darkoe, you will not get timed out for the next 120 seconds.
   ```

## Configuration

The `!permit` command is available by default in StreamElements chatbot. Moderators and the broadcaster can use this command without additional configuration.

## Aliases

There are no default aliases for the `!permit` command. However, you can create custom aliases in your StreamElements dashboard if desired.
