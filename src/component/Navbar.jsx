import React, { useState } from 'react'
import '../Style/navbar.css'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen); };

  return (
    
   <div className="main">
    <div className="content">
         <h1>Chris</h1>
         </div>
        <div className="navbutton">
           <ul>
           <li><a href='#home'>Home</a></li>
           <li><a href='#skills'>Skills</a></li>
           <li><a href='#about'>About</a></li>
           <li><a href='#contactme'><button className='button'>Contact me</button></a></li> </ul>
        </div>
        <div className="app">
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        {isOpen && (
          <div className="lilnavbutton">
            <ul>
              <li><a href='#home'>Home</a></li>
              <li><a href='#skills'>Skills</a></li>
              <li><a href='#about'>About</a></li>
              <li><a href='#contactme'><button className='button'>Contact me</button></a></li>
            </ul>
          </div>
        )}
      </div>
    </div>

    
           
    </div>
  )
}

export default Navbar