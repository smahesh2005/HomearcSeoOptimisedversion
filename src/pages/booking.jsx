import React, { useState } from 'react';
import SEO from '../components/SEO';
import services from '../data/services';
import './booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceId: '',
    address: '',
    date: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enquiry submitted:', formData);
    alert('Enquiry Successful! Our expert will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      serviceId: '',
      address: '',
      date: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fixed WhatsApp link with encodeURIComponent
  const getWhatsAppUrl = () => {
    const serviceName = formData.serviceId ? services.find(s => s.id === parseInt(formData.serviceId))?.name : 'Service';
    const message = `Hi! I would like to make an enquiry for: ${serviceName} - Name: ${formData.name}, Email: ${formData.email}, Address: ${formData.address}, Preferred Date: ${formData.date}`;
    return `https://wa.me/919087654321?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="container fade-in" style={{ padding: '4rem 2rem' }}>
      <SEO
        title="Book a Service — Homearc"
        description="Book verified home service experts for plumbing, electrical, AC, painting and more. Fast booking, verified professionals, upfront pricing."
        canonical="https://homearc-house-services.vercel.app/booking"
        image="https://homearc-house-services.vercel.app/images/booking-banner.jpg"
      />
      <div className="booking-top-section" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem', color: 'var(--secondary)' }}>
          Schedule Your <span style={{ color: 'var(--primary)' }}>Expert</span>
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto' }}>
          Book a professional service in seconds. Tell us what you need and when you need it.
        </p>
      </div>
      <div className="booking-layout">
        <div className="booking-info" style={{ display: 'none' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem' }}>
            Schedule Your <span style={{ color: 'var(--primary)' }}>Expert</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Book a professional service in seconds. Tell us what you need and when you need it.
          </p>
          
          <div className="booking-features">
            <div className="booking-feature-item" style={{ color: 'var(--text-color)' }}>
              <span>✓</span> Trusted Professionals
            </div>
            <div className="booking-feature-item" style={{ color: 'var(--text-color)' }}>
              <span>✓</span> Upfront Pricing
            </div>
            <div className="booking-feature-item" style={{ color: 'var(--text-color)' }}>
              <span>✓</span> 24/7 Support
            </div>
          </div>
        </div>

        <form className="glass-card booking-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label style={{ fontWeight: 600, color: 'var(--secondary)' }}>Full Name</label>
            <input 
              type="text" name="name" required 
              placeholder="John Doe" 
              className="form-input"
              value={formData.name} onChange={handleChange} 
            />
          </div>

          <div className="input-group">
            <label style={{ fontWeight: 600, color: 'var(--secondary)' }}>Email Address</label>
            <input 
              type="email" name="email" required 
              placeholder="john@example.com" 
              className="form-input"
              value={formData.email} onChange={handleChange} 
            />
          </div>

          <div className="input-group">
            <label style={{ fontWeight: 600, color: 'var(--secondary)' }}>Service Type</label>
            <select 
              name="serviceId" required 
              className="form-input"
              value={formData.serviceId} onChange={handleChange} 
            >
              <option value="">Select a service</option>
              {services.map(s => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label style={{ fontWeight: 600, color: 'var(--secondary)' }}>Full Address</label>
            <textarea 
              name="address" required 
              placeholder="Where should we come?" 
              className="form-input form-textarea"
              value={formData.address} onChange={handleChange} 
            />
          </div>

          <div className="input-group">
            <label style={{ fontWeight: 600, color: 'var(--secondary)' }}>Preferred Date</label>
            <input 
              type="date" name="date" required 
              className="form-input"
              value={formData.date} onChange={handleChange} 
            />
          </div>

          <a 
            href={getWhatsAppUrl()} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary" 
            style={{ width: '100%', marginTop: '1rem', backgroundColor: '#25D366', display: 'block', textAlign: 'center', textDecoration: 'none', padding: '1rem' }}
          >
             Send Booking via WhatsApp
          </a>
        </form>
      </div>
    </div>
  );
};

export default Booking;