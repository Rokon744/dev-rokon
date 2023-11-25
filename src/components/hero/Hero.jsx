import React from 'react'
import { motion } from 'framer-motion'
import './hero.scss'

const Hero = () => {

    const textVariants = {
        initial: {
            x: -500,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }
        },
        scrollBtn: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity
            }
        }
    }
    const sliderVariants = {
        initial: {
            x: 0,
        },
        animate: {
            x: '-200%',
            transition: {
                duration: 20,
                repeat: Infinity,
                repeatType: 'mirror'
            }
        }
    }
    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="text-container" variants={textVariants} initial='initial' animate='animate'>
                    <motion.h2 variants={textVariants}>MRR ROKON</motion.h2>
                    <motion.h1 variants={textVariants}>Proffesional Frontend Web Developer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <button><a href="#portfolio">See the latest work</a></button>
                        <button><a href="#contact">Hire me</a></button>
                    </motion.div>
                    <motion.img variants={textVariants} animate={'scrollBtn'} src="/scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div className="sliding-text-container" variants={sliderVariants} initial='initial' animate='animate'>
                Rokon Developer
            </motion.div>
            <div className="image-container">
                <img src="/hero.png" alt="" />
            </div>
        </div>
    )
}

export default Hero
