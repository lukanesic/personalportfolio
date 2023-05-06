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
          Get in touch for opportunities or just say hi! If you have a general
          enquiry, please drop me an email.{' '}
        </p>
      </div>

      <div className='socials wrapper'>
        <span className='mail'>lukannesic@gmail.com</span>
        <span className='icon'>
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
        </span>
        <span className='icon'>
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
        </span>
        {/* <span className='icon'>
          <Image src={cv} alt={'CV'} width={'25'} height={'25'} />{' '}
        </span> */}
      </div>
      <div className='linear-anim'></div>
      <div className='credits wrapper'>
        <h4>
          Design & Development <span>Luka Nešić</span>{' '}
        </h4>
      </div>

      {/* <h1>{`Let's Connect!`}</h1> */}
    </footer>
  )
}

export default Footer
