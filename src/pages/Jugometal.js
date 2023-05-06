import React from 'react'
import Main from '../layout/Main'

import ProjectL from '../components/ProjectL'
import ProjectB from '../components/ProjectB'
import ProjectO from '../components/ProjectO'
import ProjectI from '../components/ProjectI'

const landing = {
  client: 'Jugometal',
  services: ['UX', 'Design', 'Development'],
  tech: ['Figma', 'Next.js', 'Framer Motion'],
  title: 'Production & installation of ALU & PVC joinery',
  intro: `The client approached me to re-design a website showcasing their PVC products and projects, and I'm excited to bring their vision to life.`,
}

const Jugometal = () => {
  return (
    <Main footerTxtColor={'black'}>
      <ProjectL data={landing} color={'#ED1D24'} />
      <ProjectB src={'/jugo-logo.png'} name={'Jugometal'} />
      <ProjectO
        overview={`Using Figma for prototyping & design, Next.js for development and Framer Motion for animations, i created a website that is intuitive, efficient, and easy to use for my client's business needs.`}
      />
      <ProjectI
        src={'/jugo-new.png'}
        name={'Jugometal'}
        bg={'rgba(242, 226, 225, 0.8)'}
        width={'60%'}
        height={'60%'}
      />
    </Main>
  )
}

export default Jugometal
