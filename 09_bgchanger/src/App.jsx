import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('gray')

  function bgChanger(color){
    setColor(color)
  }

  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor: color}}>
        <div className=' flex justify-center items-center p-4 rounded-lg w-96 ml-auto mr-auto'>
          <div className='flex gap-2'>
            <button onClick={() => bgChanger('red')} className='text-white bg-red-700 p-3 rounded-2xl font-semibold border border-black'>Red</button>
            <button onClick={() => bgChanger('green')} className='text-white bg-green-700 p-3 rounded-2xl font-semibold border border-black'>Green</button>

            {/* another way to directly set the color */}
            <button onClick={() => setColor('yellow')} className='text-white bg-yellow-400 p-3 rounded-2xl font-semibold border border-black'>Yellow</button>

            <button onClick={() => bgChanger('violet')} className='text-white 0 p-3 rounded-2xl font-semibold border border-black' style={{backgroundColor: 'violet'}}>Violet</button>
            <button onClick={() => bgChanger('orange')} className='text-white bg-orange-500 p-3 rounded-2xl font-semibold border border-black'>Orange</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
