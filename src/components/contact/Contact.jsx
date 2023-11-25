import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import './contact.scss';


const variants = {
  initial: {
    y: 500,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: .5,
      staggerChildren: .1
    }
  }
}


const Contact = () => {
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const formRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ckdwlqn', 'template_1zm438b', formRef.current, 'x0CvtvNCFbutboU9c')
      .then((result) => {
        setSuccess(true);
      }, (error) => {
        setError(true);
      });
  };


  return (
    <motion.div className='contact' variants={variants} initial='initial' animate='animate'>
      <motion.div className="text-container" variants={variants}>
        <motion.h1 variants={variants}>Lets's Work Together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>roknujjamanripon@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Asam Koloni Bow Bazar, Rajshahi</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+8801890011744</span>
        </motion.div>
      </motion.div>
      <div className="form-container">
        <motion.form ref={formRef} action="#" method='get' onSubmit={sendEmail}>
          <input required type="text" placeholder='Name*' name='user_name' />
          <input required type="text" placeholder='Email*' name='user_email' />
          <textarea id="" rows="8" placeholder='Message' name="message" />
          <button>Submit</button>
          {error && 'Error'}
          {success && 'Success'}
        </motion.form>
      </div>
    </motion.div>
  )
}

export default Contact
