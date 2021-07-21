import React from 'react'
import './Header.css';
import logo from './catlogo.png';

const Header = () => {
  return (
    <div className="Header">
      <h1>Hang-Git</h1>
      <div className="Header-Subheader">---Git---Helper-Game</div>
      <img className="logo"src={logo}/>
    </div>
  )
}

export default Header