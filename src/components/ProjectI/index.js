import React from 'react'

const ProjectI = ({ src, name, bg, width, height }) => {
  return (
    <div className='projecti' style={{ backgroundColor: bg }}>
      <div className='image'>
        <img
          src={src}
          alt={name}
          className='next-img'
          style={{ width: width, height: height }}
        />
      </div>
    </div>
  )
}

export default ProjectI
