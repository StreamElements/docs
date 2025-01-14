---
id: timers
sidebar_label: "Timers"
description: "Learn how to set up and optimize automated messages using StreamElements Chatbot Timers for enhanced stream engagement."
tags:
  - chatbot
  - timers
  - stream automation
  - viewer engagement
keywords:
  - StreamElements timers
  - automated chat messages
  - stream reminders
  - chat engagement
  - Twitch bot timers
  - YouTube live chat automation
  - streamer tools
  - chat management
---

# Chatbot Timers

Chatbot timers are automated messages or actions that occur at specified intervals during a live stream. They serve to remind viewers about certain aspects of the stream, such as rules or upcoming events, and can also be used to automatically execute commands at regular intervals.

### Settings

#### Messages

Each timer can be configured with multiple messages, which will be cycled through each time the timer is activated. Timers can be set to run both while live and offline, or can be configured to run only in one of these states.

#### Interval

The frequency of each timer can be set in minutes, determining how often it will be activated. Additionally, a minimum amount of chat lines that must be sent in the interval for the timer to be activated can be set, ensuring the timer only runs when chat activity is high enough.

#### Chat lines

The minimum number of chat messages that must be sent before a timer can be executed. This allows you to prevent timers from spamming the chat when there is less chatroom activity.

#### Conditions (new)

Timers can now be configured with specific conditions. This allows a timer to be activated only when a particular condition is fulfilled. For instance, a timer can be set to run exclusively when the stream is categorized under "Just Chatting", or if the stream title includes a specific keyword.

You can find your timers here: [Dashboard](https://streamelements.com/dashboard/bot/timers)
