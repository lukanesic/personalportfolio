import React, { useEffect } from 'react'
import Main from '../layout/Main'

import ProjectL from '../components/ProjectL'
import ProjectB from '../components/ProjectB'
import ProjectO from '../components/ProjectO'
const landing = {
  client: 'Alex Zlatara',
  services: ['Design', 'UX', 'Development'],
  tech: ['Next.js', 'ContextAPI', 'Tailwind', 'Wix CMS'],
  title: 'Online boutique for exquisite jewelry',
  intro: `I developed a brand-new Next.js website for client, building it from the ground up while incorporating full admin and e-commerce functionalities to meet their unique needs.`,
  website: 'https://www.alexzlatara.com',
}

const Alexzlatara = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#fff'
    window.scrollTo(0, 0)
  }, [])
  return (
    <Main footerTxtColor={'black'}>
      <ProjectL data={landing} color={'#000'} />
      <ProjectB src={'/alexbanner.png'} name={'Audi'} bg />
      <ProjectO
        overview={`To build the website, I leveraged Next.js for optimized server-side rendering and enhanced SEO,  integrated Wix as the CMS, and implemented Context API for efficient state control.`}
        placeholder={'Visit Live Project'}
        link={'https://www.alexzlatara.com'}
      />
    </Main>
  )
}

export default Alexzlatara
