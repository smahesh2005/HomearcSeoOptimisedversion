import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-overlay"></div>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>Home<span>Arc</span></h2>
            <p>
              Turning home maintenance into a seamless experience. 
              We serve homeowners with premium digital tools and 
              vetted experts to ensure excellence in every task.
            </p>
          </div>

          <div className="footer-group">
            <h4>Services</h4>
            <ul className="footer-list">
              <li><Link to="/services/1">Plumbing</Link></li>
              <li><Link to="/services/5">Carpenting</Link></li>
              <li><Link to="/services/8">Pest Control</Link></li>
              <li><Link to="/services/2">Electrician</Link></li>
              <li><Link to="/services/9">Gardening</Link></li>
            </ul>
          </div>

          <div className="footer-group">
            <h4>Legal</h4>
            <ul className="footer-list">
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/cookie">Cookie Policy</Link></li>
              <li><Link to="/preferences">Cookie Preferences</Link></li>
            </ul>
          </div>

          <div className="footer-group">
            <h4>Contact Us</h4>
            <ul className="footer-list">
              <li className="contact-item">
                <span className="contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                hello@homearc.com
              </li>
              <li className="contact-item">
                <span className="contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.81.34 1.6.65 2.35a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.73-1.73a2 2 0 0 1 2.11-.45c.75.31 1.54.53 2.35.65A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                +91 9087654321
              </li>
              <li className="contact-item">
                <span className="contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                Chennai, Tamil Nadu
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-socials" style={{ display: 'flex', justifyContent: 'flex-start', margin: '0 0 1rem 0' }}>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn" aria-label="LinkedIn">
            <span className="social-icon">in</span>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook" aria-label="Facebook">
            <span className="social-icon">f</span>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram" aria-label="Instagram">
            <svg className="social-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <circle cx="17.5" cy="6.5" r="1.5"></circle>
            </svg>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link" title="YouTube" aria-label="YouTube">
            <span className="social-icon">▶</span>
          </a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} HomeArc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;