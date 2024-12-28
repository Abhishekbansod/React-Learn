import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildA from './components/ChildA'

// step 1 => creating theme context
export const themeContext = createContext()

function App() {

  const [theme, setTheme] = useState('light')

  return (
    <>
      {/* step 2 =>  creating provider and passing the values */}
      <themeContext.Provider value={{theme, setTheme}} >
        <div id='container' style={{backgroundColor: theme === 'light' ? 'beige' : 'black' }}>
          <ChildA />
        </div>
      </themeContext.Provider>
    </>
  )
}

export default App
