---
id: slotmachine
sidebar_label: "Slotmachine"
description: "Learn how to use the Slotmachine module in StreamElements Chatbot for an engaging chat game where viewers can wager points on a virtual slot machine."
keywords:
- chatbot
- module
- slotmachine
- StreamElements
- chat game
- points
- gambling
---

# Slotmachine Module

## Overview

The Slotmachine module is an interactive chat game that allows viewers to wager their points on a virtual slot machine. Players can win or lose points based on the outcome of the spin, adding an element of excitement to the stream chat.

## Usage

To start a game, viewers use the `!slots` command followed by the number of points they wish to wager. The slot machine then spins and displays a combination of emotes. If three matching emotes appear, the player wins and receives a payout based on their wager.

## Examples

1. Wager 100 points:
   ```
   !slots 100
   ```

2. Wager 50% of total points:
   ```
   !slots 50%
   ```

## Parameters

- `<points>`: The number of points to wager. This can be expressed in several ways:
  - As a whole number (e.g., `100`)
  - As a percentage of the user's total points (e.g., `50%`)
  - Using `k` to represent thousands (e.g., `5k` for 5,000)
  - Using `m` to represent millions (e.g., `1m` for 1,000,000)

## Related Commands

- [`!points`](../commands/default/points.md): Check your current point balance

## Configuration

Streamers can customize the following aspects of the Slotmachine module:

- Emotes used in the slot machine
- Minimum wager amount
