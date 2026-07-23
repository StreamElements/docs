---
title: Chat Alerts Module
sidebar:
  label: Chat Alerts
description: "Configure the StreamElements Chat Alerts module to automatically post chat messages for follows, subscriptions, raids, and other stream events."
keywords:
- Twitch chat alerts
- StreamElements chatbot
- stream event notifications
- viewer engagement tools
- automated chat messages
- follower alerts Twitch
- subscription notifications StreamElements
- donation announcements chatbot
- raid alerts Twitch
- bits cheer messages
- Twitch stream automation
- chat interaction tools
- real-time stream alerts
- StreamElements chat notifications
- Twitch community engagement
---

The Chat Alerts module automatically posts a chat message when something happens on your channel — a follow, a subscription, a raid, and so on — so events get acknowledged even when you're mid-game.

## Usage

Chat Alerts are triggered automatically when configured events happen during your stream. No manual commands are required to activate them.

## Examples

1. Follower Alert:

   ```
   New follower hype! Welcome to the stream, @NewFollower123! Thanks for joining our community!
   ```

2. Subscription Alert:

   ```
   @Subscriber456 just subscribed for 3 months! Thank you for your continued support!
   ```

## Event Types

The available event types depend on the platform:

| Platform | Supported events |
|----------|------------------|
| Twitch | Follows, tips, subscriptions, cheers (bits), raids, channel point redemptions, merch purchases, ad breaks, polls, predictions, hype trains, sponsorships |
| YouTube | Tips, sponsors, subscribers, redemptions, merch purchases |
| Kick | Follows, subscriptions, tips |

Each event type can have its own customized messages and trigger conditions.

### Tiered Messages

For events with an amount — tips, subscriptions, cheers, and raids, depending on the platform — you can configure multiple messages, each with its own minimum amount. When the event fires, the bot uses the message with the highest minimum amount that the event reaches:

- **Twitch**: tips, subscriptions, cheers, raids
- **YouTube**: tips, sponsors
- **Kick**: tips, subscriptions

For follow alerts, the bot picks a random message from your configured list.

## Configuration

To set up Chat Alerts:

1. Access your StreamElements dashboard
2. Navigate to the Chatbot section
3. Find the Chat Alerts module
4. Enable the alerts you want to use
5. Customize the message and parameters for each alert type

Each alert can be customized with the following settings:

| Setting | Description |
|---------|-------------|
| Event Type | The specific action that triggers the alert (e.g., follow, subscription, raid) |
| Message | The text that appears in chat when the event occurs |
| Minimum Amount | Optional minimum value for tiered events like tips or cheers |

The module also has a **Delay** setting, which postpones posting alerts by the configured number of seconds.

## Template Variables

Alert messages for activity events (follows, tips, subscriptions, cheers, raids, redemptions, merch, and sponsorships) support the following placeholders:

| Placeholder | Description |
|-------------|-------------|
| `{user}` | The display name of the user who triggered the event |
| `{amount}` | The event's amount (tip amount, months subscribed, bits, raid viewers, etc.) |
| `{currency}` | The currency symbol (tips) |
| `{item}` | The redeemed item or purchased merch item name(s) |
| `{msg}` | The message attached to the event, if any |
| `{tier}` | The subscription tier, e.g. "Tier 1" (subscriptions only) |

### Twitch Event Placeholders

The Twitch poll, prediction, ad break, and hype train alerts have their own placeholders:

| Event | Placeholders |
|-------|--------------|
| Poll started | `{title}`, `{choices}` |
| Poll ended | `{title}`, `{choice}`, `{votes}`, `{total_votes}` |
| Prediction started | `{title}`, `{outcomes}` |
| Prediction locked | `{title}`, `{highest_voted}`, `{highest_voted_count}`, `{total_votes}` |
| Prediction resolved | `{title}`, `{winner}`, `{winner_percentage}`, `{winner_votes}`, `{total_votes}` |
| Prediction canceled | `{title}` |
| Ad break | `{requester}`, `{automatic}`, `{duration}` |
| Hype train (started/progress/ended) | `{level}`, `{level_percent}`, `{next_level}` |

:::note
Poll ended alerts only fire when the poll runs to completion, not when it is dismissed early. Ad break alerts are skipped when the ad break duration is zero.
:::
