import React from 'react'
import { motion } from 'framer-motion'
import './services.scss'

const Services = () => {

    const variants = {
        initial:{
            x:-500,
            y:100,
            opacity: 0
        },
        animate:{
            y:0,
            x:0,
            opacity: 1,
            transition:{
                duration: 1,
                staggerChildren: .1
            }
        }
    }


    return (
        <motion.div className='services' variants={variants} animate='animate' initial='initial'>
            <motion.div className="text-container" variants={variants}>
                <p>I focus on helping your brand grow and <br /> move forword</p>
                <hr />
            </motion.div>
            <motion.div className="title-container" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><motion.b whileHover={{color:'orange'}}>Uniqe</motion.b> Ideas</h1>
                </div>
                <div className="title">
                    <h1><motion.b whileHover={{color:'orange'}}>For Your</motion.b> Business</h1>
                    <button>WHAT WE DO</button>
                </div>
            </motion.div>
            <motion.div className="list-container" variants={variants}>
                <motion.div whileHover={{background:'lightgray', color: 'black'}} className="box">
                    <h2>COMING SOOM</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi vero dolorum officiis repellendus corporis optio aliquid iusto expedita sunt ex!</p>
                    <button>Go</button>
                </motion.div>
                <motion.div whileHover={{background:'lightgray', color: 'black'}} className="box">
                    <h2>COMING SOOM</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi vero dolorum officiis repellendus corporis optio aliquid iusto expedita sunt ex!</p>
                    <button>Go</button>
                </motion.div>
                <motion.div whileHover={{background:'lightgray', color: 'black'}} className="box">
                    <h2>COMING SOOM</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi vero dolorum officiis repellendus corporis optio aliquid iusto expedita sunt ex!</p>
                    <button>Go</button>
                </motion.div>
                <motion.div whileHover={{background:'lightgray', color: 'black'}} className="box">
                    <h2>COMING SOOM</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi vero dolorum officiis repellendus corporis optio aliquid iusto expedita sunt ex!</p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services
