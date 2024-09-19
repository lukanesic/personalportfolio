import React, { useEffect } from 'react'
import Main from '../layout/Main'

import ProjectL from '../components/ProjectL'
import ProjectB from '../components/ProjectB'
import ProjectO from '../components/ProjectO'
const landing = {
  client: 'Personal Project',
  services: ['Design', 'Development'],
  tech: ['React', 'Redux Toolkit', 'SCSS', 'Framer Motion'],
  title: 'Tesla inspired website design with Audi models',
  intro: `Taking inspiration from the sleek and modern designs of Tesla's website and Audi's car models, I re-created a website with a similarly look.`,
}

const Audi = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#fff'
    window.scrollTo(0, 0)
  }, [])
  return (
    <Main footerTxtColor={'black'}>
      <ProjectL data={landing} color={'#000'} />
      <ProjectB src={'/audi-sm.png'} name={'Audi'} bg />
      <ProjectO
        overview={`To replicate the behavior of the Tesla website, I employed React as the framework, Framer Motion for animations, and Redux for state management, allowing for a original user experience.`}
        placeholder={'Visit Live Project'}
        link={'https://custom-audi.netlify.app/'}
      />
    </Main>
  )
}

export default Audi
