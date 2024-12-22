import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='text-2xl font-semibold bg-yellow-500 p-3 rounded-lg border-2 border-red-700'>Displaying cards</h1>

      <div className='grid md:grid-cols-3 gap-3'>
        <Card username = "Suhani Roy" designation = "Developer" />
        <Card username = "Viraj Hagwane" designation = "DevOps Engineer" />
        <Card username = "Praveen Raut" designation = "Cloud Engineer" />
        <Card username = "Aniket Mate" designation = "Frontend Developer" />
        <Card username = "Ameer Mesharam" designation = "Backend Developer" />
        <Card username = "Pratiksha Sayam" designation = "Flutter Developer" />
      </div> 
    </>
  )
}

export default App
