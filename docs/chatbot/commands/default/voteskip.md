---
id: voteskip
sidebar_label: "!voteskip"
description: "Learn how to use the !voteskip command in StreamElements chatbot to allow viewers to vote for skipping the current media request."
keywords:
- voteskip
- skip song
- skip media
- media request
- chatbot commands
---

# !voteskip

## Overview

The `!voteskip` command is part of the StreamElements chatbot's media request feature. When enabled by the broadcaster, it allows viewers to vote for skipping the currently playing media request (such as a song or video).

## Usage

Viewers can use the command by typing `!voteskip` in the chat. Each use counts as one vote towards skipping the current media. The number of votes required to skip is determined by the broadcaster's settings.

## Examples

### Example 1: Casting a vote

**User input:**
```
!voteskip
```

**Chatbot response:**
```
@User Skip requested! Current song will be skipped in 4 more votes!
```

### Example 2: Successful skip

**User input:**
```
!voteskip
```

**Chatbot response:**
```
@User Vote to skip successful! Skipping to the next media request.
```

## Parameters

The `!voteskip` command does not accept any parameters.

## Related Commands

- [!song](song.md): Displays information about the currently playing song or media
- [!wrongsong](wrongsong.md): Allows users to remove their own song request from the queue
- [!songrequest](songrequest.md): Lets viewers request songs or media to be played

## Configuration

Broadcasters can configure the voteskip feature in the StreamElements dashboard:

1. Go to the StreamElements dashboard
2. Navigate to the "Media Request" section
3. Look for the "Vote Skip" settings
4. Adjust options such as:
   - Enable/disable vote skip feature
   - Set the number of votes required to skip

These settings allow broadcasters to fine-tune how the !voteskip command works in their channel, balancing viewer engagement with content control.

For more details, visit the [StreamElements Media Request Settings page](https://streamelements.com/dashboard/mediarequest/settings).
