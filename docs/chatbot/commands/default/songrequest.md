---
id: songrequest
sidebar_label: "!songrequest"
description: "Learn how to use the !songrequest command to add songs to your StreamElements mediarequest queue."
keywords:
- songrequest
- song request
- mediarequest
- chatbot commands
- StreamElements
- music streaming
- YouTube integration
---

# !songrequest

## Overview

The `!songrequest` command allows viewers to add songs to the streamer's mediarequest queue. This command integrates with YouTube, enabling users to request songs using various input methods.

## Usage

```
!songrequest <song|url|search>
```

## Examples

1. Request a song by search term:
   ```
   !songrequest league of legends theme
   ```

2. Request a song by YouTube URL:
   ```
   !songrequest https://www.youtube.com/watch?v=dQw4w9WgXcQ
   ```

## Parameters

- `<song|url|search>` (required): The song to request. This can be:
  - A YouTube video URL
  - A YouTube playlist URL
  - A search term

## Related Commands

- [`!songqueue`](./songqueue.md): View the current mediarequest queue
- [`!skip`](./skip.md): Skip the currently playing song (moderator only)
- [`!volume`](./volume.md): Adjust the volume of the media player (moderator only)

## Aliases

- `!sr`: A shorter alias for `!songrequest`

## Configuration

Streamers can configure various aspects of the `!songrequest` command in their StreamElements dashboard:

- Set a maximum song duration
- Limit the number of requests per user
- Enable or disable playlist requests
- Set up a song blacklist

## Example Output

When a song is successfully added to the queue, the chatbot will respond with a message similar to this:

```
@Viewer, added "Song Title" to the queue at #2 (playing ~in 3 mins 5 secs) https://youtu.be/VIDEO_ID
```

This response includes:

- The requester's name
- The song title
- The position in the queue
- Estimated time until the song plays
- A link to the YouTube video
