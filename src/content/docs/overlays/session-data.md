---
title: Session Data Reference
description: Session object keys available to custom widgets, grouped by platform and feature.
keywords:
  - StreamElements session data
  - Overlay Editor
  - Custom widget
  - Session keys
  - Stream overlay development
---

The session `data` object holds per-feature totals, goals, and latest-event details for your channel — the same values visible in the [Session Dashboard](https://streamelements.com/dashboard/session). Custom widgets receive it through the [onWidgetLoad and onSessionUpdate events](/overlays/events/):

- In `onWidgetLoad`, `data` is available at `obj.detail.session.data`
- In `onSessionUpdate`, `data` is available at `obj.detail.session`

:::note
The structure may change over time. To inspect the most up-to-date values, use `console.log(obj)` and check your browser console.
:::

## Common keys

### Tips

| Key | Description |
|-----|-------------|
| `data["tip-latest"]` | Latest tip |
| `data["tip-latest"]["name"]` | Latest tipper username |
| `data["tip-latest"]["amount"]` | Latest tip amount |
| `data["tip-latest"]["message"]` | Latest tip message |
| `data["tip-session-top-donation"]` | Top tip in the session |
| `data["tip-session-top-donation"]["name"]` | Username |
| `data["tip-session-top-donation"]["amount"]` | Tip amount |
| `data["tip-weekly-top-donation"]` | Top tip in the week |
| `data["tip-weekly-top-donation"]["name"]` | Username |
| `data["tip-weekly-top-donation"]["amount"]` | Tip amount |
| `data["tip-monthly-top-donation"]` | Top tip in the month |
| `data["tip-monthly-top-donation"]["name"]` | Username |
| `data["tip-monthly-top-donation"]["amount"]` | Tip amount |
| `data["tip-alltime-top-donation"]` | Top tip all time |
| `data["tip-alltime-top-donation"]["name"]` | Username |
| `data["tip-alltime-top-donation"]["amount"]` | Tip amount |
| `data["tip-session-top-donator"]` | Top tip donator in the session |
| `data["tip-session-top-donator"]["name"]` | Username |
| `data["tip-session-top-donator"]["amount"]` | Sum of the tip amounts |
| `data["tip-weekly-top-donator"]` | Top tip donator in the week |
| `data["tip-weekly-top-donator"]["name"]` | Username |
| `data["tip-weekly-top-donator"]["amount"]` | Sum of the tip amounts |
| `data["tip-monthly-top-donator"]` | Top tip donator in the month |
| `data["tip-monthly-top-donator"]["name"]` | Tipper username |
| `data["tip-monthly-top-donator"]["amount"]` | Sum of the tip amounts |
| `data["tip-alltime-top-donator"]` | Top tip donator |
| `data["tip-alltime-top-donator"]["name"]` | Tipper username |
| `data["tip-alltime-top-donator"]["amount"]` | Sum of the tip amounts |
| `data["tip-session"]["amount"]` | Sum of all donations since session start |
| `data["tip-week"]["amount"]` | Sum of all donations this week |
| `data["tip-month"]["amount"]` | Sum of all donations this month |
| `data["tip-total"]["amount"]` | Sum of all donations this all time |
| `data["tip-count"]["count"]` | Number of tip events |
| `data["tip-goal"]["amount"]` | Donation goal |

### Merch

| Key | Description |
|-----|-------------|
| `data["merch-goal-items"]["amount"]` | Merch items goal progress |
| `data["merch-goal-orders"]["amount"]` | Merch orders goal progress |
| `data["merch-goal-total"]["amount"]` | Merch total goal progress |
| `data["merch-latest"]` | Latest Merch event |
| `data["merch-latest"]["name"]` | Username |
| `data["merch-latest"]["amount"]` | Merch amount |
| `data["merch-latest"]["items"]` | Merch items |
| `data["merch-latest"]["items"]["name"]` | Merch item name |
| `data["merch-latest"]["items"]["quantity"]` | Merch item quantity |
| `data["merch-latest"]["items"]["_id"]` | Merch item id |

### Purchases

| Key | Description |
|-----|-------------|
| `data["purchase-latest"]` | Latest Purchase |
| `data["purchase-latest"]["name"]` | Username |
| `data["purchase-latest"]["amount"]` | Purchase amount |
| `data["purchase-latest"]["avatar"]` | Avatar image |
| `data["purchase-latest"]["message"]` | User message |
| `data["purchase-latest"]["items"]` | Purchase items |
| `data["purchase-latest"]["items"]["name"]` | Purchase item name |
| `data["purchase-latest"]["items"]["image"]` | Purchase item image |
| `data["purchase-latest"]["items"]["price"]` | Purchase item price |
| `data["purchase-latest"]["items"]["quantity"]` | Purchase item quantity |
| `data["purchase-latest"]["items"]["_id"]` | Purchase item id |

## Twitch

### Followers

| Key | Description |
|-----|-------------|
| `data["follower-latest"]["name"]` | Name of latest follower |
| `data["follower-session"]["count"]` | Followers since session start |
| `data["follower-week"]["count"]` | Followers this week |
| `data["follower-month"]["count"]` | Followers this month |
| `data["follower-goal"]["amount"]` | Followers goal |
| `data["follower-total"]["count"]` | Total count of followers |

### Subscribers

| Key | Description |
|-----|-------------|
| `data["subscriber-alltime-gifter"]["name"]` | Name of latest gifter |
| `data["subscriber-alltime-gifter"]["amount"]` | Number of gifted subs |
| `data["subscriber-gifted-latest"]["name"]` | Name of latest gifter |
| `data["subscriber-gifted-latest"]["amount"]` | Number of gifted subs |
| `data["subscriber-gifted-session"]["count"]` | Number of gifted subs during session |
| `data["subscriber-latest"]["name"]` | Name of latest sub |
| `data["subscriber-latest"]["amount"]` | Duration in months |
| `data["subscriber-latest"]["tier"]` | Tier of sub (1-3) |
| `data["subscriber-latest"]["message"]` | Message attached to sub action |
| `data["subscriber-latest"]["sender"]` | If it was a gift, here's a gifter |
| `data["subscriber-latest"]["gifted"]` | If it was a gift, here's a gifted |
| `data["subscriber-new-latest"]["name"]` | Name of latest new sub |
| `data["subscriber-new-latest"]["amount"]` | Number of months (1) |
| `data["subscriber-new-latest"]["message"]` | User message |
| `data["subscriber-new-session"]["count"]` | Number of new subs during session |
| `data["subscriber-resub-latest"]["name"]` | Name of latest resub |
| `data["subscriber-resub-latest"]["amount"]` | Number of months |
| `data["subscriber-resub-latest"]["message"]` | User message |
| `data["subscriber-resub-session"]["count"]` | Number of resubs during session |
| `data["subscriber-session"]["count"]` | Subscribers since session start |
| `data["subscriber-week"]["count"]` | Subscribers this week |
| `data["subscriber-month"]["count"]` | Subscribers this month |
| `data["subscriber-goal"]["amount"]` | Subscribers goal |
| `data["subscriber-total"]["count"]` | Total count of subscribers |
| `data["subscriber-points"]["amount"]` | Subscriber points (used for unlocking additional channel emotes - more info on the Twitch [Partner Emoticon Guide](https://help.twitch.tv/s/article/subscriber-emoticon-guide#emoticontiers)) |

### Hosts and raids

| Key | Description |
|-----|-------------|
| `data["host-latest"]["name"]` | Latest host |
| `data["host-latest"]["amount"]` | Number of viewers in latest host *(can be 0)* |
| `data["raid-latest"]["name"]` | Name of latest raider |
| `data["raid-latest"]["amount"]` | Number of viewers in latest raid |

### Cheers

| Key | Description |
|-----|-------------|
| `data["cheer-session"]["amount"]` | Cheers since session start |
| `data["cheer-month"]["amount"]` | Cheers this month |
| `data["cheer-total"]["amount"]` | Total amount of cheers |
| `data["cheer-count"]["count"]` | Number of cheer events |
| `data["cheer-goal"]["amount"]` | Cheer goal |
| `data["cheer-latest"]` | Latest Cheer event |
| `data["cheer-latest"]["name"]` | Latest cheerer |
| `data["cheer-latest"]["amount"]` | Latest cheer amount |
| `data["cheer-latest"]["message"]` | Latest cheer message |
| `data["cheer-session-top-donation"]` | Top cheer in the session |
| `data["cheer-session-top-donation"]["name"]` | Username |
| `data["cheer-session-top-donation"]["amount"]` | Cheer amount |
| `data["cheer-weekly-top-donation"]` | Top cheer in the week |
| `data["cheer-weekly-top-donation"]["name"]` | Username |
| `data["cheer-weekly-top-donation"]["amount"]` | Cheer amount |
| `data["cheer-monthly-top-donation"]` | Top cheer in the month |
| `data["cheer-monthly-top-donation"]["name"]` | Username |
| `data["cheer-monthly-top-donation"]["amount"]` | Cheer amount |
| `data["cheer-alltime-top-donation"]` | Top cheer all time |
| `data["cheer-alltime-top-donation"]["name"]` | Username |
| `data["cheer-alltime-top-donation"]["amount"]` | Cheer amount |
| `data["cheer-session-top-donator"]` | Top cheerer in the session |
| `data["cheer-session-top-donator"]["name"]` | Username |
| `data["cheer-session-top-donator"]["amount"]` | Sum of the cheer amounts |
| `data["cheer-weekly-top-donator"]` | Top cheerer in the week |
| `data["cheer-weekly-top-donator"]["name"]` | Username |
| `data["cheer-weekly-top-donator"]["amount"]` | Sum of the cheer amounts |
| `data["cheer-monthly-top-donator"]` | Top cheerer in the month |
| `data["cheer-monthly-top-donator"]["name"]` | Username |
| `data["cheer-monthly-top-donator"]["amount"]` | Sum of the cheer amounts |
| `data["cheer-alltime-top-donator"]` | Top cheerer all time |
| `data["cheer-alltime-top-donator"]["name"]` | Username |
| `data["cheer-alltime-top-donator"]["amount"]` | Sum of the cheer amounts |

### Channel points

| Key | Description |
|-----|-------------|
| `data["channel-points-latest"]` | Latest Channel Point event |
| `data["channel-points-latest"]["name"]` | Username |
| `data["channel-points-latest"]["amount"]` | Channel point amount |
| `data["channel-points-latest"]["message"]` | User message |
| `data["channel-points-latest"]["redemption"]` | Redemption name |

### Hype Train

| Key | Description |
|-----|-------------|
| `data["hypetrain-latest"]` | Latest Hypetrain event |
| `data["hypetrain-latest"]["amount"]` | Hypetrain amount |
| `data["hypetrain-latest"]["active"]` | Hypetrain active |
| `data["hypetrain-latest"]["level"]` | Hypetrain level |
| `data["hypetrain-latest"]["levelChanged"]` | Hypetrain level changed |
| `data["hypetrain-latest"]["name"]` | Username |
| `data["hypetrain-latest"]["type"]` | Hypetrain type |
| `data["hypetrain-level-goal"]["amount"]` | Hypetrain level goal |
| `data["hypetrain-level-progress"]["amount"]` | Hypetrain level progress |
| `data["hypetrain-level-progress"]["percent"]` | Hypetrain level progress percentage |
| `data["hypetrain-total"]["amount"]` | Hypetrain total amount |
| `data["hypetrain-latest-top-contributors"]` | An array of top Hypetrain contributors |

### Charity campaign donations

| Key | Description |
|-----|-------------|
| `data["charityCampaignDonation-latest"]` | Latest Charity Campaign Donation |
| `data["charityCampaignDonation-latest"]["name"]` | Username |
| `data["charityCampaignDonation-latest"]["amount"]` | Charity Campaign Donation amount |
| `data["charityCampaignDonation-session-top-donation"]` | Top Charity Campaign donation in the session |
| `data["charityCampaignDonation-session-top-donation"]["name"]` | Username |
| `data["charityCampaignDonation-session-top-donation"]["amount"]` | Charity Campaign Donation amount |
| `data["charityCampaignDonation-weekly-top-donation"]` | Top Charity Campaign donation in the week |
| `data["charityCampaignDonation-weekly-top-donation"]["name"]` | Username |
| `data["charityCampaignDonation-weekly-top-donation"]["amount"]` | Charity Campaign Donation amount |
| `data["charityCampaignDonation-monthly-top-donation"]` | Top Charity Campaign donation in the month |
| `data["charityCampaignDonation-monthly-top-donation"]["name"]` | Username |
| `data["charityCampaignDonation-monthly-top-donation"]["amount"]` | Charity Campaign Donation amount |
| `data["charityCampaignDonation-alltime-top-donation"]` | Top Charity Campaign donation all time |
| `data["charityCampaignDonation-alltime-top-donation"]["name"]` | Username |
| `data["charityCampaignDonation-alltime-top-donation"]["amount"]` | Charity Campaign Donation amount |
| `data["charityCampaignDonation-session-top-donator"]` | Top Charity Campaign Donator in the session |
| `data["charityCampaignDonation-session-top-donator"]["name"]` | Username |
| `data["charityCampaignDonation-session-top-donator"]["amount"]` | Charity Campaign Donation amount |
| `data["charityCampaignDonation-weekly-top-donator"]` | Top Charity Campaign Donator in the week |
| `data["charityCampaignDonation-weekly-top-donator"]["name"]` | Username |
| `data["charityCampaignDonation-weekly-top-donator"]["amount"]` | Charity Campaign Donation amount |
| `data["charityCampaignDonation-monthly-top-donator"]` | Top Charity Campaign Donator in the month |
| `data["charityCampaignDonation-monthly-top-donator"]["name"]` | Username |
| `data["charityCampaignDonation-monthly-top-donator"]["amount"]` | Charity Campaign Donation amount |
| `data["charityCampaignDonation-alltime-top-donator"]` | Top Charity Campaign Donator all time |
| `data["charityCampaignDonation-alltime-top-donator"]["name"]` | Username |
| `data["charityCampaignDonation-alltime-top-donator"]["amount"]` | Charity Campaign Donation amount |

### Cheer purchases

| Key | Description |
|-----|-------------|
| `data["cheerPurchase-latest"]` | Latest Cheer Purchase |
| `data["cheerPurchase-latest"]["name"]` | Username |
| `data["cheerPurchase-latest"]["amount"]` | Cheer Purchase amount |
| `data["cheerPurchase-session-top-donation"]` | Top Cheer donation in the session |
| `data["cheerPurchase-session-top-donation"]["name"]` | Username |
| `data["cheerPurchase-session-top-donation"]["amount"]` | Cheer Donation amount |
| `data["cheerPurchase-weekly-top-donation"]` | Top Cheer donation in the week |
| `data["cheerPurchase-weekly-top-donation"]["name"]` | Username |
| `data["cheerPurchase-weekly-top-donation"]["amount"]` | Cheer Donation amount |
| `data["cheerPurchase-monthly-top-donation"]` | Top Cheer donation in the month |
| `data["cheerPurchase-monthly-top-donation"]["name"]` | Username |
| `data["cheerPurchase-monthly-top-donation"]["amount"]` | Cheer Donation amount |
| `data["cheerPurchase-alltime-top-donation"]` | Top Cheer donation all time |
| `data["cheerPurchase-alltime-top-donation"]["name"]` | Username |
| `data["cheerPurchase-alltime-top-donation"]["amount"]` | Cheer Donation amount |
| `data["cheerPurchase-session-top-donator"]` | Top Cheer Donator in the session |
| `data["cheerPurchase-session-top-donator"]["name"]` | Username |
| `data["cheerPurchase-session-top-donator"]["amount"]` | Cheer Donator amount |
| `data["cheerPurchase-weekly-top-donator"]` | Top Cheer Donator in the week |
| `data["cheerPurchase-weekly-top-donator"]["name"]` | Username |
| `data["cheerPurchase-weekly-top-donator"]["amount"]` | Cheer Donator amount |
| `data["cheerPurchase-monthly-top-donator"]` | Top Cheer Donator in the month |
| `data["cheerPurchase-monthly-top-donator"]["name"]` | Username |
| `data["cheerPurchase-monthly-top-donator"]["amount"]` | Cheer Donator amount |
| `data["cheerPurchase-alltime-top-donator"]` | Top Cheer Donator all time |
| `data["cheerPurchase-alltime-top-donator"]["name"]` | Username |
| `data["cheerPurchase-alltime-top-donator"]["amount"]` | Cheer Donator amount |

## YouTube

:::note
A YouTube member used to be called a sponsor, which is why the key is named "sponsor".
:::

### Members

| Key | Description |
|-----|-------------|
| `data["sponsor-goal"]["amount"]` | Amount of members goal |
| `data["sponsor-session"]["count"]` | Members since session start |
| `data["sponsor-week"]["count"]` | Members this week |
| `data["sponsor-month"]["count"]` | Members this month |
| `data["sponsor-total"]["count"]` | Total count of members |
| `data["sponsor-latest"]` | Latest member |
| `data["sponsor-latest"]["name"]` | Username |
| `data["sponsor-latest"]["amount"]` | Amount |
| `data["sponsor-recent"]` | An array of latest member events with each element structure as in `sponsor-latest` |
| `data["sponsor-gifted-latest"]` | Latest member gifted |
| `data["sponsor-gifted-latest"]["name"]` | Username getting the gift |
| `data["sponsor-gifted-latest"]["amount"]` | Amount of member gifts |
| `data["sponsor-gifted-latest"]["tier"]` | Tier of member gifts |
| `data["sponsor-gifted-latest"]["message"]` | Message from gifter |
| `data["sponsor-gifted-latest"]["sender"]` | Username giving the gift |

### Subscribers

| Key | Description |
|-----|-------------|
| `data["subscriber-latest"]["name"]` | Name of latest subscriber |
| `data["subscriber-session"]["count"]` | Subscribers since session start |
| `data["subscriber-week"]["count"]` | Subscribers this week |
| `data["subscriber-month"]["count"]` | Subscribers this month |
| `data["subscriber-goal"]["amount"]` | Subscribers goal |
| `data["subscriber-total"]["count"]` | Total count of subscribers |

### Super Chats

| Key | Description |
|-----|-------------|
| `data["superchat-count"]["count"]` | Total count of superchats |
| `data["superchat-goal"]["amount"]` | Amount of superchat goal |
| `data["superchat-session"]["count"]` | Superchats since session start |
| `data["superchat-week"]["count"]` | Superchats this week |
| `data["superchat-month"]["count"]` | Superchats this month |
| `data["superchat-total"]["count"]` | Total count of superchats |
| `data["superchat-latest"]` | Latest superchat |
| `data["superchat-latest"]["name"]` | Username |
| `data["superchat-latest"]["amount"]` | Amount |
| `data["superchat-recent"]` | An array of latest superchat events with each element structure as in `superchat-latest` |
| `data["superchat-session-top-donator"]` | Top Superchat Donator in the session |
| `data["superchat-session-top-donator"]["name"]` | Username |
| `data["superchat-session-top-donator"]["amount"]` | Superchat Donation amount |
| `data["superchat-weekly-top-donator"]` | Top Superchat Donator in the week |
| `data["superchat-weekly-top-donator"]["name"]` | Username |
| `data["superchat-weekly-top-donator"]["amount"]` | Superchat Donation amount |
| `data["superchat-monthly-top-donator"]` | Top Superchat Donator in the month |
| `data["superchat-monthly-top-donator"]["name"]` | Username |
| `data["superchat-monthly-top-donator"]["amount"]` | Superchat Donation amount |
| `data["superchat-alltime-top-donator"]` | Top Superchat Donator |
| `data["superchat-alltime-top-donator"]["name"]` | Username |
| `data["superchat-alltime-top-donator"]["amount"]` | Superchat Donation amount |
| `data["superchat-session-top-donation"]` | Top Superchat Donation in the session |
| `data["superchat-session-top-donation"]["name"]` | Username |
| `data["superchat-session-top-donation"]["amount"]` | Superchat Donation amount |
| `data["superchat-weekly-top-donation"]` | Top Superchat Donation in the week |
| `data["superchat-weekly-top-donation"]["name"]` | Username |
| `data["superchat-weekly-top-donation"]["amount"]` | Superchat Donation amount |
| `data["superchat-monthly-top-donation"]` | Top Superchat Donation in the month |
| `data["superchat-monthly-top-donation"]["name"]` | Username |
| `data["superchat-monthly-top-donation"]["amount"]` | Superchat Donation amount |
| `data["superchat-alltime-top-donation"]` | Top Superchat Donation |
| `data["superchat-alltime-top-donation"]["name"]` | Username |
| `data["superchat-alltime-top-donation"]["amount"]` | Superchat Donation amount |

## Donation vs donator keys

There is a difference between:

- `cheer-*-donation` and `cheer-*-donator`
- `tip-*-donation` and `tip-*-donator`

`donation` stands for single event (biggest one-time donation/cheer in period).

`donator` stands for cumulative amount of all events by this user.

Example for better understanding:

| User  | Amount |
|-------|--------|
| UserA | 10     |
| UserB | 15     |
| UserA | 10     |

Then calling each scope will result:

| tip-alltime- | amount | name  |
|--------------|--------|-------|
| -donator     | 20     | UserA |
| -donation    | 15     | UserB |

## Recent events

You can access recent events of each type by calling:

```javascript
data["follower-recent"];
data["subscriber-recent"];
data["host-recent"];
data["raid-recent"];
data["cheer-recent"];
data["tip-recent"];
data["merch-recent"];
data["charityCampaignDonation-recent"];
data["cheerPurchase-recent"];
data["superchat-recent"];
```

Each of them is an array (number indexes 0-24), and every subarray contains:

```javascript
let recentFollows=data["follower-recent"][0];
recentFollows["name"]; // Username,
recentFollows["createdAt"];// Timestamp like "2018-06-11T08:08:33.180Z",
recentFollows["$hashKey"]; // unique ID for example"object:5024",
recentFollows["type"]; // Event type "follower", "subscriber", "host", "raid", "cheer", "tip"
```

Depending on type there can be also:

- `subscriber-recent`

```javascript
["tier"]; //Subscriber tier (1000,2000,3000)
["amount"]; // amount of months
```

- `host-recent`

```javascript
["amount"]; // amount of viewers
```

- `raid-recent`

```javascript
["amount"]; // amount of viewers
```

- `cheer-recent`

```javascript
["amount"]; // amount of bits
```

- `tip-recent`

```javascript
["amount"]; // amount of tip
```
