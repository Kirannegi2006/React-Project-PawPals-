import React, { useState } from 'react'
import './Blog2.css'
import petHome from '../../assets/pet-home.png' // Make sure you have this image
import { Link } from 'react-router-dom'

export default function Blog2() {
  const [likes, setLikes] = useState(0)

  return (
    <div className="blog1-container">
      <div className="blog1-card">
        <div className="blog1-image-wrapper">
          <img src={petHome} alt="Pet Home" className="blog1-image" />
          <h1 className="blog1-title">Creating a Pet-Friendly Home: Tips for a Happy Coexistence</h1>
        </div>

        <p className="blog1-text">
          Designing a pet-friendly home ensures safety, comfort, and harmony for both pets and humans. 
          Start by removing hazards such as toxic plants, electrical cords, and sharp objects. 
          Choose pet-safe furniture materials that are easy to clean and resistant to scratches or fur. 
          Provide designated spaces for your pet to eat, sleep, and play. 
          Use baby gates or pet barriers to restrict access to certain areas if needed. 
          Regularly clean floors to prevent buildup of hair and allergens. 
          Adding toys, scratching posts, and cozy beds keeps your pet entertained and relaxed.
        </p>

        <div className="blog1-tip">
          💡 <strong>Tip:</strong> Using washable rugs and slipcovers makes cleaning up after pets much easier!
        </div>

        <button className="like-button" onClick={() => setLikes(likes + 1)}>
          👍 Like ({likes})
        </button>

        <Link to="/blog" className="back-button">← Back to Blog</Link>
      </div>
    </div>
  )
}
