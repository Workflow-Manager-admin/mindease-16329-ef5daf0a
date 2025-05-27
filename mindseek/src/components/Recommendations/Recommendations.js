import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Recommendations feature card (scaffold).
 * Shows title, icon, description.
 */
function Recommendations() {
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
      data-testid="recommendations"
    >
      <span
        style={{
          fontSize: '2.6rem',
          color: 'var(--primary)',
          marginBottom: 12,
        }}
        aria-label="Recommendations Icon"
        role="img"
      >
        💡
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
        Recommendations
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
        Get personalized self-care ideas and wellness tips based on your recent activity and mood trends. Small actions, big impact—discover something new every day!
      </div>
    </div>
  );
}

export default Recommendations;
