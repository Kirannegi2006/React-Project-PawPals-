import React,{ useEffect} from 'react'
import './Pet.css'


import { Link } from 'react-router-dom';

import pet from '../../assets/pet.jpg'

export default function Pet() {
 
  return (
    <div className='pet'>
      <div className='container my-6'>
            <div className='row'>
                  <div className='col-md-6'>
                        <img src={pet} alt="" />
                  </div>
                  <div className='col-md-6'>
                      <h1>A passionate community of pet advocates dedicated to collaborating for the well-being of humans & animals.</h1>
                      <h2>With a collective commitment to the welfare of pets, PetHelp Hub brings together individuals who share a common goal: ensuring every pet lives a happy and healthy life.</h2>
<Link to='/about'><button>ABOUT US</button></Link>
                  </div>
            </div>
      </div>
    </div>
  )
}
