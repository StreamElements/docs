# !quote

### Overview

The `!quote` command is used to add, remove, and display quotes in the chat.

Without any arguments, this command will display a random quote from the chat.

---

### !quote add

#### Overview

The `!quote add` subcommand is used to add a quote to the chat. This command will error if the quote already exists.

#### aliases

- \+

#### Arguments

- `quote` (required): The quote to add to the chat.

#### Usage

```
!quote add <quote>
```

#### Example Input

```
!quote add This is a test quote.
```

#### Example Output

```
@Styler, successfully added quote 1. 
```

### !quote remove

#### Overview

The `!quote remove` subcommand is used to remove an existing quote from the chat. This command will error if the quote does not exist.

#### aliases

- \-

#### Arguments

- `id` (required): The quote to remove from the chat.

#### Usage

```
!quote remove <id>
```

#### Example Input

```
!quote remove 1
```

#### Example Output

```
@Styler, successfully removed quote 1. 
```
