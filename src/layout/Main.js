import React, { useState } from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { AnimatePresence } from 'framer-motion'
import Overlay from '../components/Overlay'
import Menu from '../components/Menu'
import Menusmall from '../components/Menusmall'

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
            <Menusmall isOpen={isOpen} />
          </>
        )}
      </AnimatePresence>

      {children}
      <Footer footerTxtColor={footerTxtColor} />
    </div>
  )
}

export default Main
