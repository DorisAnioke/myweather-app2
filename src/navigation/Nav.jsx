import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TiWeatherStormy } from 'react-icons/ti';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Nav.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navList = [
    { name: 'Home', path: '/' },
    { name: 'Weather', path: '/weather' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <TiWeatherStormy size={30} />
        <span style={{ marginLeft: '8px' }}>WeatherApp</span>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
        {navList.map((item, index) => (
          <li key={index}>
            <Link to={item.path} onClick={closeMenu}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

// import React from 'react'
// import { Link } from 'react-router-dom'
// import { TiWeatherStormy } from "react-icons/ti";
// import {FaBars, FaTimes} from "react-icons/fa";
// import { useState } from 'react';
// import './Nav.css';
// const Nav = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const navList = [
//         { name: 'Home', path: '/' },
//         { name: 'Weather', path: '/weather' },
//         { name: 'About', path: '/about' },
//         { name: 'Contact', path: '/contact' },
//     ];

//     const toggleMenu = () => setIsOpen(!isOpen);
//     const closeMenu = () => setIsOpen(false);

    
//   return (
//     <div className='sidebar'>
//         <div className='logo'>
//             <TiWeatherStormy/>
//         </div>

//         <div className='hamburger' onClick={toggleMenu}>
//             {isOpen ? <FaTimes/> : <FaBars/>}
//         </div>

//         <ul className='nav-list'>
//             {navList.map((item, index) =>(
//                 <li key={index}>
//                     <Link to={item.path}>{item.name}</Link>
//                 </li>
//             ))}
//         </ul>
//     </div>
//   )
// }

// export default Nav