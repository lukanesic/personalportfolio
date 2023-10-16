import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Cross as Hamburger } from 'hamburger-react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const [isOpen, setOpen] = useState(false)

  const navigate = useNavigate()

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
    <motion.nav
      animate={{ height: isOpen ? '100vh' : '81px' }}
      transition={{ duration: 0.7 }}
    >
      <div className='nav-container wrapper'>
        <div className='nav-left'>
          <motion.div
            className='logo'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
              nl. <span>Web Developer</span>
            </h1>
          </motion.div>
        </div>

        <div className='nav-right'>
          <span>menu</span>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={24}
            color={'#fff'}
          />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='nav-content wrapper'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            exit={{
              opacity: 0,
              transition: {
                delay: 0.1,
              },
            }}
          >
            <div className='content'>
              <span className='s-title'>social</span>
              <span
                className='li'
                style={{ borderBottom: '1px solid #fff', width: 'fit-content' }}
              >
                <a
                  href='https://www.linkedin.com/in/lukanesic/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  LinkedIn
                </a>
              </span>
              <span
                className='li'
                style={{ borderBottom: '1px solid #fff', width: 'fit-content' }}
              >
                <a
                  href='https://github.com/lukanesic'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  GitHub
                </a>
              </span>
            </div>

            <div className='content'>
              <span className='s-title'>services</span>
              <span className='li'>UI/UX</span>
              <span className='li'>Design</span>
              <span className='li'>Development</span>
            </div>

            <div className='content'>
              <span className='s-title'>tech</span>
              <span className='li'>React</span>
              <span className='li'>Next.js</span>
              <span className='li'>Redux</span>
              <span className='li'>MongoDB</span>
              <span className='li'>Firebase</span>
              <span className='li'>Framer Motion</span>
              <span className='li'>Figma</span>
            </div>

            <div className='content s-mg'>
              <span className='s-title'>get in touch</span>
              <span
                className='li'
                style={{
                  borderBottom: '1px solid #fff',
                  width: 'fit-content',
                  cursor: 'pointer',
                }}
              >
                <a href='mailto:lukannesic@gmail.com'>lukannesic@gmail.com</a>
              </span>
            </div>
          </motion.div>
        )}{' '}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Nav
