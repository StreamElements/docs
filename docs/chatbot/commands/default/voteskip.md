---
id: voteskip
title: Using the !voteskip Command for Media Requests
sidebar_label: "!voteskip"
description: "Learn how to use the !voteskip command in StreamElements chatbot to allow viewers to vote for skipping the current media request."
tags:
  - chatbot
  - commands
  - media
  - song request
  - engagement
keywords:
- voteskip
- skip song
- skip media
- media request
- chatbot commands
---
import PlatformBadges from '@site/src/components/PlatformBadges';
import ExampleChatInteraction from '@site/src/components/ExampleChatInteraction';

# !voteskip
<PlatformBadges supported={[ 'Twitch', 'YouTube' ]} />

## Overview

The `!voteskip` command is part of the StreamElements chatbot's media request feature. When enabled by the broadcaster, it allows viewers to vote for skipping the currently playing media request (such as a song or video).

## Usage

Viewers can use the command by typing `!voteskip` in the chat. Each use counts as one vote towards skipping the current media. The number of votes required to skip is determined by the broadcaster's settings.

## Examples

### Casting a vote
<ExampleChatInteraction
  inputPersona="viewer"
  inputUsernameOverride="User"
  inputMessage="!voteskip"
  outputMessage="@User Skip requested! Current song will be skipped in 4 more votes!"
/>

### Successful skip
<ExampleChatInteraction
  inputPersona="viewer"
  inputUsernameOverride="User"
  inputMessage="!voteskip"
  outputMessage="@User Vote to skip successful! Skipping to the next media request."
/>
