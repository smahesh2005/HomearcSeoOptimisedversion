import React from 'react';

const Privacy = () => (
  <div className="container fade-in" style={{ padding: '8rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
    <h1 style={{ marginBottom: '2rem', color: 'var(--secondary)' }}>Privacy Policy</h1>
    <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2rem' }}>
      Your privacy is important to us. It is HomeArc's policy to respect your privacy regarding any information we may collect from you across our website.
    </p>

    <h3 style={{ marginTop: '2rem', color: 'var(--secondary)' }}>1. Information We Collect</h3>
    <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
      We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.
    </p>

    <h3 style={{ marginTop: '2rem', color: 'var(--secondary)' }}>2. How We Use Your Information</h3>
    <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
      We use the information we collect to:
    </p>
    <ul style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginLeft: '2rem', marginBottom: '1rem' }}>
      <li>Provide, operate, and maintain our services</li>
      <li>Improve, personalize, and expand our services</li>
      <li>Understand and analyze how you use our services</li>
      <li>Communicate with you about bookings and updates</li>
      <li>Process transactions and send booking confirmations</li>
    </ul>

    <h3 style={{ marginTop: '2rem', color: 'var(--secondary)' }}>3. Information Sharing</h3>
    <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
      We do not share your personal information with third parties except to provide you with our services (e.g., sharing your address with a service professional), comply with the law, or protect our rights. We never sell your personal information to third parties.
    </p>

    <h3 style={{ marginTop: '2rem', color: 'var(--secondary)' }}>4. Data Security</h3>
    <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
      We take reasonable steps to protect your personal information from loss, misuse, unauthorized access, disclosure, alteration, or destruction. However, no internet or email transmission is ever fully secure or error-free.
    </p>

    <h3 style={{ marginTop: '2rem', color: 'var(--secondary)' }}>5. Your Rights</h3>
    <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
      You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact us at privacy@homearc.com.
    </p>

    <h3 style={{ marginTop: '2rem', color: 'var(--secondary)' }}>6. Children's Privacy</h3>
    <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
      Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
    </p>

    <h3 style={{ marginTop: '2rem', color: 'var(--secondary)' }}>7. Changes to This Policy</h3>
    <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
      We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
    </p>

    <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginTop: '2rem', fontStyle: 'italic' }}>
      Last Updated: April 2026
    </p>
  </div>
);

export default Privacy;