---
id: custom-widget
title: Custom Widget & SE_API
sidebar_label: Custom Widget & SE_API
description: Learn how to use the Custom Widget, the most powerful tool in StreamElements Overlay Editor, with HTML, CSS, JavaScript, and API access.
tags:
- custom widget
- custom code editor
- overlay editor
- streamelements
- api
keywords:
- StreamElements Custom Widget
- Overlay Editor
- SE API
- Widget customization
- Stream overlay development
- SE_API
sidebar_position: 2
---

# Custom Widget

This is the most powerful tool in SE Overlay editor. You can do a lot of things within this widget using HTML/CSS/JavaScript and accessing variables

**Note:**
> You cannot access `document.cookie` nor `IndexedDB` via it (security reasons), so you need to keep your data elsewhere (accessible via HTTP API) or [SE_API](#se_api) store.

## Before Starting

### Prerequisites

This article requires you to have an Overlay created with a Custom Widget added there. To do so, follow the steps in the [Before Starting](getting-started.md) article.

### Custom Code Editor

The Custom Code Editor is a powerful tool that allows you to write custom code in the Overlay Editor. For more information about the Custom Code Editor, please refer to the [Widget Structure](widget-structure.md) article.

## SE_API 

SE_API is a set of functions that provide access to various personalized features for custom widgets. You can check the ones available below:

- **.store** - A key-value store where objects can be saved globally in a permanent way. The stored data is accessible to other custom widgets under the same account.

- **.cheerFilter** - Removes cheer emotes from a message.

- **.counters** - Retrieves the value of a specific counter.

- **.getOverlayStatus** - Gets the status of the overlay.

- **.resumeQueue** - Resumes the queue immediately.

- **.sanitize** - Sanitizes a message by removing bad words.

- **.setField** - Sets a value for `fieldData[key]`. This does not save the value and works only in the Overlay Editor.



### store.set 

Stores an object in the database under the specified keyName (`keyName` can be any alphanumeric string).

**Note 1**: Setting a value will completely overwrite any existing data stored under the same key. Ensure you send the full object, as partial updates are not supported.

**Note 2**: Keys cannot be removed once created. You can update their values as often as needed, but deletion is not possible so far.

```js
const object = { "item1":"value1", "item2":"value2" }

SE_API.store.set("keyName", object);
```

It emits an `onEventReceived` event for every custom widget. Example payload:

```json
{
  "detail": {
    "listener": "kvstore:update",
    "event": {
      "data": {
        "key": "customWidget.keyName",
        "value": {
          "item1": "value1",
          "item2": "value2"
        }
      }
    }
  }
}
```


### .store.get

Retrieves the contents stored under the specified "keyName" key. 
The returned obj is the full object stored in the database.

```js
SE_API.store.get('keyName').then(obj => {
  console.log(obj);
  /*
  The result would look like below:
  {
   "item1": "value1",
   "item2": "value2"
  }
  */
});
```

### .counters.get

Gets the value of a counter. Your counters can be found at https://streamelements.com/dashboard/bot/counters

For example, if you have a counter named "test" with a value of "15":

```js
SE_API.counters.get('test').then(counter => {
  console.log(counter);  
  /*
  The result would look like below:  
  {
    "id": "test",
    "count":15
  }
  */
});
```


### .sanitize
Sanitizes a message by filtering vulgar words.

For example, if the word "vulgarWord" is marked as a bad word (configured in Tipping Settings) and the filter is set to "Replace bad words with emotes":

```js
const vulgarSentence = "This is a sentence with vulgarWord";

SE_API.sanitize({ message: vulgarSentence }).then(sanityResult => {
  console.log(sanityResult);
  /*
  The result would look like this:
  {
    "skip": false, // Indicates whether the message should be skipped according to the rules.
    "result":{
      "message":"This is a sentence with 4Head" // Message after filtering
    }    
  }
  */  
});
```


### .cheerFilter
Clears cheer emotes from message.

```js
const message = "shamrock100 This is a cheer message cheer100 cheer100 cheerwhal100"

SE_API.cheerFilter(message).then(cheerResult => {
  console.log(cheerResult);
  
  /*
  The result would look like below:
  This is a cheer message
  */
});
```

### .getOverlayStatus

Gets overlay Status.
```js
SE_API.getOverlayStatus().then(status => {
  console.log(status);
  
  /*
  Result would look like below:
  {
    "isEditorMode":true,
    "muted":false
  }
  */
});
```

### .setField
Sets a value for `fieldData[key]`.
It works only in the Overlay Editor itself and does not save the value.
The third parameter is an optional boolean that indicates whether the overlay should be reloaded after the value is set. The default is true.
```js
SE_API.setField('key', 'value', false);
```

### resumeQueue method and widgetDuration property

The `widgetDuration` property defines the maximum event queue hold time (execution time of widget) by widget in seconds (default is 0). For example, if you want to show animations by this widget and don’t want them to overlap, instead of building your own queue, you can use this. This property is defined in JSON (as mentioned above). Premature queue resume can be called by `SE_API.resumeQueue();`

The best way to explain this is through an example:

**Scenario:**

> We have an animation for community sub gifts (only), and we want to use it. The animation duration is dynamic between 7 and 15 seconds, and we don’t want it to overlap on alerts.

**Code:**

#### Fields:

```json
{
    "widgetDuration":{
      "type": "hidden",
      "value": 15
    }
}
```

#### JS:

```javascript
let skippable=["bot:counter","event","event:test","event:skip","alertService:toggleSound","message","delete-message","delete-messages","kvstore:update"]; //Array of events coming to widget that are not queued so they can come even if queue is on hold
let playAnimation=(event)=>{
    $("container").html(`<div id="sender">${event.sender}</div><div class="amount">${event.amount} subs!</div>`)
    return Math.floor(Math.random()*8)+7;
};
window.addEventListener('onEventReceived', function (obj) {
    const listener = obj.detail.listener;
  	console.log(obj.detail);
    const data = obj.detail.event;
	console.log(`RECEIVED ${listener}`);
  	if (skippable.indexOf(listener)!==-1) return;
  	if (listener !== 'subscriber-latest') {
    	console.log("Resuming as event is not sub");
        SE_API.resumeQueue(); 
        return;
    }
  	if (data.bulkGifted !== true && !data.gifted) {
    	console.log("Resuming as event is not sub gift");
        SE_API.resumeQueue();
        return;
    }    
    if (data.name === data.sender) {
        console.log("Getting animation duration for premature resume");
        let time=playAnimation(data);
        setTimeout(SE_API.resumeQueue, time*1000); 
    }
});
```
