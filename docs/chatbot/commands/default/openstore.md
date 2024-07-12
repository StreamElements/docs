---
id: openstore
sidebar_label: "!openstore"
description: "Learn how to use the !openstore command to enable all regular items in your StreamElements loyalty store. Easily manage your store with this simple command."
keywords:
- openstore
- enable items
- loyalty store
- stream store
- chatbot command
---

# !openstore

## Overview

The `!openstore` command is a powerful tool that enables all regular items in your StreamElements loyalty store that were previously disabled. This command provides a quick and efficient way to manage your store's inventory, allowing you to make multiple items available to your viewers with a single action.

## Usage

To use the `!openstore` command, simply type it in your stream chat. The command doesn't require any additional arguments or parameters.

```
!openstore
```

When executed, the command will enable all regular items in your loyalty store that are currently disabled. After processing, it will provide feedback on how many items were updated.

## Examples

### Example 1: Basic Usage

**Input:**
```
!openstore
```

**Output:**
```
@Styler, successfully updated 13 items.
```

In this example, the command enabled 13 previously disabled items in the loyalty store.

### Example 2: No Items to Update

**Input:**
```
!openstore
```

**Output:**
```
@Styler, no items were updated. All regular items are already enabled.
```

This example shows the response when all regular items in the store are already enabled.

## Related Commands

- [`!closestore`](closestore.md) - Disables all regular items in the loyalty store

## Configuration

The `!openstore` command is typically available to moderators and the broadcaster by default. You can adjust the permission levels for this command in your StreamElements dashboard under the Chatbot settings.
