---
id: setgame
sidebar_label: "$(setgame)"
description: "Learn how to use the $(setgame) variable to change the stream game in StreamElements Chatbot. Includes usage, examples, and parameters."
tags:
  - chatbot
  - variable
  - stream management
keywords:
  - StreamElements
  - chatbot
  - game category
  - stream title
  - Twitch
---

# $(setgame)

## Overview

The `$(setgame)` variable allows you to change the current game or category for your stream directly through the StreamElements Chatbot.

## Usage

To use this variable, include it in a command or message with the desired game name as a parameter.

Syntax: `$(setgame "Game Name")`

**Note:** The game name must be enclosed in quotation marks.

## Examples

1. Changing the game to World of Warcraft:
   ```
   $(setgame "World of Warcraft")
   ```

2. Updating the stream category to Just Chatting:
   ```
   $(setgame "Just Chatting")
   ```

3. Using an abbreviation:
   ```
   $(setgame "OSRS")
   ```

## Parameters

The `$(setgame)` variable accepts one parameter:

- `"Game Name"`: The title of the game you want to set for your stream. This parameter supports fuzzy searching, allowing for slight misspellings or common abbreviations.

## Related Variables

- [`$(settitle)`](settitle.md): Changes the stream title
- [`$(game)`](game.md): Retrieves the current game or category

## FAQ

**Q: What happens if I don't provide a game name?**

A: If no game name is provided, the variable will return an error message.

**Q: Can I use this variable in any chat message?**

A: Typically, this variable is used within custom commands or bot responses. Make sure to set appropriate permission levels to prevent misuse.

**Q: Will this work for all streaming platforms?**
A: The `$(setgame)` variable is designed to work with platforms that support game/category changes through the StreamElements API. It's primarily used for Twitch streams.
