import React from 'react';
import './Logout.css';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('You have been logged out.');
    navigate('/login');
  };

  return (
    <div className="logout d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="logout-form shadow p-4 rounded bg-white text-center">
        <h2 className="mb-4">Are you sure you want to log out?</h2>

        <button onClick={handleLogout} className="btn btn-danger w-100 mb-3">
          Yes, Log Me Out
        </button>

        <button onClick={() => navigate('/')} className="btn btn-outline-secondary w-100">
          Cancel
        </button>
      </div>
    </div>
  );
}
