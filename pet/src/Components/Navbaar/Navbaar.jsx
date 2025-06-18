import React, { useState } from 'react';
import './Navbaar.css';
import menu from '../../assets/menu.png';
import { Link } from 'react-router-dom';

export default function Navbaar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbaar'>
  <div className="nav-left">
    <Link to='/' className='logo-link'>♥Koinonia♥</Link>
    <img src={menu} alt="menu" className="menu-icon" onClick={toggleMenu} />
  </div>

      <div className={`nav-right ${menuOpen ? 'active' : ''}`}>
        <ul>
          <Link to='/' className="no-style-link" onClick={() => setMenuOpen(false)}><li>Home</li></Link> 
  <Link to='/about' className="no-style-link" onClick={() => setMenuOpen(false)}><li>About Us</li></Link> 
  <Link to='/Gallery' className="no-style-link" onClick={() => setMenuOpen(false)}><li>Gallery</li></Link>
  <Link to='/community' className="no-style-link" onClick={() => setMenuOpen(false)}><li>Community</li></Link>
  <Link to='/blog' className="no-style-link" onClick={() => setMenuOpen(false)}><li>Blog</li></Link>
  <Link to='/Donate' className="no-style-link"  onClick={() => setMenuOpen(false)}><li>DONATE</li></Link>
</ul>

      <Link to='/Register' onClick={() => setMenuOpen(false)}><button>SignUp</button></Link>
      <Link to='/logout' onClick={() => setMenuOpen(false)}><button>Logout</button></Link>
<Link to='/contact' onClick={() => setMenuOpen(false)}><button>ContactUs</button></Link>


      </div>
      
    </div>
  );
}
