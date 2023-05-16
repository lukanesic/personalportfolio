import React from 'react'

const ProjectO = ({ overview, placeholder, link }) => {
  return (
    <div className='projecto wrapper'>
      <h3>design & tech</h3>
      <div className='projecto-desc'>
        <p>{overview}</p>
        <span className='btn'>
          <a href={link} target='_blank' rel='noopener noreferrer'>
            {placeholder}
          </a>
        </span>
      </div>
    </div>
  )
}

export default ProjectO
