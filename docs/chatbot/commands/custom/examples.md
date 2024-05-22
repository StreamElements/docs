# Examples

Commands can be created in either the dashboard or in chat. 
These examples create custom commands directly in chat, but
you can just aswell create these commands by pasting them
into your dashboard.
Please refer to [Custom Commands](index.md)

### The simplest command

The simplest type of command just responds with text

#### Creating the command

```
!command add test This is a test command
```

#### Example input

```
!test
```

#### Example output

```
This is a test command
```

### Accepting arguments in a command
Arguments can be used with `${}` and the number of the passed argument

```
!command add greet Welcome to the stream ${1}!
```

#### Example input

```
!greet styler
```

#### Example output

```
Welcome to the stream styler!
```

### Accepting multiple arguments in a command
Arguments can be used with `${}` and the number of the passed argument.
If you pass the wrong number of arguments, the command won't run.

```
!command add greet Welcome to the stream ${1} and ${2}!
```

#### Example input

```
!greet styler styler2
```

#### Example output

```
Welcome to the stream styler and styler2!
```

### Using Variables

Chat commands support variables in a dynamic way. Variables are placeholders that can be used in chat commands to represent a specific value or piece of information. When a command is triggered, these variables are replaced with the actual values they represent. See [Variables](../../Variables)

```
!command add shoutout Check out ${1}, they are playing ${game ${1}} at https://twitch.tv/${channel ${1}}
```

#### Example input

```
!shoutout styler
```

#### Example output

```
Check out styler, they are playing Minecraft at https://twitch.tv/styler
```

### Setting permission level

You may may want to restrict who can use what command:

```
!command options shoutout -level 500
```
This only allows users with access level `moderator` or higher to use the command.
For a list of all available access levels see [!level](../default/level)

