import React, { useEffect } from 'react'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router-dom'
import { useMyContext } from '../../store/ThemeContext'

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

export const ProjectReview = ({ src, url, r, i }) => {
  const navigate = useNavigate()

  const handleUrl = () => {
    navigate(`/${url}`)
  }

  return (
    <motion.div className='project-review' onClick={() => handleUrl()}>
      <div className='pr-img'>
        <motion.img
          src={src}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          alt={'title'}
          initial={{ scale: 1 }}
          whileHover={{ scale: 0.97 }}
          transition={{
            duration: 0.5,
          }}
        />
      </div>

      <div className='pr-info'>
        <h2>
          <b>Printx</b> - Platform that integrates both robo-advisor
        </h2>
        <p>
          The goal was to design an experience for a notoriously demanding
          audience. The end product turned out beyond expectation.
        </p>

        {/* <button>Check it out</button> */}
      </div>
    </motion.div>
  )
}

export const LastProjectReview = () => {
  const { theme, setTheme } = useMyContext()

  console.log(theme)

  const { ref, inView } = useInView({
    threshold: 0.5,
  })
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

  const navigate = useNavigate()

  const ctrls = useAnimation()

  const handleUrl = () => {
    navigate(`/audi`)
  }

  useEffect(() => {
    if (inView) {
      document.body.style.backgroundColor = `#fff`
      setTheme('light')
    }
  }, [inView])

  return (
    <motion.div
      className='project-review'
      onClick={() => handleUrl()}
      ref={ref}
      style={{ opacity: theme === 'dark' ? '0' : '1' }}
    >
      <div className='pr-img'>
        <motion.img
          src={'./test4.jpg'}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          alt={'title'}
          initial={{ scale: 1 }}
          whileHover={{ scale: 0.97 }}
          transition={{
            duration: 0.5,
          }}
        />
      </div>

      <div className='pr-info'>
        <h2>
          <b>Printx</b> - Platform that integrates both robo-advisor
        </h2>
        <p>
          The goal was to design an experience for a notoriously demanding
          audience. The end product turned out beyond expectation.
        </p>

        {/* <button>Check it out</button> */}
      </div>
    </motion.div>
  )
}
