---
id: time
---

# $(time)

## $(time.timezone)

Displays the time in the given timezone. A list can be found here: <https://nodatime.org/TimeZones>

#### Parameters

This variable accepts a timezone as input. If no timezone is provided the variable will error.

#### Example Input

```
${time.CET}
```

#### Example Output

```
15:04
```

#### Example Error

```
unknown time zone lol 
```

## $(time.until)

Displays a countdown until an inputted UTC timestamp.

#### Parameters

This variable accepts a timezone as input. If no timezone is provided the variable will error.

#### Example Input

```
next stream in ${time.until 19:00}
```

#### Example Output

```
next stream in 7 hours 59 mins
```
