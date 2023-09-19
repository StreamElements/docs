# !permit

The `!permit` command is used to prevent a viewer from getting timed out. By default, the duration is 60 seconds.

### Arguments

- `username`: The username of the viewer who should be prevented from getting timed out.
- `duration` (optional): The duration in seconds for which the viewer should be prevented from getting timed out. If no duration is provided, the default is 60 seconds.

#### Example Input

```
!permit darkoe

!permit darkoe 120
```

#### Example Output

```
@Darkoe, you will not get timed out for the next 60 seconds.

@darkoe, you will not get timed out for the next 120 seconds. 
```
