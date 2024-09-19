import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useMyContext } from '../../store/ThemeContext'

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

const steps = [
  {
    n: 'Step 1',
    title: 'Project Setup',
    description:
      'Ensure your team has all the essential information and resources to start the project smoothly, setting a solid foundation for success.',
  },
  {
    n: 'Step 2',
    title: 'Research and concept',
    description:
      'Conduct thorough research to gather detailed insights on the target audience and market, shaping the features and overall concept to align perfectly with the demands.',
  },
  {
    n: 'Step 3',
    title: 'Research and concept',
    description:
      'Conduct thorough research to gather detailed insights on the target audience and market, shaping the features and overall concept to align perfectly with the demands.',
  },
  {
    n: 'Step 4',
    title: 'Research and concept',
    description:
      'Conduct thorough research to gather detailed insights on the target audience and market, shaping the features and overall concept to align perfectly with the demands.',
  },
]

export const VerticalProcess = ({}) => {
  const { theme, setTheme } = useMyContext()

  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  const ctrls = useAnimation()

  useEffect(() => {
    if (inView) {
      ctrls.start('visible')
      document.body.style.backgroundColor = `#000`
      setTheme('dark')
    }
  }, [inView, ctrls])

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
      className='vertical-process wrapper'
      initial='hidden'
      animate={ctrls}
      variants={variants}
    >
      <div className='vertical-process-desc' ref={ref}>
        <h2>Development process.</h2>
        <p>
          We rely on imagination and technical prowess to help brands transform,
          shine, and reinvent themselves in the market and society.
        </p>
        <div className='vertical-process-desc-bot'>
          <p>
            Our greatest strength is the confidence our clients place in us.
          </p>
          <p>Our real accomplishment is seeing them thrive.</p>
        </div>
      </div>

      <div className='vertical-process-line'>
        {steps.map((step, i) => (
          <div className='vertical-item' key={i}>
            <motion.div
              className='vertical-step'
              style={{ backgroundColor: theme === 'dark' ? '#000' : '#fff' }}
            >
              <div className='dot'></div>
            </motion.div>
            <div className='vertical-span'>{step.n}</div>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </div>
        ))}
        <div
          className='vertical-item'
          style={{ border: 'none', paddingBottom: '0' }}
        >
          <div className='vertical-step'>
            <div className='dot'></div>
          </div>
          <div className='vertical-span'>{'Step 5'}</div>
          <h4>{'Finishing'}</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
            ullam.
          </p>
        </div>
      </div>
    </motion.div>
  )
}
