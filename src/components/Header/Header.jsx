import React from 'react'
import './Header.css';
import logo from '../Header/logo.jpg';

const Header = () => {
  return (
    <div className="Header">
      <h1>HANG-GIT</h1>
      {/* <p>Could a hint go here?</p> */}
      <div className="Header-Subheader">---Git---Helper-Game</div>
      
      <img className="logo"src={logo}/>
    </div>
  )
}

export default Header