import React from 'react'

const ProjectL = ({ data, color }) => {
  return (
    <div className='projectl wrapper'>
      <div className='list'>
        <div className='list-content'>
          <span className='s-title'>client</span>
          <span className='li' style={{ color: color }}>
            {data.client}
          </span>
        </div>
        <div className='list-content'>
          <span className='s-title'>services</span>
          {data.services.map((li, index) => (
            <span key={index} className='li'>
              {li}
            </span>
          ))}
        </div>
        <div className='empty'></div>
        <div className='list-content'>
          {' '}
          <span className='s-title'>tech</span>
          {data.tech.map((li, index) => (
            <span className='li' key={index}>
              {li}
            </span>
          ))}
        </div>
      </div>
      <div className='intro'>
        <h2>{data.title}</h2>
        <p>{data.intro}</p>
      </div>
    </div>
  )
}

export default ProjectL
