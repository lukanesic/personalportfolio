import React from 'react'
import HeadingSection from '../components/HeadingSection'
import Landing from '../components/Landing'
import Project from '../components/Project'
import Main from '../layout/Main'

import Process from '../components/Process'

import { motion } from 'framer-motion'
import ScrollToTop from '../hooks/scrollToTop'

const data = [
  {
    company: 'Tehnoplast',
    title: 'Production & installation of ALU & PVC joinery',
    tech: 'redesign, web, development',
    src: '/tehno-1-min.png',
    theme: 'rgba(253, 235, 218, 0.45)',
    text: 'black',
    url: 'tehnoplast',
  },
  {
    company: 'Ulnaris Psyhiotherapy',
    title: 'Application for managing patients and examinations',
    tech: 'web app, design, development',
    src: '/ulnaris.png',
    theme: 'rgba(214, 231, 246, 0.45)',
    text: 'black',
    reverse: true,
    url: 'ulnaris',
  },
  {
    company: 'Jugometal',
    title: 'Tractors & agricultural machinery',
    tech: 'redesign, web, development',
    src: '/jugo-project-1.png',
    theme: 'rgba(242, 226, 225, 0.45)',
    text: 'black',
    url: 'jugometal',
  },
  {
    company: 'Audi & Tesla',
    title: 'Tesla inspired website design with Audi models',
    tech: 'personal project, web, development',
    src: '/audi.png',
    theme: '#000',
    text: 'white',
    reverse: true,
    txtClass: true,
    url: 'audi',
  },
]

const process = [
  {
    num: '01.',
    title: 'Design',
    text: 'The web design process involves research, planning, design, development, and testing.',
  },
  {
    num: '02.',
    title: 'Coding',
    text: 'The coding process involves writing, testing, debugging, and optimizing code.',
  },
  {
    num: '03.',
    title: 'Testing',
    text: 'Testing a website involves functionality, performance, security, and cross-browser compatibility.',
  },
  {
    num: '04.',
    title: 'Optimization',
    text: 'Website optimization involves improving speed, performance, SEO, and user experience.',
  },
]

const webflow = [
  {
    num: '01.',
    title: 'Time',
    text: 'Webflow allows for faster development, as it eliminates the coding and enables visual design.',
  },
  {
    num: '02.',
    title: 'Customization',
    text: 'Webflow allows clients to fully customize their website design and functionality easily.',
  },
  {
    num: '03.',
    title: 'SEO',
    text: 'Optimized for search engines, making it easier for clients to rank higher in search engine results.',
  },
  {
    num: '04.',
    title: 'CMS ',
    text: 'Webflow have powerful content management system which enables easy website content updates',
  },
]

const Homepage = () => {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Main>
        <Landing />
        <HeadingSection
          title={'work.'}
          paragraph={
            'Each client is unique and so is each project. Here is quick glimpse of my portfolio.'
          }
        />

        {data.map((project, index) => (
          <Project
            key={index}
            company={project.company}
            src={project.src}
            tech={project.tech}
            title={project.title}
            reverse={project.reverse && project.reverse}
            theme={project.theme}
            color={project.text}
            txtClass={project.txtClass && project.txtClass}
            url={project.url}
          />
        ))}

        <div className='space'>
          <HeadingSection
            title={'process.'}
            paragraph={
              'The frontend development process involves design, coding, testing, and optimization.'
            }
            light
          />

          <Process data={process} />
        </div>

        {/* <div className='space'>
          <HeadingSection
            paragraph={
              'Webflow offers a unique blend of no-coding, customization, SEO-friendliness, and e-commerce capabilities.'
            }
            light
            webflow={'or choose webflow.'}
          />

          <Process data={webflow} />
        </div> */}
      </Main>
    </>
  )
}

export default Homepage
