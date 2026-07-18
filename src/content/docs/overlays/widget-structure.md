---
title: Code Editor
description: The StreamElements custom code editor for widgets, covering the HTML, CSS, JS, and custom field definitions.
---

This section describes the StreamElements Custom Code Editor and Widget's Structure.
Custom code editor is a simple text editor that allows you to write code, styling, field definitions.

## HTML

You can use any HTML tags possible, you can even import external JS if you feel such need. For example if you want to have `$("#selector").toggle('explode');` from jQueryUI, just add:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.js"></script>
```

And if you want to use a Google font in your CSS, just call it by:

```html
<link href="https://fonts.googleapis.com/css?family=Chelsea+Market" rel="stylesheet">
```

This also can be done within the CSS field by importing a stylesheet:

```css
@import url('https://fonts.googleapis.com/css?family=Chelsea+Market');
```

## CSS

You can use regular CSS syntax - including animations, transitions.

## JS

You can use pure JavaScript or include external libraries/frameworks to ease your work, however everything will be running in protected sandbox, so you won’t be able to access cookies, `console.*` methods or IndexedDB storage.

## Custom Fields

You can create custom variables, so the end user doesn't have to interact with code; those fields will be displayed under "OPEN EDITOR" in the left panel. Each field is rendered in the left panel as a standard HTML input matching its JSON type (a `<select>` for `dropdown`).

This data can be also called by `{{variableName}}` or `{variableName}` within HTML/CSS/JS code (however for better readability we suggest using those calls only in HTML/CSS). To access it via JS, you can do it via the `onWidgetLoad` listener:

```js
window.addEventListener('onWidgetLoad', (obj) => {
  fieldData = obj.detail.fieldData;
  console.log(fieldData) // Show the fields object in the browser console
})
```

### Field types

At this point we support most of HTML5 input types (except file - use library inputs such as `video-input` instead), as well as a handful of custom inputs: `colorpicker`, `image-input`, `sound-input`, `video-input`, `googleFont`, `dropdown`, and `slider`, plus `button` and `hidden`.

Adding an invalid type will default it to `"type":"text"`.

| Type | Description | Extra parameters |
|------|-------------|------------------|
| `text` | Text input. | — |
| `checkbox` | Checkbox; `value` is `true` or `false`. | — |
| `colorpicker` | Color picker; `value` is a color such as `"#0000FF"`. | — |
| `number` | Number input. | `min`, `max`, `step` |
| `slider` | Slider. | `min`, `max`, `step` |
| `dropdown` | Select menu; `value` is the key of the selected option. | `options` - an object of `"value": "Label"` pairs |
| `image-input` | Library input for selecting an image. | `"multiple": true` allows the end user to provide multiple media files within a single field; output will result in an array of urls |
| `video-input` | Library input for selecting a video. | `"multiple": true` (as above) |
| `sound-input` | Library input for selecting audio. | `"multiple": true` (as above) |
| `googleFont` | Google Font picker; `value` is a font name such as `"Roboto"`. | — |
| `button` | Button in the left panel; clicking it emits a [`widget-button` event](/overlays/events/#button-click). | — |
| `hidden` | Not displayed in the left panel; used for reserved fields such as `widgetName` and `widgetDuration`. | — |

If you want to group some fields into a collapsible menu in the left panel, you can add to them the same parameter `"group": "Some group name"`.

### Reserved field names

There are some reserved field names (all future reserved words will start with `widget`):

| Field | Effect |
|-------|--------|
| `widgetName` | Used to set the display name of the widget. |
| `widgetAuthor` | Sets the author name of the widget (adds a "(by Author)" to the widget name). |
| `widgetDuration` | Maximum event queue hold time (seconds) - for Custom Widget (as alertboxes have their own timers). Explained in [Queue management with widgetDuration](/overlays/custom-widget/#queue-management-with-widgetduration). |

### Example

```json
{
  "someText": {
    "type": "text",
    "label": "Some Text",
    "value": "Default text"
  },
  "someCheckbox": {
    "type": "checkbox",
    "label": "Some checkbox",
    "value": true
  },
  "someColorPicker": {
    "type": "colorpicker",
    "label": "Some color",
    "value": "#0000FF"
  },
  "someNumber": {
    "type": "number",
    "label": "Count",
    "value": 10,
    "min": 0,
    "max": 100,
    "step": 1
  },
  "someSlider": {
    "type": "slider",
    "label": "Counter",
    "value": 10,
    "min": 0,
    "max": 100,
    "step": 1
  },
  "someDropdown": {
    "type": "dropdown",
    "label": "Choose an option:",
    "value": "blue",
    "options": {
      "blue": "Blue thing",
      "apple": "Some apple",
      "7": "Lucky number"
    }
  },
  "someImage": {
    "type": "image-input",
    "label": "Some Image"
  },
  "someVideo": {
    "type": "video-input",
    "label": "Some Video"
  },
  "someSound": {
    "type": "sound-input",
    "label": "Some Audio"
  },
  "fontName": {
    "type": "googleFont",
    "label": "Select a font:",
    "value": "Roboto"
  },
  "someButton": {
    "type": "button",
    "label": "Click me!",
    "value": "Thanks"
  },
  "widgetName": {
    "type": "hidden",
    "value": "My Custom Widget"
  },
  "widgetDuration": {
    "type": "hidden",
    "value": 15
  }
}
```

### Local font

You can use a local font installed on your computer:

```json
{
  "customFont": {
    "label": "Custom Font Name",
    "type": "text",
    "value": "Comic Sans MS"
  }
}
```

And add it to your CSS:

```css
* {
  font-family: {{customFont}};
}
```

:::note
Restart the browser if you have just installed the font.
:::

### Usage example

Result of those custom fields can be used like:

#### HTML

```html
<div class="message">{{someDropdown}} is an option for today!<span id="additional">{{someText}}</span></div>
```

#### CSS

```css
.message {
    font-size:{{someSlider}}px;
    color: {{someColorPicker}};
}
```

#### JS

```javascript
let someVariable,magicNumber;
window.addEventListener('onWidgetLoad', function (obj) {
    const {fieldData} = obj.detail;
    someVariable = fieldData["someText"];
    // OR
    magicNumber = fieldData.someNumber;
    // OR use internal templating variables
    magicNumber = parseFloat("{{someNumber}}");
});
```
