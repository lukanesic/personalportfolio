import React from 'react'

const ProjectB = ({ src, name, bg }) => {
  return (
    <div className='projectb' style={{ backgroundColor: bg && bg }}>
      <img
        src={src}
        alt={name}
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      />
    </div>
  )
}

export default ProjectB
