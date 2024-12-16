# WebSocket Topic Documentation Templates

## Frontmatter Template
```markdown
---
id: [filename-without-extension]
sidebar_label: "[Title Case Name]"
description: "Real-time updates for [feature] via WebSocket"
tags:
- websocket
- [relevant-tags]
keywords:
- StreamElements
- WebSocket
- [relevant-keywords]
---
```

## Topic Documentation Structure Template
```markdown
# [Topic Name]

## Overview

[Description of the topic]

## Authentication

Required scope: `[scope]`

## Status

One of:
- `stable` - Production ready
- `beta` - May have breaking changes
- `deprecated` - Will be removed in future
- `in development` - Not ready for production

## Payload

```json
{
    "id": "01HPPM2TQ6CCMFQGHENAPFR4ZE",
    "ts": "2024-02-15T14:52:42Z",
    "type": "message",
    "topic": "[topic.name]",
    "data": {
        // Topic-specific payload fields
    }
}
```

## Error Handling

[Topic-specific error cases, if any. Reference main error codes from index.md]
```
