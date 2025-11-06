import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './App.css';
import myResume from './assets/Isaac Updated Resume.pdf';
import Navbar from './Navbar';

const StickyNavbar = ({ sendDataToParent }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        // If scrolling down and past 50px from top
        setIsVisible(false);
      } else {
        // If scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
      <div className='logo'>PORTFOLIO</div>
      <div className="nav">
        <div className='navBar'>
          <Link
            className='path'
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <span>01.</span> Home
          </Link>
          <Link
            className='path'
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <span>02.</span> About
          </Link>
          <Link
            className='path'
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <span>03.</span> Work
          </Link>
          <Link
            className='path'
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <span>04.</span> Contact
          </Link>
        </div>
        <a className='btn' href={myResume}>Resume</a>
        <p className='buttonBackLayer'></p>
      </div>
      <Navbar />
    </header>
  );
};

export default StickyNavbar;


