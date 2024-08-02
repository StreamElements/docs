---
id: command
sidebar_label: "!command"
description: "Manage chat commands with the !command feature in StreamElements chatbot"
keywords:
- streamelements
- chatbot
- commands
- add command
- remove command
- edit command
- alias command
- show command
- command options
- streamelements add command
---

# !command

## Overview

The `!command` feature allows you to manage chat commands for your StreamElements chatbot. It provides several subcommands to add, remove, edit, alias, show, and configure options for commands.

## Usage

The general syntax for using `!command` is:

```
!command <subcommand> [arguments]
```

## Subcommands

### add

Adds a new command to the chat.

**Usage:**
```
!command add <command> <response>
```

**Example:**
```
!command add !test This is a test command.
```

**Output:**
```
@User, successfully added command test.
```

### remove

Removes an existing command from the chat.

**Usage:**
```
!command remove <command>
```

**Example:**
```
!command remove !test
```

**Output:**
```
@User, successfully removed command test.
```

### edit

Edits an existing command in the chat.

**Usage:**
```
!command edit <command> <new_response>
```

**Example:**
```
!command edit !test This is an updated test command.
```

**Output:**
```
@User, successfully updated command test.
```

### alias

Shows the aliases of a command in the chat.

**Usage:**
```
!command alias <command>
```

**Example:**
```
!command alias !test
```

**Output:**
```
@User, aliases for command test: 1, 2, 3, 4, 5, 6.
```

### show

Displays the details of an existing command in the chat.

**Usage:**
```
!command show <command>
```

**Example:**
```
!command show !test
```

**Output:**
```
@User, command test: ${channel} This is a test command. ${settitle ${1:}}
```

### options

Adds advanced options to an existing command in the chat.

**Usage:**
```
!command options <command> <option> <value>
```

**Example:**
```
!command options !test -cd 10 -cost 100 -type whisper
```

**Output:**
```
@User, successfully updated command test.
```

## Parameters

The following options are available for the `options` subcommand:

| Option | Description |
|--------|-------------|
| `cd` | Cooldown time for the command |
| `usercd` | Cooldown time for the user |
| `cost` | Cost of the command |
| `level` | User level required to use the command |
| `type` | Type of the command (say, whisper, or reply) |
| `trigger` | Trigger for the command |
| `count` | Count of the command usage |
| `enable` | Enable the command |
| `disable` | Disable the command |

## Aliases

The `!command` feature has the following alias:
- `!cmd`

Additionally, some subcommands have their own aliases:

- `add`: `+`
- `remove`: `-`, `remove`, `delete`, `del`, `rem`
- `edit`: `edit`, `update`
- `alias`: `alias`, `aliases`
- `show`: `show`, `debug`
- `options`: `options`, `option`, `opt`, `opts`, `o`, `🔧`

## Customization

You can customize commands using various StreamElements variables and functions. For example:

- `${channel}`: Inserts the channel name
- `${settitle ${1:}}`: Allows setting a title with an optional parameter
