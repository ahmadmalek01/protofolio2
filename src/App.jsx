import { useEffect, useRef, useState } from 'react'

import './App.css'
import { motion } from "motion/react"
import Hero from './components/Hero/Hero '
import About from './components/About/About'
import Project from './components/project/Project'
import Contact from './components/Contact/Contact'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Skills from './components/Skills/Skills'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { MdApi } from "react-icons/md";
import { FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function App() {
  const exp = [
    {
      name: "HTML",
      icon: <FaHtml5 style={{fontSize:"24px"  , color: '#E44D26' }}  />,
      column: "h"
    },
    {
      name: "CSS",
      icon: <FaCss3  style={{fontSize:"24px"  , color: '#1572B6' }}/>,
      column: "c"
    },
    {
      name: "JavaScript",
      icon: <FaJs style={{fontSize:"24px"  , color: '#F7DF1E' }}  />,
      column: "j"
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap style={{fontSize:"24px"  , color: '#563D7C' }} />,
      column: "b"
    },
    {
      name: "Tailwind",
      icon: <RiTailwindCssFill  style={{fontSize:"24px"  , color: '#38B2AC' }}/>,
     column: "t"
    },
    {
      name: "React",
      icon: <FaReact style={{fontSize:"24px"  , color: '#61DAFB' }} />,
      column: "r"
    },
    {
      name: "REST APIs",
      icon: <MdApi  style={{fontSize:"24px"  , color: 'rgb(0, 255, 76)' }}/>,
      column: "a"
    },
    {
      name: "Figma",
      icon: <FaFigma  style={{fontSize:"24px"  , color: '#F24E1E' }}/>,
      column: "f"
    },
    {
      name: "GIT & GITHUB",
      icon: <FaGithub style={{fontSize:"24px"  , color: '#000' }}/>,
      column: "g"
    },
  ];
   const pro = [
    {
      id: 1,
      name: "Avatar",
      description:"Frontend clone using  HTML5, and CSS3.",
      demoGitHub: "https://github.com/ahmadmalek00/Avatar-project7",
      photo: "/protofolio2/assets/images/p1.png",

    },
    {
      id: 2,
      name: "Adidass",
      description:"Frontend clone using  HTML5, and CSS3.",
      demoGitHub: "https://github.com/ahmadmalek00/adidas-project",
      photo: "/protofolio2/assets/images/p2.png",

    },
    {
      id: 3,
      name: "Selling products",
      description:"Frontend clone using  HTML5, and CSS3.",
      demoGitHub: "https://github.com/ahmadmalek00",
      photo: "/protofolio2/assets/images/p3.png",
    },
    {
      id: 4,
      name: "CRUDS",
      description:"Frontend clone using JavaScript, HTML5, and CSS3.",
      demoGitHub: "https://github.com/ahmadmalek00/CRUDS-project",
      photo: "/protofolio2/assets/images/p4.png",

    },
    {
      id: 5,
      name: "AZM-Company",
      description:"Frontend clone using  HTML5, and CSS3.",
      demoGitHub: "https://github.com/ahmadmalek00/shose-project",
      photo: "/protofolio2/assets/images/p5.png",

    },
    {
      id: 6,
      name: "selling shose",
      description:"Frontend clone using JavaScipt, HTML5, and CSS3.",
      demoGitHub: "https://github.com/ahmadmalek00/AZM-project",
      photo: "/protofolio2/assets/images/p6.png",

    },
    {
      id: 7,
      name: "protofolio",
      description:"Frontend with React js and some library like react icon ....",
      demoGitHub: "https://github.com/ahmadmalek00/protofolio",
      photo: "/protofolio2/assets/images/p10.png",

    },
  ];

  const location = useLocation();

  const sectionRefs = {
    Hero: useRef(null),
    About: useRef(null),
    Project: useRef(null),
    Contact: useRef(null),
  };

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    const ref = sectionRefs[hash];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
<div className='ap'>
<NavBar />
<div ref={sectionRefs.Hero} id='Hero'><Hero /></div>
<div ref={sectionRefs.About} id='About'><About /></div>
<div ref={sectionRefs.Skills} id='Skills'><Skills exp = {exp} /></div>
<div ref={sectionRefs.Project} id='Project'><Project pro={pro}/></div>
<div ref={sectionRefs.Contact} id='Contact'><Contact /></div>

</div>
  )
}

export default App
