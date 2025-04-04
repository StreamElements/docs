import React from 'react';
import TwitchChatMessage from './TwitchChatMessage';
import styles from './ExampleChatInteraction.module.css'; // Reuse styles for now

/**
 * Component to display a sequence of chat messages.
 * Takes an array of message objects, each defining the properties for a single message.
 */
export default function MultiChatInteraction({
  messages = [], // Array of message objects
}) {
  if (!messages || messages.length === 0) {
    return null; // Don't render anything if no messages are provided
  }

  return (
    <div className={styles.interactionWrapper}>
       <span className={styles.chatLabel}>example chat</span>
      {messages.map((msg, index) => (
        <TwitchChatMessage
          key={index} // Use index as key, assuming messages array order is stable for rendering
          username={msg.username}
          message={msg.message}
          userColor={msg.userColor}
          badges={msg.badges || []} // Default to empty array if badges are not provided
          isBot={msg.isBot || false} // Default to false if isBot is not provided
        />
      ))}
    </div>
  );
}

// Example Usage (can be removed or kept for reference):
/*
<MultiChatInteraction
  messages={[
    { username: 'Viewer1', message: 'Hello!', userColor: '#DAA520' },
    { username: 'StreamElements', message: 'Hi Viewer1!', userColor: '#5B99FF', badges: ['partner'], isBot: true },
    { username: 'ModUser', message: 'Welcome everyone!', userColor: '#00ADFF', badges: ['moderator'] }
  ]}
/>
*/ 
