import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './hooks/scrollToTop'
import AnimatedRoutes from './components/AnimatedRoutes'

function App() {
  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App
