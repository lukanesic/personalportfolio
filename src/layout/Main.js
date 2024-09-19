import React, { useState } from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { AnimatePresence, motion } from 'framer-motion'
import Overlay from '../components/Overlay'
import Menu from '../components/Menu'

const Main = ({ children, footerTxtColor }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div>
      <Nav isOpen={isOpen} setOpen={setOpen} />

      <AnimatePresence>
        {isOpen && (
          <>
            <Overlay isOpen={isOpen} />
            <Menu isOpen={isOpen} />
          </>
        )}
      </AnimatePresence>

      {children}
      <Footer footerTxtColor={footerTxtColor} />
    </div>
  )
}

export default Main
