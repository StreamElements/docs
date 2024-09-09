---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
description: Create an overlay with StreamElements - Custom widgets, alerts, and more for Twitch and YouTube Live.
tags:
  - overlays
  - streamelements
  - custom widgets
  - alerts
  - stream design
keywords:
  - StreamElements Overlays
  - Custom stream widgets
  - Twitch overlays
  - YouTube Live overlays
  - Stream alerts
  - Overlay editor
  - Stream design tools
sidebar_position: 1
---

# Getting Started

This guide explains how to create a Custom Widget or Custom Code AlertBox using StreamElements' Overlay Editor UI.

We'll start by creating an Overlay, then add widgets like an AlertBox and a Custom Widget, which you can edit.

## Creating an Overlay

1. Navigate to the [Overlays](https://streamelements.com/dashboard/overlays) section.
2. Click the **NEW OVERLAY** button.

![New Overlay button](img/new-overlay-button.png)

3. Choose your resolution and click the **START** button.

:::tip
Overlay size: Usually it should match your stream's resolution, or be smaller if you'd like to do the repositioning in your broadcasting software.
:::

## AlertBox

The AlertBox is a native widget that displays live events from the queue in a popup-like behavior.

To create an AlertBox:

1. Click the **+** button in the overlay editor.

![New widget plus button](img/new-widget-plus-button.png)

2. Select **AlertBox** in the **ALERTS** section.

![New widget alert box](img/new-widget-alert-box.png)

### Enabling Custom Code for AlertBox

To enable custom code for AlertBox:

1. Open options for AlertBox.
2. Go to the "Followers" tab.
3. Toggle the "Enable custom CSS" option for the alert type you want to use.

![Alert box CSS editor](img/alert-box-css-editor.gif)

## Custom Widget

The Custom Widget is a native widget that you can use to display any content you want. It's ideal for displaying your own content in the overlay and can consume local events (like tips, follows, etc.) as well as remote events read from a websocket or REST API.

To create a Custom Widget:

1. Click the **+** button in the overlay editor.

![New widget plus button](img/new-widget-plus-button.png)

2. Select **Custom Widget** in the **STATIC/CUSTOM** section.

![New widget custom code](img/new-widget-custom-code.png)
