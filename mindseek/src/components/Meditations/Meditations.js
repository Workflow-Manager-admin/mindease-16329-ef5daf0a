import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Meditations feature card (scaffold).
 * Shows title, icon, and description.
 */
function Meditations() {
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
      data-testid="meditations"
    >
      <span
        style={{
          fontSize: '2.6rem',
          color: 'var(--primary)',
          marginBottom: 12,
        }}
        aria-label="Meditations Icon"
        role="img"
      >
        🎧
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
        Meditations
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
        Explore guided meditation sessions tailored to various moods and needs. Relax, refocus, and recharge with calming audio experiences any time you need.
      </div>
    </div>
  );
}

export default Meditations;
