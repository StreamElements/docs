---
id: weather
sidebar_label: "$(weather)"
description: "Learn how to use the $(weather) variable to display current weather conditions for any location in your StreamElements chatbot."
tags:
  - chatbot
  - variable
  - weather
keywords:
  - StreamElements
  - chatbot
  - weather
  - temperature
  - wind
  - humidity
---

# $(weather) Variable

## Overview

The `$(weather)` variable allows you to display current weather conditions for a specified location in your StreamElements chatbot. It provides comprehensive information including temperature, feels-like temperature, weather description, wind details, humidity, visibility, and air pressure.

:::warning
Weather data is provided by third-party sources and may not reflect current geopolitical boundaries. 
:::

## Usage

To use the `$(weather)` variable, follow this syntax:

```
$(weather "location")
```

Replace *location* with the desired city and state/country.

## Examples

1. Getting weather for New York City:

```
$(weather "New York, NY")
```

Output:
```
New York, United States of America: 🌞 27.2 °C (81.0 °F). Feels like 29.5 °C (85.2 °F). Partly cloudy. Wind is blowing from the North at 3.6 km/h (2.2 mp/h). 58% humidity. Visibility: 16 km (9 miles). Air pressure: 1016 hPa.
```

2. Getting weather for London, UK:

```
$(weather "London, UK")
```

Output:
```
London, United Kingdom: 🌞 13.1 °C (55.6 °F). Feels like 11.7 °C (53.0 °F). Moderate or heavy rain with thunder. Wind is blowing from the West at 13.0 km/h (8.1 mp/h). 88% humidity. Visibility: 7 km (4 miles). Air pressure: 1009 hPa.
```

## Parameters

The `$(weather)` variable accepts one parameter:

- `location`: The location for which you want to retrieve weather information. Format as "City, State" for US locations or "City, Country" for international locations.

## FAQ

1. **How often is the weather data updated?**
   The weather data is typically updated every 10-15 minutes.

2. **Can I display the temperature in Fahrenheit instead of Celsius?**
   The variable automatically displays both Celsius and Fahrenheit temperatures.

3. **What happens if I enter an invalid location?**
   If you enter an invalid or unrecognized location, the chatbot will respond with an error message.
