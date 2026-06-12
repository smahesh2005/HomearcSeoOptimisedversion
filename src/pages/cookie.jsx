import React, { useState } from 'react';

const Cookie = () => {
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  });

  const handlePreferenceChange = (type) => {
    setPreferences(prev => ({ ...prev, [type]: !prev[type] }));
  };

  const savePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    alert('Cookie preferences saved!');
  };

  return (
    <div className="container fade-in" style={{ padding: '8rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem', color: 'var(--secondary)' }}>Cookie Policy</h1>
      
      <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2rem' }}>
        This website uses cookies to improve your experience. We'll assume you're ok with this, but you can opt-out if you wish.
      </p>

      <h3 style={{ marginTop: '2rem', color: 'var(--secondary)' }}>What Are Cookies?</h3>
      <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
        Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
      </p>

      <h3 style={{ marginTop: '2rem', color: 'var(--secondary)' }}>How We Use Cookies</h3>
      <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
        We use cookies for the following purposes:
      </p>
      <ul style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginLeft: '2rem', marginBottom: '1rem' }}>
        <li><strong>Essential Cookies:</strong> Required for the website to function properly (e.g., booking process, login)</li>
        <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
        <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
        <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
      </ul>

      <h3 style={{ marginTop: '2rem', color: 'var(--secondary)' }}>Types of Cookies We Use</h3>
      
      <div style={{ marginBottom: '2rem' }}>
        <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1rem' }}>
          <h4 style={{ color: 'var(--secondary)' }}>Necessary Cookies (Always Active)</h4>
          <p style={{ color: 'var(--text-muted)' }}>These cookies are essential for the website to function. They enable core functionality such as security, booking management, and account access. You cannot disable these cookies.</p>
        </div>
        
        <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1rem' }}>
          <h4 style={{ color: 'var(--secondary)' }}>Functional Cookies</h4>
          <p style={{ color: 'var(--text-muted)' }}>These cookies remember your preferences and choices (e.g., language, location) to provide enhanced functionality.</p>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
            <input type="checkbox" checked={preferences.functional} onChange={() => handlePreferenceChange('functional')} />
            Enable Functional Cookies
          </label>
        </div>
        
        <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1rem' }}>
          <h4 style={{ color: 'var(--secondary)' }}>Analytics Cookies</h4>
          <p style={{ color: 'var(--text-muted)' }}>These cookies help us understand how visitors interact with our website by collecting anonymous information.</p>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
            <input type="checkbox" checked={preferences.analytics} onChange={() => handlePreferenceChange('analytics')} />
            Enable Analytics Cookies
          </label>
        </div>
        
        <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1rem' }}>
          <h4 style={{ color: 'var(--secondary)' }}>Marketing Cookies</h4>
          <p style={{ color: 'var(--text-muted)' }}>These cookies track your browsing habits to deliver targeted advertisements relevant to you.</p>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
            <input type="checkbox" checked={preferences.marketing} onChange={() => handlePreferenceChange('marketing')} />
            Enable Marketing Cookies
          </label>
        </div>
      </div>

      <button className="btn-primary" onClick={savePreferences} style={{ marginRight: '1rem' }}>
        Save Preferences
      </button>
      <button className="btn-secondary" onClick={() => {
        setPreferences({ necessary: true, functional: false, analytics: false, marketing: false });
        localStorage.setItem('cookiePreferences', JSON.stringify({ necessary: true, functional: false, analytics: false, marketing: false }));
        alert('All optional cookies disabled!');
      }}>
        Reject All Optional
      </button>

      <h3 style={{ marginTop: '2rem', color: 'var(--secondary)' }}>Managing Cookies</h3>
      <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
        You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies. However, please note that blocking essential cookies may affect your ability to use certain features of our website.
      </p>

      <h3 style={{ marginTop: '2rem', color: 'var(--secondary)' }}>Third-Party Cookies</h3>
      <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
        Some cookies may be set by third-party services we use, such as payment processors or analytics providers. We do not control these cookies directly.
      </p>

      <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginTop: '2rem', fontStyle: 'italic' }}>
        Last Updated: April 2026
      </p>
    </div>
  );
};

export default Cookie;