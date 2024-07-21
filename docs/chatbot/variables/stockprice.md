---
id: stockprice
sidebar_label: "$(stockprice)"
description: "Display real-time stock prices in your stream chat using the $(stockprice) variable. Learn usage, examples, and parameters."
tags:
  - chatbot
  - variable
  - finance
keywords:
  - stock price
  - financial data
  - stream chat
  - real-time quotes
---

# $(stockprice) Variable

## Overview

The `$(stockprice)` variable allows you to display the current stock price of a specified company directly in your stream chat. This feature is useful for finance-focused streams or for viewers interested in real-time market data.

## Usage

To use the `$(stockprice)` variable, you need to include it in your chat message along with the stock symbol of the company you want to check. The syntax is:

```
$(stockprice SYMBOL)
```

Replace `SYMBOL` with the actual stock symbol of the company you're interested in.

## Examples

Here are two practical examples of how to use the `$(stockprice)` variable:

1. Checking Apple's stock price:
   ```
   The current price of Apple stock is: $(stockprice AAPL)
   ```
   Output: `The current price of Apple stock is: 173.93`

2. Comparing two tech stocks:
   ```
   Current prices: Microsoft $(stockprice MSFT) vs Google $(stockprice GOOGL)
   ```
   Output: `Current prices: Microsoft 285.76 vs Google 2232.88`

## Parameters

The `$(stockprice)` variable requires one parameter:

- `SYMBOL`: The stock symbol of the company you want to check. This is typically a 1-5 letter code used on stock exchanges.

## FAQ

**Q: How often is the stock price updated?**

A: The stock price is fetched in real-time when the command is used, but may have a slight delay (usually less than a minute) depending on the data provider.

**Q: Can I use this for cryptocurrency prices?**

A: No, this variable is specifically for stock prices.

**Q: What happens if I enter an invalid stock symbol?**

A: If you enter an invalid or non-existent stock symbol, the variable will typically return an error message or no value.
