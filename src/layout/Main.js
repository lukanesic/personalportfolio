import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { motion } from 'framer-motion'

const Main = ({ children, footerTxtColor }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Nav />
      {children}
      <Footer footerTxtColor={footerTxtColor} />
    </motion.div>
  )
}

export default Main
