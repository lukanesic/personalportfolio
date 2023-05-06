import React from 'react'
import { motion } from 'framer-motion'

const Process = ({ data }) => {
  const parent = {
    hidden: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 1, delay: 0.7 },
    },
  }

  return (
    <motion.div
      variants={parent}
      initial={'hidden'}
      whileInView={'animate'}
      className='process wrapper'
    >
      {data.map((item, index) => (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: index * 0.3, duration: 1 },
          }}
          className='process-container'
          key={index}
        >
          <div className='num'>
            <span>{item.num}</span>
          </div>
          <div className='description'>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default Process
