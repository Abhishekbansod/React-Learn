import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObject = {
    username : 'viraj',
    userid : 234785,
    company : 'Infosys Ltd'
  }

  let myArray = [1, 2, 3, 4]

  return (
    <>
      <h1 className='text-2xl bg-yellow-500 p-3 text-white font-semibold rounded-lg border-4 border-black mb-4'>Learning props and tailwind css</h1>

      <Card username = "Ramesh Hagwane" />
      <Card username = "Viraj Pardhi" />
      {/* passing an array & object as props in below card */}
      <Card array = {myArray} obj = {myObject} />
    </>
  )
}

export default App
