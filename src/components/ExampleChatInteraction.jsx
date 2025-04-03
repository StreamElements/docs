import React from 'react';
import TwitchChatMessage from './TwitchChatMessage';
import styles from './ExampleChatInteraction.module.css'; // Optional CSS module for wrapper

// Define persona defaults
const personaDefaults = {
  user: {
    username: 'ViewerName',
    userColor: '#DAA520', // Default Twitch color
    badges: [],
  },
  moderator: {
    username: 'ModUser',
    userColor: '#00ADFF', // Example mod color
    badges: ['moderator'],
  },
  vip: {
    username: 'VIPViewer',
    userColor: '#E83DF8', // Example VIP color
    badges: ['vip'], // Assuming you add a 'vip' badge to TwitchChatMessage later
  },
  broadcaster: {
    username: 'BroadcasterName',
    userColor: '#FF0000', // Example broadcaster color
    badges: ['broadcaster'],
  },
};

/**
 * Component to display a common chat interaction pattern using personas for input.
 * 1. User input message (based on persona)
 * 2. Bot output message (standard defaults)
 */
export default function ExampleChatInteraction({
  // Input props based on persona
  inputPersona = 'user', // 'user', 'moderator', 'vip', 'broadcaster'
  inputMessage,
  // Allow overriding persona username if needed (optional)
  inputUsernameOverride,
  // Output props (using established defaults)
  outputMessage,
  outputUsername = 'StreamElements',
  outputUserColor = '#5B99FF',
  outputBadges = ['partner', 'moderator'],
}) {
  // Get persona details, fallback to 'user' if invalid persona provided
  const persona = personaDefaults[inputPersona] || personaDefaults.user;

  // Determine the username to display for input
  const displayInputUsername = inputUsernameOverride || persona.username;

  return (
    <div className={styles.interactionWrapper}>
      <span className={styles.chatLabel}>example chat</span>
      <TwitchChatMessage
        username={displayInputUsername} // Use determined username
        message={inputMessage}
        userColor={persona.userColor} // Use persona color
        badges={persona.badges} // Use persona badges
        isBot={false}
      />
      {/* Only render output if message is provided */}
      {outputMessage && (
        <TwitchChatMessage
          username={outputUsername}
          message={outputMessage} // Pass the original outputMessage
          userColor={outputUserColor}
          badges={outputBadges}
          isBot={true} // Explicitly bot output
        />
      )}
    </div>
  );
} 
