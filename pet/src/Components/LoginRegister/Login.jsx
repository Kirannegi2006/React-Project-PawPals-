import React, { useState } from 'react';
import './Login.css';
import { auth, provider } from './Firebase';
import { signInWithPopup } from "firebase/auth";
import loginpet from '../../assets/loginpet2.jpg';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');

    let valid = true;

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      valid = false;
    }

    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      valid = false;
    }

    if (!valid) return;

    console.log('Logged in with:', { email, password });
    navigate('/');
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);
      alert(`Welcome ${user.displayName}`);
      navigate('/');
    } catch (error) {
      console.error("Google login failed:", error.message);
    }
  };

  return (
    <div className="login">
      <div className="container my-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 position-relative">
            <div className="image-wrapper">
              <img src={loginpet} alt="Login Pet" className="img-fluid login-img" />
            </div>
          </div>

          <div className="col-md-6">
            <form onSubmit={handleLogin} className="login-form shadow p-4 rounded bg-white">
              <h2 className="text-center mb-4">Sign In</h2>

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`form-control mb-1 ${emailError ? 'is-invalid' : ''}`}
                required
              />
              {emailError && <div className="text-danger mb-2">{emailError}</div>}

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`form-control mb-1 ${passwordError ? 'is-invalid' : ''}`}
                required
              />
              {passwordError && <div className="text-danger mb-3">{passwordError}</div>}

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <input type="checkbox" id="remember" className="me-1" />
                  <label htmlFor="remember">Remember Me</label>
                </div>
                <a href="#" className="text-danger text-decoration-none">Forgot Password?</a>
              </div>

              <button type="submit" className="btn btn-danger w-100 mb-3">Log In</button>

              <div className="text-center">or</div>

              <button
                type="button"
                className="btn btn-outline-dark w-100 mt-3"
                onClick={handleGoogleLogin}
              >
                <i className="fab fa-google me-2"></i> Sign in with Google
              </button>

              <p className="text-center mt-4">
                Don’t have an account? <a href="/register" className="text-danger">Sign Up</a>
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
