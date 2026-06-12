import React from 'react';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="container fade-in" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <SEO
        title="About Homearc — Professional Home Services"
        description="HomeArc connects homeowners with certified, background-checked professionals for plumbing, electrical, AC repair, painting, carpentry, cleaning, renovation and pest control. Reliable service and transparent pricing."
        canonical="https://homearc-house-services.vercel.app/about"
        image="https://homearc-house-services.vercel.app/images/aboutus.jpeg"
      />
      <style>{`
        @media (max-width: 992px) {
          .about-hero-grid { grid-template-columns: 1fr !important; }
          .about-features { grid-template-columns: 1fr !important; }
          .about-feature-text { max-width: none !important; }
        }
      `}</style>

      {/* HEADER AND DESCRIPTION */}
      <section className="about-hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1fr', gap: '3rem', marginBottom: '5rem', alignItems: 'stretch' }}>
        <div className="about-image-container" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow)', height: '100%' }}>
          <img src="/images/aboutus.jpeg" alt="HomeArc professional team providing plumbing, electrical, AC repair, painting, carpentry, cleaning, renovation and pest control services" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
        </div>
        <div className="about-description-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            About <span style={{ color: 'var(--primary)' }}>Home</span><span style={{ color: 'var(--secondary)' }}>Arc</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
            HomeArc was founded with a single purpose: to turn home maintenance into a seamless, stress-free experience.
            We bridge the gap between homeowners and top-tier professionals by offering innovative digital tools and a rigorously vetted network of experts.
            Whether it's a minor repair or a complete home renovation, our commitment stands firm on providing excellence in every task.
            We believe that a well-maintained home leads to a better quality of life, and we strive to deliver reliable, high-quality, and transparent services.
            With an emphasis on customer satisfaction, we ensure every job is completed up to a global standard of care.
          </p>
        </div>
      </section>

      {/* MISSION, VISION, VALUES (3 cards in grid) */}
      <section style={{ marginBottom: '5rem' }}>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Core Pillars</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>

          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <h2 style={{ textAlign: 'left', marginBottom: '1rem', fontSize: '2rem', color: 'var(--primary)' }}>Our Mission</h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7' }}>
              <li>Empowering homeowners by giving full control with transparent and reliable services.</li>
              <li>Connecting communities by linking households with trusted local professionals.</li>
            </ul>
          </div>

          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <h2 style={{ textAlign: 'left', marginBottom: '1rem', fontSize: '2rem', color: 'var(--primary)' }}>Our Vision</h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7' }}>
              <li>Becoming the benchmark framework for home services worldwide.</li>
              <li>Using smart technology for a faster, better service.</li>
            </ul>
          </div>

          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <h2 style={{ textAlign: 'left', marginBottom: '1rem', fontSize: '2rem', color: 'var(--primary)' }}>Our Values</h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7' }}>
              <li><strong>Trust:</strong> Verified professionals and reliable craftsmanship you can count on.</li>
              <li><strong>Transparency:</strong> Clear pricing with completely no hidden costs.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* WHY US (shorter points) */}
      <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="section-title">Why Choose HomeArc?</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem'
        }}>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>✔ Verified Experts</h3>
            <p style={{ color: 'var(--text-muted)' }}>Background-checked, skilled, and reliable professionals.</p>
          </div>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>✔ Transparent Pricing</h3>
            <p style={{ color: 'var(--text-muted)' }}>No hidden charges. Know what you pay before enquiring.</p>
          </div>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>✔ Easy Enquiring</h3>
            <p style={{ color: 'var(--text-muted)' }}>Enquire in just a few clicks. Save time and hassle.</p>
          </div>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>✔ Reliable Support</h3>
            <p style={{ color: 'var(--text-muted)' }}>24/7 dedicated assistance for a smooth experience.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;