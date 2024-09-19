import React from 'react'

const Footer = ({ footerTxtColor }) => {
  return (
    <footer
      style={{
        color: footerTxtColor && footerTxtColor === 'black' ? '#000' : '#fff',
      }}
    >
      <div className='wrapper'>
        <h1>{`Let's work together`}</h1>
        <div className='hor-line'></div>
        <p>
          Feel free to reach out and connect with me for any inquiries or
          collaborations!{' '}
        </p>

        <div className='services-container'>
          <span
            className='services-subhead'
            style={{
              color:
                footerTxtColor && footerTxtColor === 'black'
                  ? 'rgba(0, 0, 0, 0.5)'
                  : 'rgba(255, 255, 255, 0.5)',
            }}
          >
            Services
          </span>
          <div className='services-box'>
            <span>Mobile App Development</span>
            <span>iOS Development</span>
          </div>
          <div className='services-box'>
            <span>UI Design</span>
            <span>UX Design</span>
          </div>
          <div className='services-box'>
            <span>Web Development</span>
            <span>Web Applications</span>
            <span>E-Commerce</span>
          </div>

          <div className='services-box'>
            <span>React</span>
            <span>React Native</span>
            <span>Next.js</span>
            <span>Node</span>
            <span>Python</span>
            <span>Django</span>
          </div>
          {/* <div className='services-box'>
            <span>Python</span>
            <span>Django</span>
          </div> */}
        </div>
      </div>

      <div className='socials wrapper'>
        <span className='mail link'>
          {' '}
          <a
            href='mailto:lukannesic@gmail.com'
            className='main-btn'
            style={{
              color:
                footerTxtColor && footerTxtColor === 'black' ? '#fff' : '#000',
              background:
                footerTxtColor && footerTxtColor === 'black' ? '#000' : '#fff',
            }}
          >
            Get in touch
          </a>
        </span>
        <span className='icon link'>
          <a
            href='https://github.com/lukanesic'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              // src={
              //   footerTxtColor && footerTxtColor === 'black'
              //     ? '/github-dark.png'
              //     : '/github.png'
              // }
              src={'/github.png'}
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
              // src={
              //   footerTxtColor && footerTxtColor === 'black'
              //     ? '/linkedin-dark.png'
              //     : '/linkedin.png'
              // }
              src={'/linkedin.png'}
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
