import React from 'react';
import "./Skills.css";
import { motion } from "motion/react"
const Skills = ({ exp }) => {
  return (
    <motion.div className='skil'
  
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 1.8,}}
    >
      <h1 id='s'>Skills</h1>
<div className='skills'>
{exp.map((item, index) => (
        <div className='card' key={index}>
          <div className='name'>
            {item.icon}
            <p style={{fontSize : "18px"}}>{item.name}</p>

          </div>
          <div className='column'>
            <div className={item.column}></div>
          </div>
</div>
      ))}
</div>
    </motion.div>
  );
};

export default Skills;