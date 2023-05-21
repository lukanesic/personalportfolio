import React, { useEffect } from 'react'
import Main from '../layout/Main'

import ProjectL from '../components/ProjectL'
import ProjectB from '../components/ProjectB'
import ProjectO from '../components/ProjectO'
import ProjectI from '../components/ProjectI'

const landing = {
  client: 'Tehnoplast',
  services: ['UX', 'Design', 'Development'],
  tech: ['Figma', 'Next.js','SCSS','Framer Motion'],
  title: 'Production & installation of ALU & PVC joinery',
  intro: `The client approached me to re-design a website showcasing their PVC products and projects, and I'm excited to bring their vision to life.`,
}

const Tehnoplast = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#fff'
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      {/* <ScrollToTop /> */}
      <Main footerTxtColor={'black'}>
        <ProjectL data={landing} color={'#F28C26'} />
        <ProjectB src={'/tehno-b.png'} name={'Tehnoplast'} />
        <ProjectO
          overview={`Using Figma for prototyping and design, Next.js for development and Framer Motion for animations, i created a website that is intuitive, efficient, and easy to use for my client's business needs.`}
          placeholder={'Visit Live Website'}
          link={'https://tehnoplast.vercel.app/de'}
        />
        <ProjectI
          src={'/tehno-full.png'}
          name={'Tehnoplast'}
          bg={'#fdebda'}
          width={'30%'}
          height={'30%'}
        />
      </Main>
    </>
  )
}

export default Tehnoplast
