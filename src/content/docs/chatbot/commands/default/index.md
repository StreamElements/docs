---
title: Default Commands
description: "Reference of all default StreamElements Chatbot commands, grouped by category, with usage and configuration links."
sidebar:
  label: Overview
  order: 0
keywords:
  - default commands
  - streamelements chatbot
  - stream management
  - streamelements commands
  - twitch bot commands
  - youtube live chat commands
  - chatbot automation
  - streamer tools
  - viewer interaction
---

Default commands are pre-configured chat commands available in the StreamElements Chatbot. These commands provide essential functionality for streamers, moderators, and viewers to interact with the chat and manage the stream.

Below is the full list of default commands, grouped by what they do. Click on each command to learn more about its usage, parameters, and configuration options.

## Points & Loyalty

| Command | Description |
| --- | --- |
| [`!addpoints`](/chatbot/commands/default/addpoints) | Moderators add loyalty points to a viewer. |
| [`!givepoints`](/chatbot/commands/default/givepoints) | Transfer your loyalty points to another user. |
| [`!leaderboard`](/chatbot/commands/default/leaderboard) | Get a link to the points or watch time leaderboard page. |
| [`!points`](/chatbot/commands/default/points) | Check your own or another user's points balance and rank. |
| [`!setpoints`](/chatbot/commands/default/setpoints) | Moderators set a user's loyalty points balance. |
| [`!top`](/chatbot/commands/default/top) | Display the top users by loyalty points or watch time. |
| [`!watchtime`](/chatbot/commands/default/watchtime) | Check your own or another user's accumulated watch time. |

## Games & Betting

| Command | Description |
| --- | --- |
| [`!accept`](/chatbot/commands/default/accept) | Accept a pending duel challenge. |
| [`!bet`](/chatbot/commands/default/bet) | Place loyalty points on an active betting contest. |
| [`!bingo`](/chatbot/commands/default/bingo) | Emote bingo game; viewers guess emotes to win loyalty points. |
| [`!cancelduel`](/chatbot/commands/default/cancelduel) | Cancel an outgoing duel request you initiated. |
| [`!contest`](/chatbot/commands/default/contest) | Check the status of the currently active betting contest. |
| [`!deny`](/chatbot/commands/default/deny) | Reject an incoming duel request. |
| [`!duel`](/chatbot/commands/default/duel) | Challenge another user to a points duel. |
| [`!roulette`](/chatbot/commands/default/roulette) | Gamble loyalty points for a chance to win or lose. |
| [`!slots`](/chatbot/commands/default/slots) | Play a slot machine game with loyalty points. |

## Giveaways & Raffles

| Command | Description |
| --- | --- |
| [`!cancelraffle`](/chatbot/commands/default/cancelraffle) | Immediately cancel an active raffle. |
| [`!giveaway`](/chatbot/commands/default/giveaway) | Check the status and link of the active channel giveaway. |
| [`!join`](/chatbot/commands/default/join) | Enter an active raffle or giveaway started with `!sraffle` or `!raffle`. |
| [`!raffle`](/chatbot/commands/default/raffle) | Create viewer raffles with multiple winners. |
| [`!sraffle`](/chatbot/commands/default/sraffle) | Start a single-entry raffle; viewers enter with `!join`. |
| [`!ticket`](/chatbot/commands/default/ticket) | Purchase tickets for giveaways and raffles. |

## Song Requests

| Command | Description |
| --- | --- |
| [`!next`](/chatbot/commands/default/next) | Show the next song in the media request queue. |
| [`!pause`](/chatbot/commands/default/pause) | Pause media request playback without clearing the queue. |
| [`!play`](/chatbot/commands/default/play) | Resume paused media request playback. |
| [`!removesong`](/chatbot/commands/default/removesong) | Remove a song by URL, or all of a user's songs. |
| [`!skip`](/chatbot/commands/default/skip) | Moderators skip the current song in the queue. |
| [`!song`](/chatbot/commands/default/song) | Show the currently playing song. |
| [`!songqueue`](/chatbot/commands/default/songqueue) | Get a link to the current media request queue page. |
| [`!songrequest`](/chatbot/commands/default/songrequest) | Add YouTube songs or videos to the media request queue. |
| [`!srclear`](/chatbot/commands/default/srclear) | Clear the entire media request queue. |
| [`!volume`](/chatbot/commands/default/volume) | Check or set the media request player volume. |
| [`!voteskip`](/chatbot/commands/default/voteskip) | Let viewers vote to skip the current media request. |
| [`!when`](/chatbot/commands/default/when) | Check the queue position of your latest song request. |
| [`!wrongsong`](/chatbot/commands/default/wrongsong) | Remove the last song you added to the queue. |

