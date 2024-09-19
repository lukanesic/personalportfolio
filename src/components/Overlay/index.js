import React, { useEffect } from 'react'

import { motion } from 'framer-motion'

const Overlay = ({ isOpen }) => {
  // useEffect(() => {
  //   if (isOpen) {
  //     const width = document.body.clientWidth
  //     document.body.style.overflowY = 'hidden'
  //     document.body.style.width = `${width}px`
  //   } else {
  //     document.body.style.overflowY = 'visible'
  //     document.body.style.width = `auto`
  //   }

  //   return () => {
  //     document.body.style.overflowY = 'visible'
  //     document.body.style.width = `auto`
  //   }
  // }, [isOpen])

  return (
    <motion.div
      className='overlay'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.2,
      }}
    />
  )
}

export default Overlay
