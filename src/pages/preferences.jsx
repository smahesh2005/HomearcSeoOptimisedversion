import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';

const CookiePreferences = () => {
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const saved = localStorage.getItem('cookiePreferences');
    if (saved) {
      setPreferences(JSON.parse(saved));
    }
  }, []);

  const handlePreferenceChange = (type) => {
    setPreferences(prev => ({ ...prev, [type]: !prev[type] }));
  };

  const savePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    alert('Cookie preferences saved successfully!');
  };

  return (
    <div className="container fade-in" style={{ padding: '8rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <SEO title="Cookie Preferences — Homearc" description="Set your cookie preferences for HomeArc. Essential cookies required; others optional." robots="noindex, nofollow" canonical="https://homearc-house-services.vercel.app/preferences" />
      <h1 style={{ marginBottom: '2rem', color: 'var(--secondary)' }}>Cookie Preferences</h1>
      
      <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2rem' }}>
        You can customize your cookie preferences below. Essential cookies cannot be disabled as they are required for the website to function properly.
      </p>

      <div style={{ marginBottom: '2rem' }}>
        <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1rem' }}>
          <h4 style={{ color: 'var(--secondary)' }}>✅ Necessary Cookies (Always Active)</h4>
          <p style={{ color: 'var(--text-muted)' }}>These cookies are essential for the website to function. They enable core functionality such as security, booking management, and account access.</p>
        </div>
        
        <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1rem' }}>
          <h4 style={{ color: 'var(--secondary)' }}>⚙️ Functional Cookies</h4>
          <p style={{ color: 'var(--text-muted)' }}>These cookies remember your preferences and choices (e.g., language, location) to provide enhanced functionality.</p>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
            <input type="checkbox" checked={preferences.functional} onChange={() => handlePreferenceChange('functional')} />
            Enable Functional Cookies
          </label>
        </div>
        
        <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1rem' }}>
          <h4 style={{ color: 'var(--secondary)' }}>📊 Analytics Cookies</h4>
          <p style={{ color: 'var(--text-muted)' }}>These cookies help us understand how visitors interact with our website by collecting anonymous information.</p>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
            <input type="checkbox" checked={preferences.analytics} onChange={() => handlePreferenceChange('analytics')} />
            Enable Analytics Cookies
          </label>
        </div>
        
        <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1rem' }}>
          <h4 style={{ color: 'var(--secondary)' }}>🎯 Marketing Cookies</h4>
          <p style={{ color: 'var(--text-muted)' }}>These cookies track your browsing habits to deliver targeted advertisements relevant to you.</p>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
            <input type="checkbox" checked={preferences.marketing} onChange={() => handlePreferenceChange('marketing')} />
            Enable Marketing Cookies
          </label>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <button className="btn-primary" onClick={savePreferences}>
          Save My Preferences
        </button>
        <button className="btn-secondary" onClick={() => {
          setPreferences({ necessary: true, functional: false, analytics: false, marketing: false });
          localStorage.setItem('cookiePreferences', JSON.stringify({ necessary: true, functional: false, analytics: false, marketing: false }));
          alert('All optional cookies disabled!');
        }}>
          Reject All Optional Cookies
        </button>
        <button className="btn-secondary" onClick={() => {
          setPreferences({ necessary: true, functional: true, analytics: true, marketing: true });
          localStorage.setItem('cookiePreferences', JSON.stringify({ necessary: true, functional: true, analytics: true, marketing: true }));
          alert('All cookies enabled!');
        }}>
          Accept All Cookies
        </button>
      </div>

      <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginTop: '2rem', fontSize: '0.9rem' }}>
        You can change your preferences at any time by returning to this page. For more information, please read our <a href="/cookie" style={{ color: 'var(--primary)' }}>Cookie Policy</a>.
      </p>
    </div>
  );
};

export default CookiePreferences;