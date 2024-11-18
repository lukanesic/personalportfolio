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
    company: 'Divine Hotel App',
    title: 'Mobile app for managing hotel rooms.',
    tech: 'design, web application, development',
    // src: '/idcom.png',
    description:
      'The objective was to create an intuitive tool for hotel staff to improve room service management. The result streamlined operations and boosted service quality across the property.',
    src: '/divineapp2.png',
    theme: 'rgba(255, 242, 0, 0.05)',
    text: 'black',
    url: 'divineapp',
  },
  {
    company: 'I&D COM',
    title: 'A web application designed for streamlined workflow.',
    tech: 'design, web application, development',
    // src: '/idcom.png',
    src: '/idcom2.png',
    description:
      'The goal was to streamline internal workflows through a web app, enabling efficient data input and automated ticket generation, ultimately enhancing task management and collaboration.',
    theme: 'rgba(255, 242, 0, 0.05)',
    text: 'black',
    url: 'i&dcom',
  },
  {
    company: 'Ulnaris Psyhiotherapy',
    title: 'Application for managing patients and examinations.',
    tech: 'web app, design, development',
    // src: '/ulnaris.png',
    src: '/ulnarisart.png',
    description:
      'Designed to help physiotherapists manage appointments, track patient history, and monitor progress, this web app improved workflow and enhanced patient care.',
    theme: 'rgba(214, 231, 246, 0.45)',
    text: 'black',
    url: 'ulnaris',
  },
  {
    company: 'Alex Jewelry',
    title: 'Fine jewelry online shop',
    tech: 'redesign, web, development',
    // src: '/tehno-1-min.png',
    src: '/jew.jpg',
    description:
      'Created to showcase fine jewelry, this website offers a seamless browsing experience, highlighting exquisite designs and providing easy navigation for a premium shopping experience.',
    theme: 'rgba(253, 235, 218, 0.45)',
    text: 'black',
    url: 'alexzlatara',
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
              title={project.title}
              tech={project.tech}
              r={project.ref}
              total={data.length}
              company={project.company}
              description={project.description}
            />
          ))}
          {/* on stoji ovde zato sto on menja pozadinu */}
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
