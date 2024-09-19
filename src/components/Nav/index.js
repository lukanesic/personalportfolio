import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Cross as Hamburger } from 'hamburger-react'
import { useNavigate } from 'react-router-dom'
import { useMyContext } from '../../store/ThemeContext'

const Nav = ({ isOpen, setOpen }) => {
  const navigate = useNavigate()

  const { theme } = useMyContext()

  return (
    <motion.nav
      animate={{ height: isOpen ? '100vh' : '81px' }}
      transition={{ duration: 0.7 }}
    >
      {/* wrapper je bio ovde */}
      <div className='nav-container'>
        <div className='nav-left'>
          <motion.div
            className='logo'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1
              onClick={() => navigate('/')}
              style={{
                cursor: 'pointer',
                color: theme === 'dark' ? '#fff' : '#000',
              }}
            >
              scope. <span>Web Duo</span>
            </h1>
          </motion.div>
        </div>

        <div className='nav-right'>
          <span>menu</span>
          <Hamburger
            className='hamburger-react'
            toggled={isOpen}
            toggle={setOpen}
            size={24}
            color={theme === 'dark' ? '#fff' : '#282828'}
          />
        </div>
      </div>
      {/* <AnimatePresence>
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
      </AnimatePresence> */}
    </motion.nav>
  )
}

export default Nav
