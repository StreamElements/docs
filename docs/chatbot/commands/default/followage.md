---
id: followage
title: Using the !followage Command to Check Follow Duration
sidebar_label: "!followage"
description: "Learn how the StreamElements !followage command allows users to check how long they or another user have been following a Twitch channel."
tags:
  - chatbot
  - commands
  - twitch
  - followers
  - utility
keywords:
- followage
- followage command
- followage twitch
- check followage
- follower duration
- twitch followers
- how to check followage on twitch
- streamelements
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

<PlatformBadges supported={["Twitch"]} />

## Overview

The `!followage` command checks the Twitch API to determine how long a specified user has been following a specified channel. It provides the duration in years, months, days, and hours.

## Usage / Syntax

Check follow duration using the following syntax:

```
!followage [target_username] [target_channel]
```

## Parameters / Configuration / Options

| Parameter           | Required | Description                                                                                   | Example      |
| :------------------ | :------- | :-------------------------------------------------------------------------------------------- | :----------- |
| `[target_username]` | Optional | The user whose follow duration you want to check. Defaults to the user typing the command.    | `OtherViewer`|
| `[target_channel]`  | Optional | The Twitch channel name to check the follow against. Defaults to the current channel.       | `StreamerName`|

- **Permissions**: Typically available to all viewers.

## Examples

Check your own follow age in the current channel:

<ExampleChatInteraction
  inputPersona="viewer"
  inputUsernameOverride="ViewerA"
  inputMessage="!followage"
  outputMessage="@ViewerA, ViewerA has been following CurrentChannel for 1 year 2 months 3 days 4 hours"
/>

Check another user's follow age in the current channel:

<ExampleChatInteraction
  inputPersona="viewer"
  inputUsernameOverride="ViewerA"
  inputMessage="!followage ViewerB"
  outputMessage="@ViewerA, ViewerB has been following CurrentChannel for 6 months 10 days 1 hour"
/>

Check another user's follow age in a different channel:

<ExampleChatInteraction
  inputPersona="viewer"
  inputUsernameOverride="ViewerA"
  inputMessage="!followage ViewerB StreamerName"
  outputMessage="@ViewerA, ViewerB has been following StreamerName for 2 years 0 months 5 days 12 hours"
/>

When the user is not following:

<ExampleChatInteraction
  inputPersona="viewer"
  inputUsernameOverride="ViewerA"
  inputMessage="!followage NonFollower StreamerName"
  outputMessage="@ViewerA, NonFollower is not following StreamerName"
/>
