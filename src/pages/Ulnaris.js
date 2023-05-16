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
  title: 'Application for managing patients and examinations',
  intro: `A newly opened physiotherapy studio has requested me to develop a web application to streamline their operations.`,
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
        overview={`This application was built using React, Framer Motion, and Redux Toolkit for development, state management and UX, with design done in Figma, and Firebase used for database storage.`}
        placeholder={'Visit Live App'}
        link={'https://mdapp-tau.vercel.app/'}
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
