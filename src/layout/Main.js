import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const Main = ({ children, footerTxtColor }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer footerTxtColor={footerTxtColor} />
    </>
  )
}

export default Main
