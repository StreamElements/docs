# !command

### Overview

The `!command` command is used to manage chat commands. It has six subcommands:

- `add`: This subcommand is used to add a new command to the chat.
- `remove`: This subcommand is used to remove an existing command from the chat.
- `edit`: This subcommand is used to edit an existing command in the chat.
- `alias`: This subcommand is used to create an alias for an existing command in the chat.
- `show`: This subcommand is used to display the details of an existing command in the chat.
- `options`: This subcommand is used to add advanced options to an existing command in the chat.

#### Alises

- !cmd

### !command add

#### Overview

The `!command add` subcommand is used to add a new command to the chat. This command will error if the command already exists.

#### aliases

- \+

#### Arguments

- `command` (required): The name of the command to add.
- `response` (required): The response of the command to add.

#### Usage

```
!command add <command> <response>
```

#### Example Input

```
!command add test This is a test command.
```

#### Example Output

```
@Styler, successfully added command test123123. 
```

### !command remove

#### Overview

The `!command remove` subcommand is used to remove an existing command from the chat. This command will error if the command does not exist.

#### aliases

- \-
- remove
- delete
- del
- rem

#### Arguments

- `command` (required): The name of the command to remove.

#### Usage

```
!command remove <command>
```

#### Example Input

```
!command remove test
```

#### Example Output

```
@Styler, successfully removed command test123123.
```

#### Example Error

```
@Styler, no command with trigger test. found :/ 
```

### !command edit

#### Overview

The `!command edit` subcommand is used to edit an existing command in the chat. This command will error if the command does not exist.

#### aliases

- edit
- update

#### Arguments

- `command` (required): The name of the command to edit.
- `response` (required): The new response of the command.

#### Usage

```
!command edit <command> <response>
```

#### Example Input

```
!command edit test This is a new response.
```

#### Example Output

```
@Styler, successfully updated command test. 
```

#### Example Error

```
@Styler, no command with trigger test_xd found :/ 
```

### !command alias

#### Overview

The `!command alias` subcommand is used to see the aliases of a command in the chat. This command will error if the command does not exist.

#### aliases

- alias
- aliases

#### Arguments

- `command` (required): The name of the command to see the aliases of.

#### Usage

```
!command alias <command>
```

#### Example Input

```
!command alias test
```

#### Example Output

```
@Styler, aliases for command test: 1, 2, 3, 4, 5, 6. 
```

#### Example Error

```
@Styler, no command with trigger test found :/ 
```

### !command show

#### Overview

The `!command show` subcommand is used to see the details of a command in the chat. This command will error if the command does not exist.

#### aliases

- show
- debug

#### Arguments

- `command` (required): The name of the command to see the details of.

#### Usage

```
!command show <command>
```

#### Example Input

```
!command show test
```

#### Example Output

```
@Styler, command test: ${channel} This is a test command. ${settitle ${1:}}
```

#### Example Error

```
@Styler, no command with trigger test found :/ 
```

### !command options

#### Overview

The `!command options` subcommand is used to add advanced options to an existing command in the chat. This command will error if the command does not exist.

#### aliases

- options
- option
- opt
- opts
- o
- 🔧

#### Arguments

Option | Description
--- | ---
`cd` | Cooldown time for the command
`usercd` | Cooldown time for the user
`cost` | Cost of the command
`level` | User level required to use the command
`type` | Type of the command
`trigger` | Trigger for the command
`count` | Count of the command usage
`enable` | Enable the command
`disable` | Disable the command

#### Usage

```
!command options <command> <option> <value>
```

Multiple options can be specified by separating them with a space.

#### Example Input

```
!command options test -cd 10 -cost 100 -type whisper
```

#### Example Output

```
@Styler, successfully updated command test. 
```

#### Example Error

```
@Styler, Valid flags: -cd (number) -usercd (number) -cost (number) -level (number) -type (say, whisper or reply) -count (number) -enable -disable 
```
