import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from './icons/fontAwesomeLibraries';
import myResume from './assets/Isaac Updated Resume.pdf';
import './App.css';

const Navbar = ({ mainContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="navbar">
        {!isOpen && (
          <button className="menuButton" onClick={toggleSidebar}>
            ☰
          </button>
        )}

        <div className={`sidebar ${isOpen ? 'open' : 'close'}`}>
          <button className="menuCloseButton" onClick={closeSidebar}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <Link
            onClick={closeSidebar}
            className="sidePath"
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
            onClick={closeSidebar}
            className="sidePath"
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
            onClick={closeSidebar}
            className="sidePath"
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
            onClick={closeSidebar}
            className="sidePath"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <span>04.</span> Contact
          </Link>
          <div className="sidePath">
            <a className="btn" href={myResume}>
              Resume
            </a>
            <p className="buttonBackLayer"></p>
          </div>
        </div>
      </div>

      <div className={`main-content ${isOpen ? 'blur' : ''}`}>
        {mainContent}
      </div>
    </>
  );
};

export default Navbar;





