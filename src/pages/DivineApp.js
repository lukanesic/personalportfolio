import React, { useEffect } from 'react'
import Main from '../layout/Main'

import ProjectL from '../components/ProjectL'
import ProjectB from '../components/ProjectB'
import ProjectI from '../components/ProjectI'
import ProjectO from '../components/ProjectO'

const landing = {
  client: 'Hotel Divine Park',
  services: ['UX', 'Design', 'Mobile Development'],
  tech: ['React Native', 'iOS', 'Android', 'Firebase', 'Push Notifications'],
  title: 'Hotel Divine Park',
  intro: `
  I developed a private mobile application for tracking room statuses within the staff circle, scheduling services, and allowing cleaning personnel to accept service requests, aiming to improve efficiency and coordination among the team.`,
  website: 'https://www.divinepark.rs/',
}

const DivineApp = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#fff'
    window.scrollTo(0, 0)
  }, [])

  return (
    <Main footerTxtColor={'black'}>
      <ProjectL data={landing} color={'#000'} />
      <ProjectB
        src={'/divinebaner.png'}
        name={'divine park'}
        bg={'rgba(210, 168, 98, 0.5)'}
      />
      <ProjectO
        overview={`I used React Native to develop the app for both Android and iOS simultaneously, alongside Firebase for the database and FCM for push notifications, ensuring a seamless and efficient cross-platform experience.`}
        placeholder={''}
      />
      <ProjectI
        src={'/divinemockban.png'}
        name={'Hotel Divine Park'}
        bg={'rgba(0,0,0,1)'}
        width={'100%'}
        height={'35%'}
        cover={'0'}
      />

      <ProjectO
        overview={`The main objective of the application was to elevate the service process to the next level, improving the overall hotel operations. By streamlining service scheduling and management, the app offers a more efficient approach, reducing manual efforts and enhancing coordination between staff members, ultimately contributing to smoother business processes and improved service quality.`}
        placeholder={''}
        custom={'forms & inputs'}
      />
      {/* 
      <ProjectI
        src={'/divinedash.png'}
        name={'Divine app'}
        bg={''}
        width={'100%'}
        height={'100%'}
        cover={'0'}
      /> */}

      <div
        style={{
          position: 'relative',
          height: '75vh',
          width: '100%',
          marginTop: '8rem',
          marginBottom: '5rem',
        }}
      >
        <img
          src={'/divinedash.png'}
          alt={'Divine app'}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* <div className='image'>
        <img
          src={'/divinedash.png'}
          alt={name}

          style={{ width: width, height: height }}
        />
      </div> */}
      </div>
    </Main>
  )
}

export default DivineApp
