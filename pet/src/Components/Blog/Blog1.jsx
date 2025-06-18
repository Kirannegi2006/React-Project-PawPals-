import React, { useState } from 'react'
import './Blog1.css'
import grooming1 from '../../assets/grooming1.png'
import { Link } from 'react-router-dom'

export default function Blog1() {
  const [likes, setLikes] = useState(0)

  return (
    <div className="blog1-container">
      <div className="blog1-card">
        <div className="blog1-image-wrapper">
          <img src={grooming1} alt="Grooming" className="blog1-image" />
          <h1 className="blog1-title">The Importance of Regular Grooming for Pet Health</h1>
        </div>

        <p className="blog1-text">
          Regular grooming is essential for maintaining your pet’s overall health and well-being.
          It not only keeps their coat clean and free of tangles, but also helps prevent skin infections,
          detect parasites like fleas or ticks early, and reduce shedding. Brushing promotes healthy blood
          circulation and helps distribute natural oils, giving your pet a shiny, healthy coat. Additionally,
          grooming sessions are a great opportunity to check for any unusual lumps, cuts, or signs of illness.
          Beyond physical benefits, grooming can strengthen the bond between you and your pet,
          making them feel loved and cared for.
        </p>

        <div className="blog1-tip">
          💡 <strong>Did you know?</strong> Regular brushing also reduces stress in pets and can improve their behavior.
        </div>

        <button className="like-button" onClick={() => setLikes(likes + 1)}>
          👍 Like ({likes})
        </button>

        <Link to="/blog" className="back-button">← Back to Blog</Link>
      </div>
    </div>
  )
}
