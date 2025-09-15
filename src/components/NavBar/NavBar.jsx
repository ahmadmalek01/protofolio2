import React, { useState } from 'react';
import './NavBar.css';
import { motion } from 'framer-motion';
import { CiHome } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";
import { VscCode } from "react-icons/vsc";
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: 0.8
      }}
      className="nav"
    >
      <div className="logo">
        <img src="./assets/images/ahmad malek logo copy.svg" alt="logo" />
        <h1>EN.Ahmad Malek</h1>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#Hero" onClick={closeMenu}>Home</a></li>
          <li><a href="#About" onClick={closeMenu}>About Me</a></li>
          <li><a href="#Skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#Project" onClick={closeMenu}>Projects</a></li>
          <li><a href="#Contact" onClick={closeMenu}>Contact</a></li>
 
        </ul>
      </div>
    </motion.nav>
  );
};

export default NavBar;
