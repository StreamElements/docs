---
id: watchtime
title: Using the !watchtime Command to Check Viewer Watch Time
sidebar_label: "!watchtime"
description: "Display viewer watch time with the !watchtime command to enhance engagement on your Twitch stream."
tags:
  - chatbot
  - commands
  - loyalty
  - stream-info
  - engagement
keywords:
- watchtime command
- Twitch chatbot commands
- viewer engagement
- stream interaction
- loyalty tracking
---
import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

# !watchtime
<PlatformBadges supported={[ 'Twitch', 'YouTube' ]} />

## Overview

The `!watchtime` command allows viewers to check how long they've been watching the stream. This feature helps enhance viewer engagement and loyalty by providing a tangible measure of their time spent in the channel. **Note:** This command requires the StreamElements loyalty system to be enabled.

## Usage

To use the `!watchtime` command, simply type it in the chat. You can also check the watch time of other users by including their username.

```
!watchtime [username]
```

## Examples

### Check your own watch time
<ExampleChatInteraction
  inputPersona="viewer"
  inputUsernameOverride="Styler"
  inputMessage="!watchtime"
  outputMessage="Styler has spent 20 mins watching styler"
/>

### Check another user's watch time
<ExampleChatInteraction
  inputPersona="viewer"
  inputMessage="!watchtime ChatEnthusiast"
  outputMessage="ChatEnthusiast has spent 2 hours and 15 mins watching styler"
/>

## Parameters

| Parameter    | Required | Description                                                                                                    | Example         |
| :----------- | :------- | :------------------------------------------------------------------------------------------------------------- | :-------------- |
| `[username]` | No       | The username of the viewer whose watch time you want to check. If omitted, checks the command issuer's time. | `ChatEnthusiast`|

