---
id: weather
sidebar_label: $(weather)
tags:
  - chatbot
  - variable
---

# Weather variable

### Description

The `$(weather)` variable displays current weather conditions for a specified location. It provides temperature, feels-like temperature, weather description, wind information, humidity, visibility, and air pressure.

### Usage

```
$(weather "location")
```

Replace *location* with the desired city and state/country.

### Examples

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

### Parameters

- `location`: The location for which you want to retrieve weather information. Format as "City, State" for US locations or "City, Country" for international locations.
