import React, { useState } from 'react'
import ThemeContext from './ThemeContext';
const CustomThemeProvider = ({children}) => {
    const [darkMode,setDarkMode]=useState(true);
  return (
    <ThemeContext.Provider value={{darkMode,setDarkMode}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default CustomThemeProvider