import React from 'react';

/**
 * PUBLIC_INTERFACE
 * MoodTracker feature card (scaffold).
 * Shows title, icon, and description.
 */
function MoodTracker() {
  return (
    <div
      style={{
        background: 'var(--accent)',
        borderRadius: 'var(--app-radius)',
        padding: '2.2rem 2rem',
        boxShadow: 'var(--app-shadow)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
        maxWidth: 500,
        margin: '0 auto',
      }}
      data-testid="mood-tracker"
    >
      <span
        style={{
          fontSize: '2.6rem',
          color: 'var(--primary)',
          marginBottom: 12,
        }}
        aria-label="Mood Tracker Icon"
        role="img"
      >
        📊
      </span>
      <div
        className="title"
        style={{
          fontSize: '2rem',
          fontWeight: 600,
          color: 'var(--text-color)',
          marginBottom: 6,
        }}
      >
        Mood Tracker
      </div>
      <div
        className="description"
        style={{
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          textAlign: 'center',
          maxWidth: 380,
        }}
      >
        Log your daily mood, recognize patterns, and get insights about your emotional trends. Your progress is always private and designed to help you thrive.
      </div>
    </div>
  );
}

export default MoodTracker;
