import React from 'react'

const ProjectO = ({ overview }) => {
  return (
    <div className='projecto wrapper'>
      <h3>design & tech</h3>
      <div className='projecto-desc'>
        <p>{overview}</p>
        <span className='btn'>View live website</span>
      </div>
    </div>
  )
}

export default ProjectO
