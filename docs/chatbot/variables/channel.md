---
id: channel
sidebar_label: "$(channel)"
description: "Learn how to use channel-specific variables in your StreamElements chatbot to display channel information on Twitch streams."
tags:
- chatbot
- variable
- twitch
- channel information
keywords:
- StreamElements chatbot
- Twitch channel variables
- stream viewer count
- follower count
- subscriber count
---

# Channel Variables

## Overview

Channel variables allow you to display dynamic information about your Twitch channel in chat messages or overlays. These variables provide real-time data such as channel name, viewer count, follower count, and subscriber information.

## Usage

To use a channel variable, simply include it in your chatbot command. The variable will be replaced with the corresponding value when the message is sent.

## Examples

Here are some examples of how to use channel variables:

```
Welcome to $(channel)! We currently have $(channel.viewers) viewers.
```

```
Thanks for watching! $(channel.display_name) has $(channel.followers) followers and $(channel.subs) subscribers.
```

## Available Variables

### $(channel)

Displays the name of the channel.

**Example:**
```
Welcome to $(channel)!
```
**Output:**
```
Welcome to styler!
```

### $(channel.viewers)

Displays the channel's current viewer count.

**Example:**
```
We have $(channel.viewers) viewers right now!
```
**Output:**
```
We have 100 viewers right now!
```

### $(channel.followers)

Displays the channel's total follower count.

**Example:**
```
Thanks to our $(channel.followers) followers!
```
**Output:**
```
Thanks to our 5000 followers!
```

### $(channel.subs)

Displays the channel's total subscriber count.

**Example:**
```
We've reached $(channel.subs) subscribers!
```
**Output:**
```
We've reached 500 subscribers!
```

### $(channel.subpoints)

Displays the channel's total subscriber points.

**Example:**
```
Current sub points: $(channel.subpoints)
```
**Output:**
```
Current sub points: 750
```

### $(channel.display_name)

Displays the display name of the channel, which may differ from the channel name in capitalization.

**Example:**
```
Welcome to $(channel.display_name)'s stream!
```
**Output:**
```
Welcome to OnSlAuGhT's stream!
```

## Related Variables

- [$(user)](user): Displays information about the user who triggered the command
- [$(touser)](touser): Refers to the target user in commands that mention other users

## FAQ

**Q: How often are these variables updated?**

A: Channel variables are updated in real-time, reflecting the most current information available from Twitch.

