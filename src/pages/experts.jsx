import React from 'react';
import SEO from '../components/SEO';
import experts from '../data/experts';
import { Link } from 'react-router-dom';

const Experts = () => {
  return (
    <div className="experts-page container fade-in" style={{ padding: '2rem 1rem' }}>
      <SEO
        title="Experts — Meet Our 100% Verified Home Service Professionals"
        description="Meet HomeArc's certified and background-checked home service experts. Find professionals for plumbing, electrical, AC, painting, carpentry and more."
        canonical="https://homearc-house-services.vercel.app/experts"
      />
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="section-title">Meet Our 100% Verified Home Service Experts</h1>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
          Our professionals are background-checked, insured, and among the top-rated in the industry.
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        {experts.map(expert => (
          <div key={expert.id} className="glass-card" style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', gap: '1.2rem', transition: 'all 0.3s ease', cursor: 'pointer' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <img 
                src={expert.image} 
                alt={`${expert.name} - ${expert.role} at Homearc`}
                loading="lazy" decoding="async"
                style={{ width: '220px', height: '220px', borderRadius: '20px', objectFit: 'cover', border: '2px solid var(--primary)', flexShrink: 0 }} 
              />
              <div>
                <h3 style={{ color: 'var(--secondary)', marginBottom: '0.3rem', fontSize: '1.2rem' }}>{expert.name}</h3>
                <p style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.85rem' }}>{expert.role}</p>
                <p style={{ margin: '0.4rem 0 0', fontWeight: 700, color: 'var(--secondary)', fontSize: '0.85rem' }}>
                  ₹{expert.wage} / hour
                </p>
                <div style={{ fontSize: '0.85rem', color: '#ffc107', marginTop: '0.3rem' }}>
                  ★ {expert.rating} <span style={{ color: 'var(--text-muted)', marginLeft: '0.4rem' }}>({expert.reviews} reviews)</span>
                </div>
              </div>
            </div>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.4' }}>
              {expert.bio}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {expert.specialties.map((spec, i) => (
                <span key={i} style={{ padding: '0.3rem 0.8rem', background: 'var(--bg-color)', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, color: 'var(--secondary)' }}>
                  {spec}
                </span>
              ))}
            </div>

            <Link to={`/experts/${expert.id}`} className="btn-secondary" style={{ marginTop: 'auto', textAlign: 'center', fontSize: '0.9rem', padding: '0.7rem' }}>
              View Full Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experts;