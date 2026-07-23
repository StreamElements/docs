---
title: Troubleshooting
description: "Checklists for common StreamElements Chatbot issues: bot not responding, commands not working, timers not triggering, and messages being deleted."
keywords:
  - StreamElements Chatbot Troubleshooting
  - Chatbot Not Responding
  - Commands Not Working
  - Timers Not Triggering
  - Twitch Chatbot Help
---

This section helps you quickly resolve common issues you might encounter with the StreamElements Chatbot and answers frequently asked questions.

## Bot not responding

- Check that the bot is currently active in your channel. Go to your StreamElements dashboard and ensure the bot is turned on.
- Ensure the bot is not banned or ignored in your channel. Sometimes the bot might have been accidentally banned, which prevents it from posting messages.
- Check that the bot has not been muted with [`!bot mute`](/chatbot/commands/default/bot). A muted bot sends no command responses or timer messages; use `!bot unmute` to restore it.

## Commands not working

- Verify the command syntax, including the prefix (usually `!`). See [Custom Commands](/chatbot/commands/custom) for the management syntax.
- Check the command's permission level. Some commands are restricted to moderators or the streamer; adjust this in the dashboard or with [`!command options`](/chatbot/commands/default/command).
- Check for cooldowns. If a command was recently used, it might still be on cooldown; cooldowns are configured per command with [`!command options`](/chatbot/commands/default/command) or in the dashboard.

## Timers not triggering

- Ensure the timer is enabled and configured with the correct interval. See [Timers](/chatbot/timers) for all settings.
- Check the chat lines threshold. A timer only fires once the minimum number of chat messages has been sent within its interval, so it stays silent in an inactive chat. Lower the [chat lines setting](/chatbot/timers) or wait for more chat activity.
- Check any conditions on the timer. A timer with stream category or title keyword [conditions](/chatbot/timers) only fires while those conditions are met.

## Messages being deleted

- A spam filter is likely removing the messages. Review your settings for each filter in [Spam Filters](/chatbot/filters).
- If links are being deleted, the [Link filter](/chatbot/filters/links) acts on messages containing links that are not on your allowlist. Add the link to the allowlist or exclude the affected user groups from the filter.

## FAQ

### How do I add the StreamElements Chatbot to my channel?

Go to the Chatbot section of your StreamElements dashboard and click the button to make the bot join your channel.

### Can I create custom commands?

Yes. You can define the command name, response, cooldowns, and user level restrictions. See [Custom Commands](/chatbot/commands/custom) for managing commands from the dashboard or directly in chat, and [Getting Started](/chatbot/getting-started) for a step-by-step walkthrough.

### How do I set up moderation filters?

Filters for links, caps, symbols, and more can be set up in the StreamElements dashboard under the "Spam Filters" section. See [Spam Filters](/chatbot/filters) for the available filters and their settings.

### Can the chatbot respond to commands with custom messages?

Yes. Each custom command has a response you define, and responses can include [variables](/chatbot/variables) for dynamic content. See [Custom Commands](/chatbot/commands/custom).

### How do I remove the chatbot from my channel?

Use the [`!bot part`](/chatbot/commands/default/bot) command in chat, or go to the Chatbot section in your StreamElements dashboard and select the option to part the bot from your channel.

---

If your issue isn't listed here or if you have more questions, please visit our [Discord](https://discord.gg/se) or contact support via [streamelements.com](https://streamelements.com).
