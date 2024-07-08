---
id: cancelraffle
sidebar_label: "!cancelraffle"
description: "Immediately cancel an active raffle on your Twitch channel using the !cancelraffle command."
keywords:
- cancelraffle
- cancel twitch raffle
- stop twitch raffle
- end twitch giveaway
- halt twitch contest
---

# !cancelraffle

## Overview

The `!cancelraffle` command allows Twitch streamers to immediately halt any active raffle on their channel. This command is useful for quickly ending raffles.

## Usage

To cancel an ongoing raffle, simply type the command in your Twitch chat:

```
!cancelraffle
```

## Examples

### Example 1: Canceling a raffle

Streamer input:
```
!cancelraffle
```

Chatbot output:
```
The raffle was canceled!
```

### Example 2: Attempting to cancel when no raffle is active

Streamer input:
```
!cancelraffle
```

Chatbot output:
```
There is no active raffle to cancel.
```

## Parameters

This command does not require any parameters.

## Related Commands

- [`!raffle`](raffle.md): Starts a new raffle.
- [`!sraffle`](sraffle.md): Starts a new single raffle.

## Configuration

The `!cancelraffle` command is part of the [Raffle Module](../../modules/raffle). Ensure that this module is enabled in your StreamElements chatbot settings to use this command.

## Aliases

There are no default aliases for this command. However, you can create custom aliases in your StreamElements dashboard if desired.

## Customization

You can customize the response message for the `!cancelraffle` command in your StreamElements dashboard. This allows you to personalize the cancellation announcement to match your stream's style or provide additional information to your viewers.
