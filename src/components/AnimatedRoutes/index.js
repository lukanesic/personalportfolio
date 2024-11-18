import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Audi from '../../pages/Audi'
import Homepage from '../../pages/Homepage'
import Jugometal from '../../pages/Jugometal'
import Alexzlatara from '../../pages/Alexzlatara'
import Ulnaris from '../../pages/Ulnaris'
import Idcom from '../../pages/Idcom'

import { MyContextProvider } from '../../store/ThemeContext'
import DivineApp from '../../pages/DivineApp'

const AnimatedRoutes = () => {
  return (
    <MyContextProvider>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/jugometal' element={<Jugometal />} />
        <Route path='/ulnaris' element={<Ulnaris />} />
        <Route path='/i&dcom' element={<Idcom />} />
        <Route path='/audi' element={<Audi />} />
        <Route path='/divineapp' element={<DivineApp />} />
        <Route path='/alexzlatara' element={<Alexzlatara />} />
      </Routes>
    </MyContextProvider>
  )
}

export default AnimatedRoutes
