import React from 'react'

const Footer = ({ footerTxtColor }) => {
  return (
    <footer
      style={{
        color: footerTxtColor && footerTxtColor === 'black' ? '#000' : '#fff',
      }}
    >
      <div className='wrapper'>
        <h1>{`Contact`}</h1>
        <div className='hor-line'></div>
        <p>
          Feel free to reach out and connect with me for any inquiries or
          collaborations!{' '}
        </p>
      </div>

      <div className='socials wrapper'>
        <span className='mail link'>
          {' '}
          <a href='mailto:lukannesic@gmail.com'>lukannesic@gmail.com</a>
        </span>
        <span className='icon link'>
          <a
            href='https://github.com/lukanesic'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={
                footerTxtColor && footerTxtColor === 'black'
                  ? '/github-dark.png'
                  : '/github.png'
              }
              alt={'github'}
              width={'25'}
              height={'25'}
            />{' '}
          </a>
        </span>
        <span className='icon link'>
          <a
            href='https://www.linkedin.com/in/lukanesic/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            <img
              src={
                footerTxtColor && footerTxtColor === 'black'
                  ? '/linkedin-dark.png'
                  : '/linkedin.png'
              }
              alt={'linkedin'}
              width={'25'}
              height={'25'}
            />{' '}
          </a>
        </span>
        {/* <span className='icon'>
          <Image src={cv} alt={'CV'} width={'25'} height={'25'} />{' '}
        </span> */}
      </div>
      <div className='linear-anim'></div>
      <div className='credits wrapper'>
        <h4>
          Design & Development <span>Nešić Luka</span>{' '}
        </h4>
      </div>

      {/* <h1>{`Let's Connect!`}</h1> */}
    </footer>
  )
}

export default Footer