## Viewer Queue

| Command | Description |
| --- | --- |
| [`!queue`](/chatbot/commands/default/queue) | Manage viewer queues for activities like playing with the streamer. |

## Store

| Command | Description |
| --- | --- |
| [`!closestore`](/chatbot/commands/default/closestore) | Disable all regular (non-SFX) items in the loyalty store. |
| [`!disablesfx`](/chatbot/commands/default/disablesfx) | Disable all sound effect (SFX) items in the loyalty store. |
| [`!enablesfx`](/chatbot/commands/default/enablesfx) | Re-enable all sound effect (SFX) items in the loyalty store. |
| [`!items`](/chatbot/commands/default/items) | Get a link to the channel's loyalty store page. |
| [`!openstore`](/chatbot/commands/default/openstore) | Re-enable all regular (non-SFX) items in the loyalty store. |
| [`!redeem`](/chatbot/commands/default/redeem) | Redeem loyalty store items using points. |

## Stream Management

| Command | Description |
| --- | --- |
| [`!alerts`](/chatbot/commands/default/alerts) | Mute, skip, or pause overlay alerts from chat. |
| [`!editcounter`](/chatbot/commands/default/editcounter) | Set, increment, or decrement custom counter values from chat. |
| [`!hypecup`](/chatbot/commands/default/hypecup) | Clear the HypeCup overlay contribution list. |
| [`!setgame`](/chatbot/commands/default/setgame) | Update the stream's game category on Twitch. |
| [`!settitle`](/chatbot/commands/default/settitle) | Moderators change the Twitch stream title. |
| [`!timer`](/chatbot/commands/default/timer) | Enable or disable specific chat timers. |

## Moderation

| Command | Description |
| --- | --- |
| [`!filesay`](/chatbot/commands/default/filesay) | Send multiple lines of text from a URL to chat. |
| [`!level`](/chatbot/commands/default/level) | View and manually override user permission levels. |
| [`!nuke`](/chatbot/commands/default/nuke) | Timeout, ban, or delete recent messages matching text or regex. |
| [`!nukeusername`](/chatbot/commands/default/nukeusername) | Timeout or ban users whose usernames match text or regex. |
| [`!permit`](/chatbot/commands/default/permit) | Temporarily allow a user to post links without being timed out. |
| [`!vanish`](/chatbot/commands/default/vanish) | Time yourself out for 1 second to clear your messages. |
| [`!votekick`](/chatbot/commands/default/votekick) | Start a community vote to temporarily kick a user. |

## Bot & Command Management

| Command | Description |
| --- | --- |
| [`!bot`](/chatbot/commands/default/bot) | Mute, unmute, or remove the bot from chat. |
| [`!command`](/chatbot/commands/default/command) | Add, remove, edit, or alias custom commands from chat. |
| [`!commands`](/chatbot/commands/default/commands) | Get a link to the channel's public commands list. |
| [`!module`](/chatbot/commands/default/module) | Enable or disable chatbot modules from chat. |

## Fun & Emotes

| Command | Description |
| --- | --- |
| [`!8ball`](/chatbot/commands/default/8ball) | Receive a random magic 8-ball style answer to a question. |
| [`!emotecount`](/chatbot/commands/default/emotecount) | Display the usage frequency of a specific emote. |
| [`!emotes`](/chatbot/commands/default/emotes) | List Twitch, BTTV, FFZ, or 7TV emotes, or reload the cache. |
| [`!kappagen`](/chatbot/commands/default/kappagen) | Trigger an emote explosion via the Kappagen overlay widget. |
| [`!quote`](/chatbot/commands/default/quote) | Display random saved quotes or manage the quote list. |

## Stream Info & Utility

| Command | Description |
| --- | --- |
| [`!accountage`](/chatbot/commands/default/accountage) | Check the creation date of any Twitch account. |
| [`!chatstats`](/chatbot/commands/default/chatstats) | Get a link to the channel's chat statistics page. |
| [`!followage`](/chatbot/commands/default/followage) | Check how long a user has been following the channel. |
| [`!tip`](/chatbot/commands/default/tip) | Get a link to the channel's tipping page. |
| [`!uptime`](/chatbot/commands/default/uptime) | Check the current stream's duration. |
