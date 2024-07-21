---
id: ai
sidebar_label: "$(ai)"
description: "Learn how to use the StreamElements AI chatbot variable to generate dynamic responses in your stream chat."
tags:
- chatbot
- ai
- variables
keywords:
- streamelements ai
- chatbot ai
- twitch bot
- stream bot
- ai variable
---

# $(ai) Variable

## Overview

The `$(ai)` variable allows you to integrate AI into your StreamElements chat commands, generating dynamic responses based on user input. This powerful feature can enhance viewer engagement and create unique interactive experiences in your stream.

:::warning
The `$(ai)` variable is currently in beta and may be subject to changes.
:::

## Usage

To use the AI variable, include it in your commands with the following syntax:

```
$(ai *your_query_here*)
```

Replace `*your_query_here*` with the text you want the AI to respond to.

## Examples

1. Simple question:
   ```
   !command add !aihelp ${ai How can I help improve the stream?}
   ```

2. Contextual response:
   ```
   !command add !aifact ${ai You are a knowledgeable historian. Tell me an interesting fact about ${1:}}
   ```

3. Roleplaying:
   ```
   !command add !aipirate ${ai You are a friendly pirate. Greet ${user} and tell them about your latest adventure.}
   ```

4. Combining with other variables:
   ```
   !command add !aiwelcome ${ai Create a warm welcome message for ${1} who was last seen $(user.lastseen ${1}) ago. Their last message was $(user.lastmessage ${1}).}
   ```

## Parameters

The `$(ai)` variable accepts a single parameter:

- `query`: The input text for the AI to generate a response. This parameter is required.

## Configuration

### Ratelimits

To prevent abuse, the `$(ai)` variable has the following rate limits:

| User Type | Requests | Reset Time |
|-----------|----------|------------|
| Regular   | 3        | 60 seconds |
| Affiliate | 10       | 60 seconds |
| Partner   | 30       | 60 seconds |

## Best Practices

1. Provide clear context in your queries to get more relevant responses.
2. Use command cooldowns to prevent spam.
3. Combine the `$(ai)` variable with other StreamElements variables for more dynamic interactions.
4. Test your AI commands thoroughly before using them in live streams.

## FAQ

**Q: Can I customize the AI's personality?**

A: Yes, you can provide context or instructions in your query to shape the AI's response. For example:
```
$(ai You are a friendly pirate. Greet ${user} and share a sea shanty.)
```

**Q: What happens if I don't provide a query?**

A: If no query is provided, the variable will return an error. Always include a query when using the `$(ai)` variable.

**Q: Can I use the AI variable in combination with other variables?**

A: Yes, you can combine the `$(ai)` variable with other StreamElements variables to create more dynamic and personalized responses. See example 4 in the Examples section.

**Q: Are there any content restrictions for AI-generated responses?**

A: Yes, the AI is programmed to avoid generating inappropriate, offensive, or harmful content. However, it's always a good idea to monitor and moderate AI-generated responses during your stream.

**Q: How long can my query be?**

A: The query limit is 400 characters. For optimal performance, keep your queries concise. If you need a more extensive response, consider breaking it down into multiple separate commands.

**Q: How can I report issues or unexpected behavior with the AI variable?**

A: If you encounter any problems or unexpected responses, you can report them to StreamElements support or post in the official StreamElements Discord for assistance.

## Troubleshooting

If you're experiencing issues with the `$(ai)` variable, try the following:

1. Check your rate limit usage and wait for the reset if necessary.
2. Verify that your command syntax is correct.
3. Ensure that your StreamElements bot has the necessary permissions in your chat.
4. If problems persist, reach out to StreamElements support for further assistance.
