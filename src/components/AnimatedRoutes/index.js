import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Audi from '../../pages/Audi'
import Homepage from '../../pages/Homepage'
import Jugometal from '../../pages/Jugometal'
import Tehnoplast from '../../pages/Tehnoplast'
import Ulnaris from '../../pages/Ulnaris'
import Idcom from '../../pages/Idcom'
import New from '../../pages/New'
import About from '../../pages/about'

import { MyContextProvider } from '../../store/ThemeContext'

const AnimatedRoutes = () => {
  return (
    <MyContextProvider>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/tehnoplast' element={<Tehnoplast />} />
        <Route path='/ulnaris' element={<Ulnaris />} />
        {/* <Route path='/jugometal' element={<Jugometal />} /> */}
        <Route path='/i&dcom' element={<Idcom />} />
        <Route path='/audi' element={<Audi />} />
        {/* <Route path='/new' element={<New />} /> */}
        {/* <Route path='/about' element={<About />} /> */}
      </Routes>
    </MyContextProvider>
  )
}

export default AnimatedRoutes
