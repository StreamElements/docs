---
id: emotepyramid
sidebar_label: "Emote Pyramid"
description: "Learn how to use and manage the Emote Pyramid chat game in StreamElements Chatbot. Engage your viewers with this fun and interactive emote-based challenge."
keywords:
- emote pyramid
- chat game
- StreamElements
- chatbot
- viewer engagement
---

# Emote Pyramid Module

## Overview

The Emote Pyramid is an engaging chat game that encourages viewer participation and creates a fun atmosphere in your stream. Players attempt to collaboratively build a pyramid of emotes in the chat, increasing the challenge and excitement as the pyramid grows.

## Usage

The Emote Pyramid game doesn't require any specific commands to start. It begins organically when viewers participate by following these steps:

1. A viewer initiates the game by sending a single emote in the chat.
2. Subsequent messages should contain the same emote, with the number of repetitions increasing by one each time.
3. The game continues until the pyramid is successfully completed or interrupted.

**Note:** The pyramid is considered interrupted if:
- Another user sends a different message.
- The same emote is not repeated the correct number of times.

## Examples

### Successful Emote Pyramid

```
Viewer1: PogChamp
Viewer2: PogChamp PogChamp
Viewer3: PogChamp PogChamp PogChamp
Viewer4: PogChamp PogChamp PogChamp PogChamp
Viewer5: PogChamp PogChamp PogChamp
Viewer6: PogChamp PogChamp
Viewer7: PogChamp
Chatbot: nice 4-width Kappa pyramid Styler LUL 
```

### Interrupted Emote Pyramid

```
Viewer1: Kappa
Viewer2: Kappa Kappa
Viewer3: Kappa Kappa Kappa
Viewer4: Nice try!
Viewer5: Kappa Kappa Kappa Kappa
```

In this example, the pyramid was interrupted by Viewer4's message.

## Configuration

The Emote Pyramid feature doesn't require any specific configuration. It's an organic chat game that relies on viewer participation.
