import React, { useEffect } from 'react'

import { motion } from 'framer-motion'

const Menu = ({ isOpen }) => {
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
      initial={{ opacity: 0, x: 500 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 500 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className='menu'
    >
      {/* <span className='services-subhead'>Services</span>

      <div className='services-container'>
        <div className='services-box'>
          <span>Mobile App Development</span>
          <span>iOS Development</span>
        </div>
        <div className='services-box'>
          <span>UI Design</span>
          <span>UX Design</span>
        </div>
        <div className='services-box'>
          <span>Web Development</span>
        </div>
        <div className='services-box'>
          <span>Web Applications</span>
          <span>E-Commerce</span>
        </div>
        <div className='services-box'>
          <span>React</span>
          <span>React Native</span>
        </div>
        <div className='services-box'>
          <span>Next.js</span>
          <span>Node</span>
        </div>
        <div className='services-box'>
          <span>Python</span>
          <span>Django</span>
        </div>
      </div> */}
    </motion.div>
  )
}

export default Menu
