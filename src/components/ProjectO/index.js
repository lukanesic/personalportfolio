import React from 'react'

const ProjectO = ({ overview, placeholder, link, custom }) => {
  return (
    <div className='projecto wrapper'>
      {custom ? <h3>{custom}</h3> : <h3>design & tech</h3>}
      <div className='projecto-desc'>
        <p>{overview}</p>
        {link && (
          <span className='btn'>
            <a href={link} target='_blank' rel='noopener noreferrer'>
              {placeholder}
            </a>
          </span>
        )}
      </div>
    </div>
  )
}

export default ProjectO
