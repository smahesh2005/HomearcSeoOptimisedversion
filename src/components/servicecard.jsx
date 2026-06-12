import React from 'react';
import { useNavigate } from 'react-router-dom';
import './servicecard.css';

const ServiceCard = ({ service, vertical = false, variant = 'full' }) => {
  const navigate = useNavigate();
  const imageUrl = service.image;

  return (
    <div
      className={`glass-card service-card ${vertical ? 'vertical' : 'horizontal'} ${variant}`}
      onClick={() => navigate(`/services/${service.id}`)}
    >
      <div className="service-icon">
        {imageUrl ? (
          <img src={imageUrl} alt={`${service.name} service`} loading="lazy" decoding="async" />
        ) : (
          service.icon
        )}
      </div>
      <div className="service-info">
        <h3 className="service-name">{service.name}</h3>
        <p className="service-desc">{service.description}</p>
        <button className="btn-primary service-btn">
          Explore Now <span className="btn-icon">➜</span>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;