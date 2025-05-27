import React from 'react';
import './App.css';

// Placeholder imports for future components (to be implemented)
//// import MoodTracker from './components/MoodTracker/MoodTracker';
// import Meditations from './components/Meditations/Meditations';
// import Recommendations from './components/Recommendations/Recommendations';
// import Journal from './components/Journal/Journal';

function App() {
  return (
    <div className="app" style={{
      background: 'var(--secondary)'
    }}>
      <nav className="navbar"
        style={{
          background: 'var(--primary)',
          color: 'white',
          borderBottom: 'none',
          borderRadius: '0 0 var(--app-radius) var(--app-radius)',
          boxShadow: 'var(--app-shadow)'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo" style={{ fontWeight: 700, fontSize: '1.35rem', letterSpacing: '.01em' }}>
            <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '2rem', marginRight: 8 }}>🧘‍♂️</span>
            MindEase
          </div>
          <span style={{
            fontWeight: 500,
            background: 'rgba(255,255,255,0.18)',
            borderRadius: 8, padding: '6px 16px',
            color: 'white', fontSize: '1rem'
          }}>
            Your Calm Companion
          </span>
        </div>
      </nav>

      <main>
        <div className="container" style={{ marginTop: 96, paddingBottom: 64, maxWidth: 950 }}>
          {/* Dashboard Quick Links */}
          <div className="hero" style={{
            background: 'white',
            padding: '2.5rem 2rem',
            borderRadius: 'var(--app-radius)',
            boxShadow: 'var(--app-shadow)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 28,
            marginBottom: 32
          }}>
            <div className="subtitle" style={{ color: 'var(--primary)', fontWeight: 500, fontSize: '1.25rem' }}>
              Welcome to MindEase
            </div>
            <h1 className="title" style={{
              fontSize: '3rem', color: 'var(--primary)',
              margin: 0, fontWeight: 600, lineHeight: 1.2
            }}>
              Your mental wellness hub
            </h1>
            <div className="description" style={{
              color: 'var(--text-secondary)', fontSize: '1.08rem'
            }}>
              Track your mood, enjoy guided meditations, discover daily recommendations, and reflect in your journal — all in a soothing space designed for you.
            </div>
            <div style={{
              display: 'flex',
              gap: 18,
              flexWrap: 'wrap'
            }}>
              <button className="btn btn-large" style={{
                background: 'var(--primary)',
                color: 'white',
                borderRadius: 8,
                minWidth: 140
              }}>Mood Tracker</button>
              <button className="btn btn-large" style={{
                background: 'var(--accent)',
                color: 'white',
                borderRadius: 8,
                minWidth: 140
              }}>Meditations</button>
              <button className="btn btn-large" style={{
                background: 'var(--primary)',
                color: 'white',
                borderRadius: 8,
                minWidth: 140
              }}>Recommendations</button>
              <button className="btn btn-large" style={{
                background: '#FFF4F5',
                color: 'var(--accent)',
                border: `1px solid var(--accent)`,
                borderRadius: 8,
                minWidth: 140
              }}>Journal</button>
            </div>
          </div>
          {/* Future: below here, modular components will be inserted */}
          {/* <MoodTracker />
          <Meditations />
          <Recommendations />
          <Journal /> */}
        </div>
      </main>
    </div>
  );
}

export default App;