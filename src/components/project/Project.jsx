import React from "react";
import "./Project.css";
import { motion } from "motion/react"
import { Link } from "react-router-dom";
const Project = ({ pro }) => {
  return (
    <motion.div className="pr"
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 2.2,}}
    >
      <h1 id="s">Projects</h1>
<div className="project">
{pro.map((item, index) => (
        <div key={index} className="card-1">
          <img src={item.photo} />
          <div className="des">
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <button>
              <Link to={item.demoGitHub}>view git</Link>
            </button>
          </div>
        </div>
      ))}
</div>
    </motion.div>
  );
};

export default Project;
