import React from 'react'
import  {motion} from 'framer-motion'
import './navbar.scss'
import Sidebar from '../sidebar/Sidebar'

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* sidebar */}
      <Sidebar />

      <div className="wrapper">
        <motion.span 
            initial={{opacity:0, scale:0.5}}
            animate={{opacity:1, scale:1}}
            transition={{duration:.5}}
        >Dev Rokon</motion.span>
        <div className="social">
            <a href="https://www.facebook.com/xtylish.boy.rokon" target='_blank'><img src="/facebook.png" alt="" /></a>
            <a href="#"><img src="/linkedin.png" alt="" /></a>
            <a href="#"><img src="/youtube.png" alt="" /></a>
            <a href="#"><img src="/dribbble.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
