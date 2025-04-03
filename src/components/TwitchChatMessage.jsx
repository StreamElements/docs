import React from 'react';
import styles from './TwitchChatMessage.module.css'; // We'll create this CSS module next

/**
 * Component to render a simulated Twitch chat message.
 * Can be styled differently for user messages vs. bot messages.
 */
export default function TwitchChatMessage({
  username,
  message,
  isBot = false,
  userColor = '#DAA520', // Default: Goldenrod, a common Twitch color
  badges = [], // Array of badge identifiers (e.g., 'broadcaster', 'moderator') or image URLs
}) {
  const messageClasses = [
    styles.chatMessage,
    isBot ? styles.botMessage : styles.userMessage,
  ].join(' ');

  // Simple badge rendering logic
  const renderBadges = () => {
    // Map known strings to actual image URLs
    const badgeMap = {
      moderator: 'https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/3',
      broadcaster: 'https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3',
      partner: 'https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/3',
      // Add more known badges here (vip, subscriber tiers, etc.)
    };

    return badges.map((badge, index) => {
      let badgeSrc = null;
      let badgeTitle = badge; // Default title is the badge name

      // Check if the badge name exists in our map
      if (typeof badge === 'string' && badgeMap[badge]) {
        badgeSrc = badgeMap[badge];
      }
      // Handle explicitly passed image URLs
      else if (typeof badge === 'string' && badge.startsWith('http')) {
        badgeSrc = badge;
        badgeTitle = 'Custom Badge'; // Generic title for URLs
      }

      // If we have a source, render an image tag
      if (badgeSrc) {
        return (
          <img
            key={index}
            src={badgeSrc}
            alt={`${badgeTitle} badge`}
            title={badgeTitle} // Tooltip on hover
            className={styles.badge}
          />
        );
      }

      // Fallback for unknown badges
      return null;
    });
  };

  return (
    <div className={messageClasses}>
      <span className={styles.badgesContainer}>
        {renderBadges()}
      </span>
      <span className={styles.username} style={{ color: userColor }}>
        {username}:
      </span>
      <span className={styles.messageContent}>{message}</span>
    </div>
  );
} 
