import React, { useState } from 'react';
import SEO from '../components/SEO';
import services from '../data/services';
import './booking.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceId: '',
    address: '',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceName = services.find((service) => service.id === parseInt(formData.serviceId))?.name || 'Service';
    const waMessage = `Hi! I would like to make an enquiry regarding: ${serviceName} - Name: ${formData.name}, Email: ${formData.email}, Address: ${formData.address}, Preferred Date: ${formData.date}, Message: ${formData.message}`;
    window.open(`https://wa.me/919087654321?text=${encodeURIComponent(waMessage)}`, '_blank');
    setFormData({ name: '', email: '', serviceId: '', address: '', date: '', message: '' });
  };

  return (
    <div className="contact-page container fade-in" style={{ padding: '40px 0' }}>
      <SEO
        title="Contact Homearc — Get a Verified Home Expert"
        description="Contact HomeArc for fast booking of verified home service experts in plumbing, electrical, AC, painting and more. Support and enquiries available daily."
        canonical="https://homearc-house-services.vercel.app/contact"
      />
      <style>{`
        @media (max-width: 768px) {
          .contact-page { padding: 30px 1.5rem !important; }
          .contact-main-grid { gap: 2rem !important; }
        }
      `}</style>
      <h1 className="section-title" style={{ marginBottom: '1.5rem' }}>Contact Us - Book a Verified Home Expert</h1>

      <section className="contact-main-grid" style={{ marginBottom: '3rem' }}>
        <div className="glass-card contact-info-card" style={{ padding: '1.5rem' }}>
          <h2 style={{ color: 'var(--secondary)', marginBottom: '1rem', fontSize: '1.6rem' }}>Get in Touch</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.5' }}>
            Reach out directly for support, estimates, or general service questions. Our team is available every day to help you schedule the best expert for your home.
          </p>

          <div style={{ display: 'grid', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span style={{ width: '32px', height: '32px', display: 'grid', placeItems: 'center', borderRadius: '10px', background: 'rgba(255, 140, 50, 0.12)', color: 'var(--primary)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.81.34 1.6.65 2.35a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.73-1.73a2 2 0 0 1 2.11-.45c.75.31 1.54.53 2.35.65A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div>
                <p style={{ fontWeight: 700, marginBottom: '0.15rem', fontSize: '0.85rem' }}>Phone Number</p>
                <a href="tel:+919087654321" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '0.85rem' }}>+91 90876 54321</a>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span style={{ width: '32px', height: '32px', display: 'grid', placeItems: 'center', borderRadius: '10px', background: 'rgba(37, 211, 102, 0.12)', color: 'var(--primary)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22 6 12 13 2 6" />
                </svg>
              </span>
              <div>
                <p style={{ fontWeight: 700, marginBottom: '0.15rem', fontSize: '0.85rem' }}>Email Address</p>
                <a href="mailto:hello@homearc.com" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '0.85rem' }}>hello@homearc.com</a>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span style={{ width: '32px', height: '32px', display: 'grid', placeItems: 'center', borderRadius: '10px', background: 'rgba(47, 128, 237, 0.12)', color: 'var(--primary)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div>
                <p style={{ fontWeight: 700, marginBottom: '0.15rem', fontSize: '0.85rem' }}>Office Address</p>
                <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.85rem' }}>123 Home Street, Chennai, 600001</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span style={{ width: '32px', height: '32px', display: 'grid', placeItems: 'center', borderRadius: '10px', background: 'rgba(48, 47, 47, 0.08)', color: 'var(--primary)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8v5l3 3" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </span>
              <div>
                <p style={{ fontWeight: 700, marginBottom: '0.15rem', fontSize: '0.85rem' }}>Business Hours</p>
                <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.85rem' }}>Mon - Sun: 8:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/919087654321?text=Hi! I would like to get in touch with HomeArc. Please assist me."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              width: '100%',
              padding: '1.2rem',
              background: 'var(--primary)',
              color: 'white',
              borderRadius: '12px',
              fontWeight: '700',
              textDecoration: 'none',
              fontSize: '1rem',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,211,102,0.25)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.15)'; }}
          >
            Connect with us
          </a>

          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <h3 style={{ color: 'var(--secondary)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>Our Location</h3>
            <div className="contact-map-wrapper">
              <iframe
                title="HomeArc Chennai location - Professional home services office"
                src="https://www.google.com/maps?q=Chennai,+Tamil+Nadu&z=12&output=embed"
                style={{ border: 0, width: '100%', height: '100%', flexGrow: 1 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="glass-card contact-booking-card" id="enquire-now" style={{ padding: '1.5rem' }}>
          <h2 style={{ color: 'var(--secondary)', marginBottom: '0.5rem', textAlign: 'center', fontSize: '1.4rem' }}>Enquire About A Service</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', textAlign: 'center', margin: '0 auto 1.5rem', fontSize: '0.95rem', lineHeight: '1.5' }}>
            Fill the form below and we will connect you with a vetted expert for your selected service. You can also complete your enquiry via WhatsApp instantly.
          </p>

          <form className="booking-form" onSubmit={handleSubmit} style={{ maxWidth: '100%', margin: '0 auto', padding: '0' }}>
            <div className="input-group">
              <label style={{ fontWeight: 600, color: 'var(--secondary)' }}>Full Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label style={{ fontWeight: 600, color: 'var(--secondary)' }}>Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label style={{ fontWeight: 600, color: 'var(--secondary)' }}>Service Type</label>
              <select
                name="serviceId"
                required
                className="form-input"
                value={formData.serviceId}
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>{service.name}</option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <label style={{ fontWeight: 600, color: 'var(--secondary)' }}>Full Address</label>
              <textarea
                name="address"
                required
                placeholder="Where should we come?"
                className="form-input form-textarea"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label style={{ fontWeight: 600, color: 'var(--secondary)' }}>Preferred Date</label>
              <input
                type="date"
                name="date"
                required
                className="form-input"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label style={{ fontWeight: 600, color: 'var(--secondary)' }}>Message</label>
              <textarea
                name="message"
                placeholder="Tell us more about your request"
                className="form-input form-textarea"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem', padding: '0.75rem', fontWeight: '700', fontSize: '0.9rem' }}>
              Send Enquiry Request
            </button>
          </form>
        </div>


      </section>
    </div>
  );
};

export default Contact;