import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import './portfolio.scss'

const items = [
  {
    id: 1,
    title: 'React Frontend',
    image: './front-end.png',
    slug:'https://landing-page-created-1.netlify.app/',
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ab sapiente, temporibus mollitia dicta voluptas! Quis temporibus officia tempore ratione?`
  },
  {
    id: 2,
    title: 'Components',
    image: './component.png',
    slug:'https://landing-page-created-2.netlify.app/',
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ab sapiente, temporibus mollitia dicta voluptas! Quis temporibus officia tempore ratione?`
  },
  {
    id: 3,
    title: 'FAZ Ecommerce',
    image: 'ecommerce.png',
    slug:'https://fazshop.netlify.app/',
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ab sapiente, temporibus mollitia dicta voluptas! Quis temporibus officia tempore ratione?`
  },
  {
    id: 4,
    title: 'FAZ Educations',
    image: 'education.png',
    slug:'https://rokon-demo-second.netlify.app/',
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ab sapiente, temporibus mollitia dicta voluptas! Quis temporibus officia tempore ratione?`
  }
]


const Single = ({ item }) => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['start start', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300])


  return <section >
    <div className="container">
      <div className="wrapper">
        <div className="image-container" ref={ref}>
          <img src={item.image} alt="" />
        </div>
        <motion.div className="text-container" style={{ y }} >
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <button><a href={item.slug} target='_blank'>See Demo</a></button>
        </motion.div>
      </div>
    </div>
  </section>
}

const Portfolio = () => {

  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'start start'] })
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <div className='portfolio' ref={ref}>
      <div className="progress">
        <h1>Features Works</h1>
        <motion.div style={{ scaleX: scaleX }} className="progress-bar"></motion.div>
      </div>
      {items.map((item, ind) => {
        return <Single key={ind} item={item} />
      })}
    </div>
  )
}

export default Portfolio
