---
id: time
tags:
  - chatbot
  - variable
---

# $(time)

## $(time.timezone)

Displays the time in the given timezone. A list can be found here [Timezones](https://nodatime.org/TimeZones).

#### Parameters

This variable accepts a timezone as input. If no timezone is provided the variable will return UTC time. In case timezone is unknown, the variable will error.

#### Example Input

```
${time.America/New_York}
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

This variable accepts a timezone as input in format [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). If no timezone is provided, the variable returns UTC time. In the format is wrong, the variable will error.

#### Example Input

```
next stream in ${time.until 19:00}
next stream in ${time.until 2024-06-20T19:00:00-03:00}
```

#### Example Output

```
next stream in 7 hours 59 mins
next stream in 1 day 11 hours 
```

#### Example Error

```
parsing time "19:00:00-03:00" as "2006-01-02T15:04:05Z07:00": cannot parse "19:00:00-03:00" as "2006"
```
