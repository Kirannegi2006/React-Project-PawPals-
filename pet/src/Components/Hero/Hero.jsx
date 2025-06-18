import React, { useState, useEffect } from 'react';
import './Hero.css';
import hero from '../../assets/hero.jpg';
import video from '../../assets/dogVideo.mp4';

export default function Hero() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero-container">
      <video autoPlay loop muted className="background-video">
        <source src={video} type="video/mp4" />
      </video>

      {showContent && (
        <div className="hero-content">
          <div className="hero-box container">
            <div className="row">
              <div className="col-md-6 text-content">
                <h1>Caring Together,</h1>
                <h1>Growing Better</h1>
                <p>
                  Imagine a pleasant shared space where your pets can benefit from
                  healthy caring, and people can donate their time and contribute as
                  caregivers to bond as a loving community. Now, welcome to the
                  amazing PawPals.
                </p>
              </div>
              <div className="col-md-6">
                <img src={hero} alt="hero" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
