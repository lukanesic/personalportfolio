import React from 'react'

const HeadingSection = ({ title, paragraph, light, webflow }) => {
  return (
    <div className='heading-section'>
      <div className='wrapper'>
        {title && <h2 className={`${light && 'white-text'}`}>{title}</h2>}
        {webflow && (
          <h2 className={`${webflow && 'webflow-text'}`}>{webflow}</h2>
        )}

        <p className={`${light && 'white-text'}`}> {paragraph}</p>
      </div>
    </div>
  )
}

export default HeadingSection
