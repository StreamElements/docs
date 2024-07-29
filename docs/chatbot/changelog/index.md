---
id: changelog
sidebar_label: "Changelog"
description: "Stay updated with the latest changes and improvements to the StreamElements Chatbot."
tags:
- chatbot
- streamelements
- twitch
- changelog
keywords:
- chatbot updates
- new features
- bug fixes
- improvements
sidebar_position: 10
---

# Changelog

<!-- 
    Categories:
    - 🆕 New Features
    - 🛞 Improvements
    - 🐞 Bug Fixes
    - 📚 Documentation
    - 🔄 Deprecated
    - 🚀 Updates
 -->

## 29 July 2024

### 🛞 Improvements

- Fixed an issue with [Link Protection](../filters/links.md) which could flag emote combinations as links on YouTube

## 25 July 2024

### 🛞 Improvements

- Enhanced loyalty system for more dynamic point and watchtime distribution:
  - For partner channels: Points and watchtime now awarded at intervals between 1-10 minutes
  - For non-partner channels: Points and watchtime now awarded at intervals between 5-10 minutes
  - This replaces the previous fixed 10-minute interval for all channels

## 24 July 2024

### 📚 Documentation

- Updated existing documentation for clarity and accuracy
- Comprehensive documentation update for all [default commands](./commands/default) and [variables](./variables)
- Enhanced documentation for [`$(channel)`](./variables/channel), including previously missing arguments
- Improved documentation for [`$(user)`](./variables/user) & [`$(sender)`](./variables/sender) variables
