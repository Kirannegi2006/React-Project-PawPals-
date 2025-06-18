import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import petimg from '../../assets/petimg.jpg';
import './Register.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [agreeError, setAgreeError] = useState('');

  const navigate = useNavigate();

  const validateEmail = (email) => {

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    setEmailError('');
    setPasswordError('');
    setAgreeError('');

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      valid = false;
    }

    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      valid = false;
    }

    if (!agreed) {
      setAgreeError('You must agree to the terms and privacy policy');
      valid = false;
    }

    if (!valid) return;

    // Success
    console.log('Registered:', { name, email, password });
    alert('Registration Successful!');
    navigate('/login');
  };

  return (
    <div className='register'>
      <div className='container my-5'>
        <div className='row align-items-center'>
          
          <div className='col-md-6 text-center'>
            <img src={petimg} alt="Pet Donation" className="img-fluid rounded" />
          </div>

          <div className='col-md-6'>
            <form onSubmit={handleSubmit} className="register-form p-4 shadow rounded bg-white">
              <h2 className="mb-4">Create Account</h2>

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="form-control mb-3"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`form-control mb-1 ${emailError ? 'is-invalid' : ''}`}
              />
              {emailError && <div className="text-danger mb-3">{emailError}</div>}

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={`form-control mb-1 ${passwordError ? 'is-invalid' : ''}`}
              />
              {passwordError && <div className="text-danger mb-3">{passwordError}</div>}

              <div className="form-check mb-1">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="agreeCheck"
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                />
                <label className="form-check-label" htmlFor="agreeCheck">
                  I agree to the <a href="#">terms of service</a> and <a href="#">privacy policy</a>
                </label>
              </div>
              {agreeError && <div className="text-danger mb-3">{agreeError}</div>}

              <button type="submit" className="btn btn-primary w-100">Sign Up</button>

              <p className="text-center mt-3">
                Already have an account? <a href="/login">Sign in</a>
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
