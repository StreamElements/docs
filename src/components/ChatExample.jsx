import React from 'react';
import TwitchChatMessage from './TwitchChatMessage';
import styles from './ChatExample.module.css';

// Define persona defaults (can be expanded)
const personaDefaults = {
  user: {
    username: 'ViewerName',
    userColor: '#DAA520', // Default Twitch color
    badges: [],
    isBot: false,
  },
  moderator: {
    username: 'ModUser',
    userColor: '#00ADFF',
    badges: ['moderator'],
    isBot: false,
  },
  vip: {
    username: 'VIPViewer',
    userColor: '#E83DF8',
    badges: ['vip'],
    isBot: false,
  },
  broadcaster: {
    username: 'BroadcasterName',
    userColor: '#FF0000',
    badges: ['broadcaster'],
    isBot: false,
  },
  bot: {
    username: 'StreamElements',
    userColor: '#5B99FF',
    badges: ['partner', 'moderator'], // Example default bot badges
    isBot: true,
  },
  // Add other personas as needed
};

/**
 * Component to display a sequence of chat messages for examples.
 * Accepts an array of message objects, each defining a speaker and message.
 */
export default function ChatExample({ messages = [] }) {
  if (!messages || messages.length === 0) {
    return null; // Don't render anything if no messages are provided
  }

  return (
    <div className={styles.interactionWrapper}>
      <span className={styles.chatLabel}>example chat</span>
      {messages.map((msg, index) => {
        let messageProps = {};

        // Check if using a persona
        if (msg.persona && personaDefaults[msg.persona]) {
          const persona = personaDefaults[msg.persona];
          messageProps = {
            ...persona, // Spread default persona props
            username: msg.usernameOverride || persona.username, // Allow overriding username
            message: msg.message, // Always use the provided message
            // Override other persona props if explicitly provided in msg object
            userColor: msg.userColor || persona.userColor,
            badges: msg.badges || persona.badges,
            isBot: msg.isBot !== undefined ? msg.isBot : persona.isBot,
          };
        } else {
          // Use custom props if no valid persona
          messageProps = {
            username: msg.username || 'UnknownUser',
            message: msg.message,
            userColor: msg.userColor || '#8A2BE2', // Default color if none provided
            badges: msg.badges || [],
            isBot: msg.isBot || false,
          };
        }

        return (
          <TwitchChatMessage
            key={index} // Simple key based on index, sufficient for static examples
            {...messageProps}
          />
        );
      })}
    </div>
  );
} 
