import React from 'react'
import HeadingSection from '../components/HeadingSection'
import Landing from '../components/Landing'
import Project, {
  LastProjectReview,
  ProjectReview,
} from '../components/Project'
import Main from '../layout/Main'

import Process, { VerticalProcess } from '../components/Process'

const data = [
  {
    company: 'I&DCOM',
    title: 'Hardware, print optimization, and office supplies',
    tech: 'design, web application, development',
    // src: '/idcom.png',
    src: '/test1.webp',
    theme: 'rgba(255, 242, 0, 0.05)',
    text: 'black',
    url: 'i&dcom',
    reverse: true,
  },
  {
    company: 'Ulnaris Psyhiotherapy',
    title: 'Application for managing patients and examinations',
    tech: 'web app, design, development',
    // src: '/ulnaris.png',
    src: '/test2.webp',
    theme: 'rgba(214, 231, 246, 0.45)',
    text: 'black',
    url: 'ulnaris',
  },
  {
    company: 'Tehnoplast',
    title: 'Production & installation of ALU & PVC joinery',
    tech: 'redesign, web, development',
    // src: '/tehno-1-min.png',
    src: '/test3.webp',
    theme: 'rgba(253, 235, 218, 0.45)',
    text: 'black',
    url: 'tehnoplast',
    reverse: true,
  },
  {
    company: 'Ulnaris Psyhiotherapy',
    title: 'Application for managing patients and examinations',
    tech: 'web app, design, development',
    // src: '/ulnaris.png',
    src: '/test2.webp',
    theme: 'rgba(214, 231, 246, 0.45)',
    text: 'black',
    url: 'ulnaris',
  },
  {
    company: 'Tehnoplast',
    title: 'Production & installation of ALU & PVC joinery',
    tech: 'redesign, web, development',
    // src: '/tehno-1-min.png',
    src: '/test3.webp',
    theme: 'rgba(253, 235, 218, 0.45)',
    text: 'black',
    url: 'tehnoplast',
    reverse: true,
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
  // {
  //   company: 'Audi & Tesla',
  //   title: 'Tesla inspired website design with Audi models',
  //   tech: 'personal project, web, development',
  //   // src: '/audi.png',
  //   src: '/test4.jpg',
  //   theme: '#000',
  //   text: 'white',
  //   reverse: true,
  //   txtClass: true,
  //   url: 'audi',
  //   ref: true,
  // },
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
    <div>
      {/* <ScrollToTop /> */}
      <Main footerTxtColor={'white'}>
        <Landing />
        <HeadingSection
          title={'Work.'}
          paragraph={
            'Focused on innovative, unconventional solutions. Pushing limits to surpass client ambitions.'
          }
        />

        <div className='project-review-container wrapper'>
          {data.map((project, index) => (
            <ProjectReview
              i={index}
              key={index}
              src={project.src}
              url={project.url}
              r={project.ref}
              total={data.length}
            />
          ))}
          <LastProjectReview />
        </div>

        {/* {data.map((project, index) => (
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
        ))} */}

        {/* <HeadingSection
          title={'Development process.'}
          paragraph={
            'Advanced front-end and back-end development strategies, utilizing cutting-edge frameworks and libraries for seamless integration.'
          }
          // light
        /> */}

        {/* <Process data={process} /> */}
        <VerticalProcess />
      </Main>
    </div>
  )
}

export default Homepage
