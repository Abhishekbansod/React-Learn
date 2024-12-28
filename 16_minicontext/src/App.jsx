import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import Demo from './components/Demo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Learn Context API in React JS</h1>
      <Login />
      <Profile/>
      <Demo/>
    </UserContextProvider>
  )
}

export default App
