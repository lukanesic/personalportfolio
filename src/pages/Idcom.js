import React, { useEffect } from 'react'
import Main from '../layout/Main'

import ProjectL from '../components/ProjectL'
import ProjectB from '../components/ProjectB'
import ProjectI from '../components/ProjectI'
import ProjectO from '../components/ProjectO'

const landing = {
  client: 'I&DCOM',
  services: ['UX', 'Design', 'Development'],
  tech: ['React', 'Node', 'Redux Toolkit', 'MongoDB', 'Mongoose', 'SCSS'],
  title:
    'Importer & supplier for printers, hardware, print optimization, and office supplies.',
  intro: `The employer sought an application for tracking job statistics, analytics, and generating and printing work orders to streamline workflow and enhance productivity.`,
}

const Idcom = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#fff'
    window.scrollTo(0, 0)
  }, [])

  return (
    <Main footerTxtColor={'black'}>
      <ProjectL data={landing} color={'#000'} />
      <ProjectB src={'/idcom-main-logo.png'} name={'I&DCOM'} />
      <ProjectO
        overview={`I utilized React, Node, Redux Toolkit, and Figma for developing the application, ensuring a seamless blend of efficient frontend, backend, state management, and design elements.`}
        placeholder={'Visit Live Website'}
      />
      <ProjectI
        src={'/newTicket.png'}
        name={'I&DCOM'}
        bg={'rgba(255, 242, 0, 0.05)'}
        width={'35%'}
        height={'35%'}
      />

      <ProjectO
        overview={`One of the primary tasks of the application is to generate information through forms and inputs, streamlining data input for enhanced functionality. Users can then view all the information they have generated and leave comments and additional essential details within the comment section.`}
        placeholder={'Visit Live Website'}
        custom={'forms & inputs'}
      />

      <ProjectI
        src={'/openTicket.png'}
        name={'I&DCOM'}
        bg={'rgba(255, 242, 0, 0.05)'}
        width={'50%'}
        height={'50%'}
      />

      <ProjectO
        overview={`The application's subsequent development revolved around the data input through forms and inputs. All statistics and analytics were built upon this information, enabling the derivation of improved business models and processes.`}
        placeholder={'Visit Live Website'}
        custom={'analytics & statistics'}
      />

      <ProjectI
        src={'/dashboard.png'}
        name={'I&DCOM'}
        bg={'rgba(255, 242, 0, 0.05)'}
        width={'50%'}
        height={'50%'}
      />
    </Main>
  )
}

export default Idcom
