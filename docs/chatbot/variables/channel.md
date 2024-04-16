---
id: channel
description: Learn how to use channel-specific variables in your Twitch chatbot to display channel name, viewers, followers, subscribers, and more.
tags:
  - chatbot
  - variable
  - twitch
  - twitch subscriber count
---

# $(channel)

Displays the name of the channel

#### Parameters

This variable does not take any parameters.

#### Example Output

```
styler
```

## $(channel.viewers)

Displays the channel’s current viewer count

#### Parameters

This variable does not take any parameters.

#### Example Input

```
$(channel) has $(channel.viewers) viewers
```

#### Example Output

```
onslaught has 100 viewers
```

## $(channel.followers)

Displays the channel’s total follower count

#### Parameters

This variable does not take any parameters.

#### Example Input

```
$(channel) has $(channel.followers) followers
```

#### Example Output

```
onslaught has 100 followers
```

## $(channel.subs)

Displays the channel’s total subscriber count

#### Parameters

This variable does not take any parameters.

#### Example Input

```
$(channel) has $(channel.subs) subscribers
```

#### Example Output

```
onslaught has 100 subscribers
```

## $(channel.subpoints)

Displays the channel’s total subscriber points

#### Parameters

This variable does not take any parameters.

#### Example Input

```
$(channel) has $(channel.subpoints) subscriber points
```

#### Example Output

```
onslaught has 100 subscriber points
```

## $(channel.display_name)

Displays the display name of the channel

#### Parameters

This variable does not take any parameters.

#### Example Input

```
$(channel) $(channel.display_name)
```

#### Example Output

```
onslaught OnSlAuGhT
```
