import React from "react";
import "./About.css";
import { motion } from "motion/react";
const About = () => {
  return (
    <div className="about">
<motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 1.5,}}
className="about1">

       <h1> Hello, my name is <span>Ahmed Malek</span>.</h1>
       <p>I am a front-end developer for websites.
        I have experience in html css java script bootstrap tailwind react figma
        and git & GitHub. I study at the University of Latakia in the Faculty of
        Mechanical and Electrical Engineering, Department of Computer
        Engineering and Control.
      </p>
</motion.div>
    </div>
  );
};

export default About;
