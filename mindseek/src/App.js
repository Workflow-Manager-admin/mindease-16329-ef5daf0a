import React, { useState } from 'react';
import './App.css';

// Feature components
import MoodTracker from './components/MoodTracker/MoodTracker';
import Meditations from './components/Meditations/Meditations';
import Recommendations from './components/Recommendations/Recommendations';
import Journal from './components/Journal/Journal';

// PUBLIC_INTERFACE
/**
 * MainContainer for MindEase. Provides navigation and dashboard layout.
 * Dark theme w/ green accent. Integrates feature modules.
 */
function MainContainer() {
  const [activeFeature, setActiveFeature] = useState('dashboard');

  // Dynamic render for navigation state
  const renderMain = () => {
    switch (activeFeature) {
      case 'mood':
        return <MoodTracker />;
      case 'meditations':
        return <Meditations />;
      case 'recommendations':
        return <Recommendations />;
      case 'journal':
        return <Journal />;
      default:
        return (
          <div className="hero" style={{
            background: 'var(--accent)',
            padding: '2.5rem 2rem',
            borderRadius: 'var(--app-radius)',
            boxShadow: 'var(--app-shadow)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 28,
            marginBottom: 32
          }}>
            <div className="subtitle" style={{
              color: 'var(--primary)',
              fontWeight: 500,
              fontSize: '1.25rem'
            }}>
              Welcome to MindEase
            </div>
            <h1 className="title" style={{
              fontSize: '3rem',
              color: 'var(--text-color)',
              margin: 0,
              fontWeight: 600,
              lineHeight: 1.2
            }}>
              Your mental wellness hub
            </h1>
            <div className="description" style={{
              color: 'var(--text-secondary)',
              fontSize: '1.08rem'
            }}>
              Track your mood, enjoy guided meditations, discover daily recommendations, and reflect in your journal — all in a soothing space designed for you.
            </div>
            <div style={{
              display: 'flex',
              gap: 18,
              flexWrap: 'wrap'
            }}>
              <button className="btn btn-large"
                style={{
                  background: 'var(--primary)',
                  color: 'var(--text-color)',
                  borderRadius: 8,
                  minWidth: 140
                }}
                onClick={() => setActiveFeature('mood')}
              >Mood Tracker</button>
              <button className="btn btn-large"
                style={{
                  background: 'var(--primary-light)',
                  color: 'var(--text-color)',
                  borderRadius: 8,
                  minWidth: 140
                }}
                onClick={() => setActiveFeature('meditations')}
              >Meditations</button>
              <button className="btn btn-large"
                style={{
                  background: 'var(--primary)',
                  color: 'var(--text-color)',
                  borderRadius: 8,
                  minWidth: 140
                }}
                onClick={() => setActiveFeature('recommendations')}
              >Recommendations</button>
              <button className="btn btn-large"
                style={{
                  background: 'var(--accent)',
                  color: 'var(--primary)',
                  border: `1.2px solid var(--primary-light)`,
                  borderRadius: 8,
                  minWidth: 140
                }}
                onClick={() => setActiveFeature('journal')}
              >Journal</button>
            </div>
          </div>
        );
    }
  };

  // Dashboard sidebar navigation
  const navButtons = [
    { label: 'Dashboard', key: 'dashboard', icon: '🏠' },
    { label: 'Mood Tracker', key: 'mood', icon: '📊' },
    { label: 'Meditations', key: 'meditations', icon: '🎧' },
    { label: 'Recommendations', key: 'recommendations', icon: '💡' },
    { label: 'Journal', key: 'journal', icon: '📓' }
  ];

  return (
    <div className="app" style={{
      background: 'var(--secondary)',
      minHeight: '100vh', display: 'flex', flexDirection: 'column'
    }}>
      <nav className="navbar">
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div className="logo" style={{
            fontWeight: 700,
            fontSize: '1.35rem',
            letterSpacing: '.01em',
            color: 'var(--text-color)'
          }}>
            <span className="logo-symbol" style={{
              color: 'var(--primary)',
              fontWeight: 700,
              fontSize: '2rem',
              marginRight: 8
            }}>🧘‍♂️</span>
            MindEase
          </div>
          <span style={{
            fontWeight: 500,
            background: 'rgba(49,210,122,0.11)',
            borderRadius: 8,
            padding: '6px 16px',
            color: 'var(--primary)',
            fontSize: '1rem'
          }}>
            Your Calm Companion
          </span>
        </div>
      </nav>

      <main style={{
        flex: 1,
        display: 'flex',
        marginTop: 86,
        minHeight: 0
      }}>
        {/* Sidebar navigation */}
        <nav
          style={{
            minWidth: 180,
            maxWidth: 210,
            background: 'var(--accent)',
            borderRadius: 'var(--app-radius)',
            boxShadow: 'var(--app-shadow)',
            margin: '34px 0 34px 24px',
            padding: '16px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            gap: 5,
            minHeight: '530px',
            height: 'fit-content',
            position: 'sticky',
            top: 110
          }}>
          {navButtons.map(btn => (
            <button
              key={btn.key}
              className="btn"
              type="button"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                background: activeFeature === btn.key ? 'var(--primary-dark)' : 'var(--accent)',
                color: activeFeature === btn.key ? 'var(--text-color)' : 'var(--text-secondary)',
                fontWeight: activeFeature === btn.key ? 700 : 500,
                border: activeFeature === btn.key ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                boxShadow: 'none',
                margin: '3.5px 12px',
                borderRadius: 8,
                transition: 'background 0.14s, color 0.15s, border 0.15s',
                fontSize: '1.05rem',
                padding: '10px 12px'
              }}
              onClick={() => setActiveFeature(btn.key)}
              aria-current={activeFeature === btn.key ? "page" : undefined}
            >
              <span style={{
                fontSize: '1.25rem',
                width: 22,
                display: 'inline-block'
              }}>{btn.icon}</span>
              {btn.label}
            </button>
          ))}
        </nav>
        {/* Main dashboard content */}
        <div className="container" style={{
          flex: 1,
          margin: '34px 0',
          marginLeft: 26,
          paddingBottom: 54,
          maxWidth: 950
        }}>
          {renderMain()}
        </div>
      </main>
    </div>
  );
}

// App just renders MainContainer
function App() {
  return <MainContainer />;
}

export default App;