import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const Landing = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      document.body.style.backgroundColor = '#fff'
    }
  }, [inView])

  return (
    <div className='landing wrapper'>
      <div className='heading'>
        <h1 className='main-head'>
          {/* Breaking boundaries with bold creativity. Delivery beyond
          expectations. */}
          Breaking boundaries with creativity. Delivery beyond expectations.
        </h1>
        <span className='main-moto' ref={ref}>
          <b>Simplicity & Usability.</b> Crafting elegant, simple solutions with
          a focus on usability.
        </span>

        {/* otvaraj mail */}
        <a href='mailto:lukannesic@gmail.com' className='main-btn'>
          Get in touch
        </a>
      </div>
    </div>
  )
}

export default Landing
