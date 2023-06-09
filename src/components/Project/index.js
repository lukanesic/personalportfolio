import React, { useEffect } from 'react'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router-dom'

const Project = ({
  src,
  title,
  company,
  tech,
  reverse,
  text,
  theme,
  txtClass,
  url,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  const ctrls = useAnimation()

  const navigate = useNavigate()

  useEffect(() => {
    if (inView) {
      ctrls.start('visible')
      document.body.style.backgroundColor = `${theme}`
    }
    if (!inView) {
      ctrls.start('hidden')
    }
  }, [inView, ctrls, company, theme])

  const handleUrl = () => {
    navigate(`/${url}`)
  }

  const variants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  }

  return (
    <motion.div
      initial='hidden'
      animate={ctrls}
      variants={variants}
      className={`project wrapper ${reverse && 'project-reverse'}`}
      ref={ref}
    >
      <motion.div
        className='img'
        initial={{ scale: 1 }}
        whileHover={{ scale: 0.97 }}
        transition={{
          duration: 0.5,
        }}
        onClick={() => handleUrl()}
      >
        <img
          src={src}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          alt={title}
        />
      </motion.div>
      <div className='info'>
        <h4 className={`${txtClass && 'white-text'}`}>{company}</h4>
        <h2 className={`${txtClass && 'white-text'}`}>{title}</h2>
        <motion.h6
          className={`${txtClass && 'white-text'}`}
          onClick={() => handleUrl()}
        >
          {'View Project'}
        </motion.h6>
      </div>
    </motion.div>
  )
}

export default Project
