import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Tehnoplast from './pages/Tehnoplast'
import Homepage from './pages/Homepage'
import Ulnaris from './pages/Ulnaris'
import Audi from './pages/Audi'
import Jugometal from './pages/Jugometal'
import ScrollToTop from './hooks/scrollToTop'
import AnimatedRoutes from './components/AnimatedRoutes'

function App() {
  return (
    // Nek ostane ovo ovako, ali vraticu react router na v5 kako bi mogoa da iskoristim taj switch i sve to sto treba.
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App
