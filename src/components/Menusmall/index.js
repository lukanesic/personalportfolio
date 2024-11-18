import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const Menusmall = ({ isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      const width = document.body.clientWidth
      document.body.style.overflowY = 'hidden'
      document.body.style.width = `${width}px`
    } else {
      document.body.style.overflowY = 'visible'
      document.body.style.width = `auto`
    }

    return () => {
      document.body.style.overflowY = 'visible'
      document.body.style.width = `auto`
    }
  }, [isOpen])

  return (
    <motion.div
      className='menusmall'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.4,
          delay: 0.2,
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ marginBottom: '3rem' }}
        className='menusmall-headings'
        exit={{
          opacity: 0,
          transition: {
            duration: 0.1,
            delay: 0,
          },
        }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <h2>Let's work together</h2>
        <p
          style={{
            marginTop: '.5rem',
          }}
        >
          Feel free to reach out and connect with me for any inquiries or
          collaborations!
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.1,
            delay: 0,
          },
        }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className='services-container'
      >
        <span className='services-subhead'>Services</span>
        <div className='services-box'>
          <span>Mobile App Development</span>
          <span>iOS Development</span>
        </div>
        <div className='services-box'>
          <span>UI Design</span>
          <span>UX Design</span>
        </div>
        <div className='services-box'>
          <span>Anodrid Apps</span>
        </div>
        <div className='services-box'>
          <span>Web Development</span>
          <span>Web Applications</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ marginTop: '4rem' }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.1,
            delay: 0,
          },
        }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <span className='mail link'>
          {' '}
          <a
            href='mailto:lukannesic@gmail.com'
            className='main-btn'
            style={{
              color: '#fff',
              background: '#000',
            }}
          >
            Get in touch
          </a>
        </span>
      </motion.div>
    </motion.div>
  )
}

export default Menusmall
