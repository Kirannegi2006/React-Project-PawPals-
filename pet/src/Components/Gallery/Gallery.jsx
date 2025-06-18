import React from 'react'
import './Gallery.css'
import cat from '../../assets/cat.png'
import Dog from '../../assets/Dog.png'
import dogi from '../../assets/dogi.png'

import Dog1 from '../../assets/Dog1.png'
import Dog2 from '../../assets/Dog2.jpg'

export default function Gallery() {
  return (
    <div className='gallery-container'>
      <h2 className='gallery-heading'>✨♥Our Lovely Pet Gallery♥✨</h2>
      <p className='gallery-description'>
        Meet our adorable pets! From playful cats to loyal dogs, each one brings love and joy.
        enjoy their cuteness!
      </p>

      <div className='gallery'>
        <img src={cat} alt="Cat" />
         <img src={Dog} alt="Dog 2" />
        <img src={dogi} alt="Dog 1" />
        <img src={Dog1} alt="Dog 3" />
        <img src={Dog2} alt="Dog 4" />
      </div>
    </div>
  )
}
