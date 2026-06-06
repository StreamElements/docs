---
title: Custom Code in Alertboxes
description: Inline variables and custom HTML, CSS, and JS available in StreamElements alertboxes with Custom CSS enabled.
keywords:
  - StreamElements Custom Code
  - Alertboxes
  - SE API
  - Custom alerts
  - Overlay development
---

## Before Starting

### Prerequisites

This article requires you to have an Overlay created with an AlertBox with "Custom CSS" enabled. To do so, follow the steps in the [Getting Started](/overlays/getting-started/) article.

## Custom Code Editor

The Custom Code Editor is a powerful tool that allows you to write custom code in the Overlay Editor. For more information about the Custom Code Editor, please refer to the [Code Editor](/overlays/widget-structure/) article.

## Inline Variables available

Variables can be written with double braces (`{{variable}}`) or single braces (`{variable}`) - both forms are equivalent.

| Category | Variable | Description | Sample output |
|----------|----------|-------------|---------------|
| Event | `{{name}}` | Person who is in subject of event. | `{{name}} just followed stream!` |
| Event | `{{amount}}` | Amount if event supports it - amount of bits, months (as resub, can be replaced with `{{months}}`), viewers (when hosted, raided). | `{{name}} just cheered with 1000 bits!` |
| Event | `{{tier}}` | Sub tier (sub events only). | `{{name}} subscribed for {{amount}} months at tier {{tier}}` |
| Event | `{{sender}}` | If an action is a sub, `{{sender}}` is replaced with a person who gave it. | `{{sender}} just gifted a sub for {{name}}` |
| Event | `{{currency}}` | Currency if event is a donation. | `{{name}} just tipped us {{currency}} {{amount}} !` |
| Event | `{{items}}` | List of items in Merch event. | `{{name}} just bought {{items}}` |
| Message | `{{announcement}}` | Message specified in "alert message" box to event. Alias: `{{messageTemplate}}`. | `{{name}} is our sub for {{amount}}` |
| Message | `{{message}}` | HTML user message attached to event (sub, cheer, tip). Remember to provide proper styling for `.alertbox-message-emote` class. Alias: `{{userMessage}}`. | See [message output](#message-output) below |
| Message | `{{messageRaw}}` | Plain text user message attached to event (sub, cheer, tip). | `Hi Kappa!` |
| Media | `{{image}}` | URL of image attached to alert. | See [embedding media](#embedding-media) below |
| Media | `{{video}}` | URL of video attached to alert. | See [embedding media](#embedding-media) below |
| Media | `{{videoVolume}}` | Video volume (from 0 to 1). If alerts are muted in activity feed this value is set to 0. | `0.5` |
| Media | `{{audio}}` | URL of audio attached to alert. | See [embedding media](#embedding-media) below |
| Media | `{{audioVolume}}` | Audio volume (from 0 to 1). If alerts are muted in activity feed this value is set to 0. | `0.5` |
| Timing | `{{widgetDuration}}` | Widget duration in seconds, so you can create an exit animation timed perfectly (see examples below). | `5` |

### Message output

`{{message}}` outputs the user message as HTML, with emotes embedded as images. For example, the message `cheer1 Hi!` renders as:

```html
<span class="cheermote-1"><img class="alertbox-message-emote" alt="cheer1" src="https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/2.gif"/>1</span> Hi!
```

### Embedding media

`{{image}}`, `{{video}}`, and `{{audio}}` are URLs, intended to be used as media sources:

```html
<img src="{{image}}"/>

<video id="video" playsinline autoplay muted style="width:100%; height:100%">
  <source id="webm" src="{{video}}" type="video/webm">
</video>

<audio id="audio" playsinline autoplay>
  <source id="alertsound" src="{{audio}}" type="audio/ogg">
</audio>
```

### Examples

#### HTML

```html
<div class="alertbox-message">
    <div class="alertbox-message-text">
        <span class="alertbox-message-name">{{name}}</span>
        <span class="alertbox-message-announcement">{{announcement}}</span>
    </div>
    <div class="alertbox-message-message">{{message}}</div>
</div>
```

#### JS

```js
const hideAfter=parseInt("{{widgetDuration}}")-1000;
const playHideAnimation=()=>{
  timeline.reverse(); //or any other thing that will make your alert fancy exit
}
setTimeout(playHideAnimation,hideAfter);
```

#### CSS

```css
#alertbox {
  animation: hide forwards 1s;
  animation-delay: calc({widgetDuration}s - 1s);
}
```
