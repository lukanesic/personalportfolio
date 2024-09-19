import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './hooks/scrollToTop'
import AnimatedRoutes from './components/AnimatedRoutes'
import { useEffect } from 'react'

function App() {
  // ZBOG LOCOMOTIVE-A SE NE VRACA SKROZ NA 0 GORE KADA SE ODRADI NOVI URL
  useEffect(
    () => async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    },
    []
  )

  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App
