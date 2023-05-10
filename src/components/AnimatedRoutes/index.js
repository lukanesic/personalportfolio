import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Audi from '../../pages/Audi'
import Homepage from '../../pages/Homepage'
import Jugometal from '../../pages/Jugometal'
import Tehnoplast from '../../pages/Tehnoplast'
import Ulnaris from '../../pages/Ulnaris'

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence
      mode='wait'
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Homepage />} />
        <Route path='/tehnoplast' element={<Tehnoplast />} />
        <Route path='/ulnaris' element={<Ulnaris />} />
        <Route path='/jugometal' element={<Jugometal />} />
        <Route path='/audi' element={<Audi />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
