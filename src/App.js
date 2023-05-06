import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Tehnoplast from './pages/Tehnoplast'
import Homepage from './pages/Homepage'
import Ulnaris from './pages/Ulnaris'
import Audi from './pages/Audi'
import Jugometal from './pages/Jugometal'

function App() {
  return (
    // Nek ostane ovo ovako, ali vraticu react router na v5 kako bi mogoa da iskoristim taj switch i sve to sto treba.
    <BrowserRouter>
      <AnimatePresence mode='wait'>
        <Routes key='homepage'>
          <Route path='/' element={<Homepage />} />
        </Routes>

        <Routes key='tehno'>
          <Route path='/tehnoplast' element={<Tehnoplast />} />
        </Routes>

        <Routes key='ulnaris'>
          <Route path='/ulnaris' element={<Ulnaris />} />
        </Routes>

        <Routes key='jugometal'>
          <Route path='/jugometal' element={<Jugometal />} />
        </Routes>

        <Routes key='audi'>
          <Route path='/audi' element={<Audi />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  )
}

export default App
