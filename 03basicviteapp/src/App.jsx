import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Youtube from './components/Youtube'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>basic react app using vite bundler</h2>
      <Youtube/>
      <h2>basic react app using vite bundler</h2>
    </>
  )
}

export default App
