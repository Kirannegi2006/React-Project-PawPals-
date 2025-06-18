import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbaar from './Components/Navbaar/Navbaar';
import Hero from './Components/Hero/Hero';
import Community from './Components/Community/Community';
import Pet from './Components/Pet/Pet';
import Blog from './Components/Blog/Blog';
import Blog1 from './Components/Blog/Blog1';
import Blog2 from './Components/Blog/Blog2';
import Blog3 from './Components/Blog/Blog3';
import Footer from './Components/Footer/Footer';
import Aboutus from './Components/AboutUs/Aboutus';
import Donate from './Components/Donate/Donate';
import Gallery from './Components/Gallery/Gallery';
import ScrollToTop from './Components/Pet/ScrollToTop';
import Login from './Components/LoginRegister/Login';
import Register from './Components/LoginRegister/Register';
import Contact from './Components/Contact/Contact';
import Logout from './Components/Logout/Logout';
import Thanks from './Components/Contact/Thanks';

function Home() {
  return (
    <div>
       
      <Hero />
      <Community />
      <Pet />
      <Blog />
      
      
      
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbaar />
       <ScrollToTop/> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog3" element={<Blog3 />} />
        <Route path='/about'element={<Aboutus/>}/>
        <Route path='/Donate'element={<Donate/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path ='/Register' element={<Register/>}/>
        <Route path='/contact'element={<Contact/>}/>
        <Route path='/community'element={<Community/>}/>
        <Route path='/blog'element={<Blog/>}/>
        <Route path='/logout'element={<Logout/>}/>
        
<Route path="/thanks" element={<Thanks/>} />
      </Routes>
      <Footer />
    </>
  );
}
