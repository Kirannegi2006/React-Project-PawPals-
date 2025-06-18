import React from 'react';
import { Link } from 'react-router-dom';
import './Thanks.css'
export default function Thanks() {
  return (
    <div className="container py-5 text-center">
      <h1 className="text-success mb-4">✅ Thank You!</h1>
      <p className="lead">Your message has been successfully sent.</p>
      <p>We appreciate you reaching out. We'll get back to you shortly.</p>
      <Link to="/" className="btn btn-danger mt-4 rounded-pill">
        Back to Home
      </Link>
    </div>
  );
}
