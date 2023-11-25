import React from 'react'
import { motion } from 'framer-motion'

const Links = () => {

  const items = ["homepage", "services", "portfolio", "contact", "about"]

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.01,
        staggerDirection: -1
      }
    }
  }
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1
    },
    closed: {
      y: 50,
      opacity: 0
    }
  }
  return (
    <motion.div className='links' variants={variants}>
      {items.map((item, index) => {
        return <motion.a
          href={`#${item}`}
          key={index}
          variants={itemVariants}
          whileHover={{scale:1.1}}
          whileTap={{scale: .95}}
        >
          {item}
        </motion.a>
      })}
    </motion.div>
  )
}

export default Links
