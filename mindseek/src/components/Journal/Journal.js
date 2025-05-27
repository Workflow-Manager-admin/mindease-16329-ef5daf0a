import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Journal feature card (scaffold).
 * Shows title, icon, and description.
 */
function Journal() {
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
      data-testid="journal"
    >
      <span
        style={{
          fontSize: '2.6rem',
          color: 'var(--primary)',
          marginBottom: 12,
        }}
        aria-label="Journal Icon"
        role="img"
      >
        📓
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
        Journal
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
        Reflect on your thoughts and feelings in a private, secure space. Journaling helps process emotions and track your mental wellness journey over time.
      </div>
    </div>
  );
}

export default Journal;
