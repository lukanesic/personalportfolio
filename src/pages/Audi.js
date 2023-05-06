import React from 'react'
import Main from '../layout/Main'

import ProjectL from '../components/ProjectL'
import ProjectB from '../components/ProjectB'
import ProjectO from '../components/ProjectO'
const landing = {
  client: 'Personal Project',
  services: ['Design', 'Development'],
  tech: ['React', 'Redux Toolkit', 'Framer Motion'],
  title: 'Tesla inspired website design with Audi models',
  intro: `The client approached me to re-design a website showcasing their PVC products and projects, and I'm excited to bring their vision to life.`,
}

const Audi = () => {
  return (
    <Main footerTxtColor={'black'}>
      <ProjectL data={landing} color={'#000'} />
      <ProjectB src={'/audi-sm.png'} name={'Audi'} bg />
      <ProjectO
        overview={`Using Figma for prototyping & design, Next.js for development and Framer Motion for animations, i created a website that is intuitive, efficient, and easy to use for my client's business needs.`}
      />
    </Main>
  )
}

export default Audi
