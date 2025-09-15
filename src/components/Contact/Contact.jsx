import React from 'react'
import './Contact.css'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "motion/react"
const Contact = () => {
  return (
    <motion.div className='co'
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 2.2,}}
    >
      <h1 id='s'>Contact</h1>
<div className='contact'>
<div className='column1'>
<div className='mail'>
<MdEmail fontSize="40px" color='#818cf8'/>
<div className='m1'>
<h1>Email</h1>
<p>hamadmalok99@gmail.com</p>
  </div>
</div>
<div className='phone'>
<FaPhoneAlt fontSize="40px" color='#34d399'/>
  <div className='ph1'>
<h1>Phone</h1>
<p>+963986636755</p>
  </div>
</div>
<div className='location'>
<FaLocationDot fontSize="40px" color='#f87171'/>
<div>
  <h1>Location</h1>
  <p>Lattakia, Syria</p>
</div>
</div>
      </div>
      <div className='column2'>
<div className='nn'>

    <p>Name</p>
    <input type="text"/>

</div>
<div className='ee'>
<p>Email</p>
<input type="email"/>
</div>
<div className='mm'>
  <p>Message</p>
  <textarea></textarea>
</div>
<button type='submit'>Send Message</button>
      </div>
</div>

    </motion.div>
  )
}

export default Contact
