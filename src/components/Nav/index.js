import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Cross as Hamburger } from 'hamburger-react'

const Nav = () => {
  const [isOpen, setOpen] = useState(false)

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
      animate={{ height: isOpen ? '400px' : '81px' }}
      transition={{ duration: 0.7 }}
    >
      <div className='nav-container wrapper'>
        <div className='nav-left'>
          <div className='logo'>
            <h1>
              ln. <span>Frontend Web Developer</span>
            </h1>
          </div>
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
            <h1>MENUU</h1>
          </motion.div>
        )}{' '}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Nav
