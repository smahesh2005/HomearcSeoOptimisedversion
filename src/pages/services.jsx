import React from 'react';
import SEO from '../components/SEO';
import services from '../data/services';
import ServiceCard from '../components/servicecard';
import './services.css';

const Services = () => {
  return (
    <div className="services-page container fade-in" style={{ padding: '2rem 1rem' }}>
      <SEO
        title="Services — Homearc: Plumbing, Electrical, AC, Painting & More"
        description="Explore HomeArc's professional services: plumbing, electrical, AC repair, painting, carpentry, cleaning, renovation and pest control. Book verified experts today."
        canonical="https://homearc-house-services.vercel.app/services"
      />
      <h1 className="section-title" style={{ marginBottom: '2rem' }}>Our 10+ Professional Home Services</h1>
      <div className="services-grid-3">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} vertical={true} variant="compact" />
        ))}
      </div>
    </div>
  );
};

export default Services;