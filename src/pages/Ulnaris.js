import React, { useEffect } from 'react'
import Main from '../layout/Main'

import ProjectL from '../components/ProjectL'
import ProjectB from '../components/ProjectB'
import ProjectO from '../components/ProjectO'
import ProjectI from '../components/ProjectI'
import ScrollToTop from '../hooks/scrollToTop'

const landing = {
  client: 'Ulnaris Physiotherapy',
  services: ['UX', 'Design', 'Development'],
  tech: ['Figma', 'React', 'Redux Toolkit', 'Firebase', 'Framer Motion'],
  title: 'Application for entering patients into database',
  intro: `The client approached me to re-design a website showcasing their PVC products and projects, and I'm excited to bring their vision to life.`,
}

const Ulnaris = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#fff'
    window.scrollTo(0, 0)
  }, [])
  return (
    <Main footerTxtColor={'black'}>
      <ScrollToTop />
      <ProjectL data={landing} color={'#029FC7'} />
      <ProjectB src={'/ulnaris-main-logo.png'} name={'Ulnaris Physiotherapy'} />
      <ProjectO
        overview={`Using Figma for prototyping & design, Next.js for development and Framer Motion for animations, i created a website that is intuitive, efficient, and easy to use for my client's business needs.`}
      />
      <ProjectI
        src={'/Ulnarisgroup.png'}
        name={'Ulnaris'}
        bg={'rgba(214, 231, 246, 0.31)'}
        width={'60%'}
        height={'60%'}
      />
    </Main>
  )
}

export default Ulnaris
