import React, { useState } from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setShowSuccess(false);
  };

  const handleSubmit = (e) => {
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      e.preventDefault();
      alert('Please fill in all fields before submitting.');
    } else {
      setShowSuccess(true);
    }
  };

  return (
    <div className='contact py-5'>
      <div className='container my-5'>
        <div className='row shadow-lg rounded-3 overflow-hidden'>

          <div className='col-md-6 p-4 contact-left text-white'>
            <h3 className='mb-4'>Contact Us</h3>
            <p><FaMapMarkerAlt className='me-2' />Malviya Nagar</p>
            <p><FaEnvelope className='me-2' />Kirannegi@gmail.com</p>
            <p><FaPhoneAlt className='me-2' />+91 7819 xxxx</p>
          </div>

          <div className='col-md-6 p-5 bg-white contact-right'>
            <h3 className='text-dark mb-2'>Get in Touch</h3>
            <p className='text-muted mb-4'>Feel free to drop us a line below!</p>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={handleSubmit}
            >
             
              <input type="hidden" name="access_key" value="777b7d45-611b-4bab-9ced-f5053a2f332d" />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control mb-3"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control mb-3"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control mb-3"
                rows="4"
                placeholder="Typing your message here..."
                required
              ></textarea>

              <input type="hidden" name="subject" value="📩 New message from Contact Form!" />
              <input type="hidden" name="redirect" value="https://pawpals-care.netlify.app/thanks" />

              <button type="submit" className="btn btn-danger w-100 rounded-pill">SEND</button>

              {showSuccess && (
                <div className="mt-3 text-success text-center fw-semibold">
                  ✅ Your message has been sent!
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
