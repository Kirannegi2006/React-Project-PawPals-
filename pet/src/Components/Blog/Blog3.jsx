import React, { useState } from 'react'
import './Blog2.css' 
import travelPet from '../../assets/travel-pet.png' 
import { Link } from 'react-router-dom'

export default function Blog3() {
  const [likes, setLikes] = useState(0)

  return (
    <div className="blog1-container">
      <div className="blog1-card">
        <div className="blog1-image-wrapper">
          <img src={travelPet} alt="Traveling with Pets" className="blog1-image" />
          <h1 className="blog1-title">Traveling with Pets: A Comprehensive Guide for Pet Parents</h1>
        </div>

        <p className="blog1-text">
          Traveling with pets requires thoughtful planning to ensure a smooth and stress-free journey for both you and your furry friend.
          Before your trip, schedule a visit to the vet for a health check and ensure all vaccinations are up-to-date. 
          Choose a pet-friendly mode of transport and carry essentials like food, water, toys, and a first-aid kit. 
          Use a secure and well-ventilated carrier or seatbelt harness while on the road. 
          Make frequent stops for bathroom breaks and let your pet stretch and walk. 
          Always keep identification on your pet, including tags and microchip information. 
          Once you arrive, give your pet time to adjust to the new environment and stick to a familiar routine as much as possible.
        </p>

        <div className="blog1-tip">
          💡 <strong>Travel Tip:</strong> Bringing your pet’s favorite blanket or toy can ease anxiety and help them feel at home.
        </div>

        <button className="like-button" onClick={() => setLikes(likes + 1)}>
          👍 Like ({likes})
        </button>

        <Link to="/blog" className="back-button">← Back to Blog</Link>
      </div>
    </div>
  )
}
