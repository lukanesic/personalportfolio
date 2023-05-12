import React, { useEffect } from 'react'
import Main from '../layout/Main'

import ProjectL from '../components/ProjectL'
import ProjectB from '../components/ProjectB'
import ProjectO from '../components/ProjectO'
import ProjectI from '../components/ProjectI'

const landing = {
  client: 'Jugometal',
  services: ['UX', 'Re-Design', 'Development'],
  tech: ['Next.js', 'Redux Toolkit', 'MongoDB', 'Mongoose', 'Framer Motion'],
  title: 'Tractors & agricultural machinery',
  intro: `I was tasked with converting a WordPress website into a Next.js website, ensuring that all of the original functionalities, including admin and e-commerce capabilities were retained.`,
}

const Jugometal = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#fff'
    window.scrollTo(0, 0)
  }, [])
  return (
    <Main footerTxtColor={'black'}>
      <ProjectL data={landing} color={'#ED1D24'} />
      <ProjectB src={'/jugo-logo.png'} name={'Jugometal'} />
      <ProjectO
        overview={`For the development of the website, I utilized Next.js for its server-side rendering capabilities and SEO benefits, MongoDB as the database and Redux Toolkit for state managment.`}
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
