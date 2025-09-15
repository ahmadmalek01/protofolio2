import React, { useEffect, useState } from "react";
import "./Hero.css";
import { motion } from "motion/react";
import { MdDownloadDone } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Hero = () => {



  return (
    <div className="hero flex justify-center items-center">
        <motion.div
          className="hero-2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 1.2,
          }}
        >
          <img src="./assets/images/me-2323.png"></img>
        </motion.div>



      <motion.div
        className="hero-1 w-1/2"
        initial={{ opacity: 0, x: +100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 1.2,
        }}
      >
<div>

<h1 className="text-4xl ">Hi ! I'm Ahmad Malek<span> Frontend Developer</span></h1>
        <p className="w-sm">
          I'm Ahmad Malek, a creative Product Designer. i've been helping
          businesses to solve their problems with my desgin for 2 years.
        </p>
</div>
<motion.div 
className="icons"
initial={{ opacity: 0, y: +100 }}
animate={{ opacity: 1, y: 0 }}
transition={{
  type: "spring",
  stiffness: 100,
  damping: 10,
  delay: 1.5,
}}>
<div className="icon"><Link to="https://www.linkedin.com/in/ahmad-malek-83b5262a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn/></Link></div>
<div className="icon"><Link to='https://www.instagram.com/hamada_malek55?igsh=NTZ6cmZrbjVka2g4'><FaInstagram /></Link></div>
<div className="icon"><Link to='https://www.facebook.com/profile.php?id=100073747422838&mibextid=ZbWKwL'><FaFacebookF /></Link></div>
<div className="icon"><Link to="https://github.com/ahmadmalek00" ><FaGithub  /></Link></div>
</motion.div>
      <a href="./assets/images/CV.pdf" download>
      <motion.button
        initial={{ opacity: 0, y: +100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 1.5,
        }}
        >
          <MdDownloadDone />
          Download CV
        </motion.button>
      </a>
      </motion.div>

    </div>
  );
};

export default Hero;
