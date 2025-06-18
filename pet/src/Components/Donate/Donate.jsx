import React, { useState } from 'react';
import './Donate.css';
import Do from '../../assets/Donate.png'

export default function Donate() {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [showBalloons, setShowBalloons] = useState(false);

  const handleDonate = (e) => {
    e.preventDefault();
    if (amount && name) {
      setShowBalloons(true);
      setTimeout(() => setShowBalloons(false), 4000); 
      alert(`🎉✨ Thank you, ${name}, for donating ₹${amount}!`);
      setAmount('');
      setName('');
      setMessage('');
    } else {
      alert('❌ Please fill all required fields.');
    }
  };

  return (
    <div className='donate-section'>
      {showBalloons && <div className="balloons">🎈✨🎈✨🎈</div>}

      <div className='donate-container'>
        <h1>Donate</h1>
        <h2>Be a PawPals Patron Today!</h2>
        <p>Your financial contributions play a crucial role in sustaining our efforts. Every donation helps us provide essential services and support pets in need. Use the form below to donate securely.</p>
        

        <form className='donate-form' onSubmit={handleDonate}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Donation Amount (₹)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />

          <textarea
            placeholder="Message (Optional)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button type="submit">Donate Now</button>
        </form>
        <div className='do-background'>
        {/* <img src={Do} alt="" /> */}
        </div>
      </div>
    </div>
  );
}
