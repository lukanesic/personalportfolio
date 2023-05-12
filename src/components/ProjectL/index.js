import React from 'react'
import { motion } from 'framer-motion'

const animation = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
}

const ProjectL = ({ data, color }) => {
  return (
    <div className='projectl wrapper'>
      <div className='list'>
        <motion.div
          className='list-content'
          variants={animation}
          initial='initial'
          animate='animate'
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <span className='s-title'>client</span>
          <span className='li' style={{ color: color }}>
            {data.client}
          </span>
        </motion.div>
        <motion.div
          className='list-content'
          variants={animation}
          initial='initial'
          animate='animate'
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <span className='s-title'>services</span>
          {data.services.map((li, index) => (
            <span key={index} className='li'>
              {li}
            </span>
          ))}
        </motion.div>
        <div className='empty'></div>
        <motion.div
          className='list-content'
          variants={animation}
          initial='initial'
          animate='animate'
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {' '}
          <span className='s-title'>tech</span>
          {data.tech.map((li, index) => (
            <span className='li' key={index}>
              {li}
            </span>
          ))}
        </motion.div>
      </div>
      <motion.div
        className='intro'
        variants={animation}
        initial='initial'
        animate='animate'
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <h2>{data.title}</h2>
        <p>{data.intro}</p>
      </motion.div>
    </div>
  )
}

export default ProjectL
