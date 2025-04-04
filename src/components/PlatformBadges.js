import React from 'react';
import clsx from 'clsx'; // Optional: for conditional classes if needed

// Map platform names (lowercase) to their CSS classes for styling
const platformClasses = {
  twitch: 'twitch',
  kick: 'kick',
  youtube: 'youtube',
  trovo: 'trovo',
};

export default function PlatformBadges({ supported }) {
  if (!supported || supported.length === 0) {
    return null; // Don't render anything if no platforms are specified
  }

  return (
    <div className="platform-badge-container">
      {supported.map((platform) => {
        // Ensure platform name is lowercase for class matching
        const platformKey = platform.toLowerCase();
        const platformClass = platformClasses[platformKey] || ''; // Get specific class

        return (
          <span
            key={platform}
            // Combine base badge class, our sizing class, and the specific platform class
            className={clsx('badge', 'platform-badge', platformClass)}
          >
            {platform} {/* Display the platform name */}
          </span>
        );
      })}
    </div>
  );
} 
