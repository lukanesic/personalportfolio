import React from 'react'
import ModelSection from '../components/Models/ModelSection'
import ModelsWrapper from '../components/Models/ModelsWrapper'
import Main from '../layout/Main'
import DefaulyOverlayContent from './../components/Models/DefaultOverlayContent'
const data = [
  {
    company: 'I&DCOM',
    title: 'Hardware, print optimization, and office supplies',
    tech: 'design, web application, development',
    src: '/idcom.png',
    theme: 'rgba(255, 242, 0, 0.05)',
    text: 'black',
    url: 'i&dcom',
    reverse: true,
  },
  {
    company: 'Ulnaris Psyhiotherapy',
    title: 'Application for managing patients and examinations',
    tech: 'web app, design, development',
    src: '/ulnaris.png',
    theme: 'rgba(214, 231, 246, 0.45)',
    text: 'black',
    url: 'ulnaris',
  },
  {
    company: 'Tehnoplast',
    title: 'Production & installation of ALU & PVC joinery',
    tech: 'redesign, web, development',
    src: '/tehno-1-min.png',
    theme: 'rgba(253, 235, 218, 0.45)',
    text: 'black',
    url: 'tehnoplast',
    reverse: true,
  },

  // {
  //   company: 'Jugometal',
  //   title: 'Tractors & agricultural machinery',
  //   tech: 'redesign, web, development',
  //   src: '/jugo-project-1.png',
  //   theme: 'rgba(242, 226, 225, 0.45)',
  //   text: 'black',
  //   url: 'jugometal',
  // },
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

const sections = [
  {
    title: 'Narukvice',
    description: 'Narukvice koje ističu vašu eleganciju',
    // theme: 'rgba(255, 242, 0, 0.05)',
    theme: '#fff',
    text: 'black',
  },
  {
    title: 'Ogrlice',
    description: 'Ogrlice koje naglašavaju vašu lepotu.',
    // theme: 'rgba(214, 231, 246, 0.45)',
    theme: '#fff',
    text: 'black',
  },
  {
    title: 'Satovi',
    description: 'Muški i ženski satovi za svaku priliku',
    // theme: 'rgba(253, 235, 218, 0.45)',
    theme: '#fff',
    text: 'black',
  },
  {
    title: 'Prstenje',
    description: 'Predivno prstenje za posebne trenutke.',
    // theme: 'rgba(214, 231, 246, 0.45)',
    theme: '#fff',
    text: 'black',
  },
  {
    title: 'Mindjuse',
    description: 'Predivno prstenje za posebne trenutke.',
    // theme: 'rgba(255, 242, 0, 0.05)',
    theme: '#fff',
    text: 'black',
  },
  {
    title: 'Alex Zlatara',
    description: 'Ne znam sta da napisem ovde iskreno.',
    // theme: '#000',
    theme: '#fff',
    text: 'white',
  },
]

const New = () => {
  return (
    <Main notFooter={true}>
      <div>
        <ModelsWrapper>
          <div>
            {data.map((section, i) => (
              // ModelSection je svaka sekcija posebno - mindjuse, narukvice, ogrlice...
              <ModelSection
                // ovo je indentifikator koja sekcija je u pitanju
                key={i}
                sectionID={section.title}
                className='modelSection'
                overlayNode={
                  <DefaulyOverlayContent
                    title={section.title}
                    company={section.company}
                    theme={section.theme}
                    tech={section.tech}
                    txtColor={section.text}
                    url={section.url}
                    src={section.src}
                    text={section.text}
                    txtClass={section.txtClass}
                  />
                }
              />
            ))}
          </div>
        </ModelsWrapper>
      </div>
    </Main>
  )
}

export default New
