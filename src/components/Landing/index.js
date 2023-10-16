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
        <h1 className='main-head'>Designing & Developing on Web</h1>
        <span className='main-moto' ref={ref}>
          Simplicity & Usability
        </span>
      </div>
    </div>
  )
}

export default Landing
