import React, { useState, useContext } from 'react'

const MyContext = React.createContext()

const MyContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      {children}
    </MyContext.Provider>
  )
}

const useMyContext = () => {
  return useContext(MyContext)
}

export { MyContextProvider, useMyContext }
