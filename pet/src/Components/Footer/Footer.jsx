import React, { useState } from 'react';
import './Footer.css';
import linkedinIcon from '../../assets/linkedin1.png';
import instagramIcon from '../../assets/Instagram1.png';
import githubIcon from '../../assets/Git1.png';

export default function Footer() {

  
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = () => {
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if (!emailRegex.test(email)) {
    alert('❌ Please enter a valid email address.');
  } else {
    alert('✅ Subscribed successfully!');
    setEmail('');
  }
};

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Branding */}
        <div className="footer-section">
          <h2 className="footer-logo">PawPals</h2>
          <p>Connecting pet lovers everywhere.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/community">Community</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Subscribe to get our latest pet tips and updates.</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="footer-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="footer-button" onClick={handleSubscribe}>
            Subscribe
          </button>
          {message && <p style={{ color: message.includes('valid') ? 'red' : 'green' }}>{message}</p>}
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="footer-social-links">
          
            <a
              href="https://www.linkedin.com/in/kiran-negi7/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
            </a>
            <a
              href="https://github.com/Kirannegi2006"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <img src={githubIcon} alt="GitHub" className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 PawPals. All rights reserved.</p>
      </div>

        {/* Scroll to Top Button */}
      <button
        className="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        🔝
      </button>
    </footer>
  );
}
