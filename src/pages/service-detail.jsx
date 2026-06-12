import React from 'react';
import SEO from '../components/SEO';
import { useParams, Link } from 'react-router-dom';
import services from '../data/services';
import experts from '../data/experts';

const FEATURES = [
  {
    title: 'Full Site Inspection',
    desc: 'Our experts assess the situation on-site and provide a transparent, upfront quote before any work begins.',
  },
  {
    title: 'Certified Professionals',
    desc: 'Only top-rated, background-checked specialists use the highest quality tools and materials on your home.',
  },
  {

    title: 'Clean-up Included',
    desc: 'We leave your home spotless after every job — no mess, no stress, guaranteed.',
  },
  {

    title: '30-Day Warranty',
    desc: 'Every service comes with a 30-day satisfaction guarantee. If anything goes wrong, we fix it free.',
  },
];

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === parseInt(id)) || services[0];
  let availableExperts = experts.filter(e => e.relatedServiceIds && e.relatedServiceIds.includes(service.id));
  if (availableExperts.length === 0) availableExperts = experts.slice(0, 3);

  return (
    <div className="fade-in" style={{ minHeight: '100vh', background: 'var(--bg-color)' }}>

      {/* ──── HERO BANNER ──── */}
      <style>{`
        @media (max-width: 768px) {
          .service-detail-hero { height: 350px !important; }
          .service-detail-title { font-size: 2.2rem !important; }
        }
      `}</style>
      <div className="service-detail-hero" style={{ position: 'relative', width: '100%', height: '600px', overflow: 'hidden' }}>
        <img
          src={service.image}
          alt={service.name}
          loading="lazy" decoding="async"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', objectPosition: 'center 20%' }}
        />
        {/* Dark gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(10,29,55,0.85) 30%, rgba(10,29,55,0.2) 100%), linear-gradient(to bottom, transparent 60%, rgba(10,29,55,0.4) 100%)',
        }} />
        {/* Hero text */}
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
          justifyContent: 'center', padding: '0 10%',
        }}>
          <Link to="/services" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', marginBottom: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            ← Back to Services
          </Link>
          <h1 className="service-detail-title" style={{ fontSize: '3.8rem', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: '0.6rem', letterSpacing: '-1px' }}>
            {service.name}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.15rem', maxWidth: '520px', lineHeight: 1.6 }}>
            {service.description}
          </p>
          {/* Stats pills */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.4rem', flexWrap: 'wrap' }}>
            <span style={{ background: 'var(--primary)', color: '#fff', padding: '0.45rem 1.2rem', borderRadius: '30px', fontWeight: 700, fontSize: '0.95rem' }}>
              ₹{service.rate} / hr
            </span>
            <span style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)', color: '#fff', padding: '0.45rem 1.2rem', borderRadius: '30px', fontWeight: 600, fontSize: '0.95rem', border: '1px solid rgba(255,255,255,0.25)' }}>
              Certified Experts
            </span>
            <span style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)', color: '#fff', padding: '0.45rem 1.2rem', borderRadius: '30px', fontWeight: 600, fontSize: '0.95rem', border: '1px solid rgba(255,255,255,0.25)' }}>
              30-Day Warranty
            </span>
          </div>
        </div>
      </div>

      {/* ──── CONTENT ──── */}
      <style>{`
        @media (max-width: 768px) {
          .service-content-container { padding: 2rem 1.5rem !important; }
        }
      `}</style>
      <div className="container service-content-container" style={{ padding: '3.5rem 4rem' }}>
        <SEO
          title={`${service.name} — Homearc`}
          description={service.description}
          canonical={`https://homearc-house-services.vercel.app/services/${service.id}`}
          image={service.image}
        />

        {/* What we will do */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '1.8rem', position: 'relative', paddingBottom: '0.6rem' }}>
            What We Will Do
            <span style={{ position: 'absolute', bottom: 0, left: 0, width: '50px', height: '4px', borderRadius: '4px', background: 'var(--primary)' }} />
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {FEATURES.map((f, i) => (
              <div key={i} style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '1.8rem 1.5rem',
                border: '1px solid var(--border)',
                boxShadow: '0 4px 20px rgba(10,29,55,0.05)',
                display: 'flex', flexDirection: 'column', gap: '0.8rem',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(10,29,55,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(10,29,55,0.05)'; }}
              >
                <span style={{ fontSize: '2rem', lineHeight: 1 }}>{f.icon}</span>
                <h4 style={{ color: 'var(--secondary)', fontWeight: 800, fontSize: '1.05rem', margin: 0 }}>{f.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Available Experts */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '1.8rem', position: 'relative', paddingBottom: '0.6rem' }}>
            Available Experts
            <span style={{ position: 'absolute', bottom: 0, left: 0, width: '50px', height: '4px', borderRadius: '4px', background: 'var(--primary)' }} />
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: '1.5rem' }}>
            {availableExperts.map(expert => (
              <Link key={expert.id} to={`/experts/${expert.id}`} style={{ textDecoration: 'none', display: 'flex' }}>
                <div style={{
                  background: '#fff', borderRadius: '20px', padding: '1.8rem 1.5rem',
                  border: '1px solid var(--border)', textAlign: 'center', width: '100%',
                  boxShadow: '0 4px 20px rgba(10,29,55,0.05)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(10,29,55,0.12)'; e.currentTarget.style.borderColor = 'var(--primary)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(10,29,55,0.05)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                >
                  <div style={{ position: 'relative', marginBottom: '0.4rem' }}>
                    <img
                      src={expert.image} alt={expert.name}
                      style={{ width: '110px', height: '110px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--primary)' }}
                    />
                    <span style={{
                      position: 'absolute', bottom: 2, right: 2,
                      background: '#22c55e', width: '16px', height: '16px', borderRadius: '50%',
                      border: '2px solid #fff', display: 'block',
                    }} />
                  </div>
                  <h4 style={{ color: 'var(--secondary)', fontWeight: 800, fontSize: '1.05rem', margin: 0 }}>{expert.name}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', margin: 0 }}>{expert.role}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
                    <span style={{ color: '#f59e0b', fontSize: '0.9rem' }}>★ {expert.rating}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>({expert.reviews})</span>
                  </div>
                  <span style={{ background: 'rgba(255,140,50,0.1)', color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 700, padding: '0.25rem 0.8rem', borderRadius: '20px' }}>
                    ₹{expert.wage}/hr
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{
          background: 'linear-gradient(135deg, var(--secondary) 0%, #1e3a6e 100%)',
          borderRadius: '24px', padding: '3rem', textAlign: 'center',
          boxShadow: '0 20px 60px rgba(10,29,55,0.2)',
        }}>
          <h3 style={{ color: '#fff', fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.6rem' }}>
            Ready to get started?
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', marginBottom: '1.8rem' }}>
            Connect with a verified expert for {service.name} instantly.
          </p>
          <a
            href={`https://wa.me/919087654321?text=Hi! I would like to enquire about the *${service.name}* service. Please provide more details.`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              padding: '1rem 3rem', background: 'var(--primary)', color: '#fff',
              borderRadius: '50px', fontWeight: 800, fontSize: '1.1rem',
              textDecoration: 'none', boxShadow: '0 8px 24px rgba(255,140,50,0.4)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 14px 32px rgba(255,140,50,0.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,140,50,0.4)'; }}
          >
            Enquire Now
          </a>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetail;

