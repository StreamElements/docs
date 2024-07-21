---
id: time
sidebar_label: "$(time)"
description: "Learn how to use StreamElements Chatbot time variables to display current time and countdowns in your stream chat."
tags:
  - chatbot
  - variable
  - time
keywords:
  - streamelements
  - chatbot
  - time variable
  - timezone
  - countdown
---

# Time Variables

:::caution Important: Use IANA Timezones

When using the `$(time.timezone)` variable, always use **IANA Timezone** names. These are standardized identifiers like "America/New_York" or "Europe/London". Do not use abbreviations like EST or GMT, as they can be ambiguous.

Find the correct IANA Timezone name for your location at [https://nodatime.org/TimeZones](https://nodatime.org/TimeZones).
:::

## Overview

StreamElements Chatbot offers two powerful time-related variables:

1. `$(time.timezone)`: Displays the current time in a specified timezone
2. `$(time.until)`: Creates a countdown to a specified UTC timestamp

These variables allow you to enhance your stream chat with real-time clock displays and event countdowns.

## $(time.timezone)

### Usage

```
$(time.timezone <timezone>)
```

If no timezone is provided, the variable will return UTC time.

### Parameters

- `<timezone>`: (Optional) The desired timezone in IANA format. If omitted, UTC is used.

A list of valid IANA timezones can be found at [Nodatime Timezones](https://nodatime.org/TimeZones).

### Examples

1. Display time in New York:
   ```
   The current time in New York is $(time.timezone America/New_York)
   ```

2. Display UTC time:
   ```
   The current UTC time is $(time.UTC)
   ```

## $(time.until)

### Usage

```
$(time.until <timestamp>)
```

### Parameters

- `<timestamp>`: The target UTC timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.

### Examples

1. Countdown to a specific time today:
   ```
   Next stream starts in $(time.until 19:00)
   ```

2. Countdown to a future date and time:
   ```
   Upcoming event in $(time.until 2024-09-20T19:00:00-03:00)
   ```

## Common Use Cases

1. **Displaying Local Time**: Use `$(time.timezone)` to show the streamer's local time or the time in different viewers' locations.

2. **Event Countdowns**: Use `$(time.until)` to create excitement for upcoming streams, game releases, or special events.

3. **Multi-Timezone Scheduling**: Display multiple timezones simultaneously for international audiences.

4. **Dynamic Stream Information**: Incorporate time variables into stream titles or chat commands to provide real-time updates.

## Best Practices

1. Always use IANA timezone names with `$(time.timezone)` to ensure accuracy and avoid ambiguity.
2. Use clear and consistent timestamp formats with `$(time.until)` to ensure accuracy.
3. Consider creating custom commands that combine both variables for comprehensive time information.

## Troubleshooting

### Common Errors

1. **Invalid Timezone**:
   - Error message: `unknown time zone lol`
   - Solution: Double-check the timezone name against the [Nodatime Timezones](https://nodatime.org/TimeZones) list. Ensure you're using the full IANA name (e.g., "America/Los_Angeles" instead of "PST").

2. **Invalid Timestamp Format**:
   - Error message: `parsing time "19:00:00-03:00" as "2006-01-02T15:04:05Z07:00": cannot parse "19:00:00-03:00" as "2006"`
   - Solution: Ensure your timestamp follows the ISO 8601 format.

## FAQ

**Q: Can I use these variables in custom commands?**

A: Yes, you can incorporate these time variables into your custom chat commands for added functionality.

**Q: How often do the time variables update?**
A: The variables update in real-time with each use, providing current information every time they're called.

**Q: Can I use abbreviations like EST or GMT with $(time.timezone)?**

A: No, always use full IANA timezone names like "America/New_York" or "Europe/London" to avoid ambiguity and ensure correct time display.

**Q: Can I use these variables to schedule automated messages?**

A: While the variables themselves don't schedule messages, you can use them in combination with StreamElements' scheduling features to create time-based automated messages.

## Additional Resources

- [StreamElements Documentation](https://dev.streamelements.com/docs)
- [ISO 8601 Time Format](https://en.wikipedia.org/wiki/ISO_8601)
- [IANA Time Zone Database](https://www.iana.org/time-zones)
- [Working with Timezones](https://www.timeanddate.com/time/time-zones.html)
