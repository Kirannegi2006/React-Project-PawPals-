import React from 'react'
import { Link } from 'react-router-dom'
import Our from'../../assets/Our.png'
import './Aboutus.css'
export default function Aboutus() {
  return (
    <div className='about'>
      <div className='container my-6'>
            <div className='row'>
                  <div className='col-md-6'>
                        <h1> About Us</h1>
                        <h2>A Community United by Love for Pets!</h2>
                        <p>At PawPals, our story is one of passion, compassion, and a shared love for our four-legged companions. We believe that pets enrich our lives in ways beyond measure, and our mission is to create a supportive community that ensures every pet receives the care and love they deserve.</p>
                        <h1>Our Journey</h1>
                        <p>Founded with a collective commitment to promoting the well-being of pets, PawPals started as a humble idea – to connect individuals who share a common love for animals. Over time, this idea blossomed into a vibrant community where pet lovers, caregivers, and advocates come together to make a positive impact on the lives of pets.</p>
                        <h1>What Drives Us</h1>
                        <p>At the heart of PawPals is a deep understanding of the profound connection between humans and animals. We recognize that pets are more than companions; they are family members, confidants, and a source of unconditional love. This understanding drives us to create a space where every pet, regardless of circumstance, is treated with compassion and respect.</p>
                        <h1>Our Vision</h1>
                        <p>PawPals envisions a world where every pet is cherished, where their well-being is a shared responsibility, and where the bond between pets and their human companions is celebrated and strengthened. We strive to build a future where no pet is left behind, ensuring they live happy, healthy lives surrounded by love.</p>
                        <h1>What Sets Us Apart</h1>
                        <ul>
                              <li> <b>Community Collaboration:</b>  PawPals thrives on the spirit of collaboration. Our community members actively contribute to creating a supportive environment where knowledge is shared, experiences are celebrated, and pets are championed.  </li>
                              <li> <b>Comprehensive PetCare Services:</b> Beyond being a community, PawPals offers a range of comprehensive pet care services, including pet sitting, overnight care, grooming, and pet taxi services. Our dedicated team is committed to ensuring the well-being of your furry friends. </li>
                              <li> <b> Education and Advocacy: </b>We believe in the power of knowledge. PawPals is not just a service provider; we are educators and advocates for responsible pet ownership. Through informative content and community engagement, we aim to empower pet owners to provide the best possible care for their companions. </li>
                        </ul>
                        <h1>Join Us in Making a Difference:</h1>
                        <p> Whether you’re a passionate pet lover, a caregiver, or someone looking to make a positive impact, <b>PawPals</b> invites you to join our community. Let’s create a world where every pet is valued, every pet owner is supported, and every paw is celebrated.</p>
                        <h2>Thank you for being a part of the PetHelp Hub family!</h2>
                  </div>
                  <div className='col-md-6'>
                        <img src={Our}alt="" />
                  </div>
            </div>

      </div>
    </div>
  )
}
