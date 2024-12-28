import React from 'react'
import { themeContext } from '../App'
import { useContext } from 'react'

const ChildC = () => {
    // step 3 => accessing data using useContext hook
    let {theme, setTheme} = useContext(themeContext)

    const toggleTheme = () => {
        if(theme === 'light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }

  return (
    <div>
      <button onClick={toggleTheme} >Change Theme</button>
    </div>
  )
}

export default ChildC
