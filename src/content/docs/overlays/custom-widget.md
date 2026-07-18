---
title: "Custom Widget & SE_API"
description: Reference for the SE_API functions available to custom widgets in the StreamElements Overlay Editor.
keywords:
  - StreamElements Custom Widget
  - Overlay Editor
  - SE API
  - Widget customization
  - Stream overlay development
  - SE_API
---

The Custom Widget runs your own HTML, CSS, and JavaScript inside the StreamElements Overlay Editor. Its code can call `SE_API`, a set of functions for storing data, reading bot counters, filtering messages, checking overlay status, and controlling the alert queue.

:::caution
You cannot access `document.cookie` nor `IndexedDB` (security reasons), so you need to keep your data elsewhere (accessible via HTTP API) or in the [SE_API store](#se_apistoresetkey-value).
:::

## Before Starting

### Prerequisites

This article requires you to have an Overlay created with a Custom Widget added there. To do so, follow the steps in the [Getting Started](/overlays/getting-started) article.

### Custom Code Editor

The Custom Code Editor is a powerful tool that allows you to write custom code in the Overlay Editor. For more information about the Custom Code Editor, please refer to the [Code Editor](/overlays/widget-structure) article.

## SE_API

SE_API is a set of functions that provide access to various personalized features for custom widgets. You can check the ones available below:

- **.store** - A key-value store where objects can be saved globally in a permanent way. The stored data is accessible to other custom widgets under the same account.
- **.cheerFilter** - Removes cheer emotes from a message.
- **.counters** - Retrieves the value of a specific counter.
- **.getOverlayStatus** - Gets the status of the overlay.
- **.resumeQueue** - Resumes the queue immediately.
- **.sanitize** - Sanitizes a message by removing bad words.
- **.setField** - Sets a value for `fieldData[key]`. This does not save the value and works only in the Overlay Editor.

### `SE_API.store.set(key, value)`

Stores an object in the database under the specified key.

| Name | Type | Description |
|------|------|-------------|
| `key` | string | Key to store the object under. Can be any alphanumeric string. |
| `value` | object | The object to store. |

**Returns:** No documented return value. Each call emits an `onEventReceived` event with the `kvstore:update` listener for every custom widget.

:::caution
Setting a value will completely overwrite any existing data stored under the same key. Ensure you send the full object, as partial updates are not supported.
:::

:::note
Keys cannot be removed once created. You can update their values as often as needed, but deletion is not possible so far.
:::

```js
const object = { "item1":"value1", "item2":"value2" }

SE_API.store.set("keyName", object);
```

Example payload of the `kvstore:update` event it emits:

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

### `SE_API.store.get(key)`

Retrieves the contents stored under the specified key.

| Name | Type | Description |
|------|------|-------------|
| `key` | string | Key to read the stored object from. |

**Returns:** A `Promise` that resolves with the full object stored in the database.

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

### `SE_API.counters.get(counterName)`

Gets the value of a counter. Your counters can be found at [streamelements.com/dashboard/bot/counters](https://streamelements.com/dashboard/bot/counters).

| Name | Type | Description |
|------|------|-------------|
| `counterName` | string | Name of the counter to read. |

**Returns:** A `Promise` that resolves with an object containing the counter `id` and its current `count`.

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

### `SE_API.sanitize({ message })`

Sanitizes a message by filtering vulgar words.

| Name | Type | Description |
|------|------|-------------|
| `message` | string | The message to filter, passed as the `message` property of an object. |

**Returns:** A `Promise` that resolves with an object containing `skip` (whether the message should be skipped according to the rules) and `result.message` (the message after filtering).

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

### `SE_API.cheerFilter(message)`

Removes cheer emotes from a message.

| Name | Type | Description |
|------|------|-------------|
| `message` | string | The message to clear cheer emotes from. |

**Returns:** A `Promise` that resolves with the message without cheer emotes.

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

### `SE_API.getOverlayStatus()`

Gets the status of the overlay.

This method takes no parameters.

**Returns:** A `Promise` that resolves with an object containing `isEditorMode` and `muted`.

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

### `SE_API.setField(key, value, shouldReload)`

Sets a value for `fieldData[key]`. It works only in the Overlay Editor itself and does not save the value.

| Name | Type | Description |
|------|------|-------------|
| `key` | string | Field key to set. |
| `value` | any | Value to assign to `fieldData[key]`. |
| `shouldReload` | boolean (optional) | Whether the overlay should be reloaded after the value is set. The default is `true`. |

**Returns:** No documented return value.

```js
SE_API.setField('key', 'value', false);
```

### `SE_API.resumeQueue()`

Resumes the event queue immediately, before the hold time defined by the `widgetDuration` property elapses.

This method takes no parameters.

**Returns:** No documented return value.

```js
SE_API.resumeQueue();
```

See [Queue management with widgetDuration](#queue-management-with-widgetduration) for a complete example.

## Queue management with widgetDuration

The `widgetDuration` property defines the maximum event queue hold time (execution time of widget) by widget in seconds (default is 0). For example, if you want to show animations by this widget and don't want them to overlap, instead of building your own queue, you can use this. This property is defined in the widget's fields JSON (see [Custom Fields](/overlays/widget-structure#custom-fields)). Premature queue resume can be called by `SE_API.resumeQueue();`.

The best way to explain this is through an example.

**Scenario:** We have an animation for community sub gifts (only), and we want to use it. The animation duration is dynamic between 7 and 15 seconds, and we don't want it to overlap on alerts.

### Fields

```json
{
    "widgetDuration":{
      "type": "hidden",
      "value": 15
    }
}
```

### JS

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
