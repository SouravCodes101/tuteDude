import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import arrow from '../../assets/arrow.png';
import arrowWhite from '../../assets/arrowWhite.png';
import profile from '../../assets/profile.png';

const Menu = () => (
  <>
        <p><a href="#assignment">My Assignment</a></p>
        <p><a href="#cwm">Chat With Mentor</a></p>
  </>
)

const Navbar = () => {
  return (
    <div className="tuteDude__navbar">
      <div className="tuteDude__navbar-links">
        <div className="tuteDude__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="tuteDude__navbar-links_container">
            <Menu />
        </div>
      </div>
      <div className="tuteDude__navbar-sign">
        <p> <span><img src={profile} alt="profile" className="profile"/></span> ProfileName <span><img src={arrow} alt="arrow" className="arrow"/></span></p>
        <button type="button">ProfileName<span><img src={arrowWhite} alt="arrow" className="arrowWhite"/></span></button>
      </div>
    </div>
  )
}

export default Navbar