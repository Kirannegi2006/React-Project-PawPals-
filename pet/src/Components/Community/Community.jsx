import React from 'react'
import './Community.css'
import img1 from '../../assets/image1.png'
import img2 from '../../assets/image2.png'
import img3 from '../../assets/image3.png'
import img4 from '../../assets/image4.png'

export default function Community() {
  return (
    <div className='community'>
      <div className='container'>
        <h1 className="main-heading text-center mb-5">
          A supportive experience that turns caring into community
        </h1>
        <p className="community-intro">
  At PawPals, we believe in the power of community to make a positive impact on the lives of pets. Join our collaborative network of pet lovers dedicated to providing love, care, and support.
</p>


        {/* Row 1 */}
        <div className="community-row">
          <div className="community-box delary-1">
            <img src={img1} alt="Pet Sitting" />
            <h2>Pet Sitting</h2>
            <p>Ensure your pet's well-being while you're away with our professional pet-sitting services.</p>
          </div>
          <div className="community-box delay-2">
            <img src={img3} alt="Grooming" />
            <h2>Grooming</h2>
            <p>Treat your pets to a pampering session with our diverse grooming services.</p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="community-row">
          <div className="community-box delay-3">
            <img src={img2} alt="Overnight Care" />
            <h2>Overnight Care</h2>
            <p>Experience peace of mind with the overnight care services offered by the PP volunteers.</p>
          </div>
          <div className="community-box delay-4">
            <img src={img4} alt="Pet Taxi" />
            <h2>Pet Taxi</h2>
            <p>Our reliable pet taxi service ensures safe and comfortable journeys for your furry companions.</p>
          </div>
        </div>
      </div>

      
    </div>
    
  )
}
