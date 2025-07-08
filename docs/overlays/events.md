---
id: custom-widget-events
sidebar_label: Custom Widget Events
description: Understand the events your custom widget can handle in the StreamElements Overlay Editor.
tags:
  - custom widget events
  - overlay editor
  - streamelements
  - api
keywords:
  - StreamElements Custom Widget Events
  - Overlay Editor
  - SE API
  - Widget events
  - Stream overlay development
sidebar_position: 3
---

# Events

Widget receives few types of native events during lifetime. They are:
- [**onWidgetLoad**](#on-widget-load) - Triggers when the widget is loaded or refreshed.

- [**onEventReceived**](#on-event-received) - Triggers on every event like a chat message, new tip, new follower, subscriber, etc.

- [**onSessionUpdate**](#on-session-update) – Similar to `onEventReceived`, but specifically triggers when the event **affects session data** such as **latest subscriber, goals, totals**, etc., visible in the [Session Dashboard](https://streamelements.com/dashboard/session). It **does not trigger** for regular chat messages or events that don't update session stats.

Example: 

```javascript
window.addEventListener('onWidgetLoad', function (obj) {
  console.log(obj); // You can check obj value in the browser console.
});
```


## On Widget Load

Event received upon widget is loaded (or refreshed). Contains information about fieldData (fields values), channel information (including apiKey) and session data.
```javascript
window.addEventListener('onWidgetLoad', function (obj) {
  console.log(obj); // You can check obj value in the browser console.
  //fancy stuff here
});
```

In this scope `obj` has every information you could need to use. For better readibility, Let’s assign it:
```javascript
window.addEventListener('onWidgetLoad', function (obj) {
  let data = obj["detail"]["session"]["data"];
  let recents = obj["detail"]["recents"];
  let currency = obj["detail"]["currency"];
  let channelName = obj["detail"]["channel"]["username"];
  let apiToken = obj["detail"]["channel"]["apiToken"];
  let fieldData = obj["detail"]["fieldData"];
});
```

### Possible keys within `data`:

**Note:**
> The structure may change over time. To inspect the most up-to-date values, use `console.log(obj)` and check your browser console.

#### Common
<details>
<summary>Click to expand </summary>

* `data["merch-goal-items"]["amount"]` - Merch items goal progress
* `data["merch-goal-orders"]["amount"]` - Merch orders goal progress
* `data["merch-goal-total"]["amount"]` - Merch total goal progress
* `data["merch-latest"]` - Latest Merch event
  * `data["merch-latest"]["name"]` - Username
  * `data["merch-latest"]["amount"]` - Merch amount
  * `data["merch-latest"]["items"]` - Merch items
  * `data["merch-latest"]["items"]["name"]` - Merch item name
  * `data["merch-latest"]["items"]["quantity"]` - Merch item quantity
  * `data["merch-latest"]["items"]["_id"]` - Merch item id
* `data["purchase-latest"]` - Latest Purchase
  * `data["purchase-latest"]["name"]` - Username
  * `data["purchase-latest"]["amount"]` - Purchase amount
  * `data["purchase-latest"]["avatar"]` - Avatar image
  * `data["purchase-latest"]["message"]` - User message
  * `data["purchase-latest"]["items"]` - Purchase items
  * `data["purchase-latest"]["items"]["name"]` - Purchase item name
  * `data["purchase-latest"]["items"]["image"]` - Purchase item image
  * `data["purchase-latest"]["items"]["price"]` - Purchase item price
  * `data["purchase-latest"]["items"]["quantity"]` - Purchase item quantity
  * `data["purchase-latest"]["items"]["_id"]` - Purchase item id
* `data["tip-latest"]`    - Latest tip
  * `data["tip-latest"]["name"]`    - Latest tipper username
  * `data["tip-latest"]["amount"]`  - Latest tip amount
  * `data["tip-latest"]["message"]` - Latest tip message
* `data["tip-session-top-donation"]` - Top tip in the session
  * `data["tip-session-top-donation"]["name"]` - Username
  * `data["tip-session-top-donation"]["amount"]` - Tip amount
* `data["tip-weekly-top-donation"]` - Top tip in the week
  * `data["tip-weekly-top-donation"]["name"]` - Username
  * `data["tip-weekly-top-donation"]["amount"]` - Tip amount
* `data["tip-monthly-top-donation"]` - Top tip in the month
  * `data["tip-monthly-top-donation"]["name"]` - Tip amount
  * `data["tip-monthly-top-donation"]["amount"]` - Username
* `data["tip-alltime-top-donation"]`  - Top tip all time
  * `data["tip-alltime-top-donation"]["name"]` - Username
  * `data["tip-alltime-top-donation"]["amount"]` - Tip amount
* `data["tip-session-top-donator"]` - Top tip donator in the session
  * `data["tip-session-top-donator"]["name"]` - Username
  * `data["tip-session-top-donator"]["amount"]` - Sum of the tip amounts
* `data["tip-weekly-top-donator"]` - Top tip donator in the week
  * `data["tip-weekly-top-donator"]["name"]` - Username
  * `data["tip-weekly-top-donator"]["amount"]` - Sum of the tip amounts
* `data["tip-monthly-top-donator"]` - Top tip donator in the month
  * `data["tip-monthly-top-donator"]["name"]` - Tipper username
  * `data["tip-monthly-top-donator"]["amount"]` - Sum of the tip amounts
* `data["tip-alltime-top-donator"]`  - Top tip donator
  * `data["tip-alltime-top-donator"]["name"]` - Tipper username
  * `data["tip-alltime-top-donator"]["amount"]` - Sum of the tip amounts
* `data["tip-session"]["amount"]` - Sum of all donations since session start
* `data["tip-week"]["amount"]`  - Sum of all donations this week
* `data["tip-month"]["amount"]` - Sum of all donations this month
* `data["tip-total"]["amount"]` - Sum of all donations this all time
* `data["tip-count"]["count"]` - Number of tip events
* `data["tip-goal"]["amount"]` - Donation goal
</details>

#### Twitch
<details>
<summary>Click to expand </summary>

* `data["follower-latest"]["name"]` - Name of latest follower
* `data["follower-session"]["count"]` - Followers since session start
* `data["follower-week"]["count"]` - Followers this week
* `data["follower-month"]["count"]` - Followers this month
* `data["follower-goal"]["amount"]` - Followers goal
* `data["follower-total"]["count"]` - Total count of followers
* `data["subscriber-alltime-gifter"]` 
  * `data["subscriber-alltime-gifter"]["name"]` - Name of latest gifter
  * `data["subscriber-alltime-gifter"]["amount"]` - Number of gifted subs
* `data["subscriber-gifted-latest"]` 
  * `data["subscriber-gifted-latest"]["name"]` - Name of latest gifter
  * `data["subscriber-gifted-latest"]["amount"]` - Number of gifted subs
* `data["subscriber-gifted-session"]["count"]` - Number of gifted subs during session
* `data["subscriber-latest"]` - 
  * `data["subscriber-latest"]["name"]` - Name of latest sub
  * `data["subscriber-latest"]["amount"]` - Duration in months
  * `data["subscriber-latest"]["tier"]` - Tier of sub (1-3)
  * `data["subscriber-latest"]["message"]` - Message attached to sub action
  * `data["subscriber-latest"]["sender"]` - If it was a gift, here’s a gifter
  * `data["subscriber-latest"]["gifted"]` - If it was a gift, here’s a gifted
* `data["subscriber-new-latest"]` 
  * `data["subscriber-new-latest"]["name"]` - Name of latest new sub
  * `data["subscriber-new-latest"]["amount"]` - Number of months (1)
  * `data["subscriber-new-latest"]["message"]` - user message
* `data["subscriber-new-session"]["count"]` - Number of new subs during session
* `data["subscriber-resub-latest"]` 
  * `data["subscriber-resub-latest"]["name"]` - Name of latest resub
  * `data["subscriber-resub-latest"]["amount"]` - Number of months
  * `data["subscriber-resub-latest"]["message"]` - user message
* `data["subscriber-resub-session"]["count"]` - Number of resubs during session
* `data["subscriber-session"]["count"]` - Subscribers since session start
* `data["subscriber-week"]["count"]`    - Subscribers this week
* `data["subscriber-month"]["count"]`   - Subscribers this month
* `data["subscriber-goal"]["amount"]`   - Subscribers goal
* `data["subscriber-total"]["count"]`   - Total count of subscribers
* `data["subscriber-points"]["amount"]` - Subscriber points (used for unlocking additional channel emotes - more info on Twitch <a href="https://help.twitch.tv/s/article/subscriber-emoticon-guide#emoticontiers">Partner Emoticon Guide</a>)
* `data["host-latest"]["name"]` - Latest host
* `data["host-latest"]["amount"]`   - Number of viewers in latest host <em>(can be 0)</em>
* `data["raid-latest"]["name"]`     - Name of latest raider
* `data["raid-latest"]["amount"]`   - Number of viewers in latest raid
* `data["cheer-session"]["amount"]` - Cheers since session start
* `data["cheer-month"]["amount"]`   - Cheers this month
* `data["cheer-total"]["amount"]`   - Total amount of cheers
* `data["cheer-count"]["count"]`    - Number of cheer events
* `data["cheer-goal"]["amount"]`    - Cheer goal
* `data["cheer-latest"]`    - Latest Cheer event
  * `data["cheer-latest"]["name"]`    - Latest cheerer
  * `data["cheer-latest"]["amount"]`  - Latest cheer amount
  * `data["cheer-latest"]["message"]` - Latest cheer message
* `data["cheer-session-top-donation"]` - Top cheer in the session
  * `data["cheer-session-top-donation"]["name"]` - Username
  * `data["cheer-session-top-donation"]["amount"]` - Cheer amount
* `data["cheer-weekly-top-donation"]` - Top cheer in the week
  * `data["cheer-weekly-top-donation"]["name"]` - Username
  * `data["cheer-weekly-top-donation"]["amount"]` - Cheer amount
* `data["cheer-monthly-top-donation"]` - Top cheer in the month
  * `data["cheer-monthly-top-donation"]["name"]` - Username
  * `data["cheer-monthly-top-donation"]["amount"]` - Cheer amount
* `data["cheer-alltime-top-donation"]`  - Top cheer all time
  * `data["cheer-alltime-top-donation"]["name"]` - Username
  * `data["cheer-alltime-top-donation"]["amount"]` - Cheer amount
* `data["cheer-session-top-donator"]` - Top cheerer in the session
  * `data["cheer-session-top-donator"]["name"]` - Username
  * `data["cheer-session-top-donator"]["amount"]` - Sum of the cheer amounts
* `data["cheer-weekly-top-donator"]` - Top cheerer in the week
  * `data["cheer-weekly-top-donator"]["name"]` - Username
  * `data["cheer-weekly-top-donator"]["amount"]` - Sum of the cheer amounts
* `data["cheer-monthly-top-donator"]` - Top cheerer in the month
  * `data["cheer-monthly-top-donator"]["name"]` - Username
  * `data["cheer-monthly-top-donator"]["amount"]` - Sum of the cheer amounts
* `data["cheer-alltime-top-donator"]`  - Top cheerer all time
  * `data["cheer-alltime-top-donator"]["name"]` - Username
  * `data["cheer-alltime-top-donator"]["amount"]` - Sum of the cheer amounts
* `data["channel-points-latest"]` - Latest Channel Point event
  * `data["channel-points-latest"]["name"]` - Username
  * `data["channel-points-latest"]["amount"]` - Channel point amount
  * `data["channel-points-latest"]["message"]` - User message
  * `data["channel-points-latest"]["redemption"]` - Redemption name
* `data["hypetrain-latest"]` - Latest Hypetrain event
  * `data["hypetrain-latest"]["amount"]` - Hypetrain amount
  * `data["hypetrain-latest"]["active"]` - Hypetrain active
  * `data["hypetrain-latest"]["level"]` - Hypetrain level
  * `data["hypetrain-latest"]["levelChanged"]` - Hypetrain level changed
  * `data["hypetrain-latest"]["name"]` - Username
  * `data["hypetrain-latest"]["type"]` - Hypetrain type
* `data["hypetrain-level-goal"]["amount"]` - Hypetrain level goal
* `data["hypetrain-level-progress"]["amount"]` - Hypetrain level progress
* `data["hypetrain-level-progress"]["percent"]` - Hypetrain level progress percentage
* `data["hypetrain-total"]["amount"]` - Hypetrain total amount
* `data["hypetrain-latest-top-contributors"]` - An array of top Hypetrain contributors  
* `data["charityCampaignDonation-latest"]` - Latest Charity Campaign Donation
  * `data["charityCampaignDonation-latest"]["name"]` - Username
  * `data["charityCampaignDonation-latest"]["amount"]` - Charity Campaign Donation amount
* `data["charityCampaignDonation-session-top-donation"]` - Top Charity Campaign donation in the session
  * `data["charityCampaignDonation-session-top-donation"]["name"]` - Username
  * `data["charityCampaignDonation-session-top-donation"]["amount"]` - Charity Campaign Donation amount
* `data["charityCampaignDonation-weekly-top-donation"]` - Top Charity Campaign donation in the week
  * `data["charityCampaignDonation-weekly-top-donation"]["name"]` - Username
  * `data["charityCampaignDonation-weekly-top-donation"]["amount"]` - Charity Campaign Donation amount
* `data["charityCampaignDonation-monthly-top-donation"]` - Top Charity Campaign donation in the month
  * `data["charityCampaignDonation-monthly-top-donation"]["name"]` - Username
  * `data["charityCampaignDonation-monthly-top-donation"]["amount"]` - Charity Campaign Donation amount
* `data["charityCampaignDonation-alltime-top-donation"]`  - Top Charity Campaign donation all time
  * `data["charityCampaignDonation-alltime-top-donation"]["name"]` - Username
  * `data["charityCampaignDonation-alltime-top-donation"]["amount"]` - Charity Campaign Donation amount
* `data["charityCampaignDonation-session-top-donator"]` - Top Charity Campaign Donator in the session
  * `data["charityCampaignDonation-session-top-donator"]["name"]` - Username
  * `data["charityCampaignDonation-session-top-donator"]["amount"]` - Charity Campaign Donation amount
* `data["charityCampaignDonation-weekly-top-donator"]` - Top Charity Campaign Donator in the week
  * `data["charityCampaignDonation-weekly-top-donator"]["name"]` - Username
  * `data["charityCampaignDonation-weekly-top-donator"]["amount"]` - Charity Campaign Donation amount
* `data["charityCampaignDonation-monthly-top-donator"]` - Top Charity Campaign Donator in the month
  * `data["charityCampaignDonation-monthly-top-donator"]["name"]` - Username
  * `data["charityCampaignDonation-monthly-top-donator"]["amount"]` - Charity Campaign Donation amount
* `data["charityCampaignDonation-alltime-top-donator"]` - Top Charity Campaign Donator all time
  * `data["charityCampaignDonation-alltime-top-donator"]["name"]` - Username
  * `data["charityCampaignDonation-alltime-top-donator"]["amount"]` - Charity Campaign Donation amount
* `data["cheerPurchase-latest"]` - Latest Cheer Purchase
  * `data["cheerPurchase-latest"]["name"]` - Username
  * `data["cheerPurchase-latest"]["amount"]` - Cheer Purchase amount
* `data["cheerPurchase-session-top-donation"]` - Top Cheer donation in the session
  * `data["cheerPurchase-session-top-donation"]["name"]` - Username
  * `data["cheerPurchase-session-top-donation"]["amount"]` - Cheer Donation amount
* `data["cheerPurchase-weekly-top-donation"]` - Top Cheer donation in the week
  * `data["cheerPurchase-weekly-top-donation"]["name"]` - Username
  * `data["cheerPurchase-weekly-top-donation"]["amount"]` - Cheer Donation amount
* `data["cheerPurchase-monthly-top-donation"]` - Top Cheer donation in the month
  * `data["cheerPurchase-monthly-top-donation"]["name"]` - Username
  * `data["cheerPurchase-monthly-top-donation"]["amount"]` - Cheer Donation amount
* `data["cheerPurchase-alltime-top-donation"]` - Top Cheer donation all time
  * `data["cheerPurchase-alltime-top-donation"]["name"]` - Username
  * `data["cheerPurchase-alltime-top-donation"]["amount"]` - Cheer Donation amount
* `data["cheerPurchase-session-top-donator"]` - Top Cheer Donator in the session
  * `data["cheerPurchase-session-top-donator"]["name"]` - Username
  * `data["cheerPurchase-session-top-donator"]["amount"]` - Cheer Donator amount
* `data["cheerPurchase-weekly-top-donator"]` - Top Cheer Donator in the week
  * `data["cheerPurchase-weekly-top-donator"]["name"]` - Username
  * `data["cheerPurchase-weekly-top-donator"]["amount"]` - Cheer Donator amount
* `data["cheerPurchase-monthly-top-donator"]` - Top Cheer Donator in the month
  * `data["cheerPurchase-monthly-top-donator"]["name"]` - Username
  * `data["cheerPurchase-monthly-top-donator"]["amount"]` - Cheer Donator amount
* `data["cheerPurchase-alltime-top-donator"]` - Top Cheer Donator all time
  * `data["cheerPurchase-alltime-top-donator"]["name"]` - Username
  * `data["cheerPurchase-alltime-top-donator"]["amount"]` - Cheer Donator amount  
</details>

#### YouTube
> Note: Youtube member used to be called sponsor, which is why the key is named "sponsor"

<details>
<summary>Click to expand</summary>

* `data["sponsor-goal"]["amount"]` - Amount of members goal
* `data["sponsor-session"]["count"]` - Members since session start
* `data["sponsor-week"]["count"]` - Members this week
* `data["sponsor-month"]["count"]` - Members this month
* `data["sponsor-total"]["count"]` - Total count of members
* `data["sponsor-latest"]`    - Latest member
  * `data["sponsor-latest"]["name"]` - Username
  * `data["sponsor-latest"]["amount"]` - amount
* `data["sponsor-recent"]`    - An array of latest member events with each element structure as in `sponsor-latest`
* `data["sponsor-gifted-latest"]`- Latest member gifted
  * `data["sponsor-gifted-latest"]["name"]`- Username getting the gift
  * `data["sponsor-gifted-latest"]["amount"]` - Amount of member gifts
  * `data["sponsor-gifted-latest"]["tier"]` - Tier of member gifts
  * `data["sponsor-gifted-latest"]["message"]`  - Message from gifter
  * `data["sponsor-gifted-latest"]["sender"]` - username giving the gift
* `data["subscriber-latest"]["name"]` - Name of latest subscriber
* `data["subscriber-session"]["count"]` - Subscribers since session start
* `data["subscriber-week"]["count"]` - Subscribers this week
* `data["subscriber-month"]["count"]` - Subscribers this month
* `data["subscriber-goal"]["amount"]` - Subscribers goal
* `data["subscriber-total"]["count"]` - Total count of subscribers
* `data["superchat-count"]["count"]` - Total count of superchats
* `data["superchat-goal"]["amount"]` - Amount of  superchat goal
* `data["superchat-session"]["count"]` - Superchats since session start
* `data["superchat-week"]["count"]` - Superchats this week
* `data["superchat-month"]["count"]` - Superchats this month
* `data["superchat-total"]["count"]` - Total count of superchats
* `data["superchat-latest"]`    - Latest superchat
  * `data["superchat-latest"]["name"]` - Username
  * `data["superchat-latest"]["amount"]` - amount
* `data["superchat-recent"]`    - An array of latest superchat events with each element structure as in `superchat-latest`
* `data["superchat-session-top-donator"]` - Top Superchat Donator in the session
  * `data["superchat-session-top-donator"]["name"]` - Username
  * `data["superchat-session-top-donator"]["amount"]` - Superchat Donation amount
* `data["superchat-weekly-top-donator"]` - Top Superchat Donator in the week
  * `data["superchat-weekly-top-donator"]["name"]` - Username
  * `data["superchat-weekly-top-donator"]["amount"]` - Superchat Donation amount
* `data["superchat-monthly-top-donator"]` - Top Superchat Donator in the month
  * `data["superchat-monthly-top-donator"]["name"]` - Username
  * `data["superchat-monthly-top-donator"]["amount"]` - Superchat Donation amount
* `data["superchat-alltime-top-donator"]`  - Top Superchat Donator
  * `data["superchat-alltime-top-donator"]["name"]` - Username
  * `data["superchat-alltime-top-donator"]["amount"]` - Superchat Donation amount
* `data["superchat-session-top-donation"]` - Top Superchat Donation in the session
  * `data["superchat-session-top-donation"]["name"]` - Username
  * `data["superchat-session-top-donation"]["amount"]` - Superchat Donation amount
* `data["superchat-weekly-top-donation"]`  - Top Superchat Donation in the week
  * `data["superchat-weekly-top-donation"]["name"]` - Username
  * `data["superchat-weekly-top-donation"]["amount"]` - Superchat Donation amount 
* `data["superchat-monthly-top-donation"]` - Top Superchat Donation in the month
  * `data["superchat-monthly-top-donation"]["name"]` - Username
  * `data["superchat-monthly-top-donation"]["amount"]` - Superchat Donation amount
* `data["superchat-alltime-top-donation"]`  - Top Superchat Donation
  * `data["superchat-alltime-top-donation"]["name"]` - Username
  * `data["superchat-alltime-top-donation"]["amount"]` - Superchat Donation amount
</details>

There is a difference between:
* `cheer-*-donation` and `cheer-*-donator`
* `tip-*-donation` and `tip-*-donator`

`donation` stands for single event (biggest one-time donation/cheer in period)

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

Recent events:
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
* `subscriber-recent`
```javascript
["tier"]; //Subscriber tier (1000,2000,3000)
["amount"]; // amount of months
```
* `host-recent`
```javascript
["amount"]; // amount of viewers
```
* `raid-recent`
```javascript
["amount"]; // amount of months
```
* `cheer-recent`
```javascript
["amount"]; // amount of bits
```
* `tip-recent`
```javascript
["amount"]; // amount of tip
```


There is also a list in chronological order of last 25 events (so if you want to make list of all events - use this one) - variable `recents` initialized one line after variable `data`.

It is an array of elements (each of them is array) with the same elements as in `data["*-recent"]`
The last element of `obj` is currency, which contains:
* `code` - currency code (for example “USD”)
* `name` - currency name (for example "U.S. Dollar)
* `symbol` - currency symbol (for example “$”)


## On Event Received:
Live event for alerts, chat messages, SE_API store updates, etc.
```javascript
window.addEventListener('onEventReceived', function (obj) {
  console.log(obj); // You can check obj value in the browser console.
  // fancy stuff here
});
```
In the example above you have obj forwarded to that function, which has two interesting scopes within `obj.detail`:
* `obj.detail.listener`: Will provide you information about event type. This value is a string. Possible values:
    * `follower-latest` - New Follower
    * `subscriber-latest` - New Subscriber
    * `host-latest` - New host
    * `cheer-latest` - New cheer
    * `tip-latest` - New tip
    * `raid-latest` - New raid
    * `message` - New chat message received
    * `delete-message` - Chat message removed
    * `delete-messages` - Chat messages by userId removed
    * `event:skip` - User clicked "skip alert" button in activity feed
    * `alertService:toggleSound` - User clicked "mute/unmute alerts" button in activity feed
    * `bot:counter` - Update of bot counter
    * `kvstore:update` - Update of [SE_API](custom-widget.md#se_api) store value.
    * `widget-button` - User clicked custom field button in widget properties

* `obj.detail.event`: Will provide you information about event details. It contains few keys. For `-latest` events it is:
    * `.name` - user who triggered action
    * `.amount` - amount of action
    * `.message` - message attached to sub
    * `.gifted` - if this is a gift event for viewer
    * `.sender` - if it was a gift, a gifter (for community and single gifts)
    * `.bulkGifted` - if it is INITIAL event of community gift (`${event.sender} gifted ${event.amount} subs to community`)
    * `.isCommunityGift` - if it is one of community gifts train (`${event.sender} gifted ${event.name} a sub as part of random giveaway!`)
    * `.playedAsCommunityGift` - if the event was played as part of "cumulative sub bomb alert"



* there is also `userCurrency` for donations, you can use it (if initialized by `let userCurrency;`). For example: `usercurrency.symbol`

So expanding our sample code above you can have

```javascript
window.addEventListener('onEventReceived', function (obj) {
  const listener = obj.detail.listener;
  const data = obj["detail"]["event"];
  // Assigned new const value, for easier handling. You can do it with .property or ["property"]. 
  // I personally recommend using [""] as some of keys can have "-" within,
  // so you won't be able to call them (JS will try to do math operation on it).

  // jQuery is included by default, so you can use following
  $("#usernameContainer").html(data["name"]);
  $("#actionContainer").html(listener);

  // You can use vanilla JS as well
  document.getElementById("amount").innerHTML = data["amount"]
});
```
### Chat Message
For message events, there is an additional object that's accessible at `obj.detail.event.data`, which looks like this:

#### Twitch: 
<details>
<summary>Click to expand </summary>

```json
{
  "time": 1552400352142,
  "tags": {
    "badges": "broadcaster/1",
    "color": "#641FEF",
    "display-name": "SenderName",
    "emotes": "25:5-9",
    "flags": "",
    "id": "885d1f33-8387-4206-a668-e9b1409a998b",
    "mod": "0",
    "room-id": "85827806",
    "subscriber": "0",
    "tmi-sent-ts": "1552400351927",
    "turbo": "0",
    "user-id": "85827806",
    "user-type": ""
  },
  "nick": "sendername",
  "userId": "123123",
  "displayName": "senderName",
  "displayColor": "#641FEF",
  "badges": [
    {
      "type": "broadcaster",
      "version": "1",
      "url": "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3",
      "description": "Broadcaster"
    }
  ],
  "channel": "channelname",
  "text": "Test Kappa test",
  "isAction": false,
  "emotes": [
    {
      "type": "twitch",
      "name": "Kappa",
      "id": "25",
      "gif": false,
      "urls": {
        "1": "https://static-cdn.jtvnw.net/emoticons/v1/25/1.0",
        "2": "https://static-cdn.jtvnw.net/emoticons/v1/25/2.0",
        "4": "https://static-cdn.jtvnw.net/emoticons/v1/25/4.0"
      },
      "start": 5,
      "end": 9
    }
  ],
  "msgId": "885d1f33-8387-4206-a668-e9b1409a99Xb"
}
```
</details>
Every emote displayed on chat is within array of objects `emotes` with start/end index of `text` you can replace with image
NOTE: if you are creating chat widget, remember to store `msgId` and `userId` of each message (for example `<div class="message" data-msgId="${msgId}" data-userId="${userId}"></div>`) for message deletion events handling.


#### Youtube:
<details>
<summary>Click to expand </summary>

```json
{
  "kind": "youtube#liveChatMessage",
  "etag": "joNqfOov4YhUTK1ly5QnEw2O_04",
  "id": "LCC.EhwKGkNQakd1YS0tZ293REZWa1AxZ0FkMFU0VzNn",
  "snippet": {
    "type": "textMessageEvent",
    "liveChatId": "KicKGFVDT2p0eVFPaTNNUjhYT3lzMFdOZmtKZxILMXFObko0UHU5bTA",
    "authorChannelId": "noRfodywm2MXfIUCp9nm2MX",
    "publishedAt": "2025-03-11T16:51:20.385245+00:00",
    "hasDisplayContent": true,
    "displayMessage": ":face-blue-smiling: Testing message",
    "textMessageDetails": {
      "messageText": ":face-blue-smiling: Testing message"
    }
  },
  "authorDetails": {
    "channelId": "noRfodywm2MXfIUCp9nm2MX",
    "channelUrl": "http://www.youtube.com/channel/noRfodywm2MXfIUCp9nm2MX",
    "displayName": "userName",
    "profileImageUrl": "https://yt3.ggpht.com/MkVId1UPvXogOyUqSyaFRZD2eFHqNaThFYO4-YNWAA4sQGvCPdoZKDkN5qgPUQ9BRiajmtcU=s88-c-k-c0x00ffffff-no-rj",
    "isVerified": false,
    "isChatOwner": false,
    "isChatSponsor": false,
    "isChatModerator": true
  },
  "msgId": "LCC.EhwKGkNQakd1YS0tZ293REZWa1AxZ0FkMFU0VzNn",
  "userId": "noRfodywm2MXfIUCp9nm2MX",
  "nick": "username",
  "badges": [
  ],
  "displayName": "userName",
  "isAction": false,
  "time": 1741711893915,
  "tags": [
  ],
  "displayColor": null,
  "channel": "noRfodywm2MXfIUCp9nm2MX",
  "text": ":face-blue-smiling: Testing message",
  "emotes": [
  ],
  "avatar": "https://yt3.ggpht.com/MkVId1UPvXogOyUqSyaFRZD2eFHqNaThFYO4-YNWAA4sQGvCPdoZKDkN5qgPUQ9BRiajmtcU=s88-c-k-c0x00ffffff-no-rj"
}
```
</details>

### Message deletion
When user message is removed by channel moderator there is an event emited either:
- `delete-message` - with msgId of message to be removed
- `delete-messages` - with userId of user whose messages have to be removed
  This functionality is to prevent abusive content displayed in chat widget.


### Bot counter
Contains two elements counter name (`counter`) and current value (`value`)
```javascript
window.addEventListener('onEventReceived', function (obj) {
    const listener = obj.detail.listener;
    const data = obj.detail.event;

    if (listener === 'bot:counter' && data.counter === counter) {
        document.getElementById("mycounter").innerHTML = data.value;
    }
});
```

### Button click
Contains two elements - field name (`field`) and value (`value`). Example below will send simplified event to test your chat widget
```javascript
window.addEventListener('onEventReceived', function (obj) {
  const data = obj.detail.event;
  if (data.listener === 'widget-button') {
    if (data.field === 'chat' && data.value === 'First Message') {
      const emulated = new CustomEvent("onEventReceived", {
        detail: {
          "listener": "message",
          event: {
            data: {
              text: "Example message!",
              displayName: "StreamElements"
            }
          }
        }
      });
      window.dispatchEvent(emulated);
    }
  }
});
```

## On Session Update
```javascript
window.addEventListener('onSessionUpdate', function (obj) {
  console.log(obj); // You can check obj value in the browser console.
  //fancy stuff here
});
```
This event is triggered every time a session data is updated (new tip/cheer/follower), basically most of the scenarios can be covered by `onEventReceived`, but `onSessionUpdate` provides a lot of more data you can use. The biggest advantage of using this is that you can check if top donator (not donation) changed. Also it is the recommended option for goal widgets.
> Note: Due to complexity of object in `onSessionUpdate`, a `onEventReceived` event listener will be the best way to use for most of scenarios (easier to implement and better performance).

Example:
```javascript
window.addEventListener('onSessionUpdate', function (obj) {
  const data = obj.detail.session;
  const tipTopDonator = data["tip-session-top-donator"];
  const cheerTopDonator = data["cheer-session-top-donator"];

  document.getElementById("top-donator").innerHTML = `${tipTopDonator["name"]} - ${tipTopDonator["amount"]}`;
  document.getElementById("top-cheerer").innerHTML = `${cheerTopDonator["name"]} - ${cheerTopDonator["amount"]}`;
});
```
`data` is the same as in `onWidgetLoad` so every property is listed in section above (check note below).

**Note:** 
> Be mindful of the object structure:
> - In `onWidgetLoad`, `data` is available at `obj.detail.session.data`
> - In `onSessionUpdate`, `data` is available at `obj.detail.session`
