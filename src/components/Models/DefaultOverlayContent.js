import { useMyContext } from '../../store/ModelsContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

// ovo je komponenta koja prikazuje samo kontent, nema nikakvu funkcionalnost

const DefaulyOverlayContent = ({ company, title, txtClass, url, src }) => {
  const { wrapperRef } = useMyContext()

  // useEffect(() => {
  //   if (inView) {
  //     ctrls.start('visible')
  //     document.body.style.backgroundColor = `${theme}`
  //   }
  //   if (!inView) {
  //     ctrls.start('hidden')
  //   }
  // }, [inView, ctrls, company, theme])

  const navigate = useNavigate()

  const handleUrl = () => {
    navigate(`/${url}`)
  }

  return (
    <div className='defaultOverlayContent'>
      <div
        className='img'
        initial={{ scale: 1 }}
        whileHover={{ scale: 0.97 }}
        transition={{
          duration: 0.5,
        }}
        onClick={() => handleUrl()}
      >
        <img
          src={src}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          alt={title}
        />
      </div>

      {/* <div className='description'>
        <div className='heading'>
          <h1>{label}</h1>
          <p>{description}</p>
        </div>

        <div className='button'>
          <button>Custom Order</button>
        </div>
      </div> */}

      <div className='info'>
        <h4 className={`${txtClass && 'white-text'}`}>{company}</h4>
        <h2 className={`${txtClass && 'white-text'}`}>{title}</h2>
        <h6
          className={`${txtClass && 'white-text'}`}
          onClick={() => handleUrl()}
        >
          {'View Project'}
        </h6>
      </div>
    </div>
  )
}

export default DefaulyOverlayContent
