---
id: removesong
tags:
  - chatbot
  - commands
  - mediarequest
---
# !removesong

The `!removesong` command is used to remove songs from the queue. This command can be used to remove all songs added by a specific user or a single song by its URL. This command is typically used by moderators or the streamer themselves to manage the song queue during a stream. The syntax for this command is `!removesong [username|URL]`, where `[username]` is the name of the viewer whose songs you want to remove, and `[URL]` is the URL of the specific song you want to remove.

### Arguments

- `username` (optional): The username of the person whose songs you want to remove from the queue.
- `URL` (optional): The URL of the specific song you want to remove from the queue.

### Usage

````
!removesong <username|URL>
````

### Example Input

````
!removesong https://www.youtube.com/watch?v=6n3pFFPSlW4
````

### Example Output

````
@Styler, removed https://www.youtube.com/watch?v=6n3pFFPSlW4 from the queue.
````
